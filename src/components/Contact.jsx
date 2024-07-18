import React, { useEffect } from 'react';
import { useForm } from '@formspree/react';

function Contact() {
    const [state, handleSubmit, reset] = useForm('meojowjv');

    useEffect(() => {
        if (state.succeeded) {
            alert('Message sent');
            reset(); // Reset the form state
            document.getElementById('contactForm').reset(); // Clear the form fields
        }
    }, [state.succeeded, reset]);

    return (
        <div className="contact">
            <div className="title">
                <h2>contact.</h2>
            </div>

            <form id="contactForm" onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" placeholder="name" />
                <input type="email" name="email" id="email" placeholder="email" />
                <textarea name="message" id="message" placeholder="message"></textarea>
                <button type="submit" id="submit" disabled={state.submitting}>send</button>
            </form>
        </div>
    );
}

export default Contact;
