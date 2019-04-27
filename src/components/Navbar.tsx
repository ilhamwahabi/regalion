import React, { Component } from "react";
import { Navbar, Container, Input, Form, FormGroup } from "reactstrap";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { connect } from "react-redux";

import { changePokemon } from "../actions";

class ComponentsNavbar extends Component<InjectedFormProps, {}> {
  onSearchPokemon = (formValues: any) => {
    (this.props as any).changePokemon(formValues);
  };

  renderField = ({ input }: any) => {
    return (
      <Input
        type="text"
        name="pokemon"
        placeholder="Search any Pokemon"
        style={{ textAlign: "center", fontSize: "16px" }}
        autoComplete="off"
        {...input}
      />
    );
  };

  render() {
    return (
      <Navbar className="navbar-transparent" expand="lg">
        <Container>
          <Form
            className="w-100"
            onSubmit={this.props.handleSubmit(this.onSearchPokemon)}
          >
            <FormGroup>
              <Field name="search" component={this.renderField} />
            </FormGroup>
          </Form>
        </Container>
      </Navbar>
    );
  }
}

const formWrapper = reduxForm({ form: "searchPokemon" })(ComponentsNavbar);

export default connect(
  null,
  {
    changePokemon
  }
)(formWrapper);
