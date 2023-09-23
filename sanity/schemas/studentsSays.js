// schemas/imageWithTitle.js

const studentsSays = {
    name: 'studentsSays',
    title: 'studentsSays',
    type: 'document',
    fields: [
      {
        name: 'studentName',
        title: 'studentName',
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

  export default  studentsSays
  