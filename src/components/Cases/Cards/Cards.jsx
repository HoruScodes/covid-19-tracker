import React from 'react';
import { Typography, Grid} from '@material-ui/core'
import styles from '../Cards/Cards.module.css';
import styled from 'styled-components';
import  CardComponent  from "../../Card/Card";

const ContainerDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 50px 0;
`

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
      return 'Loading...';
    }
  
    return (
      <ContainerDiv>
          <Typography gutterBottom variant="h4" component="h2"> Canada </Typography>
        <Grid container spacing={3} justify="center">
          <CardComponent
            className={styles.infected}
            cardTitle="Infected"
            value={confirmed}
            lastUpdate={lastUpdate}
            cardSubtitle="Number of active cases from COVID-19."
          />
          <CardComponent
            className={styles.recovered}
            cardTitle="Recovered"
            value={recovered}
            lastUpdate={lastUpdate}
            cardSubtitle="Number of recoveries from COVID-19."
          />
          <CardComponent
            className={styles.deaths}
            cardTitle="Deaths"
            value={deaths}
            lastUpdate={lastUpdate}
            cardSubtitle="Number of deaths caused by COVID-19."
          />
        </Grid>
      </ContainerDiv>
    );
  };
  
  export default Info;