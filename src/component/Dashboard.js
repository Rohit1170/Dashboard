import React from 'react';
import { Container, Grid, Typography, Box, Button, Paper, Breadcrumbs } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DoughnutChart from './doug';
import Link from '@mui/material/Link';
import HighPriorityAlert from './HighPriorityAlert';
import ActivityList from './ActivityList';
import { AccountBalance, Assignment, BusAlert, CalendarViewMonth, DynamicFeed, HolidayVillageRounded, Home, HomeMax, LabelImportant, LocalShipping, QueuePlayNext, Settings, Work } from '@mui/icons-material';

const theme = createTheme({
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
        disableGutters: true,
      },
    },
  },
});

const useStyles = () => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
  },
  quickActions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
  highlightBox: {
    padding: theme.spacing(2),
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
});

const Dashboard = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={1}>
            {/* Left Sidebar */}
            <Box
              display="flex"
              flexDirection="column"
              bgcolor="white"
              paddingTop="20px"
              alignItems="center"
              width="70px"
              justifyContent="space-evenly"
              height="100vh"
            >
              {/* Add your left sidebar content here */}
              <CalendarViewMonth />
              <QueuePlayNext />
              <LabelImportant />
              <Assignment />
              <BusAlert />
              <LocalShipping />
              <Work />
              <AccountBalance />
              <DynamicFeed />
              <Settings />
            </Box>
          </Grid>
          <Grid item xs={8}>
            {/* Main Content */}
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Typography variant="h4" className={classes.sectionTitle}>
                  Dashboard
                </Typography>
              </Grid>

              {/* Charts Section */}
              <Grid container spacing={2} >
                <Grid item xs={3}  borderRadius={'10px'} >
                  <DoughnutChart title="Orders" data={[50, 50, 100]} />
                </Grid>
                <Grid item xs={3}>
                  <DoughnutChart title="Trips" data={[50, 50, 100]} />
                </Grid>
                <Grid item xs={3}>
                  <DoughnutChart title="Revenue" data={[50, 50, 100]} />
                </Grid>
                <Grid item xs={3}>
                  <DoughnutChart title="Expenses" data={[50, 50, 100]} />
                </Grid>
              </Grid>

              <br />

              <Grid item xs={12}>
                <Grid item xs={12} spacing={2}></Grid>
              </Grid>

              {/* Quick Actions */}

              <Grid item xs={12}>
  {/* Quick Actions */}
  <Typography variant="h5"> Quick Actions</Typography>
  <Box display="flex" justifyContent="space-around" borderRadius={'10px'} bgcolor={'white'}height={'50px'} alignItems="center">
    <Box component="span" fontSize="16px" color="text.secondary">
      <b>Create Indents</b>
    </Box>
    <Box component="span" fontSize="16px" color="text.secondary">
      &nbsp;|&nbsp;
    </Box>
    <Box component="span" fontSize="16px" color="text.secondary">
      <b>Add Vehicle</b>
    </Box>
    <Box component="span" fontSize="16px" color="text.secondary">
      &nbsp;|&nbsp;
    </Box>
    <Box component="span" fontSize="16px" color="text.secondary">
      <b>Add Trailer</b>
    </Box>
    <Box component="span" fontSize="16px" color="text.secondary">
      &nbsp;|&nbsp;
    </Box>
    <Box component="span" fontSize="16px" color="text.secondary">
      <b>Add Driver</b>
    </Box>
    <Box component="span" fontSize="16px" color="text.secondary">
      &nbsp;|&nbsp;
    </Box>
    <Box component="span" fontSize="16px" color="text.secondary">
      <b>Add Indents</b>
    </Box>
  </Box>
</Grid>

              <Grid item xs={12}>
                {/* Add space between quick actions and high priority alerts */}
                <Grid item xs={12} spacing={2}></Grid>
              </Grid>
              {/* High Priority Alerts */}
              <Grid item xs={12}>
                <Typography variant="h5" className={classes.sectionTitle}>
                  High Priority Alerts(14){" "}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <HighPriorityAlert
                      type="Driver Raised Concern"
                      date="13 Feb 24"
                      details="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <HighPriorityAlert
                      type="Reefer Temp. out of range"
                      date="13 Feb 24"
                      details="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
  {/* Right Sidebar */}
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    marginLeft={'30px'}
    bgcolor={'white'}
    paddingLeft={'25px'}
    paddingTop={'20px'}
    height="100vh"
  >
    <Typography variant="h5" className={classes.sectionTitle}>
      Today's Highlights (14)
    </Typography>
    <Box
    display="flex"
    flexDirection="row"
    justifyContent="center"
    gap={'20px'}
    height={'130px'}
  
  >
    
    <Paper className={classes.highlightBox} border={'2px'}>
      <Typography variant="h6">Income</Typography>
      <Typography variant="h4" color="green">
        100000 CAD
      </Typography>
      <Typography variant="body1">2 payments received</Typography>
    </Paper>
    <Paper className={classes.highlightBox} >
      <Typography variant="h6">Expenses</Typography>
      <Typography variant="h4" color="error">
        50000 CAD
      </Typography>
      <Typography variant="body1">5 payments paid</Typography>
    </Paper>
    </Box>

              <Typography variant="h6" className={classes.sectionTitle}>
                Completed Activities (14)
              </Typography>
              <ActivityList />
              <Typography variant="h5" className={classes.sectionTitle}>
                Scheduled Activities (14)
              </Typography>
              <ActivityList />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;
