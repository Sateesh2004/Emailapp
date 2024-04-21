'use client'
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    
    const [first_name, setfirstName] = useState('');
    const [last_name, setlastName] = useState('');
    const [number, setnumber] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');

    const firstnameHandler = (e) => {
        setfirstName(e.target.value);
    }
    const lastnameHandler = (e) => {
        setlastName(e.target.value);
    }
    const numberHandler = (e) => {
        setnumber(e.target.value);
    }
    const emailHandler = (e) => {
        setemail(e.target.value);
    }
    const messageHandler = (e) => {
        setmessage(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const serviceId = 'service_xd7i3dh';
        const templateId = 'template_kv57vpi';
        const publicKey = 'nKA1vC3z6VT6nBjkj';

        const templateParams = {
            first_name: first_name,
            last_name: last_name,
            number: number,
            email: email,
            message:message,
            to_name: 'Sateesh',
        };
        



        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Success Sent", response);
                setfirstName('');
                setlastName('');
                setnumber('');
                setemail('');
                setemessage('');
                
            })
            .catch((error) => {
                console.log("Error:", error)
            });
    }

    return (
        <form className='border-4 flex-col items-center border-red-400 flex justify-center h-screen' onSubmit={submitHandler}>
            <input  className='pl-4 border-b-2 border-black focus:outline-none h-10' type="text" value={first_name} onChange={firstnameHandler} placeholder="First Name" required />
            <br />
            <input className='pl-4 border-b-2 border-black focus:outline-none h-10' type="text" value={last_name} onChange={lastnameHandler} placeholder="Last Name" required />
            <br />
            <input className='pl-4 border-b-2 border-black focus:outline-none h-10' type="number" value={number} onChange={numberHandler} placeholder="Number" required />
            <br />
            <input className='pl-4 border-b-2 border-black focus:outline-none h-10' type="email" value={email} onChange={emailHandler} placeholder="Email" required />
            <br />
            <textarea className='pl-4 border-b-2 border-black focus:outline-none h-10' value={message} onChange={messageHandler} placeholder="Message" required id="" cols="23" rows="10"></textarea>
            <br />
            <input type="submit" value="Submit" />
           
        </form>
    )
}

export default Form;
