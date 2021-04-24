import React from 'react';
import './header.css';

class Header extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      srCountry: '',
    };
  }

  searchCountry = () => {
    console.log('Hello');
  };

  render() {
    return (
      <nav className="navbar position-absolute fixed-top navbar-expand-lg navbar-light navDiv">
        <p className="navbar-brand text-light m-0">Covid19 World Reports</p>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <p className="nav-link text-danger m-0">
                Home <span className="sr-only">(current)</span>
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link text-success m-0">Symptom</p>
            </li>
            <li className="nav-item">
              <p className="nav-link text-warning m-0">Sri Lanka</p>
            </li>
            <li className="nav-item">
              <p className="nav-link text-light m-0">About</p>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0 text-light"
              type="button"
              onClick={this.searchCountry}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Header;
