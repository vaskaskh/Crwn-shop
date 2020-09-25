import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HVJVFCEHqR0CqdDfgYgOTvgGSEZ0mcRnmfPuWLT4WKlO8rpvQbQi9JwnGqtssk9436ex0hG5gsjXQ7mKv4Y8dZt00dpEPbjvI'


const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='VS Clothing Ltd...'
            billingAddress
            shippingAddress
            image='https://sbgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton;