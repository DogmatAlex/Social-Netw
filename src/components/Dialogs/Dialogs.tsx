import React, { useState, useRef, useEffect } from 'react';
import './Dialogs.scss';
import { NavLink } from 'react-router-dom';
import state from '../../redux/state.js';

const DialogItem = props => {
    let path = '/dialogs/' + props.id;
    return (
        <div className="usersList">
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    );
};

let dialogElement = state.messagePage.dialogs.map(d => {
    return <DialogItem name={d.name} id={d.id} />;
});

const Dialogs = () => {
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    const initialState = { text: '' };
    const [formValues, setFormValues] = useState(initialState);

    const onChange = event => {
        const { name, value } = event.target;
        setFormValues(prevFormValues => ({ ...prevFormValues, [name]: value }));
    };

    const newMessage = () => {
        const newMsg = {
            id: messages.length + 1,
            text: formValues.text,
            date: new Date(),
        };
        setMessages(prevMessages => [newMsg, ...prevMessages].sort((a, b) => a.date - b.date));
        setFormValues(initialState);
    };

    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    let messagesElements = messages.map(m => <div key={m.id}>{m.text}</div>);

    return (
        <div className="dialogs">
            <div className="dialogs__items">{dialogElement}</div>
            <div className="dialogs__message">
                <div className="dialogs__message__item">
                    {messagesElements}
                    <div ref={messagesEndRef} />
                </div>
                <textarea type="text" name="text" className="dialogs__message__input" value={formValues.text} onChange={onChange} />
                <button className="dialogs__messageButton" onClick={newMessage}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Dialogs;
