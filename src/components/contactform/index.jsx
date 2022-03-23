import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import styled from 'styled-components'
import { styled as mstyled }from '@mui/material/styles'
import { ColorConstants } from '../../constants/Constants';

const Paragraph = styled.p`
    font-size: .8vw; 
    font-family: 'Montserrat' bold; 
`
const Container = styled.div`
    justify-content: center;
    background-color: ${ColorConstants.blue4}
`
const StyledBox = mstyled(Box)`
    opacity: 95%;
    border-radius: 12px; 
`

export default function ContactForm() {

  return (
      <Container>  
        <Box display='flex' sx={{width: '75%', mx: 'None'}} 
            alignItems="center"
            justifyContent="center"
        >
        <StyledBox sx={{ display: 'flex', flexWrap: 'wrap', p: 2, m: 10}} alignItems='center' justifyContent='center' bgcolor={ColorConstants.white}>
        <div>
            <Paragraph>We are excited to grow with you. Fill out this form and we will get in touch.</Paragraph>
            <TextField id="outlined-required" label="First Name" variant="outlined" placeholder='First Name' sx={{ m: 1, width: '50ch' }}/>
            <TextField id="outlined-required" label="Last Name" variant="outlined" placeholder='Last Name' sx={{ m: 1, width: '50ch' }} />

            <TextField id="outlined-required" label="Email" variant="outlined" placeholder='example@site.com' sx={{ m: 1, width: '50ch' }}/>
            <TextField id="outlined-required" label="Company" variant="outlined" placeholder='Google' sx={{ m: 1, width: '25ch' }}/>
            
            <FormControl fullWidth sx={{ m: 1, width: '75ch' }}>
                <TextField id="outlined-required" label="Description of Project" variant="outlined" placeholder='Description' multiline/>
            </FormControl>
            <FormControl fullWidth sx={{ m: 1, width: '75ch' }}>
                <TextField id="outlined-required" label="How did you hear about us?" variant="outlined" placeholder='' multiline/>
            </FormControl><br></br>
            <Button variant="contained" sx={{ p: 1}}>Submit</Button>
        </div>
        
        </StyledBox>
        </Box>
    </Container>
  );
}