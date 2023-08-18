import React, { useState } from 'react';
import beans from './img/beansLogo.png'
import flutt from './img/flawt.jpeg'
import './flutterwave.css'
// require('dotenv').config()
// import env from "dotenv"
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';


const Flutterwave=(props) => {
    const [amount, setAmount] = useState('')
    const [name, set]

    const config = {
    public_key: 'FLWPUBK_TEST-25dcf4c3dcae9a5f4c62a009913585b0-X',
    tx_ref: Date.now(),
    amount: props.amount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
        email: props.email,
        phone_number: props.phone_number,
        name: props.name,
    },
    customizations: {
        title: 'Beans-rite',
        description: 'Payment for food in cart',
        logo: '../images/Beansrite.png',
    },
 };
 const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
        console.log(response);
        closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
 };
 return (
    <div className="App">
        <div className='imgess'>
            <img src={beans} alt='' />
            <img src={flutt} alt='' />
        </div>
        <h1 className='pay'>Pay Now</h1>
        <FlutterWaveButton {...fwConfig} className='flawterBut' />
    </div>
 );
}



export default Flutterwave;