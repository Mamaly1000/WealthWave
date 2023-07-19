import { toast } from "react-toastify";
import { validateImage } from "image-validator";
import { randomPics } from "./randomPics";
export default async function urlValidation(
  url: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setImageSRC: React.Dispatch<React.SetStateAction<string>>
) {
  try {
    setLoading(true);
    const isValidImage = await validateImage(url);
    if (isValidImage) {
      const image = new Image();
      image.src = url;
      setImageSRC(image.src);
      toast.success("image added successfully !", { isLoading: false });
    }
  } catch (error) {
    toast.error("image added unsuccessfully !");
  } finally {
    setLoading(false);
  }
}
export async function PosturlValidation(
  url: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setImageSRC: React.Dispatch<React.SetStateAction<string>>
) {
  try {
    setLoading(true);
    const isValidImage = await validateImage(url);
    if (isValidImage) {
      const image = new Image();
      image.src = url;
      setImageSRC(image.src);
      setLoading(false);
    }
  } catch (error) {
    setImageSRC(randomPics[Math.floor(Math.random() * randomPics.length)]);
  }
}
