import React , {useState , useEffect} from 'react';
import Cards from './Cards/Cards'
import { FetchVaccinationData } from "../../api";


const Vaccination = () =>{

    const [vaccinationInfo, setvaccinationInfo] = useState({data : []})

    useEffect( ()=>{
        const fetchApiData = async () =>{
            const fetchedVaccinationData = await FetchVaccinationData();
            setvaccinationInfo({data : fetchedVaccinationData})
        }
        fetchApiData();
    } , [])

    const {data} = vaccinationInfo
    return (
        <div>
            <Cards data={data}/>
        </div>
    )
}


export default Vaccination;
