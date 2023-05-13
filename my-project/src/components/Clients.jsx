import Image from "next/image";
import img1 from "../assets/constructora/clientes/1.png"
import img2 from "../assets/constructora/clientes/2.png"
import img3 from "../assets/constructora/clientes/3.png"
import img4 from "../assets/constructora/clientes/4.png"
import img5 from "../assets/constructora/clientes/5.png"
import img6 from "../assets/constructora/clientes/6.png"
import img7 from "../assets/constructora/clientes/7.png"
import img8 from "../assets/constructora/clientes/8.png"
import img9 from "../assets/constructora/clientes/9.png"
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {MdOutgoingMail} from 'react-icons/md'
import {BsFillTelephoneForwardFill} from 'react-icons/bs'
import {MdGpsFixed} from 'react-icons/md'


const items = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
  { id: 6, image: img6 },
  { id: 7, image: img7 },
  { id: 8, image: img8 },
  { id: 9, image: img9 }
];



export default function Clients() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      }
    
  return (
    <div className="bg-gray-200 p-4 max-w-500 mx-auto">
      <h1 className="text-2xl text-black font-bold mb-4 flex justify-center">Nuestros clientes!</h1>
      <Carousel
      responsive={responsive}
      showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        autoPlay
        centerMode
        centerSlidePercentage={60}
        infiniteLoop
        className="max-w-md mx-auto"
        style={{ height: "200px" }}
      >
        {items.map((item) => (
          <div key={item.id} className="flex justify-center items-center w-52 h-52">
            <Image src={item.image} alt="client" width={180} height={100} objectFit="contain"/>
          </div>
        ))}
      </Carousel>
      
      <div className="flex flex-col items-center justify-center mt-8">
  <div className="flex items-center">
    <MdOutgoingMail className="h-6 w-6 mr-2 text-gray-700" />
    <p className="text-gray-700 font-semibold">infohfconstrucciones@gmail.com</p>
  </div>
  <div className="flex items-center mt-4">
    <BsFillTelephoneForwardFill className="h-6 w-6 mr-2 text-gray-700" />
    <p className="text-gray-700 font-semibold">(+54) 911-2186-8988</p>
  </div>
  <div className="flex items-center mt-4">
    <MdGpsFixed className="h-6 w-6 mr-2 text-gray-700" />
    <p className="text-gray-700 font-semibold">Ameghino 2956, Piso:5 Dpto:D Saenz Peña</p>
  </div>
</div>

    </div>
  );
}
