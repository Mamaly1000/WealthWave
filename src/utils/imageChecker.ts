import { toast } from "react-toastify";
import { validateImage } from "image-validator";
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
