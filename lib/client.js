import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'rmgcp6tl',
  dataset: 'production',
  apiVersion: '2022-10-12',
  useCdn: true,
  token: "sk6kGHfsTH1tFtwmgupI6dC9RPbIiGhi14BExhAf2ZzmgvdYh64ewWQ5BC5Ah88CI4Vvk1dNPaATXtxCxRYp7La2JfWaM1SxCXNTHkGUlmI26p2ZIMtOJ01dCWEqvYFFh6O3Uw2Xe9vNJZU5QhtDnv7sfjKEEHjBFywmsexP0LIEXs0WEMEB"
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);