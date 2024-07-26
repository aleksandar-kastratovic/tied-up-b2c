
import Link from "next/link";
import Image from "next/image";
import store1 from "@/assets/Images/store1.jpg"
import store2 from "@/assets/Images/store2.jpg"
import store3 from "@/assets/Images/store3.jpg"
import store4 from "@/assets/Images/store4.jpg"
import store5 from "@/assets/Images/store5.jpg"
import store6 from "@/assets/Images/store6.jpg"
import store7 from "@/assets/Images/store7.jpg"
import store8 from "@/assets/Images/store8.jpg"

const Gdekupiti = () => {
  return (
    <>
      <div className="flex flex-col mt-[0rem] mt16 items-center  relative">
        <div className="md:w-[80%] mx-auto p-2">
        <h3 className="font-semibold text-[22px]"> Gde kupiti Tied up proizvode?</h3>
        <div className="grid grid-cols-4 gap-6 mt-[4rem]">
            
            <div className="col-span-1">
              <Image src={store1} alt="" width={400} height={400} className="rounded-[20px]"/>
              <h5 className="text-center mt-5 text-[20px]">Katapult Handmade</h5>
              <p className="text-center font-light">Knez Mihailova 36, Beograd</p>
            </div>
            <div className="col-span-1">
              <Image src={store2} alt="" width={400} height={400} className="rounded-[20px]"/>
              <h5 className="text-center mt-5 text-[20px]">TRICIKL Art Craft Gift Shop</h5>
              <p className="text-center font-light">Francuska 5, Beograd</p>
            </div>
            <div className="col-span-1">
              <Image src={store3} alt="" width={400} height={400} className="rounded-[20px]"/>
              <h5 className="text-center mt-5 text-[20px]">Caruso</h5>
              <p className="text-center font-light">27. marta 19, TC Radnički, Kragujevac</p>
            </div>
            <div className="col-span-1">
              <Image src={store4} alt="" width={400} height={400} className="rounded-[20px]"/>
              <h5 className="text-center mt-5 text-[20px]">Džentlmen</h5>
              <p className="text-center font-light">Vuka Karadžić 1b, 
Gornji Milanovac</p>
            </div>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-[4rem]">
            
            <div className="col-span-1">
              <Image src={store5} alt="" width={400} height={400} className="rounded-[20px]"/>
              <h5 className="text-center mt-5 text-[20px]">Bleu Homme</h5>
              <p className="text-center font-light">Vice Vukova 6, ARENA Center, Zagreb</p>
            </div>
            <div className="col-span-1">
              <Image src={store6} alt="" width={400} height={400} className="rounded-[20px]"/>
              <h5 className="text-center mt-5 text-[20px]">Bleu Homme</h5>
              <p className="text-center font-light">Akcije Maslenica 1, SUPERNOVA, Zadar</p>
            </div>
            <div className="col-span-1">
              <Image src={store7} alt="" width={400} height={400} className="rounded-[20px]"/>
              <h5 className="text-center mt-5 text-[20px]">Bleu Homme</h5>
              <p className="text-center font-light">Vukovarska 16, MERCANTE Center, Dubrovnik</p>
            </div>
            <div className="col-span-1">
              <Image src={store8} alt="" width={400} height={400} className="rounded-[20px]"/>
              <h5 className="text-center mt-5 text-[20px]">Bleu Homme</h5>
              <p className="text-center font-light">Josipa Jovića 93, Mall of Split, Split</p>
            </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Gdekupiti;
export const metadata = {
  title: "Gde kupiti | TiedUp",
  description: "Gde kupiti",
};
