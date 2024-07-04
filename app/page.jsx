import Photo from "@/components/Photo";
import Social from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import DownloadButton from "@/components/DownloadButton";

const Home = () => {
  return (
    <section className='xl:mt-28 flex flex-row items-center justify-center align-center'>
      <div className='container mx-auto h-full '>
        <div className=' sm:mt-0 flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* texto */}
          <div className='  order-2 xl:order-none mt-4  '>
            <span className=' text-xl text-center w-full '>
              Software Developer
            </span>
            <h1 className='h1 mb-6 text-left'>
              Opa, sou
              <br /> <span className='text-accent'>Marcus Vinícius</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              Sou um desenvolvedor Front-End. Aqui você encontra alguns dos
              principais projetos feitos por mim e algumas informações de
              contato.
            </p>
            {/* btn */}
            <div className='flex flex-col xl:flex-row gap-8 items-center'>
              <DownloadButton /> {/* Use o componente cliente */}
              <div className='flex items-center justify-center align-center mb-8 xl:mb-0 '>
                <Social
                  containerStyles='flex gap-6 justify-center items-center'
                  iconStyles='w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                />
              </div>
            </div>
          </div>
          {/* foto */}
          <div>
            <Photo className='order-1 xl:order-none mb-8 xl:mb-0' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
