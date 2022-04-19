import React, { useState, useEffect, Fragment } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);
  // console.log(fetchedCountries);
  return (
    <Fragment>
      <h1>For more information please select a country</h1>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=''
          onChange={(e) => {
            handleCountryChange(e.target.value);
          }}
        >
          <option value=''>Select Country</option>
          {fetchedCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Fragment>
  );
};

export default CountryPicker;
