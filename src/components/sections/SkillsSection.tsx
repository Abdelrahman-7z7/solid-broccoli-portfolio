"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, GitBranch, Globe, Layers, Cloud } from "lucide-react";
import { isValidElement } from "react";

const skillsData: {
  title: string;
  icon: React.ReactElement;
  skills: { name: string; icon?: React.ReactNode; level?: number }[];
}[] = [
  {
    title: "Languages",
    icon: <Code className="w-5 h-5 text-[#4A9782]" />,
    skills: [
      { name: "C" },
      { name: "Java" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
    ],
  },
  {
    title: "Web Technologies",
    icon: <Globe className="w-5 h-5 text-[#4A9782]" />,
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Sass" },
      { name: "Tailwind CSS" },
      { name: "REST APIs" },
      { name: "GraphQL" },
    ],
  },
  {
    title: "Frameworks",
    icon: <Layers className="w-5 h-5 text-[#4A9782]" />,
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Next.js" },
      { name: "React" },
      { name: "Redux" },
    ],
  },
  {
    title: "Databases & Tools",
    icon: <Database className="w-5 h-5 text-[#4A9782]" />,
    skills: [
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "PostgreSQL" },
      { name: "Supabase" },
      { name: "Redis" },
    ],
  },
  {
    title: "Version Control & Dev Tools",
    icon: <GitBranch className="w-5 h-5 text-[#4A9782]" />,
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Linux" },
      { name: "VS Code" },
      { name: "Docker" },
    ],
  },
  {
    title: "Integrations & Services",
    icon: <Cloud className="w-5 h-5 text-[#4A9782]" />,
    skills: [
      { name: "Webhooks" },
      { name: "OneSignal" },
      { name: "Cloudinary" },
      { name: "Stripe" },
      { name: "SendGrid" },
    ],
  },
];

const SkillCard = ({ title, skills, icon }: {
  title: string;
  skills: { name: string; icon?: React.ReactNode; level?: number }[];
  icon: React.ReactElement;
}) => (
  <motion.div
    className="bg-[#0d1a16] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -8, boxShadow: "0 8px 32px 0 rgba(58,130,246,0.10)" }}
  >
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h3 className="text-xl font-semibold group-hover:text-[#4A9782] transition-colors text-[#FFF9E5]">{title}</h3>
    </div>
    <ul className="flex flex-wrap gap-3">
      {skills.map(skill => (
        <li
          key={skill.name}
          className="flex items-center gap-2 px-3 py-1 bg-[#18332b] text-sm rounded-full hover:bg-[#4A9782] hover:text-white text-[#FFF9E5] transition-all duration-200"
        >
          {skill.icon}
          {skill.name}
        </li>
      ))}
    </ul>
  </motion.div>
);

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section id="skills" className="relative py-20 px-6 md:px-20 bg-transparent text-[#FFF9E5]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          💻 Skills & Technologies
        </h2>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skillsData.map((cat, i) => {
            const isActive = activeTab === i;
            return (
              <button
                key={cat.title}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-200 border-2 text-base md:text-lg flex items-center gap-2
                  ${isActive
                    ? "bg-[#4A9782] border-[#4A9782] text-white shadow"
                    : "bg-transparent border-[#18332b] text-[#FFF9E5]/80 hover:bg-[#18332b] hover:text-white"}
                `}
                onClick={() => setActiveTab(i)}
                type="button"
              >
                {React.cloneElement(
                  cat.icon,
                  Object.assign({}, cat.icon.props || {}, { className: `w-5 h-5 ${isActive ? 'text-white' : 'text-[#4A9782]'}` })
                )}
                {cat.title}
              </button>
            );
          })}
        </div>
        {/* Animated Card */}
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            <SkillCard
              key={skillsData[activeTab].title}
              title={skillsData[activeTab].title}
              skills={skillsData[activeTab].skills}
              icon={skillsData[activeTab].icon}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 