import React from 'react';
import { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaExpand, FaSearch } from 'react-icons/fa';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import styled from 'styled-components';
// import Carousel from './Carousel.jsx'


const ProductImage = ({styles, defaultStyle}) => {
  const [currentImage, setCurrentImage] = useState('');
  const [photoIndex, setPhotoIndex] = useState(0);
  const [carouselArray, setCarouselArray] = useState([]);


  const moveThumbnailsUp = (e) => {
    let image = carouselArray[0];
    let tempArray = carouselArray.slice(1);
    tempArray.push(image);
    setCarouselArray(tempArray);
  };





  const moveThumbnailsDown = (e) => {
    let image = carouselArray[carouselArray.length - 1];
    let tempArray = carouselArray.slice(0, -1);
    tempArray.unshift(image);
    setCarouselArray(tempArray);
  };




  useEffect(() => {
    if (defaultStyle.photos) {
      // setdefaultStyle(defaultStyle.photos);
      let firstImage = defaultStyle.photos[photoIndex].url
      if (firstImage === null) {
        firstImage = 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg'
      }
      setCurrentImage(firstImage);
      setCarouselArray(styles);

      // createThumbnailArray(defaultStyle.photos);
      // setLengthOfdefaultStyle(defaultStyle.length)
    }
  }, [defaultStyle])

  const handleClick = (image, index) => {
    setCurrentImage(image.url);
    setPhotoIndex(index);
  }


  const handleLeftArrowClick = (event) => {
    let index = photoIndex - 1
    setPhotoIndex(index);
    setCurrentImage(defaultStyle.photos[index].url);
  }

  const handleRightArrowClick = (event) => {
    let index = photoIndex + 1
    setPhotoIndex(index);
    setCurrentImage(defaultStyle.photos[index].url);
  }

  return (
    <div className="container">
      <div className="left">
        <div className="left_1">
          {
            photoIndex !== 0 &&
            < div
              style={{paddingLeft: "35%"}}
              onClick={moveThumbnailsUp}>
              <FaAngleUp />
            </div>
          }
          { defaultStyle.photos &&
            defaultStyle.photos.map((image, index) => {
              return (
                <div
                  className={index === photoIndex ? "img_wrap active" : "img_wrap"}
                  key={index}
                  onClick={() => handleClick(image, index)}
                  >
                  <img src={image.thumbnail_url} alt="" />
                </div>
              )
            })
          }
          {
            defaultStyle.photos && photoIndex !== defaultStyle.photos.length -1 &&
            <div
              style={{paddingLeft: "35%"}}
              onClick={moveThumbnailsDown}>
              <FaAngleDown />
            </div>
          }
        </div>
        <div className="left_2">
          {
            photoIndex !== 0 &&
            <FaAngleLeft
              className="left-arrow"
              onClick={(e) => handleLeftArrowClick(e)}/>
          }
          {
            defaultStyle.photos && photoIndex !== defaultStyle.photos.length -1 &&
            <FaAngleRight
              className="right-arrow"
              onClick={(e) => handleRightArrowClick(e)}/>
          }
          <img src={currentImage} alt="" />
        </div>
        <div className="left_3">
          <h3>Title of item</h3>
        </div>
      </div>
    </div>
  )


}

export default ProductImage;