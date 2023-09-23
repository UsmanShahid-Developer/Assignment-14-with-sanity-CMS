

const bestCourse = {
    name: 'bestCourse',
    title: 'bestCourse',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'description',
        type: 'string',
      },
      {
        name: 'image',
        title: 'image',
        type: 'image',
        options: {
          hotspot: true, // Allows you to set a hotspot on the image
        },
        
      },
    ],
    
  };

  export default  bestCourse
  