import React, { Component } from "react";
import Cookies from 'js-cookie';
import ConvoList from "../components/ConvoList";

function Dashboard () {
    const id = Cookies.get('id');
    const name = Cookies.get('name');

    console.log(id);
    console.log(name);
    return (
        <div className="container d-flex">
            <ConvoList />
            <div className="container">
                <h1>Chatbox</h1>
            </div>
        </div>
        
    );
}

export default Dashboard;