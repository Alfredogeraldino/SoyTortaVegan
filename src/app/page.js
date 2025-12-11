"use client"; // only needed in Next.js app router

import { Marcellus } from 'next/font/google'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
});

import React, { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${marcellus.className}`}>
      <header>
        <div>
          <h3 className="flex justify-center bg-(--green) text-white py-2 mb-2 md:mb-0 cursor-default">Creando momentos con sabor vegano</h3>
        </div>
        <nav className="text-black">
          <div className="flex items-center relative md:h-40">

            {/* Hamburger (Mobile) */}
            <button
              className="md:hidden flex ml-5 focus:outline-none cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div className="space-y-1.5 w-7.5 h-2.5">

                <motion.span
                  animate={isOpen ? { rotate: 225, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="block h-0.5 bg-(--green) -translate-y-"
                />

                <motion.span
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="block h-0.5 bg-black translate-y-1"
                />
              </motion.div>

            </button>

            {/* Desktop Menu Left*/}
            <div className="hidden md:flex md:gap-15 lg:gap-15 xl:gap-20 absolute md:left-35 lg:left-60 xl:left-85">
              <a href="/" className="hover:text-(--green)">Home</a>
              <a href="/menu" className="hover:text-(--green)">Menú</a>
            </div>

            {/* Logo */}
            <div className="flex mr-10 md:mr-auto justify-center items-center w-full">
              <a href="/">
                <img src="logo.png" alt="Logo de SoyTortaVegan" className="w-[80px] md:w-[120px]" />
              </a>
            </div>

            {/* Desktop Menu Right*/}
            <div className="hidden md:flex md:gap-8 lg:gap-15 xl:gap-20 absolute md:right-15 lg:right-40 xl:right-65">
              <a href="/nuestra-historia" className="hover:text-(--green)">Nuestra historia</a>
              <a href="/contactanos" className="hover:text-(--green)">Contáctanos</a>
            </div>

          </div>

          {/* Mobile Menu — appears below hamburger */}
          {isOpen && (
            <div>
              <div className="mt-5 flex bg-(--background) w-full h-[450]">
                <div className="md:hidden ml-5 mb-10 flex flex-col items-left gap-6">
                  <a href="/" className="hover:text-(--green)">Home</a>
                  <a href="/menu" className="hover:text-(--green)">Menú</a>
                  <a href="/nuestra-historia" className="hover:text-(--green)">Nuestra historia</a>
                  <a href="/contactanos" className="hover:text-(--green)">Contáctanos</a>
                </div>
              </div>
            </div>
          )}

        </nav>
      </header>
      {!isOpen && (
        <main>

          {/* WhatsApp Logo */}
          <div className="fixed right-10 bottom-10 z-9999">
            <a className="flex w-20 h-20 md:w-23 md:h-23 rounded-full shadow-lg" href="https://wa.me/56989018256?text=Hola%20SoyTortaVegan!">
              <img className="pointer-events-none w-23" src="WhatsAppLogo.svg" />
            </a>
          </div>

          {/* Fresa Desktop */}
          <div className="flex mt-10 justify-center lg:justify-start">
            <div>
              <h4 className="hidden lg:flex xl:text-7xl justify-center mt-10 mx-20 text-5xl font-bold text-red-700">Repostería 100% vegana!</h4>
              <p className="hidden mt-7 lg:flex mt-5 mx-20 ">En Soy Torta Vegan tenemos variedad de productos veganos especializándonos en las tortas, además de contar con opciones sin gluten y sin azúcar. Entregando productos frescos y recién hechos para ti.</p>
              <div className="hidden m-10 lg:flex justify-center">
                <a href='menu'>
                  <button className="hover:shadow-md lg:text-2xl text-white w-40 lg:w-50 h-10 bg-[#83A682] hover:bg-red-700 cursor-pointer">Menú</button>
                </a>
              </div>
            </div>
            <img className="hidden rounded shadow-xl lg:flex lg:w-135 xl:w-175 mb-[-70]" src="1.jpg" />
          </div>

          {/* Fresa Phone */}
          <div className="lg:hidden mb-20">
            <div className="lg:hidden flex justify-center items-center">
              <img className="rounded shadow-lg" src="torta-fresa-mobile.jpg" />
            </div>
            <div className="mt-5 text-center m-8">
              <h1 className=" lg:hidden flex justify-center lg:hidden sm:h-11 text-4xl font-bold mt-5 text-red-700">Repostería 100% vegana!</h1>
              <p className="lg:hidden pt-5">En Soy Torta Vegan tenemos variedad de productos veganos especializándonos en las tortas, además de contar con opciones sin gluten y sin azúcar. Entregando productos frescos y recién hechos para ti.</p>
              <div className="lg:hidden m-15">
                <a href='menu'>
                  <button className="shadow-md text-white w-40 h-10 bg-[#83A682] hover:bg-red-700 cursor-pointer">Menú</button>
                </a>
              </div>
            </div>
          </div>

          {/* Durazno Desktop */}
          <div className="hidden shadow-md xl:mb-40 lg:mb-30 lg:flex bg-(--green) lg:h-210 xl:h-260">
            <div className="mt-30">
              <img className="rounded shadow-xl lg:w-500 xl:w-500" src="2.jpg" />
            </div>
            <div>
              <h4 className="hidden lg:flex xl:text-7xl justify-center mt-40 mx-20 text-5xl font-bold text-white">¿Buscas ingredientes naturales?</h4>
              <p className="hidden lg:flex mt-5 mx-20 text-white">Ninguno de nuestros productos contigo lácteos, ni huevos, somos una repostería 100% vegana, priorizando ingredientes de origen vegetal, todos nuestros productos están hechos en base a semillas, verduras y frutas naturales.</p>

              <div className="flex justify-center mt-10">
                <div className="flex jutify-center m-5">
                  <h4 className="text-7xl xl:text-8xl text-orange-200 hover:text-red-200 hover:cursor-default
                   p-5">
                    <Typewriter
                      loop={0}
                      typeSpeed={110}
                      deleteSpeed={100}
                      delaySpeed={1600}
                      words={['Frutilla', 'Durazno', 'Mango', 'Limón', 'Piña', 'Kiwi', 'Manzana', 'Nuez', 'Chocolate', 'Vainilla', 'Zanahoria', 'Chía', 'Frambuesa', 'Maracuyá', 'Lúcuma', 'Manjar', 'Naranja']}>
                    </Typewriter>
                  </h4>
                </div>
              </div>

            </div>
          </div>

          {/* Durazno Phone */}
          <div>
            <div className="lg:hidden shadow-md bg-(--green) h-195 sm:h-200 md:h-220">
              <div className="flex justify-center">
                <img className="rounded shadow-lg" src="torta-durazno-mobile.jpg" />
              </div>
              <div className="text-white mt-5 text-center m-8">
                <h1 className="text-4xl font-bold">¿Buscas ingredientes naturales?</h1>
                <p className="mt-5 text">Ninguno de nuestros productos contigo lácteos, ni huevos, somos una repostería 100% vegana, priorizando ingredientes de origen vegetal, todos nuestros productos están hechos en base a semillas, verduras y frutas naturales.</p>

                <div className="flex justify-center mt-5 md:mt-10">
                  <div className="">
                    <h4 className="text-6xl md:text-7xl text-orange-200 hover:text-red-200 hover:cursor-default p-5 ">
                      <Typewriter
                        loop={0}
                        typeSpeed={110}
                        deleteSpeed={100}
                        delaySpeed={1600}
                        words={['Frutilla', 'Durazno', 'Mango', 'Limón', 'Piña', 'Kiwi', 'Manzana', 'Nuez', 'Chocolate', 'Vainilla', 'Zanahoria', 'Chía', 'Frambuesa', 'Maracuyá', 'Lúcuma', 'Manjar', 'Naranja']}>
                      </Typewriter>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex scroll-smooth justify-start mt-[-40] md:mt-[-100] lg:mt-[-210] xl:mt-[-290]">
              <div>
                <img className="transition delay-50 duration-500 ease-in-out hover:translate-y-1 w-100" src="kiwi.png" />
              </div>
              <div>
                <img className="transition delay-50 duration-500 ease-in-out hover:translate-y-1" src="strawberry.png" />
              </div>
              <div>
                <img className="transition delay-50 duration-500 ease-in-out hover:translate-y-1" src="mango.png" />
              </div>
              <div>
                <img className="transition delay-50 duration-500 ease-in-out hover:translate-y-1" src="peach.png" />
              </div>
              <div>
                <img className="transition delay-50 duration-500 ease-in-out hover:translate-y-1" src="oreo.png" />
              </div>
            </div>
          </div>

          {/*Images Carousel Rellenos */}
          <div className="my-20 ">
            <h1 className="lg:hidden mt-20 text-4xl font-bold text-white bg-(--green) py-5">Rellenos de tortas</h1>
            <h4 className="hidden justify-center lg:flex mt-20 text-6xl font-bold text-white bg-(--green) py-5">Rellenos de tortas</h4>

            <Swiper breakpoints={{ 800: { slidesPerView: 3 } }} slidesPerView={1} spaceBetween={0} loop={true} autoplay={{ delay: 4000 }} pagination={{ dynamicBullets: true, clickable: true }} navigation={true} modules={[Autoplay, Pagination, Navigation]} className="md:w-full  mySwiper">
              <SwiperSlide>
                <div className="flex justify-center">
                  <img src="r_piña.jpg" className="shadow-md" />
                </div>
                <div className="flex justify-center">
                  <h2 className='text-(--green) tracking-wide'>Mango</h2>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex justify-center">
                  <img src="r_piña_con_trozos.jpg" className="shadow-md" />
                </div>
                <div className="flex justify-center">
                  <h2 className='text-(--green) tracking-wide'>Mango con trozos de fruta</h2>
                </div>

              </SwiperSlide>

              <SwiperSlide>
                <div className="flex justify-center">
                  <img src="r_frambuesa.jpg" className="shadow-md" />
                </div>
                <div className="flex justify-center">
                  <h2 className='text-(--green) tracking-wide'>Frambuesa</h2>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex justify-center">
                  <img src="r_chocolate.jpg" className="shadow-md" />
                </div>
                <div className="flex justify-center">
                  <h2 className='text-(--green) tracking-wide'>Chocolate</h2>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex justify-center">
                  <img src="r_maracuya.jpg" className="shadow-md" />
                </div>
                <div className="flex justify-center">
                  <h2 className='text-(--green) tracking-wide'>Maracuya</h2>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>

          {/*Images Carousel Tortas */}
          <div className="mt-20">
            <h1 className="lg:hidden mt-20 text-4xl font-bold text-white bg-(--green) p-5">Tortas</h1>
            <h4 className="hidden justify-center lg:flex mt-20 text-6xl font-bold text-white bg-(--green) p-5">Tortas</h4>

            <Swiper breakpoints={{ 800: { slidesPerView: 3 } }} slidesPerView={1} loop={true} autoplay={{ delay: 4000 }} pagination={{ dynamicBullets: true, clickable: true }} navigation={true} modules={[Autoplay, Pagination, Navigation]} className=" mySwiper">
              <SwiperSlide>
                <div className="flex justify-center">
                  <img src="t_piña.jpg" className="shadow-md" />
                </div>
                <div className="flex justify-center">
                  <h2 className='text-(--green) tracking-wide'>Piña</h2>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex justify-center">
                  <img src="t_durazno.jpg" className="shadow-md" />
                </div>
                <div className="flex justify-center">
                  <h2 className='text-(--green) tracking-wide'>Mango</h2>
                </div>

              </SwiperSlide>

              <SwiperSlide>
                <div className="flex justify-center">
                  <img src="t_manjar.jpg" className="shadow-md" />
                </div>
                <div className="flex justify-center">
                  <h2 className='text-(--green) tracking-wide'>Manjar</h2>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex justify-center">
                  <img src="t_kiwi_frutilla.jpg" className="shadow-md" />
                </div>
                <div className="flex justify-center">
                  <h2 className='text-(--green) tracking-wide'>Sin azúcar para bebes</h2>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex justify-center">
                  <img src="Destacada3.jpg" className="shadow-md" />
                </div>
                <div className="flex justify-center">
                  <h2 className='text-(--green) tracking-wide'>Frutilla</h2>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex justify-center">
                  <img src="Destacada2.jpg" className="shadow-md" />
                </div>
                <div className="flex justify-center">
                  <h2 className='text-(--green) tracking-wide'>Oreo</h2>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex justify-center">
                  <img src="Destacada1.jpg" className="shadow-md" />
                </div>
                <div className="flex justify-center">
                  <h2 className='text-(--green) tracking-wide'>Manjar</h2>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>

          {/*Images Carousel Otros productos */}
          <div className="my-20">
            <h1 className="lg:hidden mt-20 text-4xl font-bold text-white bg-(--green) p-5">Otros productos</h1>
            <h4 className="hidden justify-center lg:flex mt-20 text-6xl font-bold text-white bg-(--green) p-5">Otros productos</h4>

            <Swiper breakpoints={{ 800: { slidesPerView: 3 } }} slidesPerView={1} loop={true} autoplay={{ delay: 4000 }} pagination={{ dynamicBullets: true, clickable: true }} navigation={true} modules={[Autoplay, Pagination, Navigation]} className=" mySwiper">
              <SwiperSlide>
                <div className="flex justify-center">
                  <img src="tartaleta.jpg" className="shadow-md" />
                </div>
                <div className="flex justify-center">
                  <h2 className='text-(--green) tracking-wide'>Tartaletas</h2>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex justify-center">
                  <img src="hojarasca.jpg" className="shadow-md" />
                </div>
                <div className="flex justify-center">
                  <h2 className='text-(--green) tracking-wide'>Hojarasca</h2>
                </div>

              </SwiperSlide>

              <SwiperSlide>
                <div className="flex justify-center">
                  <img src="galletas.jpg" className="shadow-md" />
                </div>
                <div className="flex justify-center">
                  <h2 className='text-(--green) tracking-wide'>Galletas</h2>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex justify-center">
                  <img src="pan_de_pascua.jpg" className="shadow-md" />
                </div>
                <div className="flex justify-center">
                  <h2 className='text-(--green) tracking-wide'>Pan de pascua</h2>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </main>
      )}
      <footer className="bg-(--green) h-70 pt-5">

        <div className="flex flex-col items-center">
          <h2 className="mt-5 text-white cursor-default">Síguenos en instagram!</h2>
          <a href="https://www.instagram.com/soytortavegan/#">
            <img src="ig-white.svg" className="w-[40px] mt-1" />
          </a>
        </div>

        <div className="mt-5 flex flex-col items-center">
          <h2 className="text-white mt-2 cursor-default">Contáctanos</h2>

          <div className="flex mt-1">
            <img src="phone-white.svg" className="w-[20px] mr-1" />
            <p className="text-white cursor-default">+56 9 8901 8256</p>
          </div>

          <div className="flex mt-1">
            <img src="email-white.svg" className="w-[20px] mr-1" />
            <p className="text-white cursor-default">soytortavegan@gmail.com</p>
          </div>

        </div>
      </footer>
    </div>
  );
}