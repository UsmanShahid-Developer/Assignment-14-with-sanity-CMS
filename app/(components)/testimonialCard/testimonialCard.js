import Image from "next/image"

export default function testimonialCard(props) {
  return (
    <div className="testimonials-col">
    <Image src={props.src} width={100} height={100} alt="oo.."/>
    <div>
        <p>{props.description}</p>
        <h3>{props.name}</h3>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
    </div>
</div>
  )
}
