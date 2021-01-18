import React ,{useState , useEffect} from 'react';
import { NativeSelect , FormControl} from '@material-ui/core';
import styles from '../CountyPicker/CountryPicker.module.css'
// import { fetchedCountries } from '../../../api'

const CountryPicker = ( {handleCountryChange}) => {

    // const [fetchedCountries , setFetchedCountries] = useState([])
     const fetchedCountries = ['AB' , 'BC', 'MB', 'NB' , 'NL', 'NT', 'NS', 'NU', 'ON', 'PE', 'QC', 'SK','YT','RT']

    // useEffect(()=>{
    //     // const fetchApi = async () => {
    //     //     setFetchedCountries(fetchedCountries);
    //     // }

    //     // fetchApi();
    //     setFetchedCountries([...fetchedCountries])
    //     console.log(fetchedCountries)
    // },[])

    return (
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value=""> Canada </option>
                {fetchedCountries.map((country ,i) =>
                <option key={i} value={country}> {country} </option>
                )}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker