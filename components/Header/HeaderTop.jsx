import Link from 'next/link'
import React from 'react'
import SliderHeader from './SliderHeader'
import Translate from "@/components/Translate/Translate";

function HeaderTop() {
	return (
		<div className='bg-[#171612] h-8 w-full flex items-center justify-between px-[5rem] text-white'>
			<div>
				<Link href='https://www.facebook.com/masnetiedup/' className='text-sm font-light' target='_blank'>Facebook</Link>
				<span className='mx-2'>-</span>
				<Link href='https://www.instagram.com/masnetiedup/' className='text-sm font-light' target='_blank'>Instagram</Link>
				<span className='mx-2'>-</span>
				<Link href='https://www.youtube.com/@tiedup4968' className='text-sm font-light' target='_blank'>Youtube</Link>
			</div>
			<SliderHeader />
			<div className='flex items-center'>
				<Translate/>
				<span className='text-sm font-light' >Call Centar: </span>
				<Link href={`tel:${process.env.TELEPHONE2}`} className='text-sm font-light'>
					{process.env.TELEPHONE2}
				</Link>
			</div>
		</div>
	)
}

export default HeaderTop