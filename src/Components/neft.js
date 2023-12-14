import React from "react";
import './Form.css';
function neft(){
    return(
    <>
    <div style={{display:'flex',justifyContent:'center',textAlign:'center',backgroundColor:'white',width:'95%',
    borderRadius: '8px',
    padding: '15px',
    marginLeft:'15px',
   boxShadow: '10px 10px 10px rgba(208, 172, 238, 0.329)'}}>
         {/* <h3>Payment Details:</h3> */}
         <div style={{display:'flex',justifyContent:'center'}}>
        <p><b>Step 2:-</b> You need to pay the Registration Fees through NEFT.<br></br>
        You are required to take Screenshot of the Transaction id,<br></br>
        as it will be used for the Form Fill up.<br></br>
        You need Calculate the Registration Fees on the basis of your College and<br></br>
        Number of Events Selected.<br></br> 
        A discount of Rs.50 is provided to members of Professional Bodies.<br></br>
        <b>Payment Details:</b><br></br>
        Bank Name:- Axis Bank Ltd<br></br>
         Account No:- 213010100111263<br></br>
         IFSC Code:- UTIB0000213<br></br>
         Branch Name:- City Center Branch,Durgapur<br></br>
         Beneficiary:- DR B C ROY ENGINEERING COLLEGE, DURGAPUR<br></br>
         <br></br>
         *Any Kind of Misinformation can result in the cancellation of Student's Registration<br></br>
         </p>
         
         </div>
         </div>
    </>
    )
}
export default neft;