import axios from "axios";

const url = "https://covid19.mathdro.id/api";
// const url2 = "https://api.covid19tracker.ca";
const url3 =
  "https://api.opencovid.ca/summary?stat=cases&loc=canada&after=01-12-2020";
const url4 =
  "https://api.opencovid.ca/timeseries?stat=avaccine&loc=canada&ymd=true";
const url5 =
  "https://api.opencovid.ca/timeseries?stat=dvaccine&loc=canada&ymd=true";

const url6 = "https://api.opencovid.ca/summary?ymd=true&loc=";

export const fetchData = async (country) => {
  let changeableUrl = url;
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (country) {
    // https://api.covid19tracker.ca/reports/province/qc
    // changeableUrl = `${url2}/reports/province/${country}?date=${date}`;
    changeableUrl = `${url6}${country}`;
  } else {
    changeableUrl = url;
    // changeableUrl = corsUrl + `${url2}/summary`;
  }
  try {
    const { data } = await axios.get(changeableUrl);
    if (country) {
      const temp = data.summary[0];
      return {
        confirmed: temp.cumulative_cases,
        recovered: temp.cumulative_recovered,
        deaths: temp.cumulative_deaths,
        lastUpdate: temp.date,
      };
    } else {
      return {
        confirmed: data.confirmed.value,
        recovered: data.recovered.value,
        deaths: data.deaths.value,
        lastUpdate: data.lastUpdate,
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export const FetchVaccinationData = async () => {
  const requestAvac = axios.get(url4);
  const requestDvac = axios.get(url5);
  try {
    const vaccineData = await axios.all([requestAvac, requestDvac]);
    return [vaccineData[0].data.avaccine, vaccineData[1].data.dvaccine];
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const {
      data: { summary },
    } = await axios.get(url3);
    const modifiedData = summary.map((dailydata) => ({
      confirmed: dailydata.cumulative_cases,
      deaths: dailydata.cumulative_deaths,
      recovered: dailydata.cumulative_recovered,
      date: dailydata.date,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
