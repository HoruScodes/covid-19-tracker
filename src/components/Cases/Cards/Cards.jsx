import React from 'react';
import { Card, CardContent , Typography, Grid, StylesProvider} from '@material-ui/core'
import  CountUp  from 'react-countup';
import styles from '../Cards/Cards.module.css';
import styled from 'styled-components';

const ContainerDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 50px 0;
`

const StyledCard = styled(Grid)`
    margin: 0 2% !important;
`


const Cards = ({data : {confirmed , recovered, deaths , lastUpdate}}) => {
    if(!confirmed){
            return 'Loading....'
    }
    return (
        <ContainerDiv>
            <Grid container spacing={3} justify="center">
                <StyledCard item component={Card} xs={12}  md={3} className={styles.infected}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Infected </Typography>
                        <Typography variant="h5">  
                        <CountUp start = {0}end = {confirmed}duration = {2.5}separator = ","/>
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>  {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2"> Number of Active Cases of Covid19</Typography>
                    </CardContent>
                </StyledCard>
                <StyledCard item component={Card} xs={12}  md={3} className={styles.recovered}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Recovered  </Typography>
                        <Typography variant="h5">
                        <CountUp start = {0}end = {recovered}duration = {2.5} separator = ","/>
                         </Typography>
                        <Typography color="textSecondary" gutterBottom>  {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2"> Number of Recoveries from Covid19</Typography>
                    </CardContent>
                </StyledCard>
                <StyledCard item component={Card} xs={12}  md={3} className={styles.deaths}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Deaths  </Typography>
                        <Typography variant="h5">  
                        <CountUp start = {0} end = {deaths} duration = {2.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>  {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2"> Number of Deaths caused by Covid19</Typography>
                    </CardContent>
                </StyledCard>
            </Grid>
        </ContainerDiv>
    )
}

export default Cards