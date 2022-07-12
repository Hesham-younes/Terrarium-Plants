
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

 const Paypal = () => {
	  
	return (
		<PayPalScriptProvider options={{ "client-id": "test" }}>
			<PayPalButtons style={{ layout: "horizontal" }} />
		</PayPalScriptProvider>
	);
}
 export default Paypal;



{/* <div className='payment-box'>
				<p className='payment-text'>We Accept Only</p>
				<span className='payment-paypal'>{paypal()}</span>
			</div> */}