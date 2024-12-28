import news1 from "../image/post-construction-1-418x315.jpg";
import news2 from "../image/post-construction-2-418x315.jpg";
import news3 from "../image/post-construction-3-418x315.jpg";

export const newest = [
  {
    img: news1,
    tittle: "667 Congress Street Project is Finished!",
    date: "Jan.20, 2018",
    author: "by Brian Williamson",
    post: "Today we commemorated the completion of steel erection at the 667 Congress Street Apartments project with a traditional topping out ceremony. Despite the dreary weather, spirits were high in Portland, Maine, as...",
  },
  {
    img: news2,
    tittle: "Ribbon “Cut” to Open New Bus Center",
    date: "Jan.20, 2018",
    author: "by Brian Williamson",
    post: "Yesterday was a big day for the City of Burlington as a Green Mountain Transit bus literally drove through the ribbon to officially open the new Downtown Transit Center in Vermont. We have finally…",
  },
  {
    img: news3,
    tittle: "New Doublered Residence Facility",
    date: "Jan.20, 2018",
    author: "by Brian Williamson",
    post: "Last month, our construction company turned over the 110,000-square-foot, 237-bed Fox Run at Fulton housing facility for occupancy. Located adjacent to Marist College, the facility is now home to 237...",
  },
  {
    img: news1,
    tittle: "667 Congress Street Project is Finished!",
    date: "Jan.20, 2018",
    author: "by Brian Williamson",
    post: "Last month, our construction company turned over the 110,000-square-foot, 237-bed Fox Run at Fulton housing facility for occupancy. Located adjacent to Marist College, the facility is now home to 237...",
  },
  {
    img: news2,
    tittle: "New Doublered Residence Facility",
    date: "Jan.20, 2018",
    author: "by Brian Williamson",
    post: "Last month, our construction company turned over the 110,000-square-foot, 237-bed Fox Run at Fulton housing facility for occupancy. Located adjacent to Marist College, the facility is now home to 237...",
  },
  {
    img: news1,
    tittle: "667 Congress Street Project is Finished!",
    date: "Jan.20, 2018",
    author: "by Brian Williamson",
    post: "Last month, our construction company turned over the 110,000-square-foot, 237-bed Fox Run at Fulton housing facility for occupancy. Located adjacent to Marist College, the facility is now home to 237...",
  },
];

export const groupedNewest = newest.reduce(
  (
    acc: {
      img: string;
      tittle: string;
      date: string;
      author: string;
      post: string;
    }[][],
    _,
    index: number,
    array: {
      img: string;
      tittle: string;
      date: string;
      author: string;
      post: string;
    }[]
  ) => {
    if (index % 2 === 0) {
      acc.push(array.slice(index, index + 2));
    }
    return acc;
  },
  []
);

export const groupedNewestLg = newest.reduce(
  (
    acc: {
      img: string;
      tittle: string;
      date: string;
      author: string;
      post: string;
    }[][],
    _,
    index: number,
    array: {
      img: string;
      tittle: string;
      date: string;
      author: string;
      post: string;
    }[]
  ) => {
    if (index % 3 === 0) { 
      acc.push(array.slice(index, index + 3)); 
    }
    return acc;
  },
  []
);
