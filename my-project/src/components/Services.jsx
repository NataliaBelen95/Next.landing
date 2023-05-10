import image1 from '../assets/constructora/servicios/1.png'
import image2 from '../assets/constructora/servicios/2.png'
import image3 from '../assets/constructora/servicios/3.png'
import image4 from '../assets/constructora/servicios/4.png'
import Image from 'next/image'

export default function Services(){
    const services = [ 
        { 
            titulo: "Obras Civiles",
            description: "viviendas, edificios publicos y privados",
            image: image1
        },{
            titulo: "Servicios Industriales",
            description: "cloacas, pluviales, instalaciones de gas, instalaciones electricas y tendido de cañerias",
            image: image2
        },{
            titulo: "Obras Viales",
            description: "movimiento de suelo, pavimentos de hormigon",
            image: image3
        },{
            titulo: "Pisos, Piletas industriales y Demoliciones",
            description: "superficies de concreto para soportar cargas",
            image: image4
        }
    ]


    
    return (
        <section class="max-w-7xl mx-auto py-5 flex flex-col justify-center items-center">
  <h1 class="text-center text-3xl font-bold mb-8">Presupuesto, construcción y mantenimiento de:</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-12">
    {services.map((service, index) => (
      <div class="bg-gray-100 shadow-xl rounded-2xl p-2 m-2 
                   md:max-w-[350px] md:h-130 
                   sm:w-150 sm:h-300 
                   lg:w-150 lg:h-250 
                   flex flex-col justify-center items-center 
                   sm:my-4">
        <div class="w-full flex justify-center">
          <Image width={130} height={130} src={service.image} alt="service" />
        </div>
        <div class="mt-4 text-center">
          <h3 class="font-extrabold mb-2">{service.titulo}</h3>
          <p class="text-sm">{service.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>
      

    )
}
