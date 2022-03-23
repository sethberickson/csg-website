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
import { ColorConstants } from "../../constants/Constants";
import Badge from '@mui/material/Badge'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
  padding-bottom: 10px; 
`
const ImageGrid = mstyled(ImageList)`
  margin-bottom: 10px; 
  align
`
const BlackContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${ColorConstants.black}
`

const Title = styled.p`
    font-size: 7vw;
    color: ${ColorConstants.white}; 
    text-align: center;
    font-family: 'Montserrat';
`
const Subtitle = styled.p`
    font-size: 2vw;
    color: ${ColorConstants.white}; 
    text-align: center; 
    margin-top: -2vw;
    font-family: 'Montserrat', sans-serif;
`
const Subheading = styled.p`
    font-size: 1.5vw;
    font-family: 'Montserrat';
    text-align: center;
    color: ${ColorConstants.white};
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
        <Title>Team Overview</Title>
        <Subtitle>Who we are</Subtitle>
        <Subheading>Cougar Strategy Group is composed of the best of BYU's Marriott School of Business. Each junior partner is selected in their first year of the MBA program based on previous work experience, ability to understand and solve difficult problems, and interest in pursuing a career in strategy. The firm leverages training from world class professors and experienced program mentors to ensure that each partner is continually qualified. After successful completion of a client project and summer internship, junior partners are promoted to senior partner and assume management of the firm. With a diverse background in industry, company types, and functions, our partners bring expertise and creative solutions to meet each client's individual needs. </Subheading>
        <ImageGrid sx={{ width: 1, height: 1, flexDirection: "column", mx: 'auto' }} cols={5}>
            {rows.map((item) => (
              // <Badge badgeContent={<LinkedInIcon color="action" />} color="primary">
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
              // </Badge>
            ))}
        </ImageGrid>
    </PageContainer>
  );
}