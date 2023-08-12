import axios from "axios";
const ApiKey: string = "a1e647b111ec4f48bda9ed3617ad3251";
export const AppleNewsALL = () => {
  axios.get(
    `https://newsapi.org/v2/everything?q=apple&from=2023-04-26&to=2023-04-26&sortBy=popularity&apiKey=${ApiKey}`
  );
};
export const AppleNewsHeadLines = () => {
  axios.get(
    `https://newsapi.org/v2/top-headlines?q=apple&from=2023-04-26&to=2023-04-26&sortBy=popularity&apiKey=${ApiKey}`
  );
};
export const TeslaNewsALL = () => {
  axios.get(
    `https://newsapi.org/v2/everything?q=tesla&from=2023-03-27&sortBy=publishedAt&apiKey=${ApiKey}`
  );
};
export const TeslaNewsHeadLines = () => {
  axios.get(
    `https://newsapi.org/v2/top-headlines?q=tesla&from=2023-03-27&sortBy=publishedAt&apiKey=${ApiKey}`
  );
};
export const Top_business_headlines = () => {
  axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${ApiKey}`
  );
};
export const Top_business_headlines_tech_crunch_everything = () => {
  axios.get(
    `https://newsapi.org/v2/everything?sources=techcrunch&apiKey=${ApiKey}`
  );
};
export const Top_business_headlines_tech_crunch_HeadLines = () => {
  axios.get(
    `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${ApiKey}`
  );
};
export const WallStreetJournal_News = () => {
  axios.get(
    `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${ApiKey}`
  );
};
