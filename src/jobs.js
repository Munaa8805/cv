import eSan from "./images/e-san.webp";
import eRestaurant from "./images/e-restaurant.webp";
import UdemyLogo from "./images/udemy_logo.webp";
import PolarisLogo from "./images/polaris_logo.png";
import GoldenAlpLogo from "./images/golden_alp.webp";
import SouthgobiSandsLogo from "./images/southgobisands_logo.webp";
import AdamasMiningLogo from "./images/adamas_mining_logo.webp";
import bowllcLogo from "./images/bowllclogo.webp";
import logo1234 from "./images/1234logo.webp";
import htmlLogo from "./images/html.svg";
import cssLogo from "./images/css.svg";
import reactLogo from "./images/react-js.svg";
import styledComponentsLogo from "./images/styledcomponentsLogo.jpg";
import reduxLogo from "./images/reduxLogo.webp";
import gitLogo from "./images/gitLogo.webp";
import jsLogo from "./images/JSlogo.png";
import nextjsLogo from "./images/nextjs.svg";

export const lessons = [
  { id: "01", name: "Алгоритмын үндэс" },
  { id: "02", name: "Өгөгдлийн сангийн үндэс" },
  { id: "03", name: "Интернет технологийн үндэс" },
  { id: "04", name: "Веб програмчлал" },
  { id: "05", name: "Визуаль програмчлал" },
  { id: "06", name: "Объект хандлагат програмчлал" },
  { id: "07", name: "Програмчлалын хэл СИ" },
  { id: "08", name: "Компьютерийн ухааны судалгааны  арга зүй" },
  { id: "09", name: "Програм хангамжийн инженерчлэлийн тусгай сэдвүүд" },
  { id: "10", name: "Ахисан түвшний алгоритмын шинжилгээ" },
  { id: "11", name: "Өгөгдлийн уурхай" },
  { id: "12", name: "Яриа боловрсуулалт" }
];
export const Logos = [
  { id: "01", name: "HTML", logo: htmlLogo, level: "Дунд шат" },
  { id: "02", name: "CSS", logo: cssLogo, level: "Дунд шат" },
  { id: "03", name: "ReactJS", logo: reactLogo, level: "Анхан шат" },
  {
    id: "04",
    name: "Styled Components",
    logo: styledComponentsLogo,
    level: "Дунд шат"
  },
  {
    id: "05",
    name: "Redux",
    logo: reduxLogo,
    level: "Дунд шат"
  },
  {
    id: "06",
    name: "Git",
    logo: gitLogo,
    level: "Дунд шат"
  },
  {
    id: "07",
    name: "JavaScript",
    logo: jsLogo,
    level: "Дунд шат"
  },
  {
    id: "08",
    name: "NextJS",
    logo: nextjsLogo,
    level: "Дунд шат"
  }
];

export const programJobs = [
  {
    id: "01",
    name: "Cody ХХК",
    jobs: "Фронтэнд вэб хөгжүүлэгч.",
    useTechnology: "HTML, CSS, ReactJS, Styled Components",
    jobDesc: "Худалдааны вэбийн фронт-энд хөгжүүлэлтийг гүйцэтгэх.",
    durationStart: "2021-06-01",
    durationEnd: "2021-08-01",
    companyLink: "https://www.facebook.com/codymongolia/",
    logoImage: "https://cody.mn/bceab91d07f080358519032bdf6053cd.svg"
  },
  {
    id: "02",
    name: "Bow System ХХК",
    jobs: "Вэб хөгжүүлэгч.",
    useTechnology: "HTML, CSS, ReactJS",
    jobDesc: "Вэб апликэшиний фронт-энд хөгжүүлэлтийг гүйцэтгэх.",
    durationStart: "2020-08-01",
    durationEnd: "2020-10-15",
    companyLink: "https://www.facebook.com/bowllc/posts/2456333917976398/",
    logoImage: bowllcLogo
  }
];
export const geologyJobs = [
  {
    id: "01",
    name: "Polaris Engineering Consulting ХХК",
    jobs: "Геологич.",
    useTechnology: "AutoCad, Minex, ArcGIS, MapInfo",
    jobDesc:
      "Нүүрсний ордын нарийвчилсан хайгуулын ажлын төлөвлөлт, ордын нөөцийн загварчлал, нүүрсний давхаргын чанрын хяналтын дээжлэлт. Нүүрсний чанрын дээжлэлтийн  боловсруулалт. Хайгуулын талбайн тендерийн сонгон шалгаруулалтын материал бэлтгэл.",
    durationStart: "2018-10-01",
    durationEnd: "2019-08-15",
    companyLink: "https://www.facebook.com/PolarisEngineering",
    logoImage: PolarisLogo
  },

  {
    id: "02",
    name: "Golden Alp Resources ХХК",
    jobs: "Геологич.",
    useTechnology: "AutoCad, ArcGIS",
    jobDesc:
      "Хайгуулын талбайн зураг болон талбайн дээжлэлтийн төлөвлөгөө боловсруулах. Геологийн зургийг боловсруулж дижитал зураг руу хөрвүүлэх.",
    durationStart: "2018-08-01",
    durationEnd: "2018-10-01",
    logoImage: GoldenAlpLogo
  },
  {
    id: "03",
    name: "SouthGobi Sands ХХК",
    jobs: "Ашиглалтын геологич.",
    useTechnology: "AutoCad, Minex",
    jobDesc:
      "Нүүрсний ордын нарийвчилсан хайгуулын ажлын төлөвлөлт, ордын нөөцийн загварчлал, нүүрсний давхарга болон нүүрсний овоолгын чанрын хяналтын дээжлэлт. Нүүрсний чанрын дээжлэлтийн  боловсруулалт. Экспортын нүүрсний чанрын хяналтын дээжлэлт. Нүүрсний давхаргын гаршын зураглал хийх.Уурхайн хананы чулуулгийн зураглал хийх.",
    durationStart: "2016-08-01",
    durationEnd: "2018-08-01",
    companyLink: "https://www.southgobi.com/html/index.php",
    logoImage: SouthgobiSandsLogo
  },
  {
    id: "04",
    name: "SouthGobi Sands ХХК",
    jobs: "Нөөцийн геологич.",
    useTechnology: "AutoCad, Minex",
    jobDesc:
      "Нүүрсний ордын нарийвчилсан хайгуулын ажлын төлөвлөлт, ордын нөөцийн загварчлал, нүүрсний давхарга болон нүүрсний овоолгын чанрын хяналтын дээжлэлт. Нүүрсний чанрын дээжлэлтийн  боловсруулалт. Экспортын нүүрсний чанрын хяналтын дээжлэлт. Нүүрсний давхаргын гаршын зураглал хийх.Уурхайн хананы чулуулгийн зураглал хийх.",
    durationStart: "2014-04-01",
    durationEnd: "2016-08-01",
    companyLink: "https://www.southgobi.com/html/index.php",
    logoImage: SouthgobiSandsLogo
  },
  {
    id: "05",
    name: "MCS Petro Mongolia ХХК",
    jobs: "Геологич.",
    useTechnology: "Minex, ArcGIS",
    jobDesc:
      "Хайгуулын талбайн хайгуулын ажлын төлөвлөлт боловсруулах , хэтийн төлөвийн үнэлгээ гаргах. Борзон-7 нэртэй газрын тосны хайгуулын талбайн материал боловсруулах, төлөвлөгөө гаргах.",
    durationStart: "2011-11-01",
    durationEnd: "2014-04-01",
    companyLink: "https://mcs.mn/mn/",
    logoImage: "https://mcs.mn/wp-content/uploads/2020/05/logoEN-1.svg"
  },
  {
    id: "06",
    name: "Adamas Mining ХХК",
    jobs: "Геологич.",
    useTechnology: "MapInfo, ArcGIS",
    jobDesc:
      "Хайгуулын талбайн хайгуулын ажлын төлөвлөлт боловсруулах , хэтийн төлөвийн үнэлгээ гаргах. Хайгуулын талбайн хээрийн ажлыг гүйцэтгэх , хянах , тайлан төлөвлөгөө бичих , холбогдох байгуулагаар баталгаажуулах.",
    durationStart: "2008-06-30",
    durationEnd: "2011-11-01",
    companyLink: "https://www.google.mn/",
    logoImage: AdamasMiningLogo
  }
];
export const trainingData = [
  {
    id: "01",
    company: UdemyLogo,
    name: "MERN eCommerce From Scratch",
    trainer: "Brad Traversy",
    technology: "MongoDB, Express, ReactJS, NodeJS",
    duration: "15 Hours"
  },
  {
    id: "02",
    company: UdemyLogo,
    name: "Nodejs API Masterclass With Express & MongoDB",
    trainer: "Brad Traversy",
    technology: "MongoDB, Express, NodeJS",
    duration: "12 Hours"
  },
  {
    id: "03",
    company: UdemyLogo,
    name: "React Native-The Practical Guide",
    trainer: "Maximilian Schwarzmuller",
    technology: "React Native",
    duration: "33 Hours"
  },
  {
    id: "04",
    company: logo1234,
    name: "React эхнээс нь дуустал",
    trainer: "Амарбат",
    technology: "ReactJS",
    duration: "42 цаг 2мин"
  },
  {
    id: "05",
    company: UdemyLogo,
    name: "Nextjs & React - The Complete Guide",
    trainer: "Maximilian Schwarzmuller",
    technology: "Nextjs",
    duration: "25 Hours"
  }
];
export const projects = [
  {
    id: "01",
    name: "Онлайн дэлгүүрийн веб хуудас.",
    technology:
      "Вэбийн Фронт-эндийг ReactJS өгөгдлийн баазыг Firebase ашигласан. FakeApi нэртэй REST-API ашигласан.",
    finished: "Хөгжүүлэлтийн ажил үргэлжилж байна.",
    link: "https://e-commercial-munaa8805.vercel.app",
    githubRepo: "https://github.com/Munaa8805/e-commercial",
    image: eSan
  },
  {
    id: "02",
    name: "Зоогийн газрын танилцуулга веб хуудас.",
    technology:
      "Вэбийн Фронт-эндийг ReactJS өгөгдлийн баазыг Firebase ашигласан. ",
    finished: "Хөгжүүлэлтийн ажил үргэлжилж байна.",
    link: "https://restaurant-meals.vercel.app/",
    githubRepo: "https://github.com/Munaa8805/restaurant-meals",
    image: eRestaurant
  }
];
