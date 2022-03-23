import styled from 'styled-components'
import {styled as mstyled } from '@mui/material/styles'
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ColorConstants, ImageURLs } from '../../constants/Constants';
import { ImageList, ImageListItem } from '@mui/material';

const WhiteContainer = styled.div`
    width: 75%; 
    display: flex;
    flex-direction: column;
    background-color: ${ColorConstants.black};
    padding-bottom: 10vw; 
`
const Logo = styled.img`
    width: 95%; 
    text-align: center; 
    padding: 10px; 
    display: inline-block; 
    align-items: center; 
    justify-content: center; 
`
const LogoBox = mstyled(Box)`
    display: inline-block; 
    align-items: center; 
    justify-content: center; 
`

export default function PriorCompanies() {
    
    const companyList = [
        {name: "NuSkin", logo: "nuskin_logo.png"},
        {name: "Cotopaxi", logo: "cotopaxi_logo.png"},
        {name: "Weave", logo: "weave_logo.png"},
        {name: "Adobe", logo: "adobe_logo.png"},
        {name: "Vivint", logo: "vivint_logo.png"},
        {name: "Costa Vida", logo: "costa_vida_logo.png"},
        {name: "The Church of Jesus Christ of Latter-day Saints", logo: "cojc_logo.png"},
        {name: "Zions Bank", logo: "zions_bank_logo.png"},
    ]

    var logoURLs = []

    for(var i=0; i<companyList.length; i++) {
        logoURLs.push(`${ImageURLs.csg_company_logos}/${companyList[i].logo}`)
    }

    // React.useEffect(() => {
    //     inputRef.current.focus();
    //     axios.get(`${ImageURLs.csg_company_logos}/${id}`)
    //         .then((res) => {
    //             setImages(res.data);
    //         });
    // }, []);

    // function ShowImage() {
    //     return images.map((img, index) => (
    //         <img image={img} alt='not found' index={index} key={index} />
    //     ))
    // }

    return (
        <WhiteContainer>
                <ImageList 
                    variant="masronry"
                    cols={2}
                    // rowHeight={121}
                    >
                    {companyList.map((company, index) => (
                        <LogoBox sx={{ bgcolor: '#ffffff'}}>                        
                            <ImageListItem key={index} >
                                <Logo 
                                    src={`${logoURLs[index]}?w=248&fit=crop&auto=format`} 
                                    srcSet={`${logoURLs[index]}?w=248&fit=crop&auto=format&dpr=2 2x`} 
                                    alt={company.name} style={{ alignSelf: 'center' }} 
                                    loading="lazy"/>
                            </ImageListItem>
                        </LogoBox>
                    ))}
                </ImageList>
        </WhiteContainer>
    )
}