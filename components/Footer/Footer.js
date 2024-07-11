"use client";
import Image from "next/image";
import Link from "next/link";
import Image1 from "../../assets/Icons/master.png";
import Image2 from "../../assets/Icons/visa.webp";
import Image3 from "../../assets/Icons/bancaIntesa.webp";
import Image4 from "../../assets/Icons/img1.webp";
import Image5 from "../../assets/Icons/img.webp";
import Image6 from "../../assets/Icons/img3.webp";
import Image7 from "../../assets/Icons/img4.webp";
import Image8 from "../../assets/Icons/american.webp";
import delivery from "@/assets/Icons/delivery-man.png";
import date from "@/assets/Icons/date.png";
import box from "@/assets/Icons/box.png";
import Instagram from "../../assets/Icons/instagram.png";
import Youtube from "../../assets/Icons/youtube.png";
import Facebook from "../../assets/Icons/facebook.png";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const [open, setOpen] = useState({
    id: null,
  });

  const pathname = usePathname();

  return (
    <div className="max-md:mt-[3rem] mt-[7.75rem] bg-black">
      <div className="md:mx-[5rem] max-xl:flex-col py-[1.4rem] flex items-center justify-between border-l-0 border-t-0 border-r-0 border-b-4 border-b-white">

        <div className="flex max-md:flex-row max-xl:flex-col max-xl:gap-[8px] max-md:mt-5 max-xl:mt-10 md:items-center gap-[3rem] max-md:w-full max-md:justify-between">
          <div className="flex items-center gap-5 max-md:flex-col">
            <div>
            <Image
              src={delivery}
              width={45}
              height={45}
              alt="Tied up"
              className="invert"
            />
            </div>
            <div className="flex flex-col font-thin">
              <p className="text-white max-md:text-[14px] text-[18px]">
                Besplatna dostava za
              </p>
              <p className="text-white  max-md:text-[14px]  text-[18px] -mt-2">
                Iznos preko <span className="text-[#de6a26]  max-md:text-[14px] ">6.000 RSD</span>
              </p>
            </div>{" "}
          </div>
          <div className="flex items-center gap-5 max-md:flex-col">
            <div>
            <Image
              src={box}
              width={45}
              height={45}
              alt="Tied up"
              className="invert"
            />
            </div>
            <div className="flex flex-col font-thin">
              <h1 className="text-white  max-md:text-[14px]  text-[18px]">
                Povrat robe
              </h1>
              <p className="text-white  max-md:text-[14px]  text-[18px] -mt-2">
              U roku od <span className="text-[#de6a26]">14</span> dana
              </p>
            </div>{" "}
          </div>
          <div className="flex items-center gap-5 max-md:flex-col">
            <div>
            <Image
              src={date}
              width={45}
              height={45}
              alt="Tied up"
              className="invert"
            />
            </div>
            <div className="flex flex-col font-thin">
              <p className="text-white  max-md:text-[14px]  text-[18px]">
              Rok isporuke do 
              </p>
              <p className="text-white  max-md:text-[14px]  text-[18px] -mt-2">
              <span className="text-[#de6a26]">2</span> radna dana
                
              </p>
            </div>
          </div>
        </div>
        {/* <div className="flex max-xl:mt-10 items-center gap-[1.938rem] text-white text-end max-md:text-center">
          <div className="ml-auto">
            <p className="font-thin max-md:text-[16px] text-[18px]">Podelite svoje jedinstveno online iskustvo sa našim timom</p>
            <p className="font-thin max-md:text-[16px] text-[18px] -mt-1">i pomozite nam da postanemo bolji. <Link href="/anketa" className="underline max-md:text-[16px] text-[18px] font-semibold max-md:block">Ostavite Vaše mišljenje</Link>.</p>
          </div>
        </div> */}
      </div>
      <div className="flex justify-center -mt-[2.3rem]">
        <Link href={`/`}>
          <Image
            src={"/logo-footer.png"}
            width={160}
            height={45}
            alt="Tied up"
          />
        </Link>
      </div>
      <div className="grid grid-cols-8 md:mx-[5rem] border-b-2 border-b-[#de6a26] pb-[1.4rem]">
        <div className="max-md:hidden col-span-2 text-white flex flex-col md:items-center">
          <div>
          <h3 className="text-[1rem] font-semibold">O nama</h3>
          <div className="flex flex-col items-start text-[17px] font-extralight mt-4">
            <p>
            <Link
              href={`/onama`}
              className={`cursor-pointer hover:text-[#de6a26] mr-1 ${pathname === "/onama" && "text-[#de6a26]"
                }`}
            >
              Više o kompaniji
            </Link>
            {", "}
            <Link
              href={`/stranica-u-izradi`}
              className={`cursor-pointer hover:text-[#de6a26] ml-1 ${pathname === "/joinlife" && "text-[#de6a26]"
                }`}
            >
              Join Life
            </Link>
            </p>
            <p>
            <Link
              href={`/stranica-u-izradi`}
              className={`cursor-pointer hover:text-[#de6a26] mr-1 ${pathname === "/posao" && "text-[#de6a26]"
                }`}
            >
              Ponude za posao
            </Link>
            {", "}
            <Link
              href={`/stranica-u-izradi`}
              className={`cursor-pointer hover:text-[#de6a26] ml-1 ${pathname === "/stampa" && "text-[#de6a26]"
                }`}
            >
             Štampa
            </Link>
            </p>
            <Link
              href={`/gdekupiti`}
              className={`cursor-pointer hover:text-[#de6a26] ${pathname === "/gdekupiti" && "text-[#de6a26]"
                }`}
            >
            Prodajna mesta
            </Link>
          </div>
          </div>
        </div>
        <div className="max-md:col-span-8 col-span-4 flex flex-col justify-center items-center md:pt-[1.6rem]">
          <div className="flex max-md:mt-4 max-xl:mt-10 items-center gap-[1.938rem]">
            <a href="https://www.instagram.com/lifeatcroonus/" target={"_blank"}>
              <Image
                src={Instagram}
                width={22}
                height={22}
                alt="Instagram"
                className="hover:scale-110 transition-all duration-300 invert"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCTCxl3sqxPqafMhOsKVVEMQ/videos?view_as=subscriber"
              target={"_blank"}
            >
              {" "}
              <Image
                src={Youtube}
                width={24}
                height={24}
                alt="Instagram"
                className="hover:scale-110 transition-all duration-300 invert"
              />
            </a>
            <a href="https://www.facebook.com/Croonus/" target={"_blank"}>
              <Image
                src={Facebook}
                width={22}
                height={22}
                alt="Instagram"
                className="hover:scale-110 transition-all duration-300 invert"
              />
            </a>
          </div>
          <div className="flex mt-5 flex-col max-md:mt-10  gap-[1.25rem] items-center max-xl:w-full xl:max-w-[490px] 2xl:max-w-[500px] 3xl:max-w-[680px]">
            <div className="flex items-center gap-1 ">
              <div>
                <Image
                  src={Image1}
                  width={50}
                  height={30}
                  alt="Master Card"
                  className="object-scale-down"
                />
              </div>
              <div>
                <Image
                  src={Image2}
                  width={50}
                  height={30}
                  alt="Master Card"
                  className="object-scale-down"
                />
              </div>
              <div>
                <Image
                  src={Image3}
                  width={200}
                  height={70}
                  alt="Master Card"
                  className="object-scale-down"
                />
              </div>
              <div>
                <Image
                  src={Image4}
                  width={50}
                  height={30}
                  alt="Master Card"
                  className="object-scale-down"
                />
              </div>
              <div>
                <Image
                  src={Image5}
                  width={50}
                  height={30}
                  alt="Master Card"
                  className="object-scale-down"
                />
              </div>
              <div>
                <Image
                  src={Image6}
                  width={50}
                  height={30}
                  alt="Master Card"
                  className="object-scale-down"
                />
              </div>
              <div>
                <Image
                  src={Image7}
                  width={50}
                  height={30}
                  alt="Master Card"
                  className="object-scale-down"
                />
              </div>
              <div>
                <Image
                  src={Image8}
                  width={50}
                  height={30}
                  alt="Master Card"
                  className="object-scale-down"
                />
              </div>
            </div>
            <p className="text-[12px] font-thin text-center text-white ">
              Cene na sajtu su iskazane u dinarima sa uračunatim porezom, a
              plaćanje se vrši isključivo u dinarima. Isporuka se vrši SAMO na
              teritoriji Republike Srbije.

              Nastojimo da budemo što precizniji u opisu proizvoda, prikazu slika
              i samih cena, ali ne možemo garantovati da su sve informacije
              kompletne i bez grešaka. Svi artikli prikazani na sajtu su deo naše
              ponude i ne podrazumeva da su dostupni u svakom trenutku.
            </p>
          </div>
        </div>
        <div className="max-md:hidden col-span-2 text-white flex flex-col">
          <div>
          <h3 className="text-[1rem] font-semibold">Korisnička podrška</h3>
          <div className="flex flex-col items-start text-[17px] font-extralight mt-4">
            <p>
            <Link
              href={`/kako-kupiti`}
              className={`cursor-pointer hover:text-[#de6a26] mr-1 ${pathname === "/kako-kupiti" && "text-[#de6a26]"
                }`}
            >
              Kako kupiti
            </Link>
            {", "}
            <Link
              href={`/reklamacije`}
              className={`cursor-pointer hover:text-[#de6a26] ml-1 ${pathname === "/reklamacije" && "text-[#de6a26]"
                }`}
            >
              Reklamacije
            </Link>
            {", "}
            <Link
              href={`/povrat-sredstava`}
              className={`cursor-pointer hover:text-[#de6a26] ml-1 ${pathname === "/povrat-sredstava" && "text-[#de6a26]"
                }`}
            >
              Povrat sredstava
            </Link>
            </p>
            <p>
            <Link
              href={`/zamena-za-isti-artikal`}
              className={`cursor-pointer hover:text-[#de6a26] mr-1 ${pathname === "/zamena-za-isti-artikal" && "text-[#de6a26]"
                }`}
            >
              Zamena za isti artikal
            </Link>
            {", "}
            <Link
              href={`/zamena-za-drugi-artikal`}
              className={`cursor-pointer hover:text-[#de6a26] ml-1 ${pathname === "/zamena-za-drugi-artikal" && "text-[#de6a26]"
                }`}
            >
             Zamena za drugi artikal
            </Link>
            </p>
            <Link
              href={`/pravo-na-odustajanje`}
              className={`cursor-pointer hover:text-[#de6a26] ${pathname === "/pravo-na-odustajanje" && "text-[#de6a26]"
                }`}
            >
            Pravo na odustajanje
            </Link>
          </div>
          </div>
        </div>
      </div>
      <div className="md:hidden mx-[5rem] max-md:w-[95%] max-md:mx-auto py-5  mt-[1.75rem] max-xl:flex-col flex items-center justify-between text-[#191919]">
    
        <div className="flex md:hidden items-center max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-5 max-md:w-full md:gap-[100px] 2xl:gap-[150px] 3xl:gap-[220px]">
          <div
            onClick={() => setOpen({ id: open?.id === 1 ? null : 1 })}
            className="flex flex-col self-start gap-[40px] max-md:self-center"
          >
            <p className="text-[1.063rem] font-bold text-white">Korisnička podrška</p>
            {open?.id === 1 && (
              <div className="flex flex-col items-center justify-center gap-[0.4rem] font-thin text-[#c9c9c9]">
                <Link
                  className={`cursor-pointer hover:text-[#de6a26] ${pathname === "/kako-kupiti" && "text-[#de6a26]"
                    }`}
                  href="/kako-kupiti"
                >
                  Kako kupiti
                </Link>
                <Link
                  className={`cursor-pointer hover:text-[#de6a26] ${pathname === "/reklamacije" && "text-[#de6a26]"
                    }`}
                  href="/reklamacije"
                >
                  Reklamacije
                </Link>
                <Link
                  className={`cursor-pointer hover:text-[#de6a26] ${pathname === "/povrat-sredstava" && "text-[#de6a26]"
                    }`}
                  href="/povrat-sredstava"
                >
                  Povrat sredstava
                </Link>
                <Link
                  className={`cursor-pointer hover:text-[#de6a26] ${pathname === "/zamena-za-isti-artikal" && "text-[#de6a26]"
                    }`}
                  href="/zamena-za-isti-artikal"
                >
                  Zamena za isti artikal
                </Link>
                <Link
                  className={`cursor-pointer hover:text-[#de6a26] ${pathname === "/zamena-za-drugi-artikal" && "text-[#de6a26]"
                    }`}
                  href="/zamena-za-drugi-artikal"
                >
                  Zamena za drugi artikal
                </Link>
                <Link
                  className={`cursor-pointer hover:text-[#de6a26] ${pathname === "/pravo-na-odustajanje" && "text-[#de6a26]"
                    }`}
                  href="/pravo-na-odustajanje"
                >
                  Pravo na odustajanje
                </Link>
                <Link
                  className={`cursor-pointer hover:text-[#de6a26] ${pathname === "/uslovi-koriscenja" && "text-[#de6a26]"
                    }`}
                  href="/uslovi-koriscenja"
                >
                  Uslovi korišćenja
                </Link>
                <Link
                  className={`cursor-pointer hover:text-[#de6a26] ${pathname === "/zastita-privatnosti" && "text-[#de6a26]"
                    }`}
                  href="/zastita-privatnosti"
                >
                  Zaštita privatnosti
                </Link>
                <Link
                  className={`cursor-pointer hover:text-[#de6a26] ${pathname === "/isporuka" && "text-[#de6a26]"
                    }`}
                  href="/isporuka"
                >
                Isporuka
                </Link>
                <Link
                  className={`cursor-pointer hover:text-[#de6a26] ${pathname === "/najcesca-pitanja" && "text-[#de6a26]"
                    }`}
                  href="/najcesca-pitanja"
                >
                  Najčešća pitanja
                </Link>
                <Link
                  className={`cursor-pointer hover:text-[#de6a26] ${pathname === "/kolacici" && "text-[#de6a26]"
                    }`}
                  href="/kolacici"
                >
                  Politika o Kolačićima
                </Link>
              </div>
            )}
          </div>
          <div
            onClick={() => setOpen({ id: open?.id === 2 ? null : 2 })}
            className="flex flex-col self-start gap-[40px] max-md:self-center text-center"
          >
            <p className="text-[1.063rem] font-bold text-white">O nama</p>
            {open?.id === 2 && (
              <div className="flex flex-col items-center justify-center gap-[0.4rem]  font-thin text-[#c9c9c9]">
                <Link
                  href={`/onama`}
                  className={`cursor-pointer hover:text-[#de6a26] ${pathname === "/onama" && "text-[#de6a26]"
                    }`}
                >
                  Više o kompaniji
                </Link>

                <Link
                  href={`/stranica-u-izradi`}
                  className={`cursor-pointer hover:text-[#de6a26] ${pathname === "/join-life" && "text-[#de6a26]"
                    }`}
                >
                  Join life
                </Link>

                <Link
                  href={`/stranica-u-izradi`}
                  className={`cursor-pointer hover:text-[#de6a26] ${pathname === "/posao" && "text-[#de6a26]"
                    }`}
                >
                  Ponude za posao
                </Link>
                <Link
                  href={`/stranica-u-izradi`}
                  className={`cursor-pointer hover:text-[#de6a26] ${pathname === "/stampa" && "text-[#de6a26]"
                    }`}
                >
                  Štampa
                </Link>
                <Link
                  href={`/gdekupiti`}
                  className={`cursor-pointer hover:text-[#de6a26] ${pathname === "/gdekupiti" && "text-[#de6a26]"
                    }`}
                >
                  Prodajna mesta
                </Link>
              </div>
            )}
          </div>
         
        </div>


      </div>
      <div className="mx-[5rem] max-md:flex-col max-md:gap-10 max-md:w-[95%] max-md:mx-auto py-[1rem] flex items-center justify-between text-white">
        <div className=" max-md:hidden flex max-md:flex-wrap items-center gap-3 4xl:gap-6">
          <Link
            href="/uslovi-koriscenja"
            className={`text-[17px]  font-extralight hover:text-[#de6a26] cursor-pointer ${pathname === "/uslovi-koriscenja" && "text-[#de6a26]"
              }`}
          >
            Uslovi korišćenja 
          </Link>
          <span>•</span>
          <Link
            href="/zastita-privatnosti"
            className={`text-[17px]  font-extralight hover:text-[#de6a26] cursor-pointer ${pathname === "/zastita-privatnosti" && "text-[#de6a26]"
              }`}
          >
            Zaštita privatnosti
          </Link>
          <span>•</span>
          <Link
            href="/isporuka"
            className={`text-[17px]  font-extralight hover:text-[#de6a26] cursor-pointer ${pathname === "/isporuka" && "text-[#de6a26]"
              }`}
          >
            Isporuka
          </Link>
          <span>•</span>
          <Link
            href="/najcesca-pitanja"
            className={`text-[17px]  font-extralight hover:text-[#de6a26] cursor-pointer ${pathname === "/najcesca-pitanja" && "text-[#de6a26]"
              }`}
          >
            Najčešća pitanja
          </Link>
          <span>•</span>
          <Link
            href="/kolacici"
            className={`text-[17px]  font-extralight hover:text-[#de6a26] cursor-pointer ${pathname === "/kolacici" && "text-[#de6a26]"
              }`}
          >
            Politika o 'Kolačićima'
          </Link>
        </div>
        <p className="text-[17px]  font-extralight max-md:text-center">
          &copy; {new Date().getFullYear()} Tied Up | Sva prava zadržana.
          Powered by{" "}
          <a
            href="https://www.croonus.com"
            target={"_blank"}
            className="hover:text-[#de6a26] cursor-pointer bganimatethumb relative"
          >
            Croonus Technologies
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
