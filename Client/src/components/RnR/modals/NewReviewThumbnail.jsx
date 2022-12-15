import styled, { css } from 'styled-components';
import React, { useState, useEffect } from 'react';

export default function NewReviewThumbnail ({ thumbnails }) {

    if (thumbnails.length) {
        return (
            <>
                {thumbnails.map((url, index) => {
                    console.log(url)
                    return (
                        <img src={url} key={index}
                        style={{maxWidth: "130px", border: "1px solid", marginBottom: "19px", boxShadow: 'black 3px 1px 5px'}}/>
                    )
                })}
            </>
        )
    }
    return (
         <div>
            <img src={null}/>
        </div>
    )
}