import React, { useState } from "react";

function Form() {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry" 
  })

  //make the handler to use in many name and value//by seting name attribute in input
  function handleChange(event){
    // name is the KEY in of the formData object we're trying to update
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]:value
    })
  }
  

  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     firstName: event.target.value
  //   });
  // }

  // function handleLastNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     lastName: event.target.value
  //   });
  // }

  return (
    <form>
      <input 
        type="text" 
        name="firstName"
        onChange={handleChange}  
        value={formData.firstName} />
      <input 
        type="text" 
        name="lastName"
        onChange={handleChange} 
        value={formData.lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
