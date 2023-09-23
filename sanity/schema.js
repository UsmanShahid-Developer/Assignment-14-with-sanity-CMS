// import blockContent from './schemas/blockContent'
// import category from './schemas/category'
// import post from './schemas/post'
// import author from './schemas/author'

import about from "./schemas/about";
import bestCourse from "./schemas/bestCourse";
import blogs from "./schemas/blogs";
import contactAddress from "./schemas/contactAddress";
import contactEmail from "./schemas/contactEmail";
import contactPhone from "./schemas/contactPhone";
// import contact from "./schemas/contact";
import courseWeOffer from "./schemas/courseWeOffer";
import header from "./schemas/header";
import imageHeading from "./schemas/imageHeading";
import majorPrograms from "./schemas/majorPrograms";
import ourFacilities from "./schemas/ourFacilities";
import postCatageries from "./schemas/postCatageries";
import studentsSays from "./schemas/studentsSays";
import virtualTour from "./schemas/virtualTour";

export const schema = {
  types: [majorPrograms,
    virtualTour,
    ourFacilities,studentsSays
    ,imageHeading
    ,header,
     courseWeOffer
     ,bestCourse
     ,blogs
     ,postCatageries
     ,about
     ,contactEmail
     ,contactPhone,
    contactAddress],
}
