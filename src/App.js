import React, { Component, Fragment } from 'react';
import { Chart, Cards, CountryPicker, NavBar } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import corona1 from './images/corona1.png';
class App extends Component {
  state = {
    data: {},
    country: '',
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData,
    });
    // console.log(this.state.data);
  }

  handleCountryChange = async (country) => {
    //fetch the data
    const fetchedData = await fetchData(country);
    // console.log(fetchedData);
    //set the state
    this.setState({ data: fetchedData, country: country });

    // console.log(country);
  };

  render() {
    const { data, country } = this.state;
    return (
      <Fragment>
        <NavBar></NavBar>
        <div className={styles.container}>
          <img className={styles.image} alt='COVID-19' src={corona1}></img>
          <Cards data={data}></Cards>

          <CountryPicker
            handleCountryChange={this.handleCountryChange}
          ></CountryPicker>
          <Chart data={data} country={country}></Chart>
        </div>
      </Fragment>
    );
  }
}

export default App;
