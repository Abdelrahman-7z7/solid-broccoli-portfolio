"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Send, 
  Github, 
  Linkedin, 
  Instagram,
  MessageCircle,
  CheckCircle,
  AlertCircle
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
  isHuman: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  isHuman?: string;
}

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/yourusername",
    color: "hover:text-[#4A9782]"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/yourusername",
    color: "hover:text-[#4A9782]"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/yourusername",
    color: "hover:text-[#4A9782]"
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/yournumber",
    color: "hover:text-[#4A9782]"
  }
];

const InputField = ({ 
  label, 
  type = "text", 
  value, 
  onChange, 
  error, 
  placeholder,
  required = false 
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder: string;
  required?: boolean;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <label className="block text-[#FFF9E5] font-medium mb-2">
        {label} {required && <span className="text-[#4A9782]">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          required={required}
          className={`w-full px-4 py-3 rounded-2xl bg-white/5 backdrop-blur-md border transition-all duration-300
            ${isFocused 
              ? 'border-[#4A9782] shadow-lg shadow-[#4A9782]/20' 
              : 'border-[#DCD0A8]/20'
            }
            ${error ? 'border-red-400' : ''}
            text-[#FFF9E5] placeholder-[#FFF9E5]/50 focus:outline-none`}
        />
        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <AlertCircle className="w-5 h-5 text-red-400" />
          </motion.div>
        )}
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm mt-1 flex items-center gap-1"
        >
          <AlertCircle className="w-4 h-4" />
          {error}
        </motion.p>
      )}
    </motion.div>
  );
};

const TextAreaField = ({ 
  label, 
  value, 
  onChange, 
  error, 
  placeholder,
  required = false 
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder: string;
  required?: boolean;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <label className="block text-[#FFF9E5] font-medium mb-2">
        {label} {required && <span className="text-[#4A9782]">*</span>}
      </label>
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          required={required}
          rows={5}
          className={`w-full px-4 py-3 rounded-2xl bg-white/5 backdrop-blur-md border transition-all duration-300 resize-none
            ${isFocused 
              ? 'border-[#4A9782] shadow-lg shadow-[#4A9782]/20' 
              : 'border-[#DCD0A8]/20'
            }
            ${error ? 'border-red-400' : ''}
            text-[#FFF9E5] placeholder-[#FFF9E5]/50 focus:outline-none`}
        />
        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute right-3 top-3"
          >
            <AlertCircle className="w-5 h-5 text-red-400" />
          </motion.div>
        )}
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm mt-1 flex items-center gap-1"
        >
          <AlertCircle className="w-4 h-4" />
          {error}
        </motion.p>
      )}
    </motion.div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    isHuman: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    if (!formData.isHuman) {
      newErrors.isHuman = "Please confirm you&apos;re human";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "", isHuman: false });
      setIsSubmitted(false);
    }, 3000);
  };

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="w-20 h-20 text-[#4A9782] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFF9E5] mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-[#FFF9E5]/80 text-lg">
              Thank you for reaching out. I&apos;ll get back to you soon!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFF9E5] mb-6">
            Let&apos;s build something{" "}
            <span className="text-[#4A9782]">amazing</span> together!
          </h2>
          <p className="text-[#FFF9E5]/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let&apos;s connect and create something extraordinary.
          </p>
        </motion.div>

        {/* Contact Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <motion.div
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-[#DCD0A8]/20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#FFF9E5] mb-6">Get in Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField
                label="Name"
                value={formData.name}
                onChange={(value) => updateFormData('name', value)}
                error={errors.name}
                placeholder="Your full name"
                required
              />

              <InputField
                label="Email"
                type="email"
                value={formData.email}
                onChange={(value) => updateFormData('email', value)}
                error={errors.email}
                placeholder="your.email@example.com"
                required
              />

              <TextAreaField
                label="Message"
                value={formData.message}
                onChange={(value) => updateFormData('message', value)}
                error={errors.message}
                placeholder="Tell me about your project or idea..."
                required
              />

              {/* Human Verification */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isHuman}
                    onChange={(e) => updateFormData('isHuman', e.target.checked)}
                    className="w-5 h-5 text-[#4A9782] bg-white/5 border-[#DCD0A8]/20 rounded focus:ring-[#4A9782] focus:ring-2"
                  />
                  <span className="text-[#FFF9E5] text-sm">
                    🛡️ I&apos;m human – not a robot developer 🤖
                  </span>
                </label>
                {errors.isHuman && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-1 flex items-center gap-1"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.isHuman}
                  </motion.p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4A9782] text-[#FFF9E5] font-semibold py-4 px-6 rounded-2xl 
                  hover:shadow-lg hover:shadow-[#4A9782]/25 transition-all duration-300 
                  hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed
                  flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#FFF9E5]/30 border-t-[#FFF9E5] rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column - Social Links */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-[#DCD0A8]/20">
              <h3 className="text-2xl font-bold text-[#FFF9E5] mb-6">Connect With Me</h3>
              <p className="text-[#FFF9E5]/80 mb-8">
                Let&apos;s stay connected! Follow me on social media or reach out directly.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-[#DCD0A8]/20 
                      hover:border-[#4A9782] hover:bg-[#4A9782]/10 transition-all duration-300
                      group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <social.icon className={`w-6 h-6 text-[#FFF9E5] transition-colors duration-300 ${social.color}`} />
                    <span className="text-[#FFF9E5] font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 