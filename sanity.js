import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-03-25",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source) => builder.image(source);
