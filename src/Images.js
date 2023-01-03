import React, { useState, useEffect } from "react";

import { Galleria } from "primereact/galleria";
import { ImageBrance } from "./ImageBrance";

const Images = () => {
  const [images, setImages] = useState(null);
  const galleriaService = new ImageBrance();

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];

  useEffect(() => {
    galleriaService.getImages().then((data) => setImages(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const itemTemplate = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={item.alt}
        style={{ width: "100%", display: "block" }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={item.alt}
        style={{ display: "block" }}
      />
    );
  };

  return (
    <div>
      <div>
        <div className="card">
          <h5>Item Navigators and Thumbnails</h5>
          <Galleria
            value={images}
            responsiveOptions={responsiveOptions}
            numVisible={5}
            circular
            style={{ maxWidth: "640px" }}
            showItemNavigators
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
          />
        </div>

        <div className="card">
          <h5>Item Navigators without Thumbnails</h5>
          <Galleria
            value={images}
            responsiveOptions={responsiveOptions}
            numVisible={5}
            circular
            style={{ maxWidth: "640px" }}
            showItemNavigators
            showThumbnails={false}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
          />
        </div>

        <div className="card">
          <h5>Item Navigators on Hover</h5>
          <Galleria
            value={images}
            responsiveOptions={responsiveOptions}
            numVisible={5}
            circular
            style={{ maxWidth: "640px" }}
            showItemNavigators
            showItemNavigatorsOnHover
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
          />
        </div>

        <div className="card">
          <h5>Item Navigators and Indicators</h5>
          <Galleria
            value={images}
            responsiveOptions={responsiveOptions}
            numVisible={5}
            circular
            style={{ maxWidth: "640px" }}
            showItemNavigators
            showThumbnails={false}
            showItemNavigatorsOnHover
            showIndicators
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
