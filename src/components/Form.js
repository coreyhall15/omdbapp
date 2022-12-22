import { useState} from "react";

function Form(props) {

    // state for the form
    const [formData, setFormData] = useState({searchterm: ""})

    // handleChange to sync formData and the form inputs
    const handleChange = (event) => {
        // update the formData with the change in the form
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    // function for submitting the form
    const handleSubmit = (event) => {
        // prevent the refresh
        event.preventDefault()
        // get the data
        props.moviesearch(formData.searchterm)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchterm" value={formData.searchterm} onChange={handleChange}/>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Form;