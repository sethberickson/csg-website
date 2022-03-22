import styled from 'styled-components'
import { styled as mstyled } from '@mui/material/styles'

import * as React from 'react';
import CustomizedTimeline from '../../components/timeline'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ColorConstants, ImageURLs } from '../../constants/Constants';
import '../../App.css'

const siteLogo = ImageURLs.csg_s3_site_images + ImageURLs.csg_logo_blue_fade

const BlackContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${ColorConstants.black};
    font-family: 'Montserrat', sans-serif;
`

const WhiteContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${ColorConstants.white}; 
`

const Title = styled.p`
    font-family: 'Montserrat';
    font-size: 7vw;
    color: ${ColorConstants.white};  
    text-align: center;
`

const Subtitle = styled.p`
    font-size: 2vw;
    color: ${ColorConstants.white};
    text-align: center; 
    margin: .05;
`
const HorizontalContainer = mstyled(Box)`
    background-color: ${ColorConstants.black}
`
const Heading = styled.p`
    font-size: 6vw;
    font-family: 'Montserrat';
    text-align: center;
    color: ${ColorConstants.white};
`
const Subheading = styled.p`
    font-size: 2vw;
    font-family: 'Montserrat';
    text-align: center;
    color: ${ColorConstants.white};
`

const CustomColor = styled.span`
    color: ${ColorConstants.blue1};
    font-weight: 700;
`
const CustomOrange = styled.span`
    color: ${ColorConstants.orange1};
    font-weight: 700;
`
const ImageBackground = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    
    padding-top: 50px; 
`

export default function About() {
      return (
          <>
        <BlackContainer>
            <Title>OUR MISSION.<br></br>
                YOUR SUCCESS.</Title>
            <Subtitle><CustomColor>CSG MISSION: </CustomColor>IDENTIFY STRATEGIC OPPORTUNITIES AND BUILD PLANS THAT <CustomOrange>ACCELERATE GROWTH</CustomOrange> FOR OUR CLIENTS.</Subtitle>
        </BlackContainer>
        <Divider />
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 12, 
                bgcolor: ColorConstants.black }}>
                <Heading>Why CSG
                    <Subheading>AS STUDENT-CONSULTANT TEAMS, WE EMPLOY A TIME-TESTED AND PROVEN METHODOLOGY TO HELP OUR CLIENTS ACCELERATE BUSINESS PERFORMANCE.</Subheading>
                </Heading>
                <CustomizedTimeline />


                <ImageBackground src={siteLogo} />

            </Grid>
        </Box>
        
        </>
      );
    }
    

