import React from 'react';

import axios from 'axios';
import { useState } from 'react';
import '../styles/components/pages/ContactPage.css';


const ContactPage = (props)=>{

        const initialForm = {
            nombre:'',
            email:'',
            telefono:'',
            mensaje:'',
        }

        const [sending, setSending] = useState(false);
        const [msg, setMsg] = useState('');
        const [formData, setFormData] = useState(initialForm);

        const handleChange = e => {
            const { name, value } = e.target;
            setFormData(oldData => ({
                ...oldData,
                [name]: value
            }));
        }

        const handleSubmit = async e => {
            e.preventDefault();
            setMsg('');
            setSending(true)
            const response = await
            axios.post('http://localhost:3003/api/contacto', formData);
            setSending(false);
            setMsg(response.data.message);
            if (response.data.error === false){
                setFormData(initialForm)
            }
        }


    return(
        <main className="holder wrapper">
            <div className="columns">
                <div className="leftColumn">
                    <ul>
                        <li>13-15/61-71 Beauchamp Rd</li>
                        <li>Matraville</li>
                        <li>NSW </li>
                        <li><a href="mailto:info@alchemyco.com.au?Subject=Please%20contact%20me">diegocartelle@gmail.com</a></li>
                    </ul>
                </div>

                <div className="rightColumn">
                    <ul>
                        <li>(02) 9550  1321</li>
                        <li>Monday to Friyday:<br></br>8am - 4pm</li>
                        <li>Saturday &amp; Sunday: Closed</li>
                    </ul>
                </div>
            </div>

            <form action="" method="post" className="form" onSubmit={handleSubmit}>
        
                    <input className="input" type="text"  placeholder="YOUR EMAIL ADDRESS" value={formData.email} onChange={handleChange}/>
        
                    <input className="input" type="text" value={formData.nombre} onChange={handleChange} placeholder="YOUR NAME"/>
        
                    <input className="input" type="text" value={formData.telefono} onChange={handleChange} placeholder="CELULAR"/>
        
                    <textarea className="input" id="coment" value={formData.mensaje} onChange={handleChange} placeholder="YOUR MESSAGE"></textarea>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                    <input className="input" id="send" type="submit" value="SEND"/>
            </form>
        
        </main>
        
    );
}

export default ContactPage;