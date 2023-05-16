import React from "react";
import style from "../styles/Footer.module.css";
import { useState } from "react";
import {MdGpsFixed} from 'react-icons/md'


const Footer = () => {
  const [message, setMessage] = useState('')
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const data = new FormData(e.target)
    const response = await fetch(e.target.action, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json' 

      }
    })
    const result = await response.json(); 
    if (!response.ok) {
      setMessage(result.errors.map(error => error.message).join(', '))
      return false
      }
      alert('enviado correctamente')
  }

  return (
    <footer
      className={`${style.fondoFooter} bg-white overflow-hidden  `}
      id="contact"
    >
      <div className="py-8  px-4 mx-auto max-w-screen-md bottom-0 w-full ">
        <section className="bg-white dark:bg-divHero rounded w-full ">
          <div className="py-8  px-16 mx-auto max-w-screen-md ">
            <h2 className=" text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Escribinos
            </h2>
            <p className="py-1 lg:mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Llene el siguiente formulario con su consulta
            </p>
            <form className="space-y-2  " action="https://formspree.io/f/mayzkqvr" method="POST" 
            onSubmit={handleSubmit} >
              <div>
                <label
                  htmlFor="email" 
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 opacity-75 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="nombre@...."
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
                >
                  En que podemos ayudarte..
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="shadow-sm bg-gray-50 opacity-75 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Como podemos ayudarte"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-00"
                >
                  Tu mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="shadow-sm bg-gray-50 opacity-75 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Dejanos tu mensaje"
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 colorBoton px-5 text-sm font-medium text-center text-black rounded-lg  sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </section>
        {/* <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img
                src="/logo/logo.png"
                className="h-8 mr-3"
                alt="FlowBite Logo"
              />
            </a>
          </div>
        </div> */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 w-full" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-lg sm:text-center text-black font-bold">
            © 2023
            <a href="#" className="hover:underline font-bold">
              Fleitas™
            </a>
            . All Rights Reserved.
          </span>
          <span className="text-sm text-lg sm:text-center text-black flex items-center">
          <MdGpsFixed className="h-5 w-5 mr-2 text-gray-700" />
              <a href="https://goo.gl/maps/hc4V4aaqySF4X1dX9" target='_blank' className="hover:underline text-xs font-bold">
              Ameghino 2956, Piso:5 Dpto:D Saenz Peña
            </a>
          </span>

          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          
            <a
              href="#"
              className="text-black hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-900 dark:hover:text-white "
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
