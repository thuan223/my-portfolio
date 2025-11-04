"use client";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as YUKA from 'yuka';
import { ArriveBehavior } from "yuka";

export default function SolarSystem() {

  const mountRef = useRef<HTMLDivElement>(null);
  const currentPlanetIndex = useRef(-1);

  useEffect(() => {
    console.log('currentPlanetIndex', currentPlanetIndex);
    // === Khởi tạo cơ bản ===
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    if (mountRef.current) mountRef.current.appendChild(renderer.domElement);

    // === OrbitControls (chỉ để xoay tự do khi cần) ===
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // === Ánh sáng ===
    const sunLight = new THREE.PointLight(0xffffff, 4, 300);
    scene.add(sunLight);
    scene.add(new THREE.AmbientLight(0xffffff, 0.2));

    // === Tải texture ===
    const loader = new THREE.TextureLoader();
    const tex = (name: string) => `/image/${name}.jpg`;
    const ring = (name: string) => `/image/${name}.png`;

    // === Nền sao ===
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 6000;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 2000;
    }
    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.7,
      transparent: true,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // === Mặt Trời ===
    const sunGeo = new THREE.SphereGeometry(15, 50, 50);
    const sunMat = new THREE.MeshBasicMaterial({ map: loader.load(tex("sun")) });
    const sun = new THREE.Mesh(sunGeo, sunMat);
          

      sun.position.x += 800;
    scene.add(sun);

    // === Hàm tạo hành tinh ===
    function createPlanet(size: number, texture: string, distance: number, ringOpt?: any) {
      const geo = new THREE.SphereGeometry(size, 50, 50);
      const mat = new THREE.MeshStandardMaterial({ map: loader.load(texture) });
      const planet = new THREE.Mesh(geo, mat);
      const obj = new THREE.Object3D();
      planet.position.set(distance, 0, 0);
      obj.add(planet);

      if (ringOpt) {
        const ringGeo = new THREE.RingGeometry(ringOpt.inner, ringOpt.outer, 32);
        const ringMat = new THREE.MeshBasicMaterial({
          map: loader.load(ringOpt.map),
          side: THREE.DoubleSide,
          transparent: true,
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.position.set(distance, 0, 0);
        ringMesh.rotation.x = -Math.PI / 2;
        obj.add(ringMesh);
      }
        // 🔹 Dịch toàn bộ hệ hành tinh sang phải 100
      obj.position.x += 800;
      scene.add(obj);
      return { planet, obj };
    }

    // === Tạo array các hành tinh ===
    const planets = [
      { ...createPlanet(3.2, tex("mercury"), 28 * 2), orbit: 0.004, self: 0.004, name: "mercury" },
      { ...createPlanet(5.8, tex("venus"), 44 * 2), orbit: 0.015, self: 0.002, name: "venus" },
      { ...createPlanet(6, tex("earth"), 62 * 2), orbit: 0.01, self: 0.02, name: "earth" },
      { ...createPlanet(4, tex("mars"), 78 * 2), orbit: 0.008, self: 0.018, name: "mars" },
      { ...createPlanet(12, tex("jupiter"), 100 * 2), orbit: 0.002, self: 0.04, name: "jupiter" },
      { ...createPlanet(10, tex("saturn"), 138 * 2, { inner: 10, outer: 20, map: ring("saturn_ring") }), orbit: 0.0009, self: 0.038, name: "saturn" },
      { ...createPlanet(7, tex("uranus"), 176 * 2, { inner: 7, outer: 12, map: ring("uranus_ring") }), orbit: 0.0004, self: 0.03, name: "uranus" },
      { ...createPlanet(7, tex("neptune"), 200 * 2), orbit: 0.0001, self: 0.032, name: "neptune" },
      { ...createPlanet(2.8, tex("pluto"), 216 * 2), orbit: 0.0007, self: 0.008, name: "pluto" },
    ];

    const entityManager = new YUKA.EntityManager();

    // Tạo Vehicle cho camera
    const cameraVehicle = new YUKA.Vehicle();
    cameraVehicle.position.set(835, 0, 30);
    cameraVehicle.maxSpeed =200;
    cameraVehicle.setRenderComponent(camera, syncCamera);

    // Tạo Vehicle cho hành tinh (target)
    const targetVehicle = new YUKA.Vehicle();
    entityManager.add(cameraVehicle);
    entityManager.add(targetVehicle);

    let offsetBehavior: YUKA.ArriveBehavior | null = null;

    function syncCamera(entity: any, renderComponent: any) {
      renderComponent.position.copy(entity.position);
    }


    // === Scroll để đổi hành tinh ===
    let scrollAccumulator = 0;
    const handleScroll = (e: WheelEvent) => {
  scrollAccumulator += e.deltaY;
  const screenHeight = window.innerHeight;

  if (scrollAccumulator > screenHeight) {
    scrollAccumulator = 0;

    if (currentPlanetIndex.current < planets.length - 1) {
      currentPlanetIndex.current++;
    } else {
      currentPlanetIndex.current = -1; // vượt quá -> không target hành tinh nào
    }

  } else if (scrollAccumulator < -screenHeight) {
    scrollAccumulator = 0;

    if (currentPlanetIndex.current === -1) {
      currentPlanetIndex.current = planets.length - 1; // từ -1 quay lại hành tinh cuối
    } else if (currentPlanetIndex.current > 0) {
      currentPlanetIndex.current--;
    } else {
      currentPlanetIndex.current = -1; // lùi quá -> không target hành tinh nào
    }
  }
};

    window.addEventListener("wheel", handleScroll);


const clock = new THREE.Clock();

function animate() {

  requestAnimationFrame(animate);

  const delta = clock.getDelta();
  controls.update();

  // Quay background sao
  stars.rotation.y += 0.0003;
  stars.rotation.x += 0.0001;

  // Quay Mặt Trời
  sun.rotation.y += 0.004;

  // Quay các hành tinh
  planets.forEach(({ planet, obj, orbit, self,name }) => {
    if(name===planets[currentPlanetIndex.current]?.name){
      console.log('Current Planet:', name);
    obj.rotation.y += 0.0033;
    planet.rotation.y += self;
      return;
    }
    obj.rotation.y += orbit;
    planet.rotation.y += self;
  });

if (currentPlanetIndex.current >= 0) {
  const planetData = planets[currentPlanetIndex.current];
  const planet = planetData.planet;
  const planetPos = planet.getWorldPosition(new THREE.Vector3());

  // Hiệu ứng sáng (glow)
  planets.forEach(({ planet }, i) => {
    const glowMesh = (planet as any).glowMesh;
    if (glowMesh) glowMesh.visible = i === currentPlanetIndex.current;
  });

  // Cập nhật vị trí target
  targetVehicle.position.copy(planetPos);
  entityManager.update(delta);

  // Lấy kích thước hành tinh
  const size = planet.geometry.parameters.radius;
  const orbit = planetData.orbit;

  // Khoảng cách camera dựa theo orbit và size (quay nhanh → gần, quay chậm → xa)
  const zoomFactor = orbit / 0.004;
  const clampedZoom = THREE.MathUtils.clamp(zoomFactor, 0.5, 4);
  const viewDistance = size * (2.5 / clampedZoom);

  // Kiểm tra target cũ khác target mới (so sánh thủ công, không dùng equals)
  const needsUpdate =
    !offsetBehavior ||
    Math.abs(offsetBehavior.target.x - targetVehicle.position.x) > 0.001 ||
    Math.abs(offsetBehavior.target.y - targetVehicle.position.y) > 0.001 ||
    Math.abs(offsetBehavior.target.z - targetVehicle.position.z) > 0.001;

  if (needsUpdate) {
    if (offsetBehavior) cameraVehicle.steering.remove(offsetBehavior);
    offsetBehavior = new YUKA.ArriveBehavior(targetVehicle.position, 2, 10);
    cameraVehicle.steering.add(offsetBehavior);
  }

  entityManager.update(delta);

  // Camera lùi ra một chút để thấy toàn bộ hành tinh
  const cameraTargetPos = planetPos.clone().add(new THREE.Vector3(0, size * 0.5, viewDistance));

  // Di chuyển mượt đến vị trí mới
  camera.position.lerp(cameraTargetPos, 0.08);

  // Nghiêng nhẹ sang phải
  const lookTarget = planetPos.clone().add(new THREE.Vector3(size * 1.2, 0, 0));
  camera.lookAt(lookTarget);
}
else {
    camera.position.set(835, 0, 30);
    camera.lookAt(-800, 0, 0);
  }

  renderer.render(scene, camera);
}


animate();


    // === Resize ===
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // === Cleanup ===
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", handleScroll);
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
    };
  }, [currentPlanetIndex]);

  

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
      }}
    />
  );
}
