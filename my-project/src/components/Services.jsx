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
            titulo: "Obras de Infraestructura",
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
        <section className='max-w-[1320px] md:py-[80] py-5 flex
         mx-auto bg-slate-300 justify-center flex-col'>
        <div className='flex flex-col p-6'>
            <h1 className='justify-center'>Presupuesto, construccion y mantenimiento de:</h1>
            <div className='flex flex-col justify-self-center'>
                {
                    services.map((service, index) => {
                        return (
                            <div key={index} className='flex bg-slate-100 shadow-xl 
                            my-6 rounded-2xl max-w-[350px] max-h-[130px] p-1'>
                            <Image width={130} height={130} src={service.image} alt="service" />
                            <div>
                                <h3 className='font-extrabold'>{service.titulo}</h3>
                                <p>{service.description}</p>
                            </div>
                            </div>
                            )
                            })
                }
            </div>
            </div>
        </section>
    )
}