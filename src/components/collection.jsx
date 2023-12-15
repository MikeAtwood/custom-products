import '../../src/Gallery.css';
import { useState } from 'react';
import dummy1 from '../assets/galleryImg/dummy1.jpeg';
import dummy2 from '../assets/galleryImg/dummy2.jpeg';
import dummy3 from '../assets/galleryImg/dummy3.jpeg';
import dummy4 from '../assets/galleryImg/dummy4.jpeg';
import dummy5 from '../assets/galleryImg/dummy5.jpeg';
import dummy6 from '../assets/galleryImg/dummy6.jpeg';
import dummy7 from '../assets/galleryImg/dummy7.jpeg';
import dummy8 from '../assets/galleryImg/dummy8.jpeg';
import dummy9 from '../assets/galleryImg/dummy9.jpeg';
import dummy10 from '../assets/galleryImg/dummy10.jpeg';
import dummy11 from '../assets/galleryImg/dummy11.jpeg';

const Collection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const images = [
    { src: dummy1, alt: 'Image 1', text: 'Beautiful mulch landscaping' },
    { src: dummy2, alt: 'Image 2', text: 'Something nice to look at' },
    { src: dummy3, alt: 'Image 3', text: 'Something nice to look at' },
    { src: dummy4, alt: 'Image 4', text: 'Something nice to look at' },
    { src: dummy5, alt: 'Image 5', text: 'Something nice to look at' },
    { src: dummy11, alt: 'Image 11', text: 'Something nice to look at' },
    { src: dummy6, alt: 'Image 6', text: 'Something nice to look at' },
    { src: dummy7, alt: 'Image 7', text: 'Something nice to look at' },
    { src: dummy8, alt: 'Image 8', text: 'Something nice to look at' },
    { src: dummy9, alt: 'Image 9', text: 'Something nice to look at' },
    { src: dummy10, alt: 'Image 10', text: 'Something nice to look at' },
  ];

  return (
    <div className='imageContainer'>
      {images.map((image, index) => (
        <div
          key={index}
          className='imageContainer'
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={image.src} alt={image.alt} />
          {hoveredIndex === index && <div className='overlay'>{image.text}</div>}
        </div>
      ))}
    </div>
  );
};

export default Collection;