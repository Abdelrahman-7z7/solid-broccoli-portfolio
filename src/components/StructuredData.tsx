import React from "react";

export default function StructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Abdelrahman Reyad Elorabi",
      "jobTitle": "Backend Engineer & Fullstack Developer",
      "description": "Professional backend engineer and fullstack developer specializing in Node.js, React, database design, and scalable web applications.",
      "url": "https://abdelrahman-reyad-elorabi-portfolio.vercel.app/", // Replace with your actual domain
      "image": "https://abdelrahman-reyad-elorabi-portfolio.vercel.app/profile-image.jpg", // Replace with your actual profile image
      "sameAs": [
        "https://github.com/Abdelrahman-7z7",
        "https://www.linkedin.com/in/abdelrahman-elorabi-2a726a216/",
        // "https://twitter.com/yourusername",
        "https://www.instagram.com/abdelrahman_7zz?igsh=MW1rNzJid3BwYTFlag%3D%3D&utm_source=qr",
        "https://wa.me/905436978152"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Istanbul",
        "addressCountry": "TR"
      },
      "knowsAbout": [
        "Backend Development",
        "Fullstack Development",
        "Node.js",
        "React",
        "Database Design",
        "API Development",
        "Web Development",
        "JavaScript",
        "TypeScript",
        "MongoDB",
        "MySQL",
        "PostgreSQL"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Backend Engineer",
        "description": "Developing robust server-side solutions with scalable architecture"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Nisantasi University" // Replace with your actual university
      }
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    );
  }