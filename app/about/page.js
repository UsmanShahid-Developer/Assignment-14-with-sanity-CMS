import Image from 'next/image';
import Button from '../(components)/button/button';
import Header from '../(components)/header/header';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
// import about from '@/sanity/schemas/about';
const fetchServices = async () => {
  const about = await client.fetch(`*[_type == "about"]`, {}, { cache: 'no-cache' });
  return about;
};

async function about() {
  const about = await fetchServices()
  return (
    <>
    <Header title="About Us"/>
    <section className="about-us">
      <div className="row">
        {
          about.map((about)=>{
            return(
              <>
              <div className="about-col">
          <h1>{about.title}</h1>
          <p>{about.description}</p>
         <Button text='Explore Now' />
        </div>
        <div className="about-col">
          <Image
            src={urlForImage(about.image).url()}
            width={'500'}
            height={'350'}
            alt="About Picture"
          />
         
        </div>
              </>
            )
          })
        }
        {/* <div className="about-col">
          <h1>We are the world's largest University</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
         <Button text='Explore Now' />
        </div>
        <div className="about-col">
          <Image
            src="/about.png"
            width={'500'}
            height={'350'}
            alt="About Picture"
          />
         
        </div> */}
      </div>
    </section>
    </>
  )
} export default about
