import Link from "next/link";
import Image from "next/image";
import aboutusimage from "@/assets/Images/aboutusimage.png"

const Onama = () => {
  return (
    <>
      <div className="flex flex-col mt-[0rem] mt16 items-center  relative p-2 md:w-[80%] mx-auto">

        <div className="grid grid-cols-2">
          <div className="max-md:col-span-2 col-span-1 md:px-[5rem] max-md:px-2">
            <h3 className="italic text-[#c0c0c0] font-light text-[22px]">O nama</h3>
            <h1 className="mt-1 font-black text-[70px]">TIED UP</h1>
            <p className="mb-4 text-justify">Brend Tied up je osnovan 2012. godine sa idejom da ponudi ručno rađene kravate i leptir mašne za sve starosne grupe, od najmlađih do najstarijih, kao izbor za svakodnevnu odevnu kombinaciju i za posebne prilike.</p>
            <p className="mb-4 text-justify">U našoj ponudi postoji preko 1000 dezena dizajna i svaki od njih je pažljivo odabran. Pored leptir leptir i kravata, u našoj ponudi se nalaze askot kravate, kockasti džepovi, dugmad za manžete, revere, čarape i kopče za kravate.</p>
            <p className="mb-4 text-justify">Svaki proizvod ima svoje pakovanje koje mu daje poseban štih. Do sada je proizvedeno preko 50 000 proizvoda i imamo više od 30 000 zadovoljnih kupaca iz celog sveta.</p>
          </div>
          <div className="max-md:col-span-2 col-span-1">
            <Image src={aboutusimage} alt="" width={740} height={540} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Onama;

export const metadata = {
  title: "O nama | TiedUp",
  description: "O nama",
};
