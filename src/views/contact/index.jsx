import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import { styled as mstyled } from '@mui/material/styles'
// import { Container } from '@mui/material'

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Avatar from '@mui/material/Avatar'

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const PersonAvatar = mstyled(Avatar)`
    width: 200px;
    height: 200px;
    background-color: #000000;
`
const PersonCard = styled.img`
  width: 200px; 
  height: 200px; 
  object-fit: cover; 
`

export default function Home() {
      return (
        <PageContainer>
            <ImageList sx={{ width: 1, height: 1, flexDirection: "column"}} cols={5}>
                {itemData.map((item) => (
                  <PersonAvatar variant="rounded">
                    <ImageListItem>
                      <PersonCard
                          src={item.img}
                          alt={item.img}
                          loading="lazy"
                      />
                      <ImageListItemBar
                        title={item.title}
                        subtitle={<span>by: {item.author}</span>}
                        position="bottom"
                      />
                    </ImageListItem>
                  </PersonAvatar>
                ))}
            </ImageList>
        </PageContainer>
      );
    }
    
    const itemData = [
      {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
      },
      {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
      },
      {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
      },
      {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
      },
      {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
      },
      {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
      },
      {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
      },
      {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
      },
      {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
      },
      {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
      },
      {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
      },
      {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
      },
    ];
    

