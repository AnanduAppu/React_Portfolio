import React from "react";

function About({ title, description }) {
  return (
    <div className="w-full mt-16 ">
      <div className="flex flex-wrap gap-4 ">
        {/* card 1 */}
        <div className="flex flex-col gap-2 h-auto md:h-[30vh] text-black text-left rounded-xl shadow-lg p-6 w-full md:w-[48%] bg-blue-100 bg-opacity-30 backdrop-filter backdrop-blur-lg">
          <span className="text-lg md:text-lg font-bold text-left">{title}</span>
          <p className="text-base md:text-base">{description}</p>
        </div>

        {/* card 2 */}
        <div className="flex flex-col gap-2 h-auto md:h-[30vh] text-black text-left rounded-xl shadow-md p-6 w-full md:w-[48%] bg-blue-100 bg-opacity-30 backdrop-filter backdrop-blur-lg">
     
          <p className="text-base md:text-base"><span className="text-lg md:text-lg font-bold text-left">Experience:- </span>During my internship at Bridgeon Tech, I gained hands-on experience with MERN stack technologies, including MongoDB, Express.js, React.js, and Node.js. I worked on developing dynamic web applications, enhancing my skills in both front-end and back-end development while contributing to real-world projects and collaborating with a team</p>
        </div>
      </div>
    </div>
  );
}

export default About;

