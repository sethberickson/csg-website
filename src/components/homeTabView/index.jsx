import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { ColorConstants } from '../../constants/Constants'

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
  font-family: 'Roboto', sans-serif;
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
