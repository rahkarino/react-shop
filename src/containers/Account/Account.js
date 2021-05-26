import React from "react";
import "./Account.scss";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import axios from "../../axios-orders";

class Account extends React.Component {
  state = {
    form: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Name...",
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        focused: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Email...",
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        focused: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password...",
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        focused: false
      },
    },
  };
  checkValidation = (value, rules) => {
    let isValid = false
    if(rules.required) {
      isValid = value.trim() !== ''
    }
    return isValid
  }
  inputChangeHandler = (e, inputElement) => {
    const updatedForm = { ...this.state.form };
    const updatedElement = { ...updatedForm[inputElement] };
    updatedElement.value = e.target.value;
    updatedElement.valid = this.checkValidation(updatedElement.value, updatedElement.validation)
    updatedElement.focused = true
    updatedForm[inputElement] = updatedElement;
    this.setState({ form: updatedForm });
  };
  submitHandler = (event) => {
    event.preventDefault();
    let formData = {};
    for(let item in this.state.form) {
        formData[item] = this.state.form[item].value
    }
    axios.post('/account.json', formData)
        .then(res => console.log(res))
        .catch(err => console.log(err))
  };
  render() {
    const elements = [];
    for (let elem in this.state.form) {
      elements.push({
        id: elem,
        config: this.state.form[elem],
      });
    }
    return (
      <div className="account">
        <h2>Account</h2>
        <form onSubmit={this.submitHandler}>
          {elements.map((item) => {
            return (
              <Input
                key={item.id}
                elementType={item.config.elementType}
                elementConfig={item.config.elementConfig}
                value={item.config.value}
                focused={item.config.focused}
                change={(e) => this.inputChangeHandler(e, item.id)}
                invalid={!item.config.valid}
              />
            );
          })}
          {/* <Input
            type="text"
            placeholder="Name..."
            onChange={(e) => this.onInputChangeHandler(e)}
            value={this.state.name}
          />
          <Input
            type="text"
            placeholder="Email..."
            onChange={(e) => this.onInputChangeHandler(e)}
            value={this.state.email}
          />
          <Input
            onChange={(e) => this.onInputChangeHandler(e)}
            type="password"
            placeholder="Password..."
            value={this.state.password}
          /> */}
          <Button type="form">Submit</Button>
        </form>
      </div>
    );
  }
}

export default Account;
