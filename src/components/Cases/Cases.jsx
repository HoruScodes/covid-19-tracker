import React, { useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from ".";
import styles from "../Cases/Cases.module.css";
import { fetchData } from "../../api";
import image from "../../images/covid-banner.png";

const Cases = () => {
  const [casesData, setCasesData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const fetchedData = await fetchData();
      setCasesData({ data: fetchedData });
    };
    fetchMyAPI();
  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setCasesData({ data: fetchedData, country: country });
  };

  const { data, country } = casesData;

  console.log(data);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default Cases;
