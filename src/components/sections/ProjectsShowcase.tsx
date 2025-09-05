  // src/components/sections/ProjectsShowcase.tsx
  "use client";
  import React, { useState } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import { 
    Github,
    ExternalLink,
    ArrowRight,
    ChevronDown,
    ChevronUp
  } from "lucide-react";
  import { useRouter } from 'next/navigation'; // <-- Import useRouter

  // Corrected allProjects array with the 'links' property (from previous steps)
  const allProjects = [
    {
      name: "ABStore E-Commerce",
      status: "Live",
      tagline: "Responsive e-commerce platform with cross-platform compatibility",
      stack: ["HTML", "CSS", "JavaScript"],
      image: "/images/projects/abstore.jpg",
      featured: true,
      links: [
        { type: "github", url: "https://github.com/yourproject/abstore" },
        { type: "live", url: "https://abstore.example.com" }
      ],
      caseStudy: "abstore-e-commerce" // <-- Ensure caseStudy is a valid slug
    },
    {
      name: "Food Truck Platform",
      status: "Live",
      tagline: "MEAN stack application with payment processing and geolocation",
      stack: ["Angular", "Node.js", "MongoDB", "Express"],
      image: "/images/projects/foodtruck.jpg",
      featured: true,
      links: [
        { type: "github", url: "https://github.com/yourproject/foodtruck" },
        { type: "live", url: "https://foodtruck.example.com" }
      ],
      caseStudy: "food-truck-platform" // <-- Ensure caseStudy is a valid slug
    },
    {
      name: "Kashida Calligraphy App",
      status: "Live",
      tagline: "Social platform for Arabic calligraphy enthusiasts",
      stack: ["React Native", "Node.js", "MongoDB"],
      image: "/images/projects/kashida.jpg",
      featured: false,
      links: [
        { type: "github", url: "https://github.com/yourproject/kashida" },
        { type: "playstore", url: "https://play.google.com/store/apps/details?id=com.kashida" },
        { type: "appstore", url: "https://apps.apple.com/us/app/kashida/id1234567890" }
      ],
      caseStudy: "kashida-calligraphy-app" // <-- Ensure caseStudy is a valid slug
    },
    {
      name: "Water Supplier Delivery",
      status: "Live",
      tagline: "Real-time delivery system with payment processing",
      stack: ["Node.js", "Supabase", "Stripe", "Redis"],
      image: "/images/projects/water-supplier.jpg",
      featured: true,
      links: [
        { type: "github", url: "https://github.com/yourproject/water-supplier" },
        { type: "live", url: "https://watersupplier.example.com" }
      ],
      caseStudy: "water-supplier-delivery" // <-- Ensure caseStudy is a valid slug
    },
    {
      name: "Iktifa Charity Platform",
      status: "Live",
      tagline: "Charity e-commerce for livestock and food packages",
      stack: ["Next.js", "Node.js", "Supabase", "iyzico"],
      image: "/images/projects/iktifa.jpg",
      featured: false,
      links: [
        { type: "github", url: "https://github.com/yourproject/iktifa" },
        { type: "live", url: "https://iktifa.example.com" }
      ],
      caseStudy: "iktifa-charity-platform" // <-- Ensure caseStudy is a valid slug
    }
  ];

  const ProjectCard = ({ project, delay }: { project: typeof allProjects[number]; delay: number }) => {
    const router = useRouter(); // Initialize useRouter

    // Helper functions getLinkIcon/getLinkText are no longer needed here if you removed the buttons

    // Handle click on the "View Details" button or the card itself
    const handleViewDetails = () => {
      router.push(`/projects/${project.caseStudy}`);
    };
    
    return (
        // --- FIXED: Removed `cursor-pointer` and `onClick` from the card ---
        <motion.div
        className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-[#DCD0A8]/20 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.4,
          delay,
          ease: "easeOut"
        }}
        whileHover={{ y: -5 }} // The card still lifts on hover
        style={{ minHeight: '480px' }}
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <span className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full bg-[#4A9782] text-white">
            {project.status}
          </span>
        </div>

        {/* Card Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-[#FFF9E5] mb-2">{project.name}</h3>
            <p className="text-[#FFF9E5]/80 mb-4 line-clamp-2">{project.tagline}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <span 
                  key={tech}
                  className="text-xs bg-[#4A9782]/10 text-[#4A9782] px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button: Only "View Details" */}
          <div className="mt-auto">
            {/* --- FIXED: Button is now the sole interactive element with enhanced feedback --- */}
            <motion.button
              onClick={handleViewDetails}
              className="w-full flex items-center justify-between px-4 py-2 rounded-lg transition-colors
                bg-[#4A9782] text-white hover:shadow-md cursor-pointer"
              // Add satisfying animations directly to the button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Details</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  };

  export default function ProjectsShowcase() {
    const [visibleCount, setVisibleCount] = useState(3);
    
    const toggleProjects = () => {
      setVisibleCount(prev => prev >= allProjects.length ? 3 : allProjects.length);
    };

    return (
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#FFF9E5] mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              My Projects
            </motion.h2>
            <motion.p
              className="text-[#FFF9E5]/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A collection of my work showcasing full-stack development capabilities.
            </motion.p>
          </div>

          {/* Projects Grid with AnimatePresence */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence initial={false}>
              {allProjects.slice(0, visibleCount).map((project, index) => (
                <ProjectCard 
                  key={project.name}
                  project={project}
                  delay={index * 0.05} // Reduced delay
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Toggle Button */}
          <motion.div className="text-center mt-16">
            <button
              onClick={toggleProjects}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A9782] text-[#FFF9E5] font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {visibleCount >= allProjects.length ? (
                <>
                  <ChevronUp className="w-5 h-5" />
                  Show Less Projects
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5" />
                  Show All Projects
                </>
              )}
            </button>
          </motion.div>
        </div>
      </section>
    );
  }