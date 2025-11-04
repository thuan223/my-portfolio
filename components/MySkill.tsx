"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const skillsData = {
  All: [
    { name: "HTML/CSS", level: 98 },
    { name: "JavaScript", level: 95 },
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 85 },
    { name: "Express", level: 85 },
    { name: "MongoDB", level: 90 },
    { name: "ThreeJS", level: 75 },
    { name: "RESTful API", level: 90 },
    { name: "Git/GitHub", level: 90 },
    { name: "Docker", level: 60 },
    { name: "Figma", level: 60 },
    { name: "VS Code", level: 95 },
    { name: "Google Colab", level: 80 },
    { name: "Firebase", level: 80 },
    { name: "SQL Server", level: 80 },
    { name: "Neo4j", level: 80 },
    { name: "Java", level: 80 },
    { name: "React Native", level: 80 },
  ],
  Frontend: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Next.js",'ThreeJS',"React Native","Java"],
  Backend: ["Node.js", "Express", "MongoDB", "RESTful API","Firebase", "SQL Server", "Neo4j"],
  Tools: ["Git/GitHub", "Docker", "Figma", "VS Code","Google Colab"],
};

export default function Skills() {
  const [filter, setFilter] = useState<keyof typeof skillsData>("All");

  const filteredSkills =
    filter === "All"
      ? skillsData.All
      : skillsData.All.filter((s) => skillsData[filter].includes(s.name));

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen pt-13 text-white my-20"
    >
      <h2 className="text-3xl font-semibold mb-8 text-center">
        My <span className="text-blue-400">Skills</span>
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(skillsData).map((key) => (
          <button
            key={key}
            onClick={() => setFilter(key as keyof typeof skillsData)}
            className={`px-4 py-2 rounded-full border transition ${
              filter === key
                ? "bg-blue-500 text-white border-blue-500"
                : "border-white/20 hover:border-blue-400"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
  {filteredSkills.map((skill) => (
    <div
      key={skill.name}
      className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-blue-400 transition"
    >
      <h4 className="font-semibold mb-2">{skill.name}</h4>
      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-700"
          style={{ width: `${skill.level}%` }}
        />
      </div>
      <p className="text-sm text-gray-400 mt-1">{skill.level}%</p>
    </div>
  ))}
</div>

    </motion.section>
  );
}
