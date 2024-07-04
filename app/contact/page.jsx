"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      message === "" ||
      lastName === "" ||
      phone === ""
    ) {
      toast.error("Preencha todos os campos ");
      return;
    }

    const templateParams = {
      to_name: name,
      email: email,
      message: message,
      lastName: lastName,
      phone: phone,
    };

    emailjs
      .send(
        "service_4tlpwcl",
        "template_nylcfhr",
        templateParams,
        "lW627aw3vlnzTvnCy"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setEmail("");
          setMessage("");
          setName("");
          setLastName("");
          setPhone("");
          toast.success("Mensagem enviada com sucesso!"); // Exibe a notificação de sucesso
        },
        (err) => {
          toast.error("Falha ao enviar mensagem. Tente novamente."); // Exibe a notificação de erro
        }
      );
  }

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
            <form
              className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'
              onSubmit={sendEmail}
            >
              <h3 className='text-4xl text-accent'>Entre em contato</h3>
              <p className='text-white/60'>
                Para mais informações ou para discutir oportunidades, entre em
                contato. Estou disponível para responder suas perguntas e
                discutir como posso colaborar.
              </p>
              {/* input */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input
                  type='firstName'
                  placeholder='Nome'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  type='lastName'
                  placeholder='Sobrenome'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <Input
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type='phone'
                  placeholder='Telefone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              {/* textarea */}
              <Textarea
                className='h-[200px]'
                placeholder='Digite sua mensagem'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
      <ToastContainer />
    </motion.section>
  );
};

export default Contact;
