import { useState, useEffect } from "react";

export default function Form(props) {
  // The component must return some JSX

  // State to hold the data of our form
  const [formData, setFormData] = useState({
    searchterm: ""}
  );
  console.log(formData)
  // handleChange - updates formData when we type into form
  const handleChange = (event) => {
    // Use the event object to detect key, and value to update/replace
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  console.log(event.target.value)
  console.log(event.target.name)
  console.log([event.target.name])
  console.log(formData)


  const handleSubmit = (event) => {
    // Prevent page from refreshing on form submission
    event.preventDefault();
    // Pass the search term to moviesearch prop, which is App's getMovie function
    props.moviesearch(formData.searchterm);
    console.log(props)
  console.log(formData.searchterm)
  };

  return (
    <div>
      <h3>The Form Component</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name='searchterm' onChange={handleChange} 
        value={formData.searchterm} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
