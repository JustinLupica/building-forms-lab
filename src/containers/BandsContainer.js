import React, { Component } from "react";
import BandInput from "../components/BandInput";
import { connect } from "react-redux";
import Bands from "../components/Bands";

class BandsContainer extends Component {
  renderBand = () =>
    this.props.bands.map((band, id) => <li key={id}>{band.name}</li>);

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands renderBand={this.renderBand} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (formData) => dispatch({ type: "ADD_BAND", bands: formData }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
