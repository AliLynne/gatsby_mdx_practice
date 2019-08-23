import React from 'react'

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: ""
  }

  handleChange = e => {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}`)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name
          <input 
            type="text" 
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Last Name
          <input 
            type="text" 
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form