

const blogs = {
    name: 'blogs',
    title: 'blogs',
    type: 'document',
    fields: [
      
      {
        name: 'description1',
        title: 'description1',
        type: 'string',
      },{
        name: 'description2',
        title: 'description2',
        type: 'string',
      },{
        name: 'description3',
        title: 'description3',
        type: 'string',
      },{
        name: 'description4',
        title: 'description4',
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

  export default  blogs
  