"use client";
import React, { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 0,
    title: "React Portfolio Website",
    description: "My developer portfolio website",
    image: "/images/projects/portfolio.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Hayotunday/portfolio-website-nextjs",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Ai Prompts Website",
    description: "Website for sharing ai-prompts among users of various AIs",
    image: "/images/projects/ai-prompts.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Hayotunday/prompts",
    previewUrl: "https://ai-prompts-me.vercel.app",
  },
  {
    id: 2,
    title: "Takenote Website",
    description: "Website for takenote mobile app.",
    image: "/images/projects/takenotes.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Hayotunday/takenotes-web",
    previewUrl: "https://takenotes-web-me.vercel.app/",
  },
  {
    id: 3,
    title: "NFT Marketplace Website",
    description: "Website for nft marketplace mobile app.",
    image: "/images/projects/nft-marketplace.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Hayotunday/nft-marketplace-web",
    previewUrl: "https://nft-marketplace-me.vercel.app/",
  },
  {
    id: 4,
    title: "Data Finance Website",
    description: "Data finance website.",
    image: "/images/projects/data-finance.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Hayotunday/data-finance-app",
    previewUrl: "https://data-finance-app-nine.vercel.app/",
  },
  {
    id: 5,
    title: "Cars Hub Website",
    description: "Website for view car make, models and other details.",
    image: "/images/projects/cars-hub.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Hayotunday/cars-hub",
    previewUrl: "https://cars-hub-me.vercel.app/",
  },
  {
    id: 6,
    title: "Youtube Clone Website ",
    description: "Yoube clone for browse and streaming videos.",
    image: "/images/projects/youtube-clone.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Hayotunday/youtube-clone",
    previewUrl: "https://youtube-delta-me.netlify.app",
  },
  {
    id: 7,
    title: "AnnexXchangeme Crypto Website",
    description: "Demo website for a cryptocurrency exchange.",
    image: "/images/projects/annexxchange.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Annexexchange/Annex-Web",
    previewUrl: "https://annexXchangeme.netlify.app",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="pt-12" id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 py-8">
        My Projects
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul
        ref={ref}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              githubUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
