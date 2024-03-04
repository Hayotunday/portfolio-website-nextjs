"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc list-inside marker:text-white pl-2">
        <li>JavaScript</li>
        <li>Node.js and Express</li>
        <li>ReactJS</li>
        <li>Next.js</li>
        <li>React Native</li>
        <li>MongoDB</li>
        <li>MySQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc list-inside marker:text-white pl-2">
        <li>University of Ilorin, Kwara, Nigeria</li>
        <li>
          Redeemer&apos;s of Technology and Management, Redemption Camp, Mowe,
          Ogun state, Nigeria
        </li>
      </ul>
    ),
  },
  // {
  //   title: 'Certifications',
  //   id: 'certifications',
  //   content: (
  //     <ul className='list-disc list-inside marker:text-white pl-2'>
  //       <li>AWS Cloud Practitioner</li>
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   )
  // },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [ispending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white pt-12" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 sl:px-16">
        <Image
          src={"/images/about-image.png"}
          alt="about-image"
          width={500}
          height={500}
          className="rounded"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, React
            Native, MongoDB, MySQL, HTML, CSS, and Git. I am a quick learner,
            problem solver and I am always looking to expand my knowledge and
            skill set. I am a team player and I am excited to work with others
            to create amazing applications.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
