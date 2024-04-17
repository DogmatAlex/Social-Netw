import React from 'react';
import './Dialogs.scss';
import { NavLink } from 'react-router-dom';
import state from '../../redux/state.js';

const DialogItem = props => {
    let path = '/dialogs/' + props.id;
    return (
        <div className="dialog">
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    );
};

const Message = props => {
    return <div className="messages__item">{props.message}</div>;
};

let dialogElement = state.messagePage.dialogsData.map(d => {
    return <DialogItem name={d.name} id={d.id} />;
});

let messageElement = state.messagePage.messagesData.map(m => {
    return <Message message={m.message} />;
});

const Dialogs = () => {
    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let textM = newMessageElement.current.value;
        alert(textM);
    };

    return (
        <div className="dialogs">
            <div className="dialogs__items">{dialogElement}</div>
            <div className="dialogs__messageArea">
                <textarea className="dialogs__messageArea__item" ref={newMessageElement}></textarea>
                <textarea className="dialogs__messageArea__item" ref={newMessageElement}></textarea>
                <textarea className="dialogs__messageArea__item" ref={newMessageElement}></textarea>
                <textarea className="dialogs__messageArea__item" ref={newMessageElement}></textarea>
                <textarea className="dialogs__messageArea__item" ref={newMessageElement}></textarea>
                <textarea className="dialogs__messageArea__item" ref={newMessageElement}></textarea>
            </div>
            <div className="dialogs__messageButton">
                <button onClick={sendMessage}>Send</button>
                <button onClick={sendMessage}>Send</button>
                <button onClick={sendMessage}>Send</button>
                <button onClick={sendMessage}>Send</button>
                <button onClick={sendMessage}>Send</button>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;
