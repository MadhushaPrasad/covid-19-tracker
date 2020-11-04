import React from "react";
import './country.css';


class Country extends React.Component {

    constructor(prop) {
        super(prop);
    }

    render() {
        return (
            <div className="divCard card col-lg-4 col-md-6 col-sm-6 ">
                <img className="card-img-top" src={this.props.countryInfo.flag} alt="Card image cap"/>
                <div className="card-body text-center">
                    <h3 className="card-title text-left">{this.props.country}</h3>
                    <h5>{this.props.deaths}</h5>
                    <p className="card-text">
                        deaths
                    </p>
                    <h5>{this.props.recovered}</h5>
                    <p className="card-text">
                        recovered
                    </p>
                    <h5>{this.props.tests}</h5>
                    <p className="card-text">
                        tests
                    </p>
                    <h5>{this.props.todayCases}</h5>
                    <p className="card-text">
                        todayCases
                    </p>
                    <h5>{this.props.todayDeaths}</h5>
                    <p className="card-text">
                        todayDeaths
                    </p>
                    <h5>{this.props.todayRecovered}</h5>
                    <p className="card-text">
                        todayRecovered
                    </p>
                    <p className="card-text"><small className="text-muted">Last
                        updatedTime: {this.props.updatedTime}</small></p>
                </div>
            </div>
        );
    }

}

export default Country;