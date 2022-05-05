import eSan from "./images/e-san.PNG";
import eRestaurant from "./images/e-restaurant.PNG";
import UdemyLogo from "./images/udemy_logo.png";
import PolarisLogo from "./images/polaris_logo.png";
import GoldenAlpLogo from "./images/golden_alp.jpg";
import SouthgobiSandsLogo from "./images/southgobisands_logo.jpeg";
import AdamasMiningLogo from "./images/adamas_mining_logo.png";

export const programJobs = [
  {
    id: "01",
    name: "Cody ХХК",
    jobs: "Фронтэнд вэб хөгжүүлэгч.",
    useTechnology: "HTML, CSS, ReactJS, Styled Components",
    jobDesc: "Худалдааны вэбийн фронтэнд хөгжүүлэлтийг гүйцэтгэх.",
    durationStart: "2021-06-01",
    durationEnd: "2021-08-01",
    companyLink: "https://www.facebook.com/codymongolia/",
    logoImage: "https://cody.mn/bceab91d07f080358519032bdf6053cd.svg"
  },
  {
    id: "02",
    name: "BOYS SYSTEM ХХК",
    jobs: "Вэб хөгжүүлэгч.",
    useTechnology: "HTML, CSS, ReactJS",
    jobDesc: "Вэб апликэшиний фронтэнд хөгжүүлэлтийг гүйцэтгэх.",
    durationStart: "2020-08-01",
    durationEnd: "2020-10-15",
    companyLink: "https://www.facebook.com/bowllc/posts/2456333917976398/",
    logoImage: "http://bowsys.mn/static/media/log4.38c79503.png"
  }
];
export const geologyJobs = [
  {
    id: "01",
    name: "Поларис консилтинг сэрвис ХХК",
    jobs: "Геологич.",
    useTechnology: "AutoCad, Minex, ArcGIS, MapInfo",
    jobDesc: "Нүүрсний ордын 3н хэмжээст загварчлалыг боловсруулах.",
    durationStart: "2018-10-15",
    durationEnd: "2019-08-15",
    companyLink: "https://www.facebook.com/PolarisEngineering",
    logoImage: PolarisLogo
  },

  {
    id: "02",
    name: "Golden Alp Resources ХХК",
    jobs: "Геологич.",
    useTechnology: "AutoCad, ArcGIS",
    jobDesc: "Нүүрсний ордын 3н хэмжээст загварчлалыг боловсруулах.",
    durationStart: "2018-08-01",
    durationEnd: "2018-10-01",
    logoImage: GoldenAlpLogo
  },
  {
    id: "03",
    name: "Southgobi Sands ХХК",
    jobs: "Ашиглалтын геологич.",
    useTechnology: "AutoCad, Minex",
    jobDesc:
      "Нүүрсний давхаргын 3н хэмжээст загварчлалыг боловсруулах. Уурхайн олборлосон нүүрсний чанрыг баталгаажуулах, экспортын нүүрсний чанрын дээжлэлт хийх, баримтжуулах. Уурхайн олборлох нүүрсний чанрыг тодорхойлох. Уурхайн геологийн ажлын холбогдох журмыг боловсруулах шинэчлэх.",
    durationStart: "2016-08-01",
    durationEnd: "2018-08-01",
    companyLink: "https://www.southgobi.com/html/index.php",
    logoImage: SouthgobiSandsLogo
  },
  {
    id: "04",
    name: "Southgobi Sands ХХК",
    jobs: "Нөөцийн геологич.",
    useTechnology: "AutoCad, Minex",
    jobDesc: "Нүүрсний ордын 3н хэмжээст загварчлалыг боловсруулах.",
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
      "Хайгуулын талбайн геологийн илэрц болон ордын үнэлгээ тайлан боловсруулах, хэтийн төлөвийг тодорхойлох.",
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
      "Компаны зүүн болон төвийн бүсийн хайгуулын талбайнуудад геологийн хээрийн судалгааны ажлыг хийж гүйцэтгэх, үр дүнг боловсруулах, тайлагнах, танилцуулга бэлтгэх, хэтийн төлөвтэй талбайг ялгаж тогтоох, хайгуулын ажлын үр дүнг боловсруулж холбогдох төрийн захиргааны байгуулагаар тайлан төлөвлөгөө батлуулах.",
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
    company: UdemyLogo,
    name: "ReactJS-The Practical Guide",
    trainer: "Maximilian Schwarzmuller",
    technology: "ReactJS",
    duration: "33 Hours"
  }
];
export const projects = [
  {
    id: "01",
    name: "Онлайн дэлгүүрийн веб хуудас.",
    technology:
      "Вебийн Фронтэндийг ReactJS өгөгдлийн баазыг Firebase ашигласан. REST-API ашигласан.",
    link: "https://e-commercial-m.vercel.app/",
    githubRepo: "https://github.com/Munaa8805/e-commercial",
    image: eSan
  },
  {
    id: "02",
    name: "Зоогийн газрын танилцуулга веб хуудас.",
    technology:
      "Вебийн Фронтэндийг ReactJS өгөгдлийн баазыг Firebase ашигласан. ",
    link: "https://restaurant-meals.vercel.app/",
    githubRepo: "https://github.com/Munaa8805/restaurant-meals",
    image: eRestaurant
  }
];
