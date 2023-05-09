import magicImage from "../assets/constructora/magic.jpg";
import Image from "next/image";
import style from "../styles/AboutSection.module.css";

export default function AboutSection() {
  return (
    <section class="bg-white ">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class=" text-black sm:text-lg ">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Sobre Nosotros
          </h2>
          <p class="mb-4">
            {" "}
            Nos especializamos en la construcción, mantenimiento y presupuesto
            de obras civiles, incluyendo viviendas y edificios públicos y
            privados.
          </p>
          <p>
            En Fleitas, nos comprometemos a trabajar en estrecha colaboración
            con nuestros clientes para entender sus necesidades y ofrecer
            soluciones personalizadas y eficientes para cada proyecto.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
          <img
            class="w-full rounded-lg"
            src="/obra1/exterior1.jpg"
            alt="office content 1"
          />
          <img
            class="mt-4 w-full lg:mt-10 rounded-lg"
            src="/obra1/exterior2.jpg"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
