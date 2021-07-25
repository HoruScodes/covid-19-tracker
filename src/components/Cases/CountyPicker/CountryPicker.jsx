import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "../CountyPicker/CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const fetchedCountries = [
    "AB",
    "BC",
    "MB",
    "NB",
    "NL",
    "NT",
    "NS",
    "NU",
    "ON",
    "PE",
    "QC",
    "SK",
    "YT",
  ];
  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value=""> Canada </option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {" "}
            {country}{" "}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
