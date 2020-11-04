import React from "react";
import './countryList.css';
import Country from "../country/Country";
import axios from "axios";


class CountryList extends React.Component {

    componentDidMount() {
        // All Response
        axios.get("https://corona.lmao.ninja/v2/countries?sort=country")
            .then(response => {

                this.setState({all: response.data})
                this.setState({country: response.data[31].country})
                this.setState({countryInfo: response.data[31].countryInfo})
                this.setState({deaths: response.data[31].deaths})
                this.setState({recovered: response.data[31].recovered})
                this.setState({tests: response.data[31].tests})
                this.setState({todayCases: response.data[31].todayCases})
                this.setState({todayDeaths: response.data[31].todayDeaths})
                this.setState({todayRecovered: response.data[31].todayRecovered})
                this.setState({updatedTime: response.data[31].updatedTime})

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    constructor(prop) {
        super(prop);
        this.state = {
            all: [],
            country: '',
            countryInfo: [],
            deaths: 0,
            recovered: 0,
            tests: 0,
            todayCases: 0,
            todayDeaths: 0,
            todayRecovered: 0,
            updatedTime: 45564
        }
    }

    render() {

        const da = this.state.all;

        const render_details = (da, index) => {
            return (
                <Country
                    key={index}
                    country={da.country}
                    countryInfo={da.countryInfo}
                    deaths={da.deaths}
                    recovered={da.recovered}
                    tests={da.tests}
                    todayCases={da.todayCases}
                    todayDeaths={da.todayDeaths}
                    todayRecovered={da.todayRecovered}
                    updatedTime={da.updatedTime}
                />
            )
        };

        return (
            <div className="countryDivList row d-flex justify-content-around">
                    {this.state.all.map(render_details)}
            </div>
        );
    }

}

export default CountryList;