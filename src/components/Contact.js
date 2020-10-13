import React from 'react';
import './Contact.css';

function Contact(props) {
    return (
        <div className="Contact">
            <img
                className="avatar"
                alt="avatar"
                src="https://randomuser.me/api/portraits/men/81.jpg"
            />
            <div className="status">
                <h4 className="name">{props.name}</h4>
                <div className="status-online"></div>
                <p className="status-text">{props.status}</p>
            </div>
        </div>

    );
}


export default Contact;