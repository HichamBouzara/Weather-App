import React, { Component } from "react";
import "./Layout.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCities, deleteCity } from "../../actions/cityActions";
import { Button } from "reactstrap";
import CityModal from "./CityModal";
import { ADD_CITY, EDIT_CITY } from "../../actions/types";
import Spinner from "../common/Spinner";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    };
  }
  componentDidMount() {
    this.props.getCities();
  }

  render() {
    const { cities, loading } = this.props.city;
    if (loading) {
      return (
        <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <Spinner />
        </div>
      );
    } else {
      return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Settings</h1>
          </div>

          <h3>Cities</h3>
          <div className="table-responsive">
            <table className="table table-striped table-sm" id="cities">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {cities.map(c => (
                  <tr>
                    <td>{c._id}</td>
                    <td>{c.name}</td>
                    <td>
                      <Button
                        key={c._id}
                        className="float-left mr-1"
                        color="danger"
                        onClick={() => this.props.deleteCity(c._id)}
                      >
                        <i className="fa fa-spinner fa-trash" />
                      </Button>

                      <CityModal
                        key={c._id}
                        id={c._id}
                        type={EDIT_CITY}
                        name={c.name}
                        btnColor="warning"
                        btnText="&#9998;"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <CityModal
            id=""
            name=""
            btnColor="primary"
            btnText="Add City"
            type={ADD_CITY}
          />
        </main>
      );
    }
  }
}
Settings.propTypes = {
  getCities: PropTypes.func.isRequired,
  deleteCity: PropTypes.func.isRequired,
  city: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  city: state.city
});

export default connect(
  mapStateToProps,
  { getCities, deleteCity }
)(Settings);
