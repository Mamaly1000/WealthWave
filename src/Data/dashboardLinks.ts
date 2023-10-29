import {
  cryptoChartIcon,
  cryptoTableIcon,
  homeIcon,
  kanbanIcon,
  newsChartIcon,
  newsTableIcon,
  nftChartIcon,
  nftTableIcon,
  profileIcon,
  schedulerIcon,
  themeIcon,
  CiWallet,
} from "../assets/dashboard/dashboardIcons";

export const dashboardLinks = [
  {
    header: "essentails",
    links: [
      {
        name: "home",
        route: "dashboard/home",
        icon: homeIcon,
      },
      {
        name: "theme",
        route: "dashboard/theme",
        icon: themeIcon,
      },
      {
        name: "profile",
        route: "dashboard/profile",
        icon: profileIcon,
      },
      {
        name: "wallet",
        route: "dashboard/wallet",
        icon: CiWallet,
      },
    ],
  },
  {
    header: "analytics",
    links: [
      {
        name: "crypto",
        route: "dashboard/table/crypto",
        icon: cryptoTableIcon,
      },
      {
        name: "nft",
        route: "dashboard/table/nft",
        icon: nftTableIcon,
      },
      {
        name: "news",
        route: "dashboard/table/news",
        icon: newsTableIcon,
      },
    ],
  },
  {
    header: "tools",
    links: [
      {
        name: "kanban",
        route: "dashboard/kanban",
        icon: kanbanIcon,
      },
      {
        name: "scheduler",
        route: "dashboard/scheduler",
        icon: schedulerIcon,
      },
    ],
  },
  {
    header: "charts",
    links: [
      {
        name: "crypto",
        route: "dashboard/chart/crypto",
        icon: cryptoChartIcon,
      },
      {
        name: "nft",
        route: "dashboard/chart/nft",
        icon: nftChartIcon,
      },
      {
        name: "news",
        route: "dashboard/chart/news",
        icon: newsChartIcon,
      },
    ],
  },
];
