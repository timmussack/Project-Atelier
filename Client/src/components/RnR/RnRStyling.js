import styled, { css } from 'styled-components';

// main parent
export const RNRTitle = styled.div`
  font-size: 16px;
  position:relative ;
  width: 1200px;
  margin: auto;
`;

export const RNRContainer = styled.div`
  font-family: Jost;
  position:relative;
  width: 1200px;
  margin: auto;
  display: flex;
  align-self:center;
`;

// Ratings
export const RatingsFormatting = styled.div`
  font-size: 14px;
  width: 430px;
  margin-right: 100px;
`;
export const LargeRating = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-right: 10px;
  font-size: 70px;
  font-weight: bold;
  height: 10%;
`;
export const RatingAndStars = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PercentRecc = styled.div`
  padding-bottom: 1em;
`;

// Reivew Body
export const ShowMoreButton = styled.button`
  background: transparent;
  border: 1px solid;
  cursor: pointer;
  text-decoration: underline;
  border: none;
  margin-bottom: 10px;
`;

export const BodyFormat = styled.div`
  font-size: 14px;
  font-strech: expanded;
  margin-bottom: 20px;
`;

// add review
export const MoreReviews = styled.button`
  font-family: Jost;
  background-color: white;
  color: black;
  margin: 0px 10px 60px 0px;
  height: 50px;
  width: 150px;
  border: 2px solid;
  border-color: #253954;
  cursor: pointer;
  font-weight: 700;
  box-shadow: black 3px 1px 5px;
  border-radius: 10px;
`;

export const AddReviewButton = styled.button`
  font-family: Jost;
  background-color: white;
  color: black;
  height: 50px;
  width: 150px;
  border: 2px solid;
  border-color: #253954;
  cursor: pointer;
  font-weight: 700;
  box-shadow: black 3px 1px 5px;
  border-radius: 10px;
`;

// review entry
export const EntryFormatting = styled.div`
  font-size: 14px;
  padding-bottom: 1em;
  &:after {
    content: '';
    background: black;
    height: 1px;
    width: 100%;
    display: flex;
    margin-top: 2em;
    margin-bottom: 2em;
  }
`;

export const EntryTitleMain = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 1em;
`;

// review footer
export const Helpful = styled.div`
  padding-right: 5px;
`;

export const Yes = styled.div`
  padding-right: 5px;
  text-decoration: underline;
  cursor: pointer;
`;

export const Spacer2 = styled.div`
  padding-right: 8px;
`;

export const FooterFormatting = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 11px;
`;

// review header
export const UsernameDate = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HeaderFormatting = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
`;

// Reviews
export const ReviewsFormatting = styled.div`
  width:100%
`;

// sort options
export const SortOptionsFormatting = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 35px;
`;

export const DropdownMenu = styled.select`
  border: none;
  text-decoration: underline;
  font-size: 16px;
  font-weight: bold;
  font-family: Jost;
`;

