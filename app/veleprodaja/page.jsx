import Link from "next/link";
import Image from "next/image";

const Veleprodaja = () => {
  return (
    <>
      <div className="flex flex-col mt-[0rem] mt16 items-center  relative">
        <div className="border border-black rounded-[26px] py-[3rem] max-md:px-5 md:px-[6rem] text-center max-md:w-[80%]">
          <p>ZA VELEPRODAJU I INFORMACIJE O CENAMA KONTAKTIRAJTE NAS NA E-MAIL:</p>
         <Link href="mailto:masnetiedup@gmail.com" className="underline font-semibold hover:text-[#c0c0c0] text-[20px] mt-4 block">masnetiedup@gmail.com</Link>

        </div>
      </div>
    </>
  );
};

export default Veleprodaja;

export const metadata = {
  title: "Veleprodaja | TiedUp",
  description: "Veleprodaja",
};
