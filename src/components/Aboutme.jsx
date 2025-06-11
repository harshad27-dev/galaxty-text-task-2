import React from 'react';

const Aboutme = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl dark:to-black bg-clip-text bg-gradient-to-r  text-white">
            About Me
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Profile Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="bg-indigo-500 rounded-full w-64 h-64 md:w-80 md:h-80 overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                {/* Replace with your image */}
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-6 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                <span className="font-bold text-indigo-600 dark:text-indigo-400">Harshad shaik</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              Full Stack Developer
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vel magnam odio, aliquam ratione dolor consequuntur molestiae, odit error vitae accusamus neque? Harum illum consequatur tempore repellat voluptates impedit necessitatibus quia. Laboriosam culpa quo corporis vel odit mollitia placeat quod obcaecati laudantium sint non voluptate assumenda, corrupti consequatur nisi aliquid!
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias eius nihil nemo earum tenetur quia blanditiis ad reprehenderit nulla veniam ex sed eos voluptas saepe, temporibus nesciunt sequi fuga molestiae ut ipsam similique aliquam explicabo hic. Qui possimus, voluptas sunt illum ea quam explicabo voluptates dolorem fuga nobis eius?
            </p>

            {/* Skills */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">My Skills</h4>
              <div className="flex flex-wrap gap-3">
                {['React', 'Tailwind CSS', 'Node.js', 'JavaScript', 'Figma', 'Python'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-gray-700 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all shadow-lg hover:shadow-xl">
                Download Resume
              </button>
              <button className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-indigo-600 dark:text-indigo-400 rounded-lg border border-gray-200 dark:border-gray-700 transition-all">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;