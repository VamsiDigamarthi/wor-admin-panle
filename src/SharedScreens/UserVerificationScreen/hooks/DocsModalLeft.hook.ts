import { useState } from "react";

export const useDocsModalLeftHook = () => {
  const [zoomLevel, setZoomLevel] = useState(3);

  const [zoom, setZoom] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<"front" | "back" | null>(null);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleDoubleClick = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    imageType: "front" | "back"
  ) => {
    const {
      offsetX: clickOffsetX,
      offsetY: clickOffsetY,
      target,
    } = e.nativeEvent;

    const { width, height } = target as HTMLImageElement;

    // Calculate the percentage of the click position relative to the image
    const xPercent = (clickOffsetX / width) * 100;
    const yPercent = (clickOffsetY / height) * 100;

    setOffsetX(xPercent);
    setOffsetY(yPercent);

    if (zoom && zoomedImage === imageType) {
      // If already zoomed on this image, zoom out
      setZoom(false);
      setZoomedImage(null);
    } else {
      // Zoom in on the clicked image
      setZoom(true);
      setZoomedImage(imageType);
    }
  };

  const zoomStyles = zoom
    ? {
        transformOrigin: `${offsetX}% ${offsetY}%`,
        transform: `scale(${zoomLevel})`, // Adjust the zoom scale factor here
      }
    : {};

  const handleSetZoomLevel = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "0") {
      return;
    }

    setZoomLevel(parseInt(e.target.value));
  };

  return {
    zoomStyles,
    handleDoubleClick,
    zoom,
    zoomedImage,
    handleSetZoomLevel,
    zoomLevel,
  };
};
