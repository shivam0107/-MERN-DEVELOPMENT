import { useState } from "react";

function Form() {
  

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: false,
    country: "Bharat",
    city: "",
    state: "",
    Candidates: false,
    Offers: false,
    zipCode: "",
    streetAddress: "",
    pushNotification:""
  });

  function changeHandler(event) {
    const {name , value , checked , type} = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,

        [name]: type === "checkbox" ? checked : value,
      };

    })
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log(formData);
  }



    return (
      <>
        <div className=" border-2 shadow-sm ">
          <form
            onSubmit={submitHandler}
            className="flex space-y-2 flex-col p-8 "
          >
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={changeHandler}
              className="border-blue-300 rounded-md border-2 p-2 "
              type="text"
              placeholder="Shivam"
              name="firstName"
              id="firstName"
              value={formData.firstName}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={changeHandler}
              className="border-blue-300 rounded-md border-2 p-2"
              type="text"
              placeholder="singh"
              name="lastName"
              value={formData.lastName}
              id="lastName"
            />
            <label htmlFor="email">Email address</label>
         
            <input
              onChange={changeHandler}
              className="border-blue-300 rounded-md border-2 p-2"
              type="email"
              placeholder="shivam@gmail.com"
              name="email"
              value={formData.email}
              id="email"
            />
            <label htmlFor="countryName">Country</label>
            <select
              onChange={changeHandler}
              name="country"
              id="countryName"
              placeholder="Bharat"
              value={formData.country}
              className=" border-blue-300 rounded-md border-2 p-2"
            >
              <option value="Bharat">Bharat</option>
              <option value="USA">USA</option>
              <option value="Russia">Russia</option>
              <option value="japan">japan</option>
            </select>
            <label htmlFor="streetAddress">Street address</label>
            <input
              onChange={changeHandler}
              className="border-blue-300 rounded-md border-2 p-2"
              type="text"
              placeholder="123@ main Road furFurinagar"
              name="streetAddress"
              value={formData.streetAddress}
              id="streetAddress"
            />
            <label htmlFor="city">City</label>
            <input
              onChange={changeHandler}
              className="border-blue-300 rounded-md border-2 p-2"
              type="text"
              placeholder="Indore"
              name="city"
              value={formData.city}
              id="city"
            />
            <label htmlFor="state">State/province</label>
            <input
              onChange={changeHandler}
              className="border-blue-300 rounded-md border-2 p-2"
              type="text"
              placeholder="Madhya Pradesh"
              name="state"
              value={formData.state}
              id="state"
            />
            <label htmlFor="zipCode">Zip / postal code</label>
            <input
              onChange={changeHandler}
              className="border-blue-300 rounded-md border-2 p-2"
              type="text"
              placeholder="453331"
              name="zipCode"
              value={formData.zipCode}
              id="zipCode"
            />
            <div className="space-y-2">
              <div>By Email</div>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <div>
                    <input
                      onChange={changeHandler}
                      className="border-blue-300 rounded-md border-2 p-2"
                      type="checkbox"
                      placeholder="453331"
                      name="comments"
                      id="comments"
                      checked={formData.comments}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="comments">comments</label>
                    <p className="text-slate-500 ">
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div>
                    <input
                      onChange={changeHandler}
                      className="border-blue-300 rounded-md border-2 p-2"
                      type="checkbox"
                      placeholder="453331"
                      name="Candidates"
                      id="Candidates"
                      checked={formData.Candidates}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="Candidates">Candidates</label>
                    <p className="text-slate-500 ">
                      Get notified when a candidate applies for a job.
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div>
                    <input
                      onChange={changeHandler}
                      className="border-blue-300 rounded-md border-2 p-2"
                      type="checkbox"
                      placeholder="453331"
                      name="Offers"
                      id="Offers"
                      checked={formData.Offers}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="Offers">Offers</label>
                    <p className="text-slate-500 ">
                      Get notified when a candidate accepts or rejects an offer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>Push Notifications</div>
              <div className="text-slate-500 ">
                These are delivered via SMS to your mobile phone.
              </div>
            </div>
            <div>
              <div className="space-x-3">
                <input
                  onChange={changeHandler}
                  className="border-blue-300 rounded-md border-2 p-2"
                  type="radio"
                  name="pushNotification"                  id="Everything"
                  value="Everything"
                  checked={formData.pushNotification === "Everything"}
                />
                <label htmlFor="Everything">Everything</label>
              </div>

              <div className="space-x-3">
                <input
                  onChange={changeHandler}
                  className="border-blue-300 rounded-md border-2 p-2"
                  type="radio"
                  name="pushNotification"                  id="SameAsEmail"
                  value="SameAsEmail"
                  checked={formData.pushNotification === "SameAsEmail"}
                />
                <label htmlFor="SameAsEmail">Same as email</label>
              </div>

              <div className="space-x-3">
                <input
                  onChange={changeHandler}
                  className="border-blue-300 rounded-md border-2 p-2"
                  type="radio"
                  name="pushNotification"                  id="noNotification"
                  value="noNotification"
                  checked={formData.pushNotification === "noNotification"}
                />
                <label htmlFor="noNotification">No push notifications</label>
              </div>
            </div>
            <div>
              <button className="border-blue-300 rounded-md border-2 p-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
}

export default Form;