import React from 'react';
import './Homepage.css';
import Header from '../../components/header/Header';
import CountryList from '../../components/countryList/CountryList';
import axios from 'axios';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      stats: [],
      global: [],
      local_active_cases: 0,
      local_deaths: 0,
      local_new_cases: 0,
      local_new_deaths: 0,
      local_recovered: 0,
      local_total_cases: 0,
      local_total_number_of_individuals_in_hospitals: 0,
      total_pcr_testing_count: 0,
      update_date_time: 0,
    };
  }

  componentDidMount() {
    // local response
    axios
      .get('https://hpb.health.gov.lk/api/get-current-statistical')
      .then((response) => {
        this.setState({ stats: response.data });
        this.setState({
          local_active_cases: this.state.stats.data.local_active_cases,
        });
        this.setState({ local_deaths: this.state.stats.data.local_deaths });
        this.setState({
          local_new_cases: this.state.stats.data.local_new_cases,
        });
        this.setState({
          local_new_deaths: this.state.stats.data.local_new_deaths,
        });
        this.setState({
          local_recovered: this.state.stats.data.local_recovered,
        });
        this.setState({
          local_total_cases: this.state.stats.data.local_total_cases,
        });
        this.setState({
          local_total_number_of_individuals_in_hospitals: this.state.stats.data
            .local_total_number_of_individuals_in_hospitals,
        });
        this.setState({
          total_pcr_testing_count: this.state.stats.data
            .total_pcr_testing_count,
        });
        this.setState({
          update_date_time: this.state.stats.data.update_date_time,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="body">
        <div>
          <Header />
        </div>
        <div className="main">
          <div className="row d-flex quickRowDiv">
            <div className="quickDiv col-lg-3">
              <div className="col-lg-12 text-center">
                <h1 className="text-light font-weight-bold mb-2">
                  Sri Lanka Covid19 Virus Reports
                </h1>
                <h4 className="text-warning">Quick Facts</h4>
                <h5 className="text-light">
                  update time <br /> {this.state.update_date_time}
                </h5>
              </div>
              <div className="col-lg-12 mt-5 text-center">
                <h5 className="text-warning mt-2">
                  {this.state.local_active_cases}
                </h5>
                <h4 className="text-light">Active cases</h4>
              </div>
              <div className="col-lg-12 mt-5 text-center">
                <h5 className="text-danger mt-2">{this.state.local_deaths}</h5>
                <h4 className="text-light">Total Deaths</h4>
              </div>
              <div className="col-lg-12 mt-5 text-center">
                <h5 className="text-dark mt-2">{this.state.local_new_cases}</h5>
                <h4 className="text-light">New Cases</h4>
              </div>
              <div className="col-lg-12 mt-5 text-center">
                <h5 className="text-danger mt-2">
                  {this.state.local_new_deaths}
                </h5>
                <h4 className="text-light">New Deaths</h4>
              </div>
              <div className="col-lg-12 mt-5 text-center">
                <h5 className="text-success mt-2">
                  {this.state.local_recovered}
                </h5>
                <h4 className="text-light">ReCovered</h4>
              </div>
              <div className="col-lg-12 mt-5 text-center">
                <h5 className="text-info mt-2">
                  {this.state.local_total_cases}
                </h5>
                <h4 className="text-light">Total Cases</h4>
              </div>
              <div className="col-lg-12 mt-5 text-center">
                <h5 className="text-info mt-2">
                  {this.state.local_total_number_of_individuals_in_hospitals}
                </h5>
                <h4 className="text-light">
                  Number Of Individuals in Hospitals{' '}
                </h4>
              </div>
              <div className="col-lg-12 mt-5 text-center">
                <h5 className="text-primary mt-2">
                  {this.state.total_pcr_testing_count}
                </h5>
                <h4 className="text-light">Total PCR Testing Count</h4>
              </div>
            </div>

            <div className="countryDiv offset-1 col-lg-9 mt-sm-2">
              <CountryList />
            </div>
          </div>
        </div>
        {/*<Footer/>*/}
      </div>
    );
  }
}

export default HomePage;
