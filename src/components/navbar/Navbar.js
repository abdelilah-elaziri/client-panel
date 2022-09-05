import React from 'react'

const  Navbar = (props) => {
    const {title} = props;
  return (
    <div>
        <h1>{title}</h1>
    </div>
  )
}

export default Navbar;