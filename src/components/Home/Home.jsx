import React from 'react';
import {Button ,Card, CardContent, CardMedia, CssBaseline, Grid,Typography , Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import  styled  from "styled-components";


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    marginTop: `100px`,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    height: `256px`,
    width: '256px'
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const StyledLink = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    color: white;
`

const covidInfo = [
  {
    id : 1,
    image: 'https://imgur.com/NxIG0Px.jpeg.jpeg',
    heading : 'Wear Mask',
    info : 'Make wearing a mask a normal part of being around other people. Always wear a good mask when going outside'
  },
  {
    id : 2,
    image: 'https://imgur.com/lpR76Yd.jpeg',
    heading : 'Wash Hands',
    info : 'Wash your hands for atleast 30 seconds.Clean your hands before you put your mask on, as well as before and after you take it off, and after you touch it at any time.'
  },
  {
    id : 3,
    image: 'https://imgur.com/zag8Qpp.jpeg',
    heading : 'Avoid Travel',
    info : 'Avoid Non-Essential Travel , your trips can wait'
  },
  {
    id : 4,
    image: 'https://imgur.com/uFDX9T3.jpeg',
    heading : 'Social Distancing',
    info : 'Practice Social Distancing ,Keeping Atlease 6 ft distance from others is especially important for people who are at higher risk of getting very sick.'
  },
  {
    id : 5,
    image: 'https://imgur.com/QES89Vb.jpeg',
    heading : 'Avoid Crowded Areas',
    info : 'Being in crowds like in restaurants, bars, fitness centers, or movie theaters put you at higher risk for COVID-19'
  },
  {
    id : 6,
    image: 'https://imgur.com/EHoMzh7.jpeg',
    heading : 'No Hand-shakes',
    info : 'No handshakes if possible'
  },
  {
    id : 7,
    image: 'https://imgur.com/L5XrJrC.jpeg',
    heading : 'Self Quarantine',
    info : 'Be alert for symptoms. Watch for fever, cough, shortness of breath, or other symptoms of COVID-19. if you experience any of these then self isolate from others.'
  },
  {
    id : 8,
    image: 'https://imgur.com/14sH8it.jpeg',
    heading : 'Download Canada Covid App',
    info : 'The application will notify you if someone you\'ve spent time with later tests positive. it is Safe and private.'
  }
]

const links = {
    canadaCovid : 'https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html'
}

const Home = () => {
        const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Covid19 Tracker Canada!
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Here you can find cases in canada and also filter the cases province wise , information about the vaccination
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                  <StyledLink href='https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html' target='_blank'>
                      Canada Govt. Guidelines
                  </StyledLink>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                  <StyledLink href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019' target='_blank'>
                      World Health Organization 
                  </StyledLink>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Typography variant="h5" align="center" color="primary" paragraph>
        What to do to keep yourself and others safe from COVID-19
          </Typography>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={8}>
            {covidInfo.map(({id, heading,image, info }) => (
              <Grid item key={id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography color="primary" align="center" gutterBottom variant="h5" component="h2">
                      {heading}
                    </Typography>
                    <Typography color="textPrimary" align="center">
                      {info}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </React.Fragment>
  )
}

export default Home


