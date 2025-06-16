import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import './galerie.css';

const GalerieMasonry = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get('http://localhost:1337/api/galeries?populate=images');
        const data = res.data.data;

        const urls = data.flatMap(gallery =>
          gallery.images.map(img => img.url)
        );

        setImages(urls);
      } catch (error) {
        console.error('Erreur API :', error);
      }
    };

    fetchImages();
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    800: 2,
    500: 1
  };

  return (
    <div className="galerie-masonry">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((url, index) => (
          <div key={index} className="masonry-item">
            <LazyLoadImage
              src={`http://localhost:1337${url}`}
              alt={`Image ${index}`}
              effect="opacity"
              className="masonry-image"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default GalerieMasonry;
