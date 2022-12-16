import styled, { css } from 'styled-components';
import React, { useState, useEffect } from 'react';

export default function NewReviewThumbnail ({ thumbnails }) {


        return (
            <>
                {thumbnails.map((url, index) => {
                    return (
                        <img src={url} key={index}
                        style={{maxWidth: "130px",
                        border: "1px solid",
                        marginTop: '10px',
                        marginBottom: "10px",
                        marginRight: "5px",
                        boxShadow: 'black 3px 1px 5px',
                        display: 'flex',
                        justifyContent: 'flex-start'
                    }}/>
                    )
                })}
            </>
        )
}