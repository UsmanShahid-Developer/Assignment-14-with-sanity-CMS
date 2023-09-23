// schemas/imageWithTitle.js

const virtualTour = {
    name: 'imageWithTitle',
    title: 'ImageWithTitle',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Allows you to set a hotspot on the image
        },
        fields: [
                    {
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative Text',
                    }
                  ]
      },
    ],
    
  };

  export default virtualTour
  