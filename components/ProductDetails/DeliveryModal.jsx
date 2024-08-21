import React from 'react'
import Image from 'next/image'
import Cancel from "../../assets/Icons/cancel.png";

const DeliveryModal = ({ deliveryModal, setDeliveryModal, description }) => {
  return (
    <div
      className={
        deliveryModal
          ? `max-md:z-[20000] fixed max-md:mx-auto max-md:overflow-y-scroll scale-100 transition-all duration-500 z-[101] top-0 left-0 w-screen h-screen flex items-center justify-center`
          : `max-md:z-[20000] fixed max-md:mx-auto max-md:overflow-y-scroll scale-0 transition-all duration-500 z-[101] top-0 left-0 w-screen h-screen flex items-center justify-center`
      }
    >
      <div
        className={`
  
      bg-white rounded-lg max-md:overflow-y-scroll  p-[40px] flex flex-col md:w-[890px] md:h-[490px]`}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-[20px] font-bold">Detaljan opis proizvoda</h1>
          <Image
            src={Cancel}
            alt="cancel"
            width={20}
            height={20}
            onClick={() => setDeliveryModal(false)}
            className="cursor-pointer"
          />
        </div>
        <div className="mt-[4.375rem]">
          <p
            className={`text-sm`}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
      </div>
    </div>
  )
}

export default DeliveryModal