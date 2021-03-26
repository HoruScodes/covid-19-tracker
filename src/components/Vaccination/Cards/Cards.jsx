import React from 'react';
import { Typography, Grid} from '@material-ui/core'
import styled from 'styled-components';
import  CardComponent  from "../../Card/Card";

const ContainerDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 50px 0;
margin-top : 150px;
`

const VaccineInfo = ({data : [aVac , dVac]}) =>{
    if(!aVac && !dVac){
        return <Typography gutterBottom variant="h4" component="h2"> Loading... </Typography>     
    }
    return <ContainerDiv>
                <Typography gutterBottom variant="h4" component="h2"> Canada Vaccination Report </Typography>
                <Grid container spacing={2} justify="center">
          <CardComponent
            className={"rau"}
            cardTitle="Administered"
            value={aVac[aVac.length - 1].cumulative_avaccine}
            lastUpdate={aVac[aVac.length - 1].date_vaccine_administered}
            cardSubtitle={`+ ${aVac[aVac.length - 1].avaccine} Today`}
          />
          <CardComponent
            className={"rau"}
            cardTitle="Distributed"
            value={dVac[dVac.length - 1].cumulative_dvaccine}
            lastUpdate={dVac[dVac.length - 1].date_vaccine_distributed}
            cardSubtitle={`+ ${dVac[dVac.length - 1].dvaccine} Today`}
          />
        </Grid>
           </ContainerDiv>
}

export default VaccineInfo;