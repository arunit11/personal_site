import React from "react";

const Skill = () => {
  const skillicon = [
    {
      name: "HTML5",
      icon: (<svg fill="none" height="100" width="150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53199999999998"><path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e34f26"/><path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ef652a"/><path d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z" fill="#fff"/></svg>),
    },

    {
      name: "CSS3",
      icon: (<svg fill="none" height="100" width="150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53"><path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba"/><path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7"/><path d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z" fill="#fff"/></svg>),
    },
    {
      name: "JAVASCRIPT",
      icon: (<svg fill="none" height="100" width="150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53199999999998"><path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e9ca32"/><path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ffde25"/><g fill="#fff"><path d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z"/></g></svg>),
    },
    {
      name: "VSCODE",
      icon: (<svg height="100" width="150" viewBox="-11.9 -2 1003.9 995.6"  xmlns="http://www.w3.org/2000/svg"><path d="m12.1 353.9s-24-17.3 4.8-40.4l67.1-60s19.2-20.2 39.5-2.6l619.2 468.8v224.8s-.3 35.3-45.6 31.4z" fill="#2489ca"/><path d="m171.7 498.8-159.6 145.1s-16.4 12.2 0 34l74.1 67.4s17.6 18.9 43.6-2.6l169.2-128.3z" fill="#1070b3"/><path d="m451.9 500 292.7-223.5-1.9-223.6s-12.5-48.8-54.2-23.4l-389.5 354.5z" fill="#0877b9"/><path d="m697.1 976.2c17 17.4 37.6 11.7 37.6 11.7l228.1-112.4c29.2-19.9 25.1-44.6 25.1-44.6v-671.2c0-29.5-30.2-39.7-30.2-39.7l-197.7-95.3c-43.2-26.7-71.5 4.8-71.5 4.8s36.4-26.2 54.2 23.4v887.5c0 6.1-1.3 12.1-3.9 17.5-5.2 10.5-16.5 20.3-43.6 16.2z" fill="#3c99d4"/></svg>),
    },
  ];

  return (
<>
  {/* Skill Set Section */}
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-10">
        My <span className="text-blue-500">Skill Set</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {skillicon.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-5 transform hover:scale-105 transition-transform duration-300"
          >
            <div className="h-20 w-20 sm:h-24 sm:w-24 mb-4 flex justify-center items-center p-5 rounded-full animate-gradient-outline bg-gradient-to-r from-blue-500 to-teal-400 shadow-lg">
              {skill.icon}
            </div>
            {/* Skill Name */}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes gradient-outline {
      0% {
        box-shadow: 0 0 0 4px rgba(19, 92, 165, 0.8);
      }
      50% {
        box-shadow: 0 0 0 4px rgba(29, 201, 183, 0.8);
      }
      100% {
        box-shadow: 0 0 0 4px rgba(19, 92, 165, 0.8);
      }
    }

    .animate-gradient-outline {
      animation: gradient-outline 3s infinite;
    }

    /* Responsive grid adjustments */
    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 640px) {
      .grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    @media (min-width: 768px) {
      .grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    }

    @media (min-width: 1024px) {
      .grid {
        grid-template-columns: repeat(6, minmax(0, 1fr));
      }
    }
  `}</style>
</>

  
  );
};

export default Skill;
