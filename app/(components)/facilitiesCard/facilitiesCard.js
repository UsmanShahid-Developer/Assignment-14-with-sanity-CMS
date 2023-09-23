import React from 'react'
import Image from 'next/image'
export default function fasilitiesCard(props) {
  return (
    <div className="facilities-col">
                
                <Image src={props.src} width={250} height={250} alt=""/>
                <h3>{props.heading}</h3>
                <p>{props.description}.
                </p>
            </div>
  )
}
