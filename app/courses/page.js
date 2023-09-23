// import "./coursesStyle.css"

// import Header from '../(components)/header/header'
// import TextCard from './(components)/textCard'
// import ImageCard from './(components)/imageCard'

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Header from '../(components)/header/header';
import TextCard from './(components)/textCard';
import ImageCard from './(components)/imageCard';

const fetchServices = async () => {
  const courses = await client.fetch(`*[_type == "courseWeOffer"]`, {}, { cache: 'no-cache' });
  return courses;
};

const fetchServices2 = async () => {
  const course = await client.fetch(`*[_type == "bestCourse"]`, {}, { cache: 'no-cache' });
  return course;
};
async function Courses() {
  const cours = await fetchServices();
  const bestCourse = await fetchServices2();

  return (
    <>
      <Header title="OUR COURSES" />

      <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          {
            cours.map((card) => {
              return (
                <TextCard title={card.title} description={card.description} />
              )
            })
          }
          {/* <TextCard title="Undergraduate Programs" />
          <TextCard title="Graduate Programs" />
          <TextCard title="Adult Learning & Degree Completion" /> */}
        </div>
      </section>



      <section className="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">{
          bestCourse.map((course)=>{
            return(
              <ImageCard src={urlForImage(course.image).url()} title={course.title}  description={course.description} />
            )
          })
        }
          {/* <ImageCard src="/course1.png" title="Web Development" />
          <ImageCard src="/course2.png" title="Artificial Intelligence" />
          <ImageCard src="/course3.png" title="Data Science" /> */}

        </div>
      </section>



    </>
  )
}
export default Courses




//   import { client } from "@/sanity/lib/client";
//   import { urlForImage } from "@/sanity/lib/image";
//   import Header from '../(components)/header/header';
//   import TextCard from './(components)/textCard';
//   import ImageCard from './(components)/imageCard';

//   const fetchServices = async () => {
//     const courses = await client.fetch(`*[_type == "courseWeOffer"]`, {}, { cache: 'no-cache' });
//     return courses;
//   };

//   const fetchServices2 = async () => {
//     const course = await client.fetch(`*[_type == "bestCourse"]`, {}, { cache: 'no-cache' });
//     return course;
//   };
//   async function Courses() {
//     const cours = await fetchServices();
//     const bestCourse = await fetchServices2();

//   return (
//     <>
//       <Header title="OUR COURSES" />

//       <section className="course">
//         <h1>Course We Offer</h1>
//         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
//         <div className="row">
//           {cours.map((course) => (
//             <div className="row" >
//               <TextCard title={course.title} description={course.description} />
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="facilities">
//         <h1>Best Courses</h1>
//         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

//         <div className="row">
//           {bestCourse.map((course) => (
//             <div >
//               <ImageCard src={urlForImage(course.image).url()} title={course.title} description={course.description} />
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

// export default Courses;
