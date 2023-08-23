import {
  avatar1,
  avatar10,
  avatar11,
  avatar2,
  avatar4,
  avatar6,
  avatar8,
  avatar9,
} from "../assets/dashboard/3d-avatars/avatars";
import {
  OverallProductIcon,
  OverallratioIcon,
  OverallrevenueIcon,
  OverallusersIcon,
} from "../assets/dashboard/overall/overall";

export const overallData: {
  icon: string;
  title: string;
  value: string;
  percentage: string;
  main_color: string;
  chartData: (string | number)[][];
}[] = [
  {
    icon: OverallusersIcon,
    title: "total users",
    value: "11.232",
    percentage: "45",
    main_color: "#F94C10",
    chartData: [
      ["june", 12490],
      ["july", 23022],
      ["august", -5687.8],
      ["september", 1249],
      ["october", 1249],
      ["november", 1249],
      ["december", 1249],
      ["january", 1249],
      ["february", 1249],
      ["march", 1249],
    ],
  },
  {
    icon: OverallProductIcon,
    title: "total products",
    value: "238",
    percentage: "21",
    main_color: "#B4FF9F",
    chartData: [
      ["june", 11394],
      ["july", 19033],
      ["august", 12990],
      ["september", 18909],
      ["october", 12492],
      ["november", 12149],
      ["december", 13249],
      ["january", 17249],
      ["february", 18249],
      ["march", 12549],
    ],
  },
  {
    icon: OverallratioIcon,
    title: "total ratio",
    value: "2.6",
    percentage: "12",
    main_color: "#FFE400",
    chartData: [
      ["june", 42490],
      ["july", 53022],
      ["august", 46448],
      ["september", 34249],
      ["october", 62449],
      ["november", 32449],
      ["december", 42449],
      ["january", 52449],
      ["february", 32449],
      ["march", 42494],
    ],
  },
  {
    icon: OverallrevenueIcon,
    title: "total revenue",
    value: "56.432",
    percentage: "-12",
    main_color: "#01C5C4",
    chartData: [
      ["june", 12490],
      ["july", 23022],
      ["august", 5687.8],
      ["september", 1249],
      ["october", 1249],
      ["november", 1249],
      ["december", 1249],
      ["january", 1249],
      ["february", 1249],
      ["march", 1249],
    ],
  },
];
export const topDeals: {
  icon: string;
  name: string;
  email: string;
  price: number;
}[] = [
  {
    icon: avatar1,
    name: "Alexia Anthony",
    email: "mosses@live.com",
    price: 23000,
  },
  {
    icon: avatar2,
    name: "Shiloh Barry",
    email: "jlbaumga@hotmail.com",
    price: 48050,
  },
  {
    icon: avatar4,
    name: "Waverly Walls",
    email: "fukuchi@yahoo.com",
    price: 41566,
  },
  {
    icon: avatar6,
    name: "Larry Barrera",
    email: "research@yahoo.ca",
    price: 55900,
  },
  {
    icon: avatar8,
    name: "Beatrice Underwood",
    email: "froodian@msn.com",
    price: 10900,
  },
  {
    icon: avatar9,
    name: "Reece Tucker",
    email: "avalon@mac.com",
    price: 10900,
  },
  {
    icon: avatar11,
    name: "Esther Berger",
    email: "tmccarth@aol.com",
    price: 43566,
  },
  {
    icon: avatar10,
    name: "Byron Hogan",
    email: "overbom@live.com",
    price: 78900,
  },
];
