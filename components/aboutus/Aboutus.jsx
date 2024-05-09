import Image from "next/image";
import aboutusimage from "@/assets/Images/aboutusimage.png"
import playbutton from "@/assets/Images/playbutton.png"

const Aboutus = () => {
return(
     <div

    className="max-sm:w-[95%] max-sm:mx-auto md:mx-5 lg:mx-[5rem] max-sm:mt-[5rem] md:mt-[9rem] overflow-visible">
        <div className="grid grid-cols-2">
            <div className="col-span-1">
                <h2 className="text-[44px] font-thin">Upoznaj naš</h2>
                <div className="flex gap-4 items-center">
                    <h2 className="font-bold uppercase text-[#de6a26] text-[60px] leading-[50px]">Brend</h2>
                    <Image src="/logo.png" width={70} height={30} alt="Logo"/>
                </div>
                <p className="mt-[3rem] font-thin text-[1.3rem]">Brend Tied up je nastao 2012. godine sa idejom da ponudi unisex kravate i leptir mašne namenjene svim populacijama - od najmlađih do najstarijih kao izbor, kako za svakodnevne odevne kombinacije, tako i za posebne prilike. </p>
                <p className="mt-[0.2rem] font-light text-[1.3rem]">U našoj ponudi postoji preko 1000 različitih dezena i svaki dezen nosi posebnu težinu. Pored leptir mašni i kravata, u našoj ponudi se nalaze Ascot kravate, džepne maramice za sakoe, rever cvetići i sakoi. Svaki proizvod poseduje svoje pakovanje koje mu daje posebnu notu. Iz proizvodnje je do sada izašlo preko 50,000 proizvoda i brojimo preko 30,000 zadovoljnih kupaca iz zemalja širom sveta.</p>
            </div>
            <div className="col-span-1 ml-auto relative">
                <Image src={aboutusimage} width={800} height={700} alt="about us" className="w-full"/>
                <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
                    <Image src={playbutton} width={160} height={160} alt="Tied up"/>
                </div>
            </div>
        </div>
        
    </div>
)
}

export default Aboutus;