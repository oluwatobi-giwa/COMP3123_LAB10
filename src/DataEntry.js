import React, { useState } from 'react'



 function DataEntry() {

    var [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        address2: '',
        city: '',
        province: '',
        postalCode: '',
        terms: 'unchecked'
    })
  
    const [submitted, setSubmitted] = useState(false);

    const provinces = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia",
     "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon"]
    
    const onValueChanged = (event) => {
        setFormData({...formData , [event.target.name]:event.target.value})
    }


    const onSubmitForm = (event) => {
        event.preventDefault()

        console.log("Form Submitted : " +  JSON.stringify(formData))

        setSubmitted(true)

        return (
            <div className="App Display">
                <h1>Thank you! Your information has been submitted.</h1>
            </div>
        );
        

    }


  return (
    <>
        {submitted ? (
        <div className="App Display">
          <p><span>Email:</span> {formData.email}</p>
          <p><span>Full Name:</span> {formData.name}</p>
          <p><span>Address:</span> {formData.address}</p>
          <p><span>City:</span> {formData.city}</p>
          <p><span>Province:</span> {formData.province}</p>
          <p><span>Postal Code:</span> {formData.postalCode}</p>
        </div>
      ) : (
        <form onSubmit={(e) => onSubmitForm(e)} > 

        <div className="formrow">
                <div className="formgrid form-50">
                <label>Name:</label><br />

                <input 
                name='name'
                type="text"
                onChange={(e) => onValueChanged(e)} 
                placeholder="Full name" />

                </div>
                <div className="formgrid form-50">
                <label>Email:</label><br />
                <input 
                name='email'
                type="text"
                onChange={(e) => onValueChanged(e)} 
                placeholder="Enter email" />
                </div>
            </div>

            <label>Address:</label><br />
            <input 
                name='address'
                type="text"
                onChange={(e) => onValueChanged(e)} 
                placeholder="1234 Main Street" />

            <label>Address2:</label><br />
            <input 
                name='address2'
                type="text"
                onChange={(e) => onValueChanged(e)} 
                placeholder="Apartment, Studio, Floor" />


            <div className="formrow">
                <div className="formgrid form-33">
                <label>City</label><br />
                <input 
                name='city'
                type="text"
                onChange={(e) => onValueChanged(e)} 
                placeholder="" />

                </div>
                <div className="formgrid form-33">
                <label>Province</label>
                <select name='province' onChange={(e) => onValueChanged(e)}>
                {
                    provinces.map((province) => (
                            <option key={province} value={province}>{province}</option>
                    ))
                }
            </select>

            
                </div>
                <div className="formgrid form-33">
                <label>Postal Code</label>
                <input 
                name='postalCode'
                type="text"
                onChange={(e) => onValueChanged(e)} 
                placeholder="Postal Code" />
                </div>
            </div>

            <input 
                name='terms'
                type="checkbox"
                value="terms"
                id="terms"
                onChange={(e) => onValueChanged(e)} /> 
                <p className="text-center term-label">Agree terms &amp; conditions</p>
            
            <input 
                name='btnSubmit'
                type="submit"
                value="Submit"
                id='submit-btn'
                 />
         
        </form>
        )}
    </>
  )
}

export default DataEntry
