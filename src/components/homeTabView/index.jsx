// import * as React from 'react';
// import PropTypes from 'prop-types';

// import { useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { styled as mstyled } from '@mui/material/styles'
// import styled from 'styled-components'
// import { ColorConstants } from '../../constants/Constants'

// const Paragraph = styled.p`
//     font-size: 2vw;
//     color: ${ColorConstants.black} 
//     text-align: center; 
//     background-color: #00b32c
//     margin: 2vw;
//     font-family: 'Montserrat', sans-serif;
// `

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }

// export default function FullWidthTabs() {
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   return (
//     <Box sx={{ bgcolor: 'background.paper', width: .9, textAlign: 'center', mx: 'auto' }} >
//       <AppBar position="static" sx={{ bgcolor: ColorConstants.blue1}}>
//         <Tabs
        
//           value={value}
//           onChange={handleChange}
//         //   indicatorColor="secondary"
//           textColor="inherit"
//           variant="fullWidth"
//           aria-label="full width tabs example"
//           TabIndicatorProps={{style: {background: ColorConstants.black}}}
//           centered
//         >
//           <Tab label="NEW PRODUCT & COMPETITOR ANALYSIS" {...a11yProps(0)} />
//           <Tab label="NEW MARKET ENTRY" {...a11yProps(1)} />
//           <Tab label="MERGERS & ACQUISITIONS DUE DILIGENCE" {...a11yProps(2)} />
//         </Tabs>
//       </AppBar>
//         <TabPanel value={value} index={0} dir={theme.direction}>
//             <Paragraph>
//                 Risks and rewards of launching and developing a new product can be substantial –understanding the customer’s perceptions of the value your product offerings and those of your competitors is critical. CSG can help you by conducting ‘boots on the ground’ due diligence and utilizing proprietary secondary research to inform your most important strategic decisions.
//             </Paragraph>
//         </TabPanel>
//         <TabPanel value={value} index={1} dir={theme.direction}>
//             <Paragraph>
//                 With customer preferences constantly in flux, insights into product demand and market potential can be the difference between you and your competitors. CSG help can you by utilizing extensive databases and other resources available to the firm and building robust and dynamic models that allow you to gauge your place in the market and potential.
//             </Paragraph>
//         </TabPanel>
//         <TabPanel value={value} index={2} dir={theme.direction}>
//             <Paragraph>
//                 Actively acquiring companies can help increase returns, but every M&A deal is a unique challenge making the way to succeed unique. CSG can help you move forward with confidence by identifying how, when, and who to acquire through our risk-intelligent and integrated approach to strategy and due diligence to help you realize strategic value.
//             </Paragraph>
//         </TabPanel>
//     </Box>
//   );
// }

import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { ColorConstants } from '../../constants/Constants'

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  outline: 2px solid ${ColorConstants.blue1};
  outline-offset: 2px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${ColorConstants.white};
    color: ${ColorConstants.blue1};
  }

  &:focus {
    color: ${ColorConstants.blue1};
    border-radius: 5px;
    outline: 2px solid ${ColorConstants.blue1};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${ColorConstants.blue1};
    color: ${ColorConstants.black};
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  color: ${ColorConstants.white};
  font-family: 'Montserrat';
  font-size: 2rem;
  text-align: center;
  padding: 25px 0px 25px 0px; 
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${ColorConstants.black};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function FullWidthTabs() {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>NEW PRODUCT & COMPETITOR ANALYSIS</Tab>
        <Tab>NEW MARKET ENTRY</Tab>
        <Tab>MERGERS & ACQUISITIONS DUE DILIGENCE</Tab>
      </TabsList>
      <TabPanel value={0}>Risks and rewards of launching and developing a new product can be substantial –understanding the customer’s perceptions of the value your product offerings and those of your competitors is critical. CSG can help you by conducting ‘boots on the ground’ due diligence and utilizing proprietary secondary research to inform your most important strategic decisions.</TabPanel>
      <TabPanel value={1}>With customer preferences constantly in flux, insights into product demand and market potential can be the difference between you and your competitors. CSG help can you by utilizing extensive databases and other resources available to the firm and building robust and dynamic models that allow you to gauge your place in the market and potential.</TabPanel>
      <TabPanel value={2}>Actively acquiring companies can help increase returns, but every M&A deal is a unique challenge making the way to succeed unique. CSG can help you move forward with confidence by identifying how, when, and who to acquire through our risk-intelligent and integrated approach to strategy and due diligence to help you realize strategic value.</TabPanel>
    </TabsUnstyled>
  );
}
