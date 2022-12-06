import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';



const Carousel = ({ photoIndex, changePhotoToThumbnail, sendThumbnailDown, sendThumbnailUp, imageArray, thumbnailArray }) => {
  const [carouselArray, setCarouselArray] = useState([]);
  const [indexObj, setIndexObj] = useState({ start: 0, end: 3 });
  const numberOfDisplayedThumbnails = 7;

  const Thumbnails = styled.div`
  background-image: url(${props => props.img});
  border: ${props => props.photoIndex === props.origIndex ? 'solid white 2px' : 'none'};
  border-bottom: ${props => props.photoIndex === props.origIndex ? 'solid white 5px' : 'none'};
  background-position: center;
  background-size:cover;
    margin: 2 px;
    height: 75px;
    width: 75px;
  object-fit: cover;
  cursor: pointer;
`;

  useEffect(() => {
    let tempArray = thumbnailArray.slice();
    setCarouselArray(tempArray);
  }, [thumbnailArray]);

const PhotoColumn = styled.div`
  cursor: auto;
  display: flex;
  margin-left: 30%;
  flex-direction: column;
  grid-row-start 2;
  grid-row-end: 10;
  align-items: center;
`;

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

  return (
    <PhotoColumn>
      <div onClick={moveThumbnailsUp}>
        <FaAngleUp />
      </div>
      {carouselArray.map((photo, index) => {
        let originalIndex = photo.originalIndex;
        let pictureUrl = photo.thumbnail_url;
        if (index < numberOfDisplayedThumbnails && index >=0) {
          return (
            <Thumbnails
              data-id="thumbnail_pic"
              key={index}
              origIndex={originalIndex}
              photoIndex={photoIndex}
              onClick={(event) => { changePhotoToThumbnail(originalIndex); }}
              img={pictureUrl}>
            </Thumbnails>
          )
        }
      })}
      <div onClick={moveThumbnailsDown}><FaAngleDown /></div>
    </PhotoColumn>
  )
}

// export default Carousel