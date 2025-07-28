"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Server, 
  Zap, 
  CreditCard, 
  BarChart3, 
  Search, 
  Shield,
  Database,
  Globe,
  Smartphone,
  Cpu
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-[#DCD0A8]/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: "easeOut"
      }}
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Icon Container */}
        <div className="w-16 h-16 bg-gradient-to-br from-[#4A9782]/20 to-[#DCD0A8]/20 rounded-full flex items-center justify-center border border-[#4A9782]/30 transition-all duration-300 group-hover:rotate-6 group-hover:border-[#4A9782]/50">
          <div className="text-[#4A9782] transition-colors duration-300">
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-[#FFF9E5] transition-colors duration-300 group-hover:text-[#4A9782]">
            {title}
          </h3>
          <p className="text-[#FFF9E5]/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  const services = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Robust server-side solutions with scalable architecture and optimal performance for your business needs."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-Time Applications",
      description: "Lightning-fast WebSocket implementations for live data streaming and interactive user experiences."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payment Integrations",
      description: "Secure payment gateways and financial systems that handle transactions with enterprise-grade security."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Admin Dashboards",
      description: "Comprehensive management interfaces with real-time analytics and intuitive user controls."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Search engine optimization strategies that boost your online visibility and drive organic traffic."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Implementation",
      description: "Advanced security protocols and authentication systems to protect your data and users."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description: "Optimized database architectures with efficient queries and data management solutions."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "API Development",
      description: "RESTful and GraphQL APIs that seamlessly connect your applications and third-party services."
    }
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center px-4 py-16"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          {/* Section Title */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#FFF9E5] mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            What I Offer
          </motion.h2>

          {/* Intro Paragraph */}
          <motion.p
            className="text-[#FFF9E5]/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let me help you bring your vision to life with scalable, secure, and lightning-fast web solutions tailored for modern businesses.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#4A9782] to-[#4A9782]/80 text-[#FFF9E5] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Smartphone className="w-5 h-5" />
            Let's Build Something Amazing
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 