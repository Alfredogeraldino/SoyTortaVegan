"use client"; // only needed in Next.js app router

import { redirect } from 'next/dist/server/api-utils';
import { Marcellus } from 'next/font/google'
import { motion } from 'framer-motion';

import React, { useState, useRef } from "react";

const marcellus = Marcellus({
    subsets: ["latin"],
    weight: "400",
});

export default function Contactanos() {
    const [isOpen, setIsOpen] = useState(false);
    const [result, setResult] = useState("");
    const formRef = useRef();

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "508419e7-00bc-4b33-aff2-25a6041784ff");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "¡Mensaje enviado!" : "Error");

        if (data.success) {
            formRef.current.reset();
        }

    };

    return (
        <div className={`${marcellus.className}`}>
            <header>
                <div>
                    <h3 className="flex justify-center bg-(--green) text-white py-2 mb-2 md:mb-0">Creando momentos con sabor vegano</h3>
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
                                <img src="logo.png" className="w-[80px] md:w-[120px]" />
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

                    <div className="flex items-center justify-center mt-5">

                        <div className="bg-(--green) h-[3] w-15 md:w-50 lg:w-80"></div>

                        <h1 className="text-shadow-sm font-bold mx-1">Contáctanos</h1>

                        <div className="bg-(--green) h-[3] w-15 md:w-50 lg:w-80"></div>

                    </div>

                    <div className="flex py-10 justify-center items-center">
                        <form ref={formRef} onSubmit={onSubmit}>
                            <div>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="NOMBRE"
                                    required
                                    className="border border-(--green) m-2 p-2 w-80 xl:w-110 h-9"
                                />
                            </div>

                            <div>
                                <input
                                    id="number"
                                    name="numero"
                                    placeholder="NUMERO DE CONTACTO"
                                    type="number"
                                    required
                                    className="border border-(--green) m-2 p-2 w-80 xl:w-110 h-9"
                                />
                            </div>

                            <div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="E-MAIL"
                                    required
                                    className="border border-(--green) m-2 p-2 w-80 xl:w-110 h-9"
                                />
                            </div>

                            <div>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="MENSAJE"
                                    required
                                    className="resize-none border text-base border-(--green) m-2 p-2 w-80 xl:w-110 h-30 xl:h-40">
                                </textarea>
                            </div>

                            <div className="flex justify-center items-center">
                                <button className="border border-(--green) text-(--green) hover:text-white hover:bg-(--green) cursor-pointer m-2 w-80 xl:w-110 h-8 mb-10" type="submit">Enviar</button>
                            </div>
                            <p className="mx-2 justify-center flex">{result}</p>
                        </form>
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