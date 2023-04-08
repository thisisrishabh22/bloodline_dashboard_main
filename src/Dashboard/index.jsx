import React from 'react'
import Grid from '@mui/material/Grid';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import Barchart from '../charts/Barchart';
import Donutchart from '../charts/Donutchart';
import Linechart from '../charts/Linechart';

const Dashboard = () => {
  return (
    <>
      {/* navbar */}

      <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Stack spacing={2} direction="row">
              <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
                <CardContent>
                  <PeopleIcon  sx={{color:"#4268F6",fontSize:"2rem"}}/>
                  <Typography variant="h5" component="div">
                    hoo</Typography>
                  <Typography Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, atque. </Typography>
                </CardContent>

              </Card>
              <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
                <CardContent>
                  <PeopleIcon  sx={{color:"#4268F6",fontSize:"2rem"}} />
                  <Typography variant="h5" component="div">
                    hoo</Typography>
                  <Typography Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, atque. </Typography>
                </CardContent>

              </Card>
            </Stack>


          </Grid>
          <Grid item xs={4}>
            <Stack spacing={2} direction="column">
              <Card sx={{ maxWidth: 345,height:60  }}>
                <CardContent>
                  <Stack direction="row">
                    <PeopleIcon  sx={{color:"#4268F6",fontSize:"2rem",paddingRight:3}} />
                    <span>
                      hoo</span>
                  </Stack>
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: 345,height:60 }}>
                <CardContent>
                  <Stack direction="row">
                    <PeopleIcon  sx={{color:"#4268F6",fontSize:"2rem",paddingRight:3}} />
                    <span>
                      hoo</span>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
        <Box height={20} />
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Card sx={{ height: 70 + "vh" }}>
              <CardContent>
                     <Barchart/>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ height: 70 + "vh" }}>
              <CardContent>
               <Donutchart/>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box height={20} />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card sx={{ height: 70 + "vh" }}>
              <CardContent>
                     <Linechart/>
              </CardContent>
            </Card>
          </Grid>
       
        </Grid>


      </Box>
    </>
  )
}

export default Dashboard
