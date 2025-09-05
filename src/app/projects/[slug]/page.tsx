"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// --- FIXED: Import useParams hook ---
import { useRouter, useParams } from 'next/navigation'; 
import {
  Github,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  PlaySquare,
  Apple,
  Loader2,
  CheckCircle, 
  AlertTriangle,
  Zap,
} from 'lucide-react';

// --- DATA STRUCTURE (No changes needed) ---
interface ProjectLink {
  type: "github" | "live" | "playstore" | "appstore";
  url: string;
}
interface KeyFeature {
    title: string;
    description: string;
}
interface ProjectDetail {
  name: string;
  status: string;
  tagline: string;
  stack: string[];
  images: string[];
  featured: boolean;
  links: ProjectLink[];
  caseStudy: string;
  about: string;
  keyFeatures: KeyFeature[];
  challenges: string;
  impact: string;
}

// --- PROJECT DATA (No changes needed) ---
const allProjects: ProjectDetail[] = [
    {
      name: "ABStore E-Commerce",
      status: "Live",
      tagline: "Responsive e-commerce platform with cross-platform compatibility for various devices.",
      stack: ["HTML", "CSS", "JavaScript", "Firebase", "Stripe"],
      images: [
        "/images/projects/abstore-1.jpg",
        "/images/projects/abstore-2.jpg",
        "/images/projects/abstore-3.jpg",
      ],
      featured: true,
      links: [
        { type: "github", url: "https://github.com/yourproject/abstore" },
        { type: "live", url: "https://abstore.example.com" }
      ],
      caseStudy: "abstore-e-commerce",
      about: "ABStore is a feature-rich e-commerce platform designed to provide a seamless shopping experience across all devices.",
      keyFeatures: [
        { title: "Responsive Design", description: "Optimized for desktop, tablet, and mobile viewing." },
        { title: "Product Catalog", description: "Extensive product listings with detailed descriptions." },
        { title: "Secure Checkout", description: "Integrated with Stripe for secure payment processing." },
        { title: "User Authentication", description: "Robust user login, registration, and profile management." },
        { title: "Order Management", description: "Real-time tracking of orders and history for customers." },
      ],
      challenges: "Ensuring consistent performance and security across varying network conditions was a primary challenge. We leveraged Firebase for real-time data synchronization and implemented server-side rendering for improved SEO and initial load times.",
      impact: "ABStore has enabled businesses to rapidly deploy online stores, expanding their reach and providing customers with a reliable and enjoyable shopping environment.",
    },
    {
      name: "Food Truck Platform",
      status: "Live",
      tagline: "MEAN stack application with real-time tracking, order management, and secure payment processing.",
      stack: ["Angular", "Node.js", "MongoDB", "Express", "Stripe", "Socket.IO"],
      images: [
        "/images/projects/foodtruck-1.jpg",
        "/images/projects/foodtruck-2.jpg",
        "/images/projects/foodtruck-3.jpg",
      ],
      featured: true,
      links: [
        { type: "github", url: "https://github.com/yourproject/foodtruck" },
        { type: "live", url: "https://foodtruck.example.com" }
      ],
      caseStudy: "food-truck-platform",
      about: "This platform connects food truck operators with hungry customers, offering real-time location tracking and an intuitive ordering system.",
      keyFeatures: [
        { title: "Geolocation Tracking", description: "Customers can find nearby food trucks on an interactive map." },
        { title: "Order Customization", description: "Users can customize their orders and schedule pickups." },
        { title: "Secure Payments", description: "Integrated with Stripe for cashless transactions." },
        { title: "Admin Dashboard", description: "Owners can manage menus, orders, and update their location." },
        { title: "Real-time Updates", description: "Orders and locations update in real-time using WebSockets." },
      ],
      challenges: "Implementing real-time geolocation with efficient database queries and managing concurrent orders posed significant challenges. We utilized MongoDB's geospatial indexing and Socket.IO for real-time communication.",
      impact: "Revolutionizing the food truck industry by streamlining operations for vendors and making it easier for customers to discover and order from their favorite mobile eateries.",
    },
    {
      name: "Kashida Calligraphy App",
      status: "Live",
      tagline: "Social platform for Arabic calligraphy enthusiasts with interactive tools and community features.",
      stack: ["React Native", "Node.js", "MongoDB", "Express", "Firebase", "TypeScript", "Redux", "AWS S3"],
      images: [
        "/images/projects/kashida-1.jpg",
        "/images/projects/kashida-2.jpg",
        "/images/projects/kashida-3.jpg",
        "/images/projects/kashida-4.jpg",
      ],
      featured: true,
      links: [
        { type: "github", url: "https://github.com/yourproject/kashida" },
        { type: "playstore", url: "https://play.google.com/store/apps/details?id=com.kashida" },
        { type: "appstore", url: "https://apps.apple.com/us/app/kashida/id1234567890" }
      ],
      caseStudy: "kashida-calligraphy-app",
      about: "The Kashida Calligraphy App is a vibrant social platform designed for Arabic calligraphy enthusiasts to share, learn, and connect.",
      keyFeatures: [
        { title: "Interactive Canvas", description: "Practice and create calligraphic artworks with various tools." },
        { title: "Community Feed", description: "Upload creations, follow other artists, like, and comment." },
        { title: "Learning Modules", description: "Guided tutorials and exercises for all skill levels." },
        { title: "Profile Management", description: "Personalized profiles to showcase portfolios and track progress." },
        { title: "Real-time Notifications", description: "Instant alerts for new likes, comments, and followers." },
      ],
      challenges: "Developing a fluid interactive canvas on React Native required extensive optimization. Integration with AWS S3 was crucial for handling a large volume of user-generated content.",
      impact: "Kashida has fostered a growing community, making traditional art forms accessible to a wider audience globally. It empowers artists to share their passion and learn from peers.",
    },
];


// --- FIXED: Removed params prop ---
const ProjectDetailsPage = () => {
    const router = useRouter();
    // --- FIXED: Get params using the hook ---
    const params = useParams();
    const slug = params.slug as string; // Cast as string, since [slug] guarantees it
  
    const [project, setProject] = useState<ProjectDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
    const stopAutoScroll = useCallback(() => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }, []);
  
    const startAutoScroll = useCallback(() => {
      stopAutoScroll();
      if (project?.images && project.images.length > 1) {
        intervalRef.current = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
        }, 5000);
      }
    }, [project?.images, stopAutoScroll]);
  
    useEffect(() => {
      startAutoScroll();
      return () => stopAutoScroll();
    }, [startAutoScroll, stopAutoScroll]);
  
    const handleImageNav = (direction: 'prev' | 'next') => {
      stopAutoScroll();
      if (!project?.images) return;
      const newIndex = direction === 'next'
        ? (currentImageIndex + 1) % project.images.length
        : (currentImageIndex - 1 + project.images.length) % project.images.length;
      setCurrentImageIndex(newIndex);
      startAutoScroll();
    };
  
    const handleDotNav = (index: number) => {
      stopAutoScroll();
      setCurrentImageIndex(index);
      startAutoScroll();
    };
  
    useEffect(() => {
      if (slug) {
          const foundProject = allProjects.find(p => p.caseStudy === slug);
          if (foundProject) {
              setProject(foundProject);
          } else {
              router.push('/404');
          }
          setLoading(false);
      }
    }, [slug, router]);
  
    if (loading || !project) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--color-primary)] text-[var(--color-content)]">
          <Loader2 className="animate-spin w-8 h-8 mr-2" /> Loading Project...
        </div>
      );
    }
  
    const renderLinkButton = (type: ProjectLink['type'], url: string) => {
      if (!url) return null;
      let icon, text, bgColor;
      switch (type) {
        case "github": icon = <Github className="w-5 h-5" />; text = "GitHub"; bgColor = "bg-[var(--color-interactive)]/10 hover:bg-[var(--color-interactive)]/20"; break;
        case "live": icon = <ExternalLink className="w-5 h-5" />; text = "Live Demo"; bgColor = "bg-[var(--color-interactive)]/15 hover:bg-[var(--color-interactive)]/25"; break;
        case "playstore": icon = <PlaySquare className="w-5 h-5" />; text = "Play Store"; bgColor = "bg-green-600/15 hover:bg-green-600/25"; break;
        case "appstore": icon = <Apple className="w-5 h-5" />; text = "App Store"; bgColor = "bg-blue-600/15 hover:bg-blue-600/25"; break;
        default: return null;
      }
      return (
        <motion.a key={type} href={url} target="_blank" rel="noopener noreferrer"
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors text-sm font-medium text-[var(--color-interactive)] border border-[var(--color-interactive)]/50 ${bgColor} whitespace-nowrap min-w-[140px]`}
          whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(74, 151, 130, 0.3)" }}
          whileTap={{ scale: 0.97 }}
        >
          {icon} <span>{text}</span>
        </motion.a>
      );
    };
  
    return (
        <div className="bg-[var(--color-primary)] text-[var(--color-content)] min-h-screen pt-22 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          
          <motion.div 
              className="mb-8 md:mb-12"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
          >
              <button
                  onClick={() => router.push('/#projects')} 
                  className="flex items-center gap-2 text-[var(--color-interactive)] hover:text-[var(--color-accent)] transition-colors font-medium text-lg"
              >
                  <ArrowLeft className="w-5 h-5" /> Back to Projects
              </button>
          </motion.div>
  
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
              <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--color-content)] mb-4">{project.name}</h1>
              <p className="text-lg md:text-xl text-[var(--color-content)]/80 max-w-3xl mx-auto">{project.tagline}</p>
          </motion.div>
  
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-20 items-stretch"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="glass p-6 rounded-xl border border-[var(--color-content)]/10 shadow-lg lg:col-span-3 min-w-0">
              <div className="relative w-full h-full overflow-hidden rounded-lg aspect-video">
                <AnimatePresence initial={false} mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={project.images[currentImageIndex]}
                    alt={`${project.name} screenshot`}
                    className="absolute inset-0 w-full h-full object-contain"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </AnimatePresence>
                {project.images.length > 1 && (
                  <>
                    <button onClick={() => handleImageNav('prev')} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white z-10 transition-colors"><ArrowLeft className="w-6 h-6" /></button>
                    <button onClick={() => handleImageNav('next')} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white z-10 transition-colors"><ArrowRight className="w-6 h-6" /></button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {project.images.map((_, index) => (
                        <button key={index} onClick={() => handleDotNav(index)} className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? 'bg-[var(--color-interactive)] w-6' : 'bg-gray-400/60 hover:bg-gray-300'}`} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
  
            <div className="glass p-8 flex flex-col justify-between rounded-xl border border-[var(--color-content)]/10 shadow-lg lg:col-span-2">
                <div>
                    <h3 className="text-2xl font-semibold text-[var(--color-content)] mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.stack.map((tech) => (
                            <span key={tech} className="text-sm bg-[var(--color-interactive)]/10 text-[var(--color-interactive)] px-3 py-1.5 rounded-full font-medium">{tech}</span>
                        ))}
                    </div>
                </div>
                <div className="mt-auto pt-6 border-t border-[var(--color-content)]/10">
                    <h3 className="text-2xl font-semibold text-[var(--color-content)] mb-4">Access Project</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {project.links.map((link) => renderLinkButton(link.type, link.url))}
                    </div>
                </div>
            </div>
        </motion.div>
                  {/* Redesigned "About" Section */}
        <motion.div
          className="space-y-16"
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div>
              <h2 className="text-3xl font-bold text-[var(--color-content)] mb-4 text-center">About This Project</h2>
              <p className="text-lg text-[var(--color-content)]/80 leading-relaxed max-w-4xl mx-auto text-center">{project.about}</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[var(--color-content)] mb-8 text-center">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.keyFeatures.map((feature, index) => (
                <motion.div key={index} className="bg-[var(--color-content)]/5 p-6 rounded-xl border border-[var(--color-content)]/10"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-[var(--color-interactive)]" />
                    <h4 className="text-xl font-semibold text-[var(--color-content)]">{feature.title}</h4>
                  </div>
                  <p className="text-[var(--color-content)]/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-orange-500/5 p-6 rounded-xl border border-orange-500/20">
                  <div className="flex items-center gap-3 mb-3">
                      <AlertTriangle className="w-6 h-6 text-orange-400"/>
                      <h3 className="text-2xl font-semibold text-orange-400">Challenges & Solutions</h3>
                  </div>
                  <p className="text-[var(--color-content)]/80 leading-relaxed">{project.challenges}</p>
              </div>
              <div className="bg-green-500/5 p-6 rounded-xl border border-green-500/20">
                  <div className="flex items-center gap-3 mb-3">
                      <Zap className="w-6 h-6 text-green-400"/>
                      <h3 className="text-2xl font-semibold text-green-400">Impact</h3>
                  </div>
                  <p className="text-[var(--color-content)]/80 leading-relaxed">{project.impact}</p>
              </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;