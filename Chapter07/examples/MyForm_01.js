import React from "react";

const MyForm = () => {
  
  // This is called when the form is submitted
  const handleSubmit = event => {
    alert("Form submit");
    event.preventDefault(); // Prevents default behavior
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default MyForm;
