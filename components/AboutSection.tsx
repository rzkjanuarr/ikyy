import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "PHP" },
  { skill: "Laravel" },
  { skill: "Flutter" },
  { skill: "React Native" },
  { skill: "Figma" },
  { skill: "Design System" },
  { skill: "Miro" },
  { skill: "Gitlab" },
  { skill: "Notion" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Rizki, a Junior Frontend Developer based in
              Sidoarjo, East Java, Indonesia. Currently, I am finishing my study
              at Surabaya State University, majoring in Informatics Management,
              and expected to graduate in 2024.
            </p>
            <br />
            <p>
              I have a habit of working mainly at night, which makes my work
              schedule somewhat different from most people. This allows me to
              complete tasks quickly and efficiently.
            </p>
            <br />
            <p>
              I strongly believe that personal growth is important. Therefore, I
              have a strong passion for technology and am always pushing the
              boundaries to reach its full potential. I am excited to see where
              my career will take me and am always open to new opportunities
              that arise.
            </p>
            <br />
            <p>
              Thank you for visiting my profile, and I am excited to explore the
              world of technology further and contribute to the industry. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            {/* <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
