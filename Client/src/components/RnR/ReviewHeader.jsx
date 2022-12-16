import React from 'react';
import Stars from './Stars.jsx';
import { UsernameDate, HeaderFormatting } from './RnRStyling';

export default function ReviewHeader({rating, user, date}) {
  return (
    <HeaderFormatting>
      <Stars rating={rating}/>
      <UsernameDate>
        {user}, {date}
      </UsernameDate>
    </HeaderFormatting>
  )
};