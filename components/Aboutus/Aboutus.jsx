import Image from "next/image";
import aboutusimage from "@/assets/Images/aboutusimage.png";
import playbutton from "@/assets/Images/playbutton.png";

const Aboutus = () => {
  return (
    <div className="max-sm:w-[95%] max-sm:mx-auto md:mx-5 lg:mx-[5rem] max-sm:mt-[5rem] md:mt-[9rem] overflow-visible">
      <div className="grid grid-cols-2 items-center max-md:gap-6">
        <div className="max-md:col-span-2 col-span-1 pr-3">
          <h2 className="text-[50px] font-extralight">Upoznaj naš</h2>
          <div className="flex gap-4 items-center">
            <h2 className="font-bold uppercase text-[#052922] text-[50px] sm:text-[60px] leading-[50px]">
              Brend
            </h2>
            <Image src="/logo1.png" width={150} height={30} alt="Logo" />
          </div>
          <h3 className={`text-[#052922] font-bold text-[30px] mt-[1rem]`}>
            Dobrodošli u svet Tied Up elegancije i autentičnosti
          </h3>
          <p className="mt-3 font-light text-[22px]">
            <strong>Tied Up</strong> nije samo brend – mi stvaramo modne detalje
            koji definišu vaš stil. Sa strašću za estetikom i kvalitetom, svaki
            naš proizvod, bilo da je to kravata, leptir mašna, šal ili manžetne,
            ručno je izrađen kako bi istakao vašu ličnost i eleganciju.
          </p>
          <p className="mt-[0.2rem] font-light text-[22px]">
            Nudimo <strong>personalizaciju</strong> koja vam omogućava da budete
            jedinstveni u svakoj prilici. Od svakodnevnih trenutaka do posebnih
            događaja, naši detalji govore o vašem ukusu i stilu.
          </p>
          <p className="mt-[0.2rem] font-light text-[22px]">
            Verujemo da moda nije samo ono što nosite – to je način na koji se
            predstavljate svetu. <strong>Tied Up</strong> je tu da vam pomogne
            da uvek budete najbolja verzija sebe.
          </p>
        </div>
        <div className="max-md:col-span-2 col-span-1 ml-auto relative h-fit w-full">
          <Image
            src={aboutusimage}
            width={800}
            height={700}
            alt="about us"
            className="w-full"
          />
          <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
            <Image src={playbutton} width={160} height={160} alt="Tied up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
