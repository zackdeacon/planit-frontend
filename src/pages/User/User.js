import React, { useState, useEffect } from 'react'
import API from "../../utils/API";
import NavBar from '../../components/NavBar/navbar';
import UserCard from '../../components/UserCard/UserCard'
import "./user.css"

export default function User() {
    const [userData, setUserData] = useState({
        name: {
            first: "",
            last: "",
        },
        username: "",
        email: "",
        createdMaps: [],
        guestMaps: [],
        invitations: [],
    });

    useEffect(() => {
        API.getSessionData().then((results) => {
            const sessionUser = results.data.user;
            API.getUserById(sessionUser.id).then((user) => {
                setUserData(user.data);
            })
        }).catch((err) => {
            console.log('err', err)
        })
    }, []);

    return (
        <div className="user-background">
            <NavBar logo="./assets/logos/logotxt.png" width="80px" left="-40px" top="10px" />
            <UserCard userData={userData} />
        </div>
    )
}
