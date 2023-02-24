import React from "react";
import './Styles/Jobs.css'
import CardData from './CardData';
import UserCard from "./UserCard";
import { ToastContainer } from "react-toastify";
//import Card from 'react-bootstrap/Card';

const Jobs = () => {
    return (
        <>
        <div className="user-card">
            <UserCard details = {CardData}/>
        </div>
        <ToastContainer/>
        </>
    )
}

export default Jobs;