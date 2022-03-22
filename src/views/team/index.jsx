import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from '@mui/material/ImageListItemBar';
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
const PersonCard = styled.img`
  width: 200px; 
  height: 200px; 
  object-fit: cover;
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
        <ImageList sx={{ width: 1, height: 450, flexDirection: "column", mx: 'auto'}} cols={5}>
            {rows.map((item) => (
              <PersonAvatar variant="rounded">
                <ImageListItem>
                  <PersonCard
                      src={`images/${item.image}`}
                      alt={item.image}
                      loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.name}
                    subtitle={<span>{item.prior_work}</span>}
                    position="bottom"
                  />
                </ImageListItem>
              </PersonAvatar>
            ))}
        </ImageList>
    </PageContainer>
  );
}