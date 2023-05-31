import React from "react";

export default function Header() {
  return (
    <div className="header">

      <div className="header-sub">
        <img
        id="logo1"
        width={"250px"}
        src="data:image/jpeg;base64,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"
        alt="logo" 
      />
      <h1> KSSF SAMAYA SANJEEVINI FOUNDATION</h1>
      </div>
   
    
   
      
     
    

      
      <h3 id="q1">
        Give a Blood once in a lifetime <br /> That can save a life!!!.
      </h3>
    </div>
  );
}
