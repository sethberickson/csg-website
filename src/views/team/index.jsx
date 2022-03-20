import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { styled as mstyled } from '@mui/material/styles'
import styled from 'styled-components'
import {Cloudinary} from 'cloudinary-core';
import Papa from 'papaparse'

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const PersonAvatar = mstyled(Avatar)`
    width: 200px;
    height: 200px;
    background-color: #000000;
`

export default function TeamPage() {
    
  // Create connection to CSG images
  const cloudinaryCore = new Cloudinary({ cloud_name: "cougarstrategygroup" });
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    async function getData() {
      const response = await fetch("consultants.csv");
      const reader = response.body.getReader();
      const result = await reader.read(); // raw array
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value); // the csv text
      // let csv = require('../../assets/csg-members/consultants.csv')

      const results = Papa.parse(csv, {
        header: true,
        delimiter: ",",
      }); // object with { data, errors, meta }
      const rows = results.data; // array of objects
      // const columns = results.meta.fields

      // Sort Rows in CSV alphabetically
      rows.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      setRows(rows);
    }
    getData();
  }, []); // [] means just do this once, after initial render

  return (
    <PageContainer>
        <ImageList sx={{ width: 1, height: 450 }} cols={5}>
        {itemData.map((item) => (
            <PersonAvatar variant="rounded">
                <ImageListItem key={item.name}>
                    <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.name}
                        loading="lazy"
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