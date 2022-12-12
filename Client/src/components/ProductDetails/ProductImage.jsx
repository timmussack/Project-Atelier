import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { FaAngleLeft, FaAngleRight, FaExpand, FaSearch } from 'react-icons/fa';
import {MdArrowCircleUp, MdArrowCircleDown} from 'react-icons/md'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import styled from 'styled-components';
import Stars from '../RnR/Stars.jsx';
import Dropdown from './Dropdown.jsx';


const ProductImage = ({styles, defaultStyle, productData, rating}) => {
  const [currentImage, setCurrentImage] = useState('');
  const [currentStyle, setCurrentStyle] = useState({});
  const [photoIndex, setPhotoIndex] = useState(0);
  const [thumbnailArray, setThumbnailArray] = useState([]);
  const [showItems, setShowItems] = useState(6);
  const [thumbnailDown, setThumbnailDown] = useState(false);
  const [thumbnailUp, setThumbnailUp] = useState(false);
  const [startingIndex, setStartingIndex] = useState(0);
  const [imageArray, setImageArray] = useState([]);
  const [isExpanded, setExpandedView] = useState(false);


  const onZoom = useCallback((e) => {
    let x = (e.clientX - e.target.offsetLeft) / e.target.width * 100;
    let y = (e.clientY - e.target.offsetTop) / e.target.height * 100;
    // if (x > 900) {
    //   x = 1200
    // }
    // if (x < 400) {
    //   x = 0
    // }

    // if (y < 225) {
    //   y = 0
    // }
    //  if (y > 525) {
    //   y = 700
    //  }

    if (x > 100) {
      x = 100
    }


    if (y > 100) {
      y = 100
    }
    console.log(x, y)


    e.target.style.transformOrigin = `${x}% ${y}%`
    e.target.style.transform = "scale(2.5, 2.5)";

  }, [])

  const offZoom = useCallback((e) => {
    const img = document.getElementsByClassName('mainimage')
    img[0].style.transformOrigin = `center center`;
    img[0].style.transform = "scale(1)";
  }, [])

  const handleExpand = () => {
    let picture = document.getElementsByClassName('mainimage');
    if (!isExpanded) {
      setExpandedView(!isExpanded);
      picture[0].addEventListener('mousemove', onZoom, true);
      var element = document.getElementsByClassName('left_3');
      element[0].style.visibility = 'hidden'
    } else {
      picture[0].removeEventListener('mousemove',onZoom, true);
      picture[0].style.transformOrigin = `center center`;
      picture[0].style.transform = "scale(1)";
      setExpandedView(!isExpanded);
      var element = document.getElementsByClassName('left_3');
      element[0].style.visibility = 'visible';

    }
  }




  const moveThumbnailsUp = (e) => {
    if (showItems === 6) {
      let index = photoIndex - 1
      setPhotoIndex(index);
      setCurrentImage(imageArray[index]);
    } else {
      let index = photoIndex - 1
      setPhotoIndex(index);
      setCurrentImage(imageArray[index]);
      console.log(`index inside thumbs up: ${index}`);
      setStartingIndex(startingIndex - 1);
      setShowItems(showItems - 1);
      setThumbnailUp(true);
    }
  };

  const moveThumbnailsDown = (e) => {
      if (showItems === thumbnailArray.length - 1 || showItems === thumbnailArray.length) {
        let index = photoIndex + 1
        setPhotoIndex(index);
        setCurrentImage(imageArray[index]);
      } else {
        setStartingIndex(startingIndex + 1)
        setShowItems(showItems + 1);
        setThumbnailDown(true);
        let index = photoIndex + 1
        setPhotoIndex(index);
        setCurrentImage(imageArray[index]);
        console.log(`index inside thumbs down: ${index}`);
      }

  };

  const createThumbnailArray = (style) => {
    if (!style) {
      var temp = [];
      var temp2 = []
      defaultStyle.photos.forEach((image) => {
        temp.push(image.thumbnail_url);
        temp2.push(image.url);
      })
      setThumbnailArray(temp);
      setImageArray(temp2);
    } else {
      var temp = [];
      var temp2 = [];
      style.photos.forEach((image) => {
        temp.push(image.thumbnail_url);
        temp2.push(image.url);
      })
      setThumbnailArray(temp);
      setImageArray(temp2);
    }
  }


  const handleStyleChange = (style) => {
    createThumbnailArray(style);
    setCurrentImage(style.photos[0].url);
    setPhotoIndex(0);
    setShowItems(6);
    setStartingIndex(0);
    setThumbnailDown(false);
    setThumbnailUp(false);
    setCurrentStyle(style)
  }


  useEffect(() => {
    if (defaultStyle.photos) {
      // setdefaultStyle(defaultStyle.photos);
      let firstImage = defaultStyle.photos[photoIndex].url
      if (firstImage === null) {
        firstImage = 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg'
      }
      setCurrentStyle(defaultStyle);
      setCurrentImage(firstImage);
      createThumbnailArray()

      // createThumbnailArray(defaultStyle.photos);
      // setLengthOfdefaultStyle(defaultStyle.length)
    }
  }, [defaultStyle])

  const handleClick = (image, index) => {
    setCurrentImage(imageArray[index]);
    setPhotoIndex(index);
  }


  const handleLeftArrowClick = (event) => {
    let index = photoIndex - 1
    setPhotoIndex(index);
    setCurrentImage(imageArray[index]);
  }

  const handleRightArrowClick = (event) => {
    let index = photoIndex + 1
    setPhotoIndex(index);
    setCurrentImage(imageArray[index]);
  }

  return (
    <div className="container">
      <div className="left" style={ isExpanded ? {cursor: 'zoom-out'}: {}}>
        <div className="left_1">
          {
            thumbnailArray.length && photoIndex !== 0 &&
            < div
              style={{alignSelf: "center"}}
              onClick={moveThumbnailsUp}>
              <MdArrowCircleUp id="thumbnailArrow"/>
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
              style={{alignSelf: "center"}}
              onClick={moveThumbnailsDown}>
              <MdArrowCircleDown id="thumbnailArrow" />
            </div>
          }
        </div>
        <div className="left_2" id={isExpanded ? 'expandedview' : ''}>
          {
            photoIndex !== 0 &&
            <FaAngleLeft
              className="left-arrow"
              onClick={moveThumbnailsUp}/>
          }
          {
            defaultStyle.photos && photoIndex !== defaultStyle.photos.length -1 &&
            <FaAngleRight
              className="right-arrow"
              onClick={moveThumbnailsDown}/>
          }

          <img  className="mainimage" id={isExpanded ? 'expandwidth' : ''}onClick={() => handleExpand()} src={currentImage} alt="default image" />
        </div>
        <div className="left_3">
          <Stars rating={rating} />
          <h1>{productData.category}</h1>
          <h1>{productData.name}</h1>
          {
            currentStyle.sale_price ?
            <>
              <del>${currentStyle.original_price}</del>
              <a id='originalprice'>${currentStyle.sale_price}</a>
            </>
            : <a>${currentStyle.original_price}</a>
          }

          <div style={{paddingTop: '10px'}}><a>Style > <strong>{currentStyle.name}</strong></a></div>
          <ul className="stylelist">
            {
              styles.map((style, index) => {
                if (index === 0) {
                  return (
                    <li>
                    <label for={index}>
                      <input type="radio"  name="style" defaultChecked id={index} onChange={() => {handleStyleChange(style)}}/>
                        <img src={style.photos[0].thumbnail_url}/>
                    </label>
                  </li>
                  )
                }
                return (
                  <li>
                    <label for={index}>
                      <input type="radio"  name="style" id={index} onChange={() => {handleStyleChange(style)}}/>
                        <img src={style.photos[0].thumbnail_url}/>
                    </label>
                  </li>
                )
              })
            }
          </ul>
          <div className="addToCartContainer">
            <Dropdown currentStyle={currentStyle}/>
          </div>
        </div>
      </div>
    </div>
  )


}

export default ProductImage;