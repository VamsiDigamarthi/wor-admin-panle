import { FC } from "react";
import { imageUrl } from "../../../Core/url";
import { useDocsModalLeftHook } from "../hooks/DocsModalLeft.hook";

type DocsModalLeftType = {
  lable: string | null;
  docImage: {
    frontImage: string | null;
    backImage: string | null;
  };
};

const DocsModalLeft: FC<DocsModalLeftType> = ({ docImage, lable }) => {
  const {
    zoomStyles,
    handleDoubleClick,
    zoom,
    zoomedImage,
    handleSetZoomLevel,
    zoomLevel,
  } = useDocsModalLeftHook();
  return (
    <div className="w-[40%] h-full flex flex-col justify-center items-center gap-4 overflow-y-scroll">
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
      {docImage?.frontImage && lable && (!zoom || zoomedImage === "front") && (
        <img
          src={`${imageUrl}/${docImage?.frontImage}`}
          className={`w-[90%] h-auto max-h-[40%] object-contain ${
            zoom && zoomedImage === "front" ? "cursor-zoom-out" : ""
          }`}
          alt={lable}
          onDoubleClick={(e) => handleDoubleClick(e, "front")}
          style={zoomedImage === "front" ? zoomStyles : {}}
        />
      )}

      {docImage?.backImage && lable && (!zoom || zoomedImage === "back") && (
        <img
          src={`${imageUrl}/${docImage?.backImage}`}
          className={`w-[90%] h-auto max-h-[40%] object-contain ${
            zoom && zoomedImage === "back" ? "cursor-zoom-out" : ""
          }`}
          alt={lable}
          onDoubleClick={(e) => handleDoubleClick(e, "back")}
          style={zoomedImage === "back" ? zoomStyles : {}}
        />
      )}
    </div>
  );
};

export default DocsModalLeft;
