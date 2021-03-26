import axios from 'axios';

// const url = 'https://covid19.mathdro.id/api';
const url2 = 'https://api.covid19tracker.ca';
const url3 = 'https://api.opencovid.ca/summary?stat=cases&loc=canada&after=01-12-2020'
const url4 = 'https://api.opencovid.ca/timeseries?stat=avaccine&loc=canada&ymd=true'
const url5 = 'https://api.opencovid.ca/timeseries?stat=dvaccine&loc=canada&ymd=true'

export const fetchData = async (country) => {
    let changeableUrl;
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
    let date = yesterday.toISOString().slice(0,10)

    if(country){
        // https://api.covid19tracker.ca/reports/province/qc
        changeableUrl = `${url2}/reports/province/${country}?date=${date}`
    }else{
        changeableUrl = `${url2}/summary`
    }
    try{
        const {data : {data : [data]  }}= await axios.get(changeableUrl);
        if(country){
            date = data.date
        }else{
            date = data.latest_date
        }
        return {
            confirmed : data.total_cases,
            recovered : data.total_recoveries,
            deaths : data.total_fatalities,
            lastUpdate : date
        }
    }catch(error){
        console.log(error)
    }
}

export const FetchVaccinationData =  async () => {
    const requestAvac = axios.get(url4);
    const requestDvac = axios.get(url5);
    try{
          const vaccineData =  await axios.all([requestAvac ,requestDvac])
          return [vaccineData[0].data.avaccine,
          vaccineData[1].data.dvaccine]
    }catch(error){
        console.log(error)
    }
}


export const fetchDailyData = async () => {
    try {
        const { data : {summary}} = await axios.get(url3)
        const modifiedData = summary.map((dailydata)=>({
            confirmed: dailydata.cumulative_cases,
            deaths: dailydata.cumulative_deaths,
            recovered: dailydata.cumulative_recovered,
            date : dailydata.date
        }));
        return modifiedData
    }catch(error){
        console.log(error)
    }
}
