"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "marcusmota08@gmail.com",
  },

  {
    icon: <FaInstagram />,
    title: "Instagram",
    description: "@viniciusqmota",
  },

  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(83) 9 9851-8119",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* form */}
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent'>Let's Work Together</h3>
              <p className='text-white/60'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, nulla assumenda quidem aperiam expedita at soluta
                enim sunt ex, quae accusantium ducimus iusto, voluptas
                asperiores minus. Voluptatum libero et nisi.
              </p>
              {/* input */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type='firstName' placeholder='First Name' />
                <Input type='lastName' placeholder='Last Name' />
                <Input type='email' placeholder='Email' />
                <Input type='phone' placeholder='Phone' />
              </div>
              {/* textarea */}
              <Textarea
                className='h-[200px]'
                placeholder='Digite sua mensagem'
              />
              {/* button */}
              <Button size='md' className='max-w-40'>
                enviar
              </Button>
            </form>
          </div>
          {/* info */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return (
                  <li key={index} className='flex items-center gap-6'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className='text-xl'>{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Contact;
