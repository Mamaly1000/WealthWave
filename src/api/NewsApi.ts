import axios from "axios";
const ApiKey: string = "a1e647b111ec4f48bda9ed3617ad3251";
export const AppleNewsALL = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=apple&from=2023-04-26&to=2023-04-26&sortBy=popularity&apiKey=${ApiKey}`
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
export const AppleNewsHeadLines = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?q=apple&from=2023-04-26&to=2023-04-26&sortBy=popularity&apiKey=${ApiKey}`
    );
    if (response.status === 200) {
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};
export const TeslaNewsALL = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=tesla&from=2023-03-27&sortBy=publishedAt&apiKey=${ApiKey}`
    );
    if (response.status === 200) {
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};
export const TeslaNewsHeadLines = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?q=tesla&from=2023-03-27&sortBy=publishedAt&apiKey=${ApiKey}`
    );
    if (response.status === 200) {
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};
export const Top_business_headlines = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${ApiKey}`
    );
    if (response.status === 200) {
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};
export const Top_business_headlines_tech_crunch_everything = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?sources=techcrunch&apiKey=${ApiKey}`
    );
    if (response.status === 200) {
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};
export const Top_business_headlines_tech_crunch_HeadLines = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${ApiKey}`
    );
    if (response.status === 200) {
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};
export const WallStreetJournal_News = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${ApiKey}`
    );
    if (response.status === 200) {
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};
