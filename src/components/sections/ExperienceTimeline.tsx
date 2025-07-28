"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Briefcase, GraduationCap, Heart } from "lucide-react";

const timelineData = [
  {
    year: "2025-2025",
    title: "Software Developer",
    organization: "NTG Clarity",
    category: "work",
    description: "Building full-stack apps with JavaScript, SQL, and PostgreSQL on a proprietary platform. Developed an order management system, optimized DB queries, and built seamless front-to-back flows."
  },
  {
    year: "2024-2024",
    title: "AI & ML for Sustainability",
    organization: "Exhibition Project",
    category: "work",
    description: "Built ML models (linear regression, k-means) to forecast hydro-energy production using global data aligned with UN sustainability goals."
  },
  {
    year: "2022-2024",
    title: "Technical Lead & Trainer",
    organization: "Google Developer Student Club (GDSC)",
    category: "volunteering",
    description: "Led technical teams and organized workshops. Mentored students in web technologies across two academic terms."
  },
  {
    year: "2021-2022",
    title: "Robotic Car Project",
    organization: "NEO Challenge",
    category: "volunteering",
    description: "Built a robotic car that detects fire and avoids obstacles using Arduino, sensors, and embedded programming."
  },
  {
    year: "2020-2025",
    title: "BSc. Software Engineering",
    organization: "Istanbul Nisantasi University",
    category: "education",
    description: "Graduated with GPA: 3.55/4.00. Strong foundation in software architecture, web technologies, and AI."
  },
  {
    year: "2020-2021",
    title: "English – B2 Level",
    organization: "Istanbul Nisantasi University",
    category: "education",
    description: "Certified (92/100) in English Preparatory School Program."
  }
];

const ExperienceTimeline = () => {
    const [currentGroup, setCurrentGroup] = useState(0);

    const groups = Math.ceil(timelineData.length / 3);
    const currentItems = timelineData.slice(currentGroup * 3, (currentGroup + 1) * 3);
  
    const nextGroup = () => currentGroup < groups - 1 && setCurrentGroup(currentGroup + 1);
    const prevGroup = () => currentGroup > 0 && setCurrentGroup(currentGroup - 1);
  
    const getCategoryIcon = (category: string) => {
      const iconProps = { className: "w-6 h-6 text-[#4A9782]" };
      switch (category) {
        case "work": return <Briefcase {...iconProps} />;
        case "education": return <GraduationCap {...iconProps} />;
        case "volunteering": return <Heart {...iconProps} />;
        default: return <Briefcase {...iconProps} />;
      }
    };
  
    return (
      <section
        id="experience"
        className="min-h-[50vh] flex items-center justify-center px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#FFF9E5] mb-6"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Experiences & Education
            </motion.h2>
            <motion.p
              className="text-[#FFF9E5]/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My professional journey through key milestones and learning experiences
            </motion.p>
          </div>
  
          {/* Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {currentItems.map((item, index) => (
              <motion.div
              key={item.year}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-[#DCD0A8]/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.1, 
                delay: index * 0.1,
                ease: "easeInOut",
                when: "beforeChildren"
              }}
              whileHover={{ 
                y: -8,
                transition: { 
                  duration: 0.1,  // Slightly longer for easeInOut
                  ease: "easeInOut" 
                } 
              }}

            >
                <div className="flex flex-col space-y-4 h-full">
                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4A9782]/20 to-[#DCD0A8]/20 rounded-full flex items-center justify-center border border-[#4A9782]/30 transition-all duration-300 group-hover:rotate-6 group-hover:border-[#4A9782]/50">
                    {getCategoryIcon(item.category)}
                  </div>
  
                  {/* Content */}
                  <div className="space-y-2 flex-grow">
                    <h3 className="text-xl font-bold text-[#FFF9E5] transition-colors duration-300 group-hover:text-[#4A9782]">
                      {item.title}
                    </h3>
                    <p className="text-[#FFF9E5]/80 leading-relaxed">
                      {item.organization}
                    </p>
                    <p className="text-[#FFF9E5]/70 text-sm mt-2">
                      {item.description}
                    </p>
                  </div>
  
                  {/* Footer */}
                  <div className="flex gap-2 text-sm text-[#FFF9E5]/70 border-t border-[#DCD0A8]/20 pt-3">
                    <span className="capitalize">{item.category}</span>
                    <span>• {item.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
  
          {/* Timeline Navigation */}
          <motion.div
            className="flex justify-center items-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={prevGroup}
              disabled={currentGroup === 0}
              className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-[#DCD0A8]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#4A9782]/20 disabled:opacity-40"
            >
              <ChevronLeft className="w-6 h-6 text-[#FFF9E5]" />
            </button>
  
            <div className="flex gap-4">
              {currentItems.map((item) => (
                <div key={item.year} className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#4A9782] border-2 border-[#FFF9E5]/10" />
                  <span className="text-sm text-[#FFF9E5] mt-2">{item.year}</span>
                </div>
              ))}
            </div>
  
            <button
              onClick={nextGroup}
              disabled={currentGroup >= groups - 1}
              className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-[#DCD0A8]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#4A9782]/20 disabled:opacity-40"
            >
              <ChevronRight className="w-6 h-6 text-[#FFF9E5]" />
            </button>
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default ExperienceTimeline;