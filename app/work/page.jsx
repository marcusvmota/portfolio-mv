"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Otur Viagens",
    title: "Portfolio",
    description:
      "No projeto da Otur Viagens, desenvolvi e mantive a aplicação web de pacotes de viagens, utilizando ReactTS e TypeScript para criar interfaces dinâmicas e integrar APIs externas. Criei interfaces específicas para usuários finais e administradores, implementando sistemas de autenticação seguros e rotas privadas para garantir o acesso autorizado. A estilização responsiva foi feita com Tailwind CSS e a usabilidade aprimorada.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next" }
    ],
    image: "/assets/work/dgym.png",
    live: "https://www.oturviagens.com/",
    github: "https://github.com/marcusvmota"
  },
  {
    num: "02",
    category: "D-Gym",
    title: "Portfolio",
    description:
      "Trabalhei na criação e manutenção de interfaces responsivas com React e Tailwind CSS também trabalhei com ReactNative para versão em app, colaborando com equipes de design para implementar soluções inovadoras. Como membro chave da equipe de desenvolvimento, defini a estrutura e arquitetura do repositório do projeto com ReactJS e TypeScript, integrando APIs externas. Criei interfaces intuitivas para membros, instrutores e administradores, facilitando cadastro de aulas, agendamento de sessões e exibição de atividades em um calendário interativo.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next" }
    ],
    image: "/assets/work/otur.png",
    live: "https://apps.apple.com/br/app/d-gym-mobile/id6736791693?platform=iphone",
    github: "https://github.com/marcusvmota"
  },
  {
    num: "03",
    category: "ZOTT Produções",
    title: "Portfolio",
    description:
      "Site desenvolvido para produtora de eventos para apresentar o seu trabalho e captar patrocinadores.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/work/zott.jpg",
    live: "https://glaysonbsantos.github.io/zott/index.html",
    github: "https://github.com/marcusvmota/zott-producoes"
  },
  {
    num: "04",
    category: "Corretor Iago Queiroz",
    title: "Portfolio",
    description:
      "Site desenvolvido para o Corretor Iago Queiroz para divulgar casas, apartamentos e lotes.",
    stack: [
      { name: "Wordpress" }
      // Outros itens comentados
    ],
    image: "/assets/work/iago.jpg",
    live: "https://corretoriagoqueiroz.com/",
    github: "https://github.com/marcusvmota"
  },
  {
    num: "05",
    category: "QuadroA4 Outlet",
    title: "Portfolio",
    description:
      "Aplicação desenvolvida como exercício para elaborar um site de produto ou serviço de e-commerce.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/work/QUADROA4.jpg",
    live: "https://marcusvmota.github.io/quadroA4-outlet/",
    github: "https://github.com/marcusvmota/quadroA4-outlet"
  }
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  useEffect(() => {
    console.log("Projeto Atual:", project);
  }, [project]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex; // Use realIndex
    console.log("Índice Atual do Slide:", currentIndex);

    if (currentIndex >= 0 && currentIndex < projects.length) {
      setProject(projects[currentIndex]);
    } else {
      console.error("Índice do slide fora dos limites:", currentIndex);
      setProject(projects[0]); // Define um valor padrão
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 overflow-x-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Seção de Informações do Projeto */}
          <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 h-full">
              {/* Número do Projeto */}
              <div className="text-8xl sm:text-6xl md:text-4xl leading-none font-extrabold text-outline text-transparent">
                {project?.num || "N/A"}
              </div>
              {/* Categoria do Projeto */}
              <h2 className="text-4xl sm:text-3xl md:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project?.category || "Categoria Indefinida"}
              </h2>
              {/* Descrição do Projeto */}
              <p className="text-white/60 text-sm sm:text-base md:text-lg">
                {project?.description || "Descrição não disponível."}
              </p>
              {/* Stack Tecnológico */}
              <ul className="flex gap-2 sm:gap-4 flex-wrap">
                {project?.stack?.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm sm:text-xl text-accent break-words"
                  >
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                )) || "Stack não disponível."}
              </ul>
              {/* Linha Divisória */}
              <div className="border border-white/20"></div>
              {/* Botões de Live e Github */}
              <div className="flex gap-4 items-center flex-wrap">
                {project?.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/5 flex items-center justify-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent className="z-50 overflow-hidden rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-950 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50">
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project?.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/5 flex items-center justify-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent className="z-50 overflow-hidden rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-950 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50">
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Seção do Slider de Projetos */}
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 30
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 30
                }
              }}
            >
              {projects.map((projectItem, index) => (
                <SwiperSlide key={index} className="w-full">
                  <a
                    href={projectItem.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-[460px] relative group flex justify-center items-center bg-pink-50/20 cursor-pointer overflow-hidden"
                  >
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full max-w-full overflow-hidden">
                      <Image
                        src={projectItem.image}
                        alt={projectItem.category}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </a>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-5 xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
