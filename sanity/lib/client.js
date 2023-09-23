import { createClient } from 'next-sanity'
// const builder = imageUrlBuilder(client)
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
// import imageUrlBuilder from '@sanity/image-url'



// function urlFor(source) {
//   return builder.image(source)
// }