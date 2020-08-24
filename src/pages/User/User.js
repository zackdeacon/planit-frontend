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
        window.scrollTo(0, 0)
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
        <>
            <img src="./assets/images/glenn-carstens-unsplash.jpg" className="bg" />
            <div className="dark-filter">
                <NavBar logo="/assets/logos/logotxt.png" width="80px" left="-40px" top="10px" name={userData.name} />
                <UserCard userData={userData} setUserData={setUserData} />
            </div>
        </>
    )
}
