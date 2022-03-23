import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import {styled as mstyled } from '@mui/material/styles'

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box'
import FullWidthTabs from '../../components/homeTabView'
import { ColorConstants, ImageURLs } from '../../constants/Constants';
import Divider from '@mui/material/Divider';
import About from '../about';
import PriorCompanies from '../../components/priorCompanies';

const siteLogo = ImageURLs.csg_s3_site_images + ImageURLs.csg_logo_blend

const BlackContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${ColorConstants.black};
    padding-bottom: 10vw; 
`
const BlackContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${ColorConstants.black};
    align-items: center; 
    
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
    margin: 2vw;
    font-family: 'Montserrat', sans-serif;
`
const ImageBackground = styled.div`
    background-image: url(${siteLogo});
    background-size: contain;
`
const CustomColor = styled.span`
    color: ${ColorConstants.blue1};
    font-weight: 700;
`
const WhiteDivider = mstyled(Divider)`
    background-color: ${ColorConstants.blue1};
`

export default function Home() {
      return (
          <>
        <BlackContainer>
            <Title>Cougar Strategy Group</Title>
            <Subtitle><CustomColor>WELCOME ABOARD.</CustomColor></Subtitle>
        </BlackContainer>
        <WhiteDivider />
        <BlackContainer2>
            <About />
            <WhiteDivider />
            <Subtitle>Specialty Areas</Subtitle>
            <Box display='flex' sx={{width: '75%', mx: 'None'}} 
                alignItems="center"
                justifyContent="center">
                <FullWidthTabs />
            </Box>
        </BlackContainer2>
        <WhiteDivider />
        <BlackContainer2>
            <Title>A Trusted Partner</Title>
            <Subtitle><CustomColor>Dozens of Clients Consulted</CustomColor></Subtitle>
            <PriorCompanies />
        </BlackContainer2>
        </>
      );
    }
    

