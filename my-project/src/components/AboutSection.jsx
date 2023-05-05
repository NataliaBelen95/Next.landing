import magicImage from "@/assets/constructora/magic.jpg"
import Image from "next/image"

export default function AboutSection() {
    return (
        <section className="max-w-[1320px] md:py-[80] py-5 flex mx-auto" id="about">
            <div className="basis-[45%]">
                <Image src={magicImage} alt="constructora" className="w-full rounded-md shadow-md"/>
            </div>
            <div className="basis-[55%] px-5">
                <h2 className="text-4xl pb-5 ">Sobre Nosotros</h2>
                <p className="py-3"> 
                lorem asdadfwgwrgwrgwergewrgwrgwegweg
                wrgwegwegwegwergwergoiweyufiweryufgiwyegfwufgwregw
                wergwefgouweifuhwefljhwefiywgerouwhfnopiwefg
                wegoiwhefolpkwejncpowejkfówhjfgowhgefopihwepfijwopfiugwsfs
                ipsum 
                dolor
                sit    
                amet
                </p>
                <p className="py-3"> 
                lorem asdadfwgwrgwrgwergewrgwrgwegweg
                wrgwegwegwegwergwergoiweyufiweryufgiwyegfwufgwregw
                wergwefgouweifuhwefljhwefiywgerouwhfnopiwefg
                wegoiwhefolpkwejncpowejkfówhjfgowhgefopihwepfijwopfiugwsfs
                ipsum 
                dolor
                sit    
                amet
                </p>
                <p className="py-3"> 
                lorem asdadfwgwrgwrgwergewrgwrgwegweg
                wrgwegwegwegwergwergoiweyufiweryufgiwyegfwufgwregw
                wergwefgouweifuhwefljhwefiywgerouwhfnopiwefg
                wegoiwhefolpkwejncpowejkfówhjfgowhgefopihwepfijwopfiugwsfs
                ipsum 
                dolor
                sit    
                amet
                </p>
            </div>  
        </section>
    
            )
} 