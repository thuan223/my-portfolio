declare module 'yuka' {
  export class Vector3 {
    constructor(x?: number, y?: number, z?: number);
    x: number;
    y: number;
    z: number;
    copy(v: Vector3): this;
    add(v: Vector3): this;
    sub(v: Vector3): this;
    multiplyScalar(s: number): this;
    length(): number;
    normalize(): this;
    clone(): Vector3;
    set(x: number, y: number, z: number): this;
  }

  export class EntityManager {
    entities: any[];
    constructor();
    add(entity: any): void;
    remove(entity: any): void;
    update(delta: number): void;
  }

  export class Vehicle {
    position: Vector3;
    velocity: Vector3;
    maxSpeed: number;
    steering: SteeringManager;
    constructor();
    update(delta: number): void;
    setRenderComponent(
      component: any,
      callback: (entity: Vehicle, renderComponent: any) => void
    ): void;
  }

  export class SteeringManager {
    behaviors: any[];
    constructor(vehicle: Vehicle);
    add(behavior: any): void;
    remove(behavior: any): void; // 👈 thêm dòng này
    update(delta: number): void;
  }
import { Vehicle, Vector3, SteeringBehavior } from "yuka";

export class ArriveBehavior extends SteeringBehavior {
  target: Vector3;
  slowingRadius: number;
  arrivalTolerance: number;

  constructor(target: Vector3, slowingRadius: number = 10, arrivalTolerance: number = 1) {
    super();
    this.target = target;
    this.slowingRadius = slowingRadius;
    this.arrivalTolerance = arrivalTolerance;
  }

  calculate(vehicle: Vehicle, force: Vector3): Vector3 {
    const toTarget = this.target.clone().sub(vehicle.position);
    const distance = toTarget.length();

    if (distance < this.arrivalTolerance) {
      force.set(0, 0, 0);
      return force;
    }

    let speed = vehicle.maxSpeed;
    if (distance < this.slowingRadius) {
      speed = vehicle.maxSpeed * (distance / this.slowingRadius);
    }

    const desiredVelocity = toTarget.normalize().multiplyScalar(speed);
    force.copy(desiredVelocity.sub(vehicle.velocity));

    return force;
  }
}

}
