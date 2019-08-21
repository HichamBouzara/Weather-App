import React, { Component } from "react";
import {
  FormGroup,
  Input,
  FormText,
  Label,
  Form,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { addCity, editCity, getCities } from "../../actions/cityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ADD_CITY } from "../../actions/types";

class CityModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: this.props.name,
      error: "",
      type: this.props.type === ADD_CITY ? "Add" : "Edit"
    };
    this.toggle = this.toggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const id = this.props.id;
    const city = {
      name: this.state.name,
      _id: id
    };
    if (id !== "") {
      this.props.editCity(city);
      this.setState({ modal: false });
    } else {
      this.props.addCity(city);
      this.setState({ name: "", modal: false });
    }
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button color={this.props.btnColor} onClick={this.toggle}>
          {this.props.btnText}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            {this.state.type} a city
          </ModalHeader>
          <ModalBody>
            <Form id="form1" onSubmit={this.onSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  placeholder="City name"
                />
                <FormText className="help-block">Enter the city name</FormText>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button form="form1" type="submit" size="lg" color="primary">
              Submit
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
CityModal.propTypes = {
  addCity: PropTypes.func.isRequired,
  getCities: PropTypes.func.isRequired,
  editCity: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  city: state.city
});

export default connect(
  mapStateToProps,
  { addCity, editCity, getCities }
)(CityModal);
