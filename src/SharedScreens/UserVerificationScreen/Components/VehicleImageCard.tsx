import React, { FC, useState } from "react";
import { imageUrl } from "../../../Core/url";

type VehicleImageCard = {
  lable: string | null;
  docImage: {
    frontImage: string | null;
    backImage: string | null;
    leftImage: string | null;
    rightImage: string | null;
    helmetImage: string | null;
    numberImage: string | null;
  };
};

const VehicleImageCard: FC<VehicleImageCard> = ({ lable, docImage }) => {
  const [zoomLevel, setZoomLevel] = useState(3);
  const [zoom, setZoom] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<
    "front" | "back" | "left" | "right" | "helmet" | "number" | null
  >(null);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleSetZoomLevel = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "0") {
      return;
    }

    setZoomLevel(parseInt(e.target.value));
  };

  const handleDoubleClick = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    imageType: "front" | "back" | "left" | "right" | "helmet" | "number"
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

  return (
    <div className="w-full h-full flex flex-col gap-3">
      <div className="">
        {!zoom && (
          <input
            type="number"
            name=""
            id=""
            className="w-full h-[40px] border px-4 outline-none text-xl"
            value={zoomLevel}
            onChange={handleSetZoomLevel}
          />
        )}
      </div>
      <div className="flex flex-wrap gap-4 w-full">
        {docImage?.frontImage &&
          lable &&
          (!zoom || zoomedImage === "front") && (
            <img
              src={`${imageUrl}/${docImage?.frontImage}`}
              className={`w-[30%] h-auto max-h-[40%] object-contain border border-gray-400 p-2 ${
                zoom && zoomedImage === "front"
                  ? "cursor-zoom-out  w-[80%]"
                  : ""
              }`}
              alt={lable}
              onDoubleClick={(e) => handleDoubleClick(e, "front")}
              style={zoomedImage === "front" ? zoomStyles : {}}
            />
          )}
        {/* back */}
        {docImage?.backImage && lable && (!zoom || zoomedImage === "back") && (
          <img
            src={`${imageUrl}/${docImage?.backImage}`}
            className={`w-[30%] h-auto max-h-[40%] object-contain border border-gray-400 p-2 ${
              zoom && zoomedImage === "back" ? "cursor-zoom-out w-[100%]" : ""
            }`}
            alt={lable}
            onDoubleClick={(e) => handleDoubleClick(e, "back")}
            style={zoomedImage === "back" ? zoomStyles : {}}
          />
        )}
        {docImage?.leftImage && lable && (!zoom || zoomedImage === "left") && (
          <img
            src={`${imageUrl}/${docImage?.leftImage}`}
            className={`w-[30%] h-auto max-h-[40%] object-contain border border-gray-400 p-2 ${
              zoom && zoomedImage === "left" ? "cursor-zoom-out w-[100%]" : ""
            }`}
            alt={lable}
            onDoubleClick={(e) => handleDoubleClick(e, "left")}
            style={zoomedImage === "left" ? zoomStyles : {}}
          />
        )}
        {/* right image */}
        {docImage?.rightImage &&
          lable &&
          (!zoom || zoomedImage === "right") && (
            <img
              src={`${imageUrl}/${docImage?.rightImage}`}
              className={`w-[30%] h-auto max-h-[40%] object-contain border border-gray-400 p-2 ${
                zoom && zoomedImage === "right"
                  ? "cursor-zoom-out w-[100%]"
                  : ""
              }`}
              alt={lable}
              onDoubleClick={(e) => handleDoubleClick(e, "right")}
              style={zoomedImage === "right" ? zoomStyles : {}}
            />
          )}
        {/* helmet */}
        {docImage?.helmetImage &&
          lable &&
          (!zoom || zoomedImage === "helmet") && (
            <img
              src={`${imageUrl}/${docImage?.helmetImage}`}
              className={`w-[30%] h-auto max-h-[40%] object-contain border border-gray-400 p-2 ${
                zoom && zoomedImage === "helmet"
                  ? "cursor-zoom-out w-[100%]"
                  : ""
              }`}
              alt={lable}
              onDoubleClick={(e) => handleDoubleClick(e, "helmet")}
              style={zoomedImage === "helmet" ? zoomStyles : {}}
            />
          )}
        {/* number plate */}
        {docImage?.numberImage &&
          lable &&
          (!zoom || zoomedImage === "number") && (
            <img
              src={`${imageUrl}/${docImage?.numberImage}`}
              className={`w-[30%] h-auto max-h-[40%] object-contain border border-gray-400 p-2 ${
                zoom && zoomedImage === "number"
                  ? "cursor-zoom-out w-[100%]"
                  : ""
              }`}
              alt={lable}
              onDoubleClick={(e) => handleDoubleClick(e, "number")}
              style={zoomedImage === "number" ? zoomStyles : {}}
            />
          )}
      </div>
    </div>
  );
};

export default VehicleImageCard;
