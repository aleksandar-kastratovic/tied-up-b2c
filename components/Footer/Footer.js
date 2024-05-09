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
      <div className="mx-[5rem] max-xl:flex-col py-[1.4rem] flex items-center justify-between border-l-0 border-t-0 border-r-0 border-b-4 border-b-white">

        <div className="flex max-xl:flex-col max-xl:gap-[2rem] max-xl:mt-10 items-center gap-[3rem]">
          <div className="flex items-center gap-5">
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
              <h1 className="text-white text-[14px]">
                Besplatna dostava za
              </h1>
              <h1 className="text-white text-[14px] -mt-1">
                Iznos preko <span className="text-[#de6a26]">6.000 RSD</span>
              </h1>
            </div>{" "}
          </div>
          <div className="flex items-center gap-5">
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
              <h1 className="text-white text-[14px]">
                Rok isporuke do
              </h1>
              <h1 className="text-white text-[14px] -mt-1">
                <span className="text-[#de6a26]">2</span> radna dana
              </h1>
            </div>{" "}
          </div>
          <div className="flex items-center gap-5">
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
              <h1 className="text-white text-[14px]">
                Povrat robe
              </h1>
              <h1 className="text-white text-[14px] -mt-1">
                U roku od <span className="text-[#de6a26]">14</span> dana
              </h1>
            </div>
          </div>
        </div>
        <div className="flex max-xl:mt-10 items-center gap-[1.938rem] text-white text-end">
          <div className="ml-auto md:w-[60%]">
            <p className="font-thin text-[0.9rem]">Podelite svoje jedinstveno online iskustvo sa našim timom i pomozite nam da postanemo bolji. <Link href="" className="underline font-bold">Ostavite Vaše mišljenje</Link>.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:-mt-[2.3rem]">
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
        <div className="col-span-2 text-white flex flex-col md:items-center">
          <div>
          <h3 className="text-[1rem] font-semibold">O nama</h3>
          <div className="flex flex-col items-start gap-[0.1rem] text-[0.9rem] font-thin mt-3">
            <p>
            <Link
              href={`/stranica-u-izradi`}
              className={`cursor-pointer hover:text-[#e10000] mr-1 ${pathname === "/stranica-u-izradi" && "text-[#e10000]"
                }`}
            >
              Više o kompaniji
            </Link>
            {", "}
            <Link
              href={`/stranica-u-izradi`}
              className={`cursor-pointer hover:text-[#e10000] ml-1 ${pathname === "/stranica-u-izradi" && "text-[#e10000]"
                }`}
            >
              Join Life
            </Link>
            </p>
            <p>
            <Link
              href={`/stranica-u-izradi`}
              className={`cursor-pointer hover:text-[#e10000] mr-1 ${pathname === "/stranica-u-izradi" && "text-[#e10000]"
                }`}
            >
              Ponude za posao
            </Link>
            {", "}
            <Link
              href={`/`}
              className={`cursor-pointer hover:text-[#e10000] ml-1 ${pathname === "/maloprodaje" && "text-[#e10000]"
                }`}
            >
             Štampa
            </Link>
            </p>
            <Link
              href={`/`}
              className={`cursor-pointer hover:text-[#e10000] ${pathname === "/maloprodaje" && "text-[#e10000]"
                }`}
            >
            Prodajna mesta
            </Link>
          </div>
          </div>
        </div>
        <div className="col-span-4 flex flex-col justify-center items-center pt-[1.6rem]">
          <div className="flex max-xl:mt-10 items-center gap-[1.938rem]">
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
          <div className="flex mt-5 flex-col max-md:mt-10  gap-[1.25rem] max-xl:w-full xl:max-w-[490px] 2xl:max-w-[500px] 3xl:max-w-[640px]">
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
            <p className="text-[0.6rem] font-thin text-center text-white ">
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
        <div className="col-span-2 text-white flex flex-col">
          <div>
          <h3 className="text-[1rem] font-semibold">Korisnička podrška</h3>
          <div className="flex flex-col items-start gap-[0.1rem] text-[0.9rem] font-thin mt-3">
            <p>
            <Link
              href={`/stranica-u-izradi`}
              className={`cursor-pointer hover:text-[#e10000] mr-1 ${pathname === "/stranica-u-izradi" && "text-[#e10000]"
                }`}
            >
              Kako kupiti
            </Link>
            {", "}
            <Link
              href={`/stranica-u-izradi`}
              className={`cursor-pointer hover:text-[#e10000] ml-1 ${pathname === "/stranica-u-izradi" && "text-[#e10000]"
                }`}
            >
              Reklamacije
            </Link>
            {", "}
            <Link
              href={`/stranica-u-izradi`}
              className={`cursor-pointer hover:text-[#e10000] ml-1 ${pathname === "/stranica-u-izradi" && "text-[#e10000]"
                }`}
            >
              Povrat sredstava
            </Link>
            </p>
            <p>
            <Link
              href={`/stranica-u-izradi`}
              className={`cursor-pointer hover:text-[#e10000] mr-1 ${pathname === "/stranica-u-izradi" && "text-[#e10000]"
                }`}
            >
              Zamena za isti artikal
            </Link>
            {", "}
            <Link
              href={`/`}
              className={`cursor-pointer hover:text-[#e10000] ml-1 ${pathname === "/maloprodaje" && "text-[#e10000]"
                }`}
            >
             Zamena za drugi artikal
            </Link>
            </p>
            <Link
              href={`/`}
              className={`cursor-pointer hover:text-[#e10000] ${pathname === "/maloprodaje" && "text-[#e10000]"
                }`}
            >
            Pravo na odustajanje
            </Link>
          </div>
          </div>
        </div>
      </div>
      <div className="md:hidden mx-[5rem] max-md:w-[95%] max-md:mx-auto py-[2.75rem] mt-[1.75rem] max-xl:flex-col flex items-center justify-between text-[#191919]">
    
        <div className="flex md:hidden items-center max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-5 max-md:w-full md:gap-[100px] 2xl:gap-[150px] 3xl:gap-[220px]">
          <div
            onClick={() => setOpen({ id: open?.id === 1 ? null : 1 })}
            className="flex flex-col self-start gap-[40px] max-md:self-center"
          >
            <h1 className="text-[1.063rem] font-bold">Korisnička podrška</h1>
            {open?.id === 1 && (
              <div className="flex flex-col items-center justify-center gap-[0.4rem] text-[0.813rem] font-normal">
                <Link
                  className={`cursor-pointer hover:text-[#e10000] ${pathname === "/kako-kupiti" && "text-[#e10000]"
                    }`}
                  href="/kako-kupiti"
                >
                  Kako kupiti
                </Link>
                <Link
                  className={`cursor-pointer hover:text-[#e10000] ${pathname === "/reklamacije" && "text-[#e10000]"
                    }`}
                  href="/reklamacije"
                >
                  Reklamacije
                </Link>
                <Link
                  className={`cursor-pointer hover:text-[#e10000] ${pathname === "/povracaj-sredstava" && "text-[#e10000]"
                    }`}
                  href="/povracaj-sredstava"
                >
                  Povraćaj sredstava
                </Link>
                <Link
                  className={`cursor-pointer hover:text-[#e10000] ${pathname === "/zamena-za-isti-artikal" && "text-[#e10000]"
                    }`}
                  href="/zamena-za-isti-artikal"
                >
                  Zamena za isti artikal
                </Link>
                <Link
                  className={`cursor-pointer hover:text-[#e10000] ${pathname === "/zamena-za-drugi-artikal" && "text-[#e10000]"
                    }`}
                  href="/zamena-za-drugi-artikal"
                >
                  Zamena za drugi artikal
                </Link>
                <Link
                  className={`cursor-pointer hover:text-[#e10000] ${pathname === "/pravo-na-odustajanje" && "text-[#e10000]"
                    }`}
                  href="/pravo-na-odustajanje"
                >
                  Pravo na odustajanje
                </Link>
              </div>
            )}
          </div>
          <div
            onClick={() => setOpen({ id: open?.id === 2 ? null : 2 })}
            className="flex flex-col self-start gap-[40px] max-md:self-center text-center"
          >
            <h1 className="text-[1.063rem] font-bold">O nama</h1>
            {open?.id === 2 && (
              <div className="flex flex-col items-center justify-center gap-[0.4rem] text-[0.813rem] font-normal">
                <Link
                  href={`/stranica-u-izradi`}
                  className={`cursor-pointer hover:text-[#e10000] ${pathname === "/stranica-u-izradi" && "text-[#e10000]"
                    }`}
                >
                  Više o kompaniji Croonus
                </Link>

                <Link
                  href={`/stranica-u-izradi`}
                  className={`cursor-pointer hover:text-[#e10000] ${pathname === "/stranica-u-izradi" && "text-[#e10000]"
                    }`}
                >
                  Ponude za posao
                </Link>

                <Link
                  href={`/maloprodaje`}
                  className={`cursor-pointer hover:text-[#e10000] ${pathname === "/maloprodaje" && "text-[#e10000]"
                    }`}
                >
                  Naše prodavnice
                </Link>
              </div>
            )}
          </div>
          <div
            onClick={() => setOpen({ id: open?.id === 3 ? null : 3 })}
            className="flex flex-col self-start gap-[40px] max-md:self-center"
          >
            <h1 className="text-[1.063rem] font-bold">Možda te interesuje</h1>
            {open?.id === 3 && (
              <div className="flex flex-col items-center justify-center gap-[0.4rem] text-[0.813rem] font-normal">
                <Link
                  href={`/kategorije/zene/odeca/topovi`}
                  className={`cursor-pointer hover:text-[#e10000] ${pathname === "/kategorije/zene/odeca/topovi" &&
                    "text-[#e10000]"
                    }`}
                >
                  Topovi
                </Link>
                <Link
                  href={`/kategorije/zene/odeca/haljine`}
                  className={`cursor-pointer hover:text-[#e10000] ${pathname === "/kategorije/zene/odeca/haljine" &&
                    "text-[#e10000]"
                    }`}
                >
                  Haljine
                </Link>
                <Link
                  href={`/kategorije/zene/obuca`}
                  className={`cursor-pointer hover:text-[#e10000] ${pathname === "/kategorije/zene/obuca" && "text-[#e10000]"
                    }`}
                >
                  Obuća
                </Link>

                {/*<span className={`cursor-pointer hover:text-[#e10000]`}>*/}
                {/*  Outlet*/}
                {/*</span>*/}
              </div>
            )}
          </div>
        </div>


      </div>
      <div className="mx-[5rem] max-md:flex-col max-md:gap-10 max-md:w-[95%] max-md:mx-auto py-[1.25rem] flex items-center justify-between text-white">
        <div className="flex max-md:flex-wrap items-center gap-6">
          <Link
            href="/uslovi-koriscenja"
            className={`text-[0.9rem]  font-normal hover:text-[#e10000] cursor-pointer ${pathname === "/uslovi-koriscenja" && "text-[#e10000]"
              }`}
          >
            Uslovi korišćenja 
          </Link>
          <span>•</span>
          <Link
            href="/zastita-privatnosti"
            className={`text-[0.9rem]  font-normal hover:text-[#e10000] cursor-pointer ${pathname === "/zastita-privatnosti" && "text-[#e10000]"
              }`}
          >
            Zaštita privatnosti
          </Link>
          <span>•</span>
          <Link
            href="/isporuka"
            className={`text-[0.9rem]  font-normal hover:text-[#e10000] cursor-pointer ${pathname === "/isporuka" && "text-[#e10000]"
              }`}
          >
            Isporuka
          </Link>
          <span>•</span>
          <Link
            href="/najcesca-pitanja"
            className={`text-[0.9rem] font-normal hover:text-[#e10000] cursor-pointer ${pathname === "/najcesca-pitanja" && "text-[#e10000]"
              }`}
          >
            Najčešća pitanja
          </Link>
          <span>•</span>
          <Link
            href="/kolacici"
            className={`text-[0.9rem] font-normal hover:text-[#e10000] cursor-pointer ${pathname === "/kolacici" && "text-[#e10000]"
              }`}
          >
            Politika o 'Kolačićima'
          </Link>
        </div>
        <p className="text-[0.9rem]  font-normal ">
          &copy; {new Date().getFullYear()} Tied Up | Sva prava zadržana.
          Powered by{" "}
          <a
            href="https://www.croonus.com"
            target={"_blank"}
            className="hover:text-[#e10000] cursor-pointer bganimatethumb relative"
          >
            Croonus Technologies
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
