import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
      <ProjectCard
          src="/echachemss.webp"
          title="SDS Project"
          description="Developed a program using Python, BeautifulSoup, and Selenium to aggregate data from the ECHA website for
creating Material Safety Data Sheets, ensuring safe battery transportation and mitigating risks, including potential
explosions, during international shipments. Automated legacy systems by creating scalable solutions, improving overall system performance and increasing
efficiency by 70%.

          "
          githubUrl="https://github.com/AnushaSingh12"
        />
        <ProjectCard
          src="/btc.webp"
          title="File Integrity Monitoring System using Blockchain "
          description="Developed a blockchain-based system for EHR file integrity monitoring, where patients uploads files to cloud and
          verify access requests from authorized doctor. The system uses hash comparisons (SHA-256) to detect file tampering during uploads and downloads, ensuring
          data integrity and security.
          "
          githubUrl="https://github.com/AnushaSingh12"
        />
        <ProjectCard
          src="/heartdisease.webp"
          title="Heart Disease Prediction System"
          description="Built a model that predicts cardiovascular disease by analyzing patient medical history.
          Utilized a dataset containing 14 attributes related to heart disease risk factors.
          Improved early diagnosis and intervention for patients at risk of fatal heart disease and successfully achieved the
          accuracy of 89%."
          githubUrl="https://github.com/AnushaSingh12"
        />
        <ProjectCard
          src="/portfolioss.webp"
          title="Portfolio"
          description="Developed a dynamic web-based portfolio platform using HTML, CSS, JavaScript, React, and Material UI. The platform showcases my skills, projects, and experience in a sleek, modern design. Using React for efficient rendering and Material UI for beautiful and responsive components, the website delivers a smooth user experience across all devices."
          githubUrl="https://github.com/AnushaSingh12"
        />
      </div>
    </div>
  );
};

export default Projects;
