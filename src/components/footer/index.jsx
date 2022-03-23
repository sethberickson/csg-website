import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { ColorConstants } from '../../constants/Constants'
import styled from 'styled-components';

const Copyright = styled.p`
  font-size: .5vm; 
  color: ${ColorConstants.black};
  text-align: center; 
`
const WhiteContainer = styled.div`
  background-color: ${ColorConstants.white};
`

export default function Footer() {
  const [value, setValue] = React.useState(0);
  let navigate = useNavigate();

  return (
    <WhiteContainer>
      <Box sx={{ width: 1, bgcolor: ColorConstants.black }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          
          <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => {navigate('/home')}} />
          <BottomNavigationAction label="Team" icon={<GroupsIcon />} onClick={() => {navigate('/team')}} />
          <BottomNavigationAction label="Contact" icon={<ContactMailIcon />} onClick={() => {navigate('/contact')}}/>
        </BottomNavigation>
        
      </Box>
      <Copyright>&copy;CougarStrategyGroup.com</Copyright>
    </WhiteContainer>
  );
}

