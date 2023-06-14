import axios from "axios";

export default async function replaceInvalidUrl(
  apiPictureUrl: string,
  myPictureUrls: string[],
  setPic: React.Dispatch<React.SetStateAction<string>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
): Promise<void> {
  try {
    setLoading(true);
    await axios.head(apiPictureUrl);
    setPic(apiPictureUrl);
  } catch (error) {
    console.log(error);
    setPic(myPictureUrls[Math.round(Math.random() * myPictureUrls.length)]);
  } finally {
    setLoading(false);
  }
}

// This function is also called `replaceInvalidUrl` and takes the same two arguments: `apiPictureUrl` and `myPictureUrls`. It returns a Promise that resolves to a single URL that is either the primary URL or a fallback URL from the `myPictureUrls` array.
// The function works by creating an array of URLs to check, which includes the primary URL and all the fallback URLs. It then loops over this array and tries to load each image using an `Image` object. If the image loads successfully, the corresponding URL is considered valid and returned. If all the URLs fail to load, the function returns null.
// The `Image` object is created inside a Promise, which resolves if the image loads successfully and rejects if it fails to load. This Promise is awaited using `await`, which allows us to wait for the result before continuing with the loop.
// Note that this implementation assumes that all images are of the same size. If this is not the case, you may need to modify the code to handle this correctly.
