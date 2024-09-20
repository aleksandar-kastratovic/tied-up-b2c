import Link from "next/link";
import Image from "next/image";
import store1 from "@/assets/Images/store1.jpg";
import store2 from "@/assets/Images/store2.jpg";
import store3 from "@/assets/Images/store3.jpg";
import store4 from "@/assets/Images/store4.jpg";
import store5 from "@/assets/Images/store5.jpg";
import store6 from "@/assets/Images/store6.jpg";
import store7 from "@/assets/Images/store7.jpg";
import store8 from "@/assets/Images/store8.jpg";

const Gdekupiti = () => {
  return (
    <>
      <div className="flex flex-col mt-5 md:mt-16 items-center relative">
        <div className="md:w-[80%] mx-auto p-2">
          <h3 className="font-semibold text-[22px]">
            {" "}
            Gde kupiti Tied up proizvode?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-[2rem]">
            <Link
              href="https://maps.app.goo.gl/aVR5BCJ5DpfKeB4D7"
              target="_blank"
            >
              <div className={`col-span-1`}>
                <div className="overflow-hidden rounded-[20px]">
                  <Image
                    src={store1}
                    alt=""
                    width={400}
                    height={400}
                    className="rounded-[20px] w-full transition-all duration-500 hover:!scale-110"
                  />
                </div>
                <h5 className="text-center mt-5 text-[20px] hover:underline">
                  Katapult Handmade
                </h5>
                <p className="text-center font-light hover:underline">
                  Knez Mihailova 36, Beograd
                </p>
              </div>
            </Link>
            <Link
              href="https://maps.app.goo.gl/PExADP5DPLKoQtke6"
              target="_blank"
            >
              <div className="col-span-1">
                <div className="overflow-hidden rounded-[20px]">
                  <Image
                    src={store2}
                    alt=""
                    width={400}
                    height={400}
                    className="rounded-[20px] w-full transition-all duration-500 hover:!scale-110"
                  />
                </div>
                <h5 className="text-center mt-5 text-[20px] hover:underline">
                  TRICIKL Art Craft Gift Shop
                </h5>
                <p className="text-center font-light hover:underline">
                  Francuska 5, Beograd
                </p>
              </div>
            </Link>
            <Link
              href="https://maps.app.goo.gl/kBshMaBHcoPQVfeR6"
              target="_blank"
            >
              <div className="col-span-1">
                <div className="overflow-hidden rounded-[20px]">
                  <Image
                    src={store3}
                    alt=""
                    width={400}
                    height={400}
                    className="rounded-[20px] w-full transition-all duration-500 hover:!scale-110"
                  />
                </div>
                <h5 className="text-center mt-5 text-[20px] hover:underline">
                  Caruso
                </h5>
                <p className="text-center font-light hover:underline">
                  27. marta 19, TC Radnički, Kragujevac
                </p>
              </div>
            </Link>
            <Link
              href="https://maps.app.goo.gl/LEx73s32BtDdGNpS8"
              target="_blank"
            >
              <div className="col-span-1">
                <div className="overflow-hidden rounded-[20px]">
                  <Image
                    src={store4}
                    alt=""
                    width={400}
                    height={400}
                    className="rounded-[20px] w-full transition-all duration-500 hover:!scale-110"
                  />
                </div>
                <h5 className="text-center mt-5 text-[20px] hover:underline">
                  Džentlmen
                </h5>
                <p className="text-center font-light hover:underline">
                  Vuka Karadžić 1b, Gornji Milanovac
                </p>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-[2rem]">
            <Link
              href="https://maps.app.goo.gl/SHTapNJKVLEp4NBP6"
              target="_blank"
            >
              <div className="col-span-1">
                <div className="overflow-hidden rounded-[20px]">
                  <Image
                    src={store5}
                    alt=""
                    width={400}
                    height={400}
                    className="rounded-[20px] w-full transition-all duration-500 hover:!scale-110"
                  />
                </div>
                <h5 className="text-center mt-5 text-[20px] hover:underline">
                  Bleu Homme
                </h5>
                <p className="text-center font-light hover:underline">
                  Vice Vukova 6, ARENA Center, Zagreb
                </p>
              </div>
            </Link>
            <Link
              href="https://maps.app.goo.gl/Z9LReXfDYmessmfm9"
              target="_blank"
            >
              <div className="col-span-1">
                <div className="overflow-hidden rounded-[20px]">
                  <Image
                    src={store6}
                    alt=""
                    width={400}
                    height={400}
                    className="rounded-[20px] w-full transition-all duration-500 hover:!scale-110"
                  />
                </div>
                <h5 className="text-center mt-5 text-[20px] hover:underline">
                  Bleu Homme
                </h5>
                <p className="text-center font-light hover:underline">
                  Akcije Maslenica 1, SUPERNOVA, Zadar
                </p>
              </div>
            </Link>
            <Link
              href="https://maps.app.goo.gl/meWHn7UFYjqWcV4j8"
              target="_blank"
            >
              <div className="col-span-1">
                <div className="overflow-hidden rounded-[20px]">
                  <Image
                    src={store7}
                    alt=""
                    width={400}
                    height={400}
                    className="rounded-[20px] w-full transition-all duration-500 hover:!scale-110"
                  />
                </div>
                <h5 className="text-center mt-5 text-[20px] hover:underline">
                  Bleu Homme
                </h5>
                <p className="text-center font-light hover:underline">
                  Vukovarska 16, MERCANTE Center, Dubrovnik
                </p>
              </div>
            </Link>
            <Link
              href="https://maps.app.goo.gl/7inupH1SDYh7whtK7"
              target="_blank"
            >
              <div className="col-span-1">
                <div className="overflow-hidden rounded-[20px]">
                  <Image
                    src={store8}
                    alt=""
                    width={400}
                    height={400}
                    className="rounded-[20px] w-full transition-all duration-500 hover:!scale-110"
                  />
                </div>
                <h5 className="text-center mt-5 text-[20px] hover:underline">
                  Bleu Homme
                </h5>
                <p className="text-center font-light hover:underline">
                  Josipa Jovića 93, Mall of Split, Split
                </p>
              </div>
            </Link>
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
