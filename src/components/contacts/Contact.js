import React, { Component } from 'react'

class Contact extends Component {
  render() {

    const { name, phone, email } = this.props;

    return (
      <div>
         <h1>contacts : {name}</h1>
         <ul>
            <li>Phone: {phone}</li>
            <li>Email: {email}</li>
         </ul>
      </div>
    )
  }
}

Contact.defaultProps = {
  name : "My Name",
  phone : "0000000000",
  email : "Email",

}

export default Contact;