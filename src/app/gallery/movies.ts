export type Movie = {
  poster: string;
  name: string;
};

// Main movie set
export const moviesSet1 = [
  { poster: "gallery/articulation-1.jpg", name: "image1" },
  { poster: "gallery/beckman stretches.jpg", name: "image2" },
  { poster: "gallery/PROMPT 2.jpg", name: "image3" },
  { poster: "gallery/beckman-4.jpg", name: "image4" },
  { poster: "gallery/prompt1.jpg", name: "image5" },
  { poster: "gallery/gestalt.jpg", name: "image6" },
  { poster: "gallery/MAKATON.jpg", name: "image7" },
];

// Different image sets
export const moviesSet2 = [
  { poster: "gallery/beckman-3.jpg", name: "image8" },
  { poster: "gallery/MAKATON2.jpg", name: "image9" },
  { poster: "gallery/myofunctional 1.jpg", name: "image10" },
  { poster: "gallery/myofunctional2.jpg", name: "image11" },
  { poster: "gallery/myofunctional 3.jpg", name: "image12" },
  { poster: "gallery/OPT.jpg", name: "image13" },
  { poster: "gallery/PROMPT 2.jpg", name: "image14" },
];

// export const moviesSet3 = [
//   { poster: "gallery/image15.jpg", name: "image15" },
//   { poster: "gallery/image16.jpg", name: "image16" },
//   { poster: "gallery/image17.jpg", name: "image17" },
//   { poster: "gallery/image18.jpg", name: "image18" },
//   { poster: "gallery/image19.jpg", name: "image19" },
//   { poster: "gallery/image20.jpg", name: "image20" },
//   { poster: "gallery/image21.jpg", name: "image21" },
// ];

export const randomMoviesSet1 = moviesSet1
  .sort(() => Math.random() - 0.5)
  .concat(moviesSet1.sort(() => Math.random() - 0.5))
  .concat(moviesSet1.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = moviesSet2
  .sort(() => Math.random() - 0.5)
  .concat(moviesSet2.sort(() => Math.random() - 0.5))
  .concat(moviesSet2.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);

// export const randomMoviesSet3 = moviesSet3
//   .sort(() => Math.random() - 0.5)
//   .concat(moviesSet3.sort(() => Math.random() - 0.5))
//   .concat(moviesSet3.sort(() => Math.random() - 0.5))
//   .sort(() => Math.random() - 0.5);
