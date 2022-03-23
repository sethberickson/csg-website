import * as React from 'react';

import styled from 'styled-components'
import { styled as mstyled } from '@mui/material/styles'
import Box from '@mui/material/Box'

import ContactForm from '../../components/contactform';
import { ColorConstants } from '../../constants/Constants';

const PageContainer = styled.div`
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

export default function Home() {
      return (
        <PageContainer>
          <Title>Contact Us</Title>
          <Subtitle>Start Growing Today</Subtitle>
            <ContactForm />
        </PageContainer>
      );
    }
    

   

