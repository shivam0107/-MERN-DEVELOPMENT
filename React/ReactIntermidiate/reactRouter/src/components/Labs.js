import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Labs() {

    const navigate = useNavigate();

    function backHandler() {
        //move to about page
        navigate(-1)
    }

     function clickHandler() {
       //move to about page
       navigate("/about");
     }
  return (
    <div>
      <div>Labs page</div>
      <button className="border-2 p-2" onClick={clickHandler}>
        Move to about page
      </button>
      <button className="border-2 p-2" onClick={backHandler}>
        Go back
      </button>
    </div>
  );
}
