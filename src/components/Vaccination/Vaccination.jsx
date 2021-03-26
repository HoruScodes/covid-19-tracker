import React from 'react';
import Cards from './Cards/Cards'
import { FetchVaccinationData } from "../../api";


class Vaccination extends React.Component {

    state = {
        data : []
    }

    async componentDidMount(){
        const fetchedVaccinationData = await FetchVaccinationData();
        this.setState({data : fetchedVaccinationData})
    }

render(){
    const {data} = this.state
    return (
        <div>
            <Cards data={data}/>
        </div>
    )
}

}

export default Vaccination;
