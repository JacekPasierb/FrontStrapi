import news1 from "../image/post-construction-1-418x315.jpg";
import news2 from "../image/post-construction-2-418x315.jpg";
import news3 from "../image/post-construction-3-418x315.jpg";

export const newest = [
  {
    img: news1,
    tittle: "Title 1",
    date: "Jan.20, 2018",
    author: "by Brian Williamson",
    post: "Last month, our construction company turned over the 110,000-square-foot, 237-bed Fox Run at Fulton housing facility for occupancy. Located adjacent to Marist College, the facility is now home to 237...",
  },
  {
    img: news2,
    tittle: "Title 2",
    date: "Jan.20, 2018",
    author: "by Brian Williamson",
    post: "Last month, our construction company turned over the 110,000-square-foot, 237-bed Fox Run at Fulton housing facility for occupancy. Located adjacent to Marist College, the facility is now home to 237...",
  },
  {
    img: news3,
    tittle: "Title 3",
    date: "Jan.20, 2018",
    author: "by Brian Williamson",
    post: "Last month, our construction company turned over the 110,000-square-foot, 237-bed Fox Run at Fulton housing facility for occupancy. Located adjacent to Marist College, the facility is now home to 237...",
  },
  {
    img: news3,
    tittle: "Title 4",
    date: "Jan.20, 2018",
    author: "by Brian Williamson",
    post: "Last month, our construction company turned over the 110,000-square-foot, 237-bed Fox Run at Fulton housing facility for occupancy. Located adjacent to Marist College, the facility is now home to 237...",
  },
  {
    img: news3,
    tittle: "Title 5",
    date: "Jan.20, 2018",
    author: "by Brian Williamson",
    post: "Last month, our construction company turned over the 110,000-square-foot, 237-bed Fox Run at Fulton housing facility for occupancy. Located adjacent to Marist College, the facility is now home to 237...",
  },
  {
    img: news3,
    tittle: "Title 6",
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
