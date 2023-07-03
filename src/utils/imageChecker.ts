import axios from "axios";

export default async function ValidateAndDownloadImage(url: string) {
  try {
    const response = await axios.head(url);
    const contentType = response.headers["content-type"];
    if (contentType && contentType.startsWith("image/")) {
      // Image URL is valid, you can display it
      const image = new Image();
      image.src = url;
      document.body.appendChild(image);
    } else {
      // URL does not point to an image
      console.log("Invalid image URL");
    }
  } catch (error) {
    // Error occurred while fetching the URL
    console.log("Error fetching image:", error);
  }
}
