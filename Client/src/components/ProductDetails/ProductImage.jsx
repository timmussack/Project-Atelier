import React from 'react';
import { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaExpand, FaSearch } from 'react-icons/fa';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import styled from 'styled-components';
// import Carousel from './Carousel.jsx'


const ProductImage = ({styles, defaultStyle}) => {
  const [currentImage, setCurrentImage] = useState('');
  const [photoIndex, setPhotoIndex] = useState(0);
  const [thumbnailArray, setThumbnailArray] = useState([]);
  const [showItems, setShowItems] = useState(6);
  const [thumbnailDown, setThumbnailDown] = useState(false);
  const [thumbnailUp, setThumbnailUp] = useState(false);
  const [startingIndex, setStartingIndex] = useState(0);

  console.log(thumbnailArray.length)

  const moveThumbnailsUp = (e) => {
    if (showItems === 6) {
      let index = photoIndex - 1
      setPhotoIndex(index);
      setCurrentImage(thumbnailArray[index]);
    } else {
      let index = photoIndex - 1
      setPhotoIndex(index);
      setCurrentImage(thumbnailArray[index]);
      console.log(`index inside thumbs up: ${index}`);
      setStartingIndex(startingIndex - 1);
      setShowItems(showItems - 1);
      setThumbnailUp(true);
    }

    // if (index <= 4) {
    //   setStartingIndex(startingIndex - 1);
    //   setShowItems(showItems - 1);
    //   setThumbnailUp(true);
    // } else if (index < 4) {
    //   setStartingIndex(startingIndex - 1);
    //   setShowItems(showItems - 1);
    // } else if (index === 0) {
    //   setStartingIndex(0);
    //   setThumbnailUp(false);
    // }
  };

  console.log(`Current Starting Index: ${startingIndex}`);
  console.log(`Current ShowItems: ${showItems}`);

  const moveThumbnailsDown = (e) => {
      if (showItems === thumbnailArray.length - 1 || showItems === thumbnailArray.length) {
        let index = photoIndex + 1
        setPhotoIndex(index);
        setCurrentImage(thumbnailArray[index]);
      } else {
        setStartingIndex(startingIndex + 1)
        setShowItems(showItems + 1);
        setThumbnailDown(true);
        let index = photoIndex + 1
        setPhotoIndex(index);
        setCurrentImage(thumbnailArray[index]);
        console.log(`index inside thumbs down: ${index}`);
      }
    // if (index >= 7) {
    //   setStartingIndex(startingIndex + 1)
    //   setShowItems(showItems + 1);
    //   setThumbnailDown(true);
    // } else if (index === thumbnailArray.length -1) {
    //   setStartingIndex(index);
    //   setThumbnailDown(false);
    // }

  };

  const createThumbnailArray = () => {
    var temp = [];
    defaultStyle.photos.forEach((image) => {
      temp.push(image.thumbnail_url);
    })
    setThumbnailArray(temp);
  }




  useEffect(() => {
    if (defaultStyle.photos) {
      // setdefaultStyle(defaultStyle.photos);
      let firstImage = defaultStyle.photos[photoIndex].url
      if (firstImage === null) {
        firstImage = 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg'
      }
      setCurrentImage(firstImage);
      createThumbnailArray()

      // createThumbnailArray(defaultStyle.photos);
      // setLengthOfdefaultStyle(defaultStyle.length)
    }
  }, [defaultStyle])

  const handleClick = (image, index) => {
    setCurrentImage(image);
    setPhotoIndex(index);
  }


  const handleLeftArrowClick = (event) => {
    let index = photoIndex - 1
    setPhotoIndex(index);
    setCurrentImage(thumbnailArray[index]);
  }

  const handleRightArrowClick = (event) => {
    let index = photoIndex + 1
    setPhotoIndex(index);
    setCurrentImage(thumbnailArray[index]);
  }

  return (
    <div className="container">
      <div className="left">
        <div className="left_1">
          {
            thumbnailArray.length && photoIndex !== 0 &&
            < div
              style={{paddingLeft: "35%"}}
              onClick={moveThumbnailsUp}>
              <FaAngleUp />
            </div>
          }
          { thumbnailArray.length &&
            thumbnailArray.map((image, index) => {
              if (thumbnailDown) {
                  while (index >= startingIndex &&  index <= showItems) {
                    return (
                      <div
                        className={index === photoIndex ? "img_wrap active" : "img_wrap"}
                        key={index}
                        onClick={() => handleClick(image, index)}
                        >
                        <img src={image} alt="" />
                      </div>
                    )
                  }
              } else if (thumbnailUp) {
                while (index >= startingIndex && index <= showItems) {
                  return (
                    <div
                      className={index === photoIndex ? "img_wrap active" : "img_wrap"}
                      key={index}
                      onClick={() => handleClick(image, index)}
                      >
                      <img src={image} alt="" />
                    </div>
                  )
                }
              } else {
                while (index <= showItems) {
                  return (
                    <div
                      className={index === photoIndex ? "img_wrap active" : "img_wrap"}
                      key={index}
                      onClick={() => handleClick(image, index)}
                      >
                      <img src={image} alt="" />
                    </div>
                  )
                }
              }
            })
          }
          {
            thumbnailArray.length && photoIndex !== thumbnailArray.length -1 &&
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