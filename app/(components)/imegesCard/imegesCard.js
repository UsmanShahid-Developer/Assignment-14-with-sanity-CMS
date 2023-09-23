import React from 'react'
import Image from 'next/image'
export default function imeges(props) {
  return (
    <div className="campus-col">
   <Image src={props.src} alt="" width={500} height={300} priority />
    <div className="layer">
        <h3>{props.heading}</h3>
    </div>
</div>
  )
}
