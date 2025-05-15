export type Movie = {
  poster: string;
  name: string;
};

export const movies = [
  { poster: "/galleryimage1.jpeg", name: "image1" },
  {
    poster: "/galleryimage3.jpg",
    name: "image2",
  },
  {
    poster: "/galleryimage2.jpeg",
    name: "image3",
  },
  { poster: "/galleryimage1.jpeg", name: "image4" },
  {
    poster: "/galleryimage3.jpg",
    name: "image5",
  },
  {
    poster: "/galleryimage.jpg",
    name: "image6",
  },
  { poster: "/galleryimage2.jpeg", name: "image7" },
];

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);

  export const randomMoviesSet3 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);

