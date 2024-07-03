"use client";

import { Info, icons } from "lucide-react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaAngular,
} from "react-icons/fa";

import { SiTailwindcss, SiBootstrap } from "react-icons/si";

const about = {
  title: "Informacão Pessoal",
  description:
    "sou apaixonado por criar soluções criativas para problemas complexos. Estou sempre buscando maneiras de gerar resultados efetivos e inovadores. Além disso, sou um profissional dedicado, responsável e comprometido em aprender continuamente e evoluir minhas habilidades.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Marcus Vinícius",
    },
    {
      fieldName: "Telefone",
      fieldValue: "(83) 9 9851-8119 ",
    },
    {
      fieldName: "E-mail",
      fieldValue: "marcusmota08@gmail.com",
    },
    {
      fieldName: "Instagram",
      fieldValue: "@viniciusqmota",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Minhas Experiencias",
  description: "Transformando ideias em soluções práticas",
  items: [
    {
      company: "Comeia Labs",
      position: "Desenvolvedor Front-end",
      duration: "2024 - Atual",
    },
    {
      company: "EESL - Consultoria",
      position: "Desenvolvedor Front-end",
      duration: "2023 - 2024",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Academico",
  description: "Minhas Formações",
  items: [
    {
      instituition: "Comeia Labs",
      degree: "Full Stack Developer",
      duration: "2023",
    },
    {
      instituition: "Onebitcode",
      degree: "Curso de Desenvolvimento Web",
      duration: "2023",
    },
    {
      instituition: "Cesrei Faculdade",
      degree: "Publicidade e Propaganda",
      duration: "2020",
    },
  ],
};

const skills = {
  title: "Minhas Skills",
  description: "Experiências Praticas.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className='min-h[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto mt-40 '>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px] w-full  '
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger className='text-white' value='experience'>
              Experience
            </TabsTrigger>
            <TabsTrigger className='text-white' value='education'>
              Education
            </TabsTrigger>
            <TabsTrigger className='text-white' value='skills'>
              Skills
            </TabsTrigger>
            <TabsTrigger className='text-white' value='about'>
              About me
            </TabsTrigger>
          </TabsList>

          <div className='min-h-[70px] w-full'>
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] mx-auto text-white xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg-items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl  min-h-[60px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] mx-auto text-white xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px]  py-6 px-10 rounded-xl flex flex-col justify-center items-center lg-items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl  min-h-[60px] text-center lg:text-left'>
                            {item.degree}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] bg-accent'></span>
                            <p className='text-white/60'>{item.instituition}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] mx-auto text-white xl:mx-0'>
                    {skills.description}
                  </p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className='z-50 overflow-hidden rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-950 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50'>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value='about'
              className='w-full text-center xl:text-left'
            >
              <div className='flex flex-col gap-[30px] '>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] mx-auto text-white/60 xl:mx-0'>
                  {" "}
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-16 max-w-[820px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className='flex items-center justify-center xl:justify-start gap-6'
                      >
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
