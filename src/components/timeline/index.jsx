import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import HandshakeIcon from '@mui/icons-material/Handshake';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import {styled as mstyled } from '@mui/material/styles'
import { ColorConstants } from '../../constants/Constants'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      blue1: {
          main: '#00ced3'
        },
      blue2: {
          main: '#00bfc8'
        },
      blue3: {
          main: '#008adc'
        },
      blue4: {
          main: '#0f5fd0'
        },
      blue5: {
          main: '#293aa6'
        },
    }
  });

const TimelineText = mstyled(Typography)`
    color: ${ColorConstants.white}
`

export default function CustomizedTimeline() {
  return (
      <ThemeProvider theme={theme}>
        <Box sx={{
            width: 1,
            height: 'auto',
            bgcolor: ColorConstants.black,
            // '&:hover': {
            //   backgroundColor: ColorConstants.white,
            // },
        }} >
            <Timeline position="alternate">
            <TimelineItem>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="blue1">
                    <AccountCircleIcon />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '50px', px: 2 }}>
                    <TimelineText variant="h6" component="span" style={{ color: "#00ced3"}}>
                        Industry professionals
                    </TimelineText>
                    <TimelineText>Advisory board</TimelineText>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="blue2">
                    <ModelTrainingIcon />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '50px', px: 2}}>
                <TimelineText variant="h6" component="span" style={{ color: "#00bfc8"}}>
                    Training
                    <TimelineText>From top-tier consultants</TimelineText>
                </TimelineText>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="blue3">
                    <HandshakeIcon />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '50px', px: 2 }}>
                <TimelineText variant="h6" component="span" style={{ color: "#008adc"}}>
                    Experience
                </TimelineText>
                <TimelineText>Wide range of work experience</TimelineText>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="blue4">
                    <QueryStatsIcon />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '50px', px: 2 }}>
                <TimelineText variant="h6" component="span" style={{ color: "#0f5fd0"}}>
                    Market Research
                </TimelineText>
                <TimelineText>Access to databases</TimelineText>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'blue5' }} />
                <TimelineDot color="blue5">
                    <AccessibilityNewIcon />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '50px', px: 2 }}>
                <TimelineText variant="h6" component="span" style={{ color: "#293aa6"}}>
                    Faculty
                </TimelineText>
                <TimelineText>Access to seasoned university faculty</TimelineText>
                </TimelineContent>
            </TimelineItem>
            </Timeline>
        </Box>
    </ThemeProvider>
  );
}
