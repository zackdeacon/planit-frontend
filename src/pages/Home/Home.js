import React from 'react'
import Navbar from "../../components/NavBar/navbar"
import LandingContent from '../../components/LandingContent/landingcontent'
import PageDivider from '../../components/PageDivider/pagedivider'
import UXI from '../../components/UX Instructions/uxinstructions'
import LoginForm from '../../components/LoginForm/loginform'
import "./home.css"

export default function Home() {
    return (
        <>
        <Navbar />
        <LandingContent />
        <PageDivider />
        <UXI />
        <PageDivider />
        <LoginForm />
        </>
    )
}
