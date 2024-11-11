import React from "react";
import person from "../assets/about.jpg";
import { Button } from "flowbite-react";

const About = () => {
  return (
    <>
    <div className="min-h-screen mt-20 bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 shadow-lg rounded-lg bg-white dark:bg-gray-800">
        
        {/* Profile Image Section */}
        <div className="flex-1 flex justify-center md:justify-start items-center mb-6 md:mb-0">
          <img
            src={person}
            alt="Profile"
            className="rounded-full w-40 h-40 md:w-48 md:h-48 lg:w-80 lg:h-80 shadow-lg border-4 border-blue-500"
          />
        </div>
  
        {/* About Section */}
        <div className="flex-1 p-6 md:p-10 flex flex-col justify-center font-serif">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-md mb-4 shadow hover:bg-blue-600 focus:outline-none">
            About Us
          </button>
  
          {/* Highlighted Main Heading */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
            <span className="text-blue-500">Do</span> Some Awesome Stuff With Me
          </h1>
  
          {/* About Content */}
          <p className="mt-4 text-lg leading-relaxed text-gray-800 dark:text-gray-300 flex items-center">
            <i className="fas fa-map-marker-alt text-blue-500 mr-2"></i>
            Hi, I’m Pranavamuthu from Karaikudi, a certified MERN stack developer from Guvi. I hold a Master's degree in Computer Applications (MCA).
          </p>
          
          <p className="mt-4 text-lg leading-relaxed text-gray-800 dark:text-gray-300 flex items-center">
            <i className="fas fa-code text-blue-500 mr-2"></i>
            My coding journey began in 2022, guided by Kumaration, an IT professional who provided me with valuable mentorship, project opportunities, and a stipend.
          </p>
          
          <p className="mt-4 text-lg leading-relaxed text-gray-800 dark:text-gray-300 flex items-center">
            <i className="fas fa-users text-blue-500 mr-2"></i>
            During a 3-month internship under the Naan Mudhalvan government program, I mentored college students on Git, GitHub, and full-stack web development.
          </p>
          
          <p className="mt-4 text-lg leading-relaxed text-gray-800 dark:text-gray-300 flex items-center">
            <i className="fas fa-chalkboard-teacher text-blue-500 mr-2"></i>
            I managed 120 students at Mahindra Engineering College and Anna University.
          </p>
  
          <p className="mt-4 text-lg leading-relaxed text-gray-800 dark:text-gray-300 flex items-center">
            <i className="fas fa-laptop-code text-blue-500 mr-2"></i>
            All my project work is well-maintained in GitHub repositories, and I continue to expand my skills in development.
          </p>
          
          <p className="mt-4 text-lg leading-relaxed text-gray-800 dark:text-gray-300 flex items-center">
            <i className="fas fa-lock text-blue-500 mr-2"></i>
            I'm currently learning web hacking to enhance my skills.
          </p>
        </div>
      </div>
    </div>
  </>
  
  );
};

export default About;
