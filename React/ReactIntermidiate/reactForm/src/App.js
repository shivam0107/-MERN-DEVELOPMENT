import { useState } from "react";
import "./App.css";

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");


  // function changehandlerFirst(event) {
  //   // console.log('printing first name');
  //   // console.log(event.target.value);

  //   setFirstName(event.target.value);
  //   console.log(firstName);
  // }

  // function changehandlerLast(event) {
  //   // console.log("printing last name");

  //   // console.log(event.target.value);

  //   setLastName(event.target.value);
  //   console.log(lastName);
    
  // }


  const [formData, setFormData] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      comment: "",
      isVisible: true,
      mode: "",
      favCar:""
    }
  
  );

 


  function changehandler(event) {
    const {name , value , checked , type }  =  event.target
    setFormData((preFormData) => {
      return {
        ...preFormData,
        [name] : type === "checkbox" ? checked:value
         
        }
      })
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("finally printing");
    console.log(formData);
  }



  return (
    <>
      <div className="App w-[110vw] h-[100vh] flex justify-center mt-5">
        <form onSubmit={submitHandler} >
          <input
            className=" border-[2px] "
            type="text"
            placeholder="first Name"
            onChange={changehandler}
            name="firstName"
            value={formData.firstName}
          />
          <br />
          <br />
          <input
            className=" border-[2px] "
            type="text"
            placeholder="last Name"
            onChange={changehandler}
            name="lastName"
            value={formData.lastName}
          />

          <br />
          <br />
          <input
            className=" border-[2px] "
            type="email"
            placeholder="Enter your email"
            onChange={changehandler}
            name="email"
            value={formData.email}
          />

          <br />
          <br />
          <textarea
            className="border-[2px]"
            placeholder=" Enter your comments"
            onChange={changehandler}
            name="comment"
            value={formData.comment}
          />

          <br />
          <br />
          <input
            className=" border-[2px] "
            type="checkbox"
            onChange={changehandler}
            name="isVisible"
            id="isVisible"
            checked={formData.isVisible}
          />
          <label htmlFor="isVisible">Am i visible</label>

          <br />
          <br />

          <fieldset className="border-[2px]">
            <legend>Mode:</legend>
            <input
              className=" border-[2px] "
              type="radio"
              onChange={changehandler}
              name="mode"
              id="Online-Mode1"
              value="Online-Mode1"
              checked={formData.mode === "Online-Mode1"}
            />
            <label htmlFor="Online-Mode1">online mode 1</label>

            <br />
            <br />
            <input
              className=" border-[2px] "
              type="radio"
              onChange={changehandler}
              name="mode"
              id="Online-Mode2"
              value="Online-Mode2"
              checked={formData.mode === "Online-Mode2"}
            />
            <label htmlFor="Online-Mode2">online mode 2 </label>
          </fieldset>
          <label htmlFor="favCar">tell me your car</label>
          <br/>
          <select
            onChange={changehandler}
            name="favCar"
            id="favCar"
            value={formData.favCar}
            className=" border-blue-300 "
          >
            <option  value="scorpio">scorpio</option>
            <option value="fortuner">fortuner</option>
            <option value="thar">thar</option>
            <option value="audi">audi</option>
            <option value="jeep">jeep</option>
            <option value="bolero">bolero</option>
          </select>

          <br />
          <br />
          <button className="border-[2px] border-blue-300 ">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
