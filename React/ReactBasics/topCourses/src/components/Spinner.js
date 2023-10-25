import React from "react";
import "./Spinner.css"

function Spinner() {
    
    return (
      
        <div className="flex flex-col items-center space-y-2">
            <div className="spinner"></div>
            <div className="text-blue-700 text-lg font-semibold ">loading...</div>
        </div>
        
    );

}

export default Spinner;