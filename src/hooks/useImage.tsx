import { useCallback, useEffect, useState } from "react";

const useImage = (imageSrcList: string[]) => {
  const [load, setLoad] = useState<Boolean>(false);

  const getImage = useCallback(() => {
    imageSrcList.map((img) => {
      const image = new Image();
      image.src = img;
      return image;
    });

    setLoad(true);
  }, [imageSrcList]);

  useEffect(() => {
    getImage();
  }, [getImage]);

  return load;
};

export default useImage;
