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

            <Navbar logo="/assets/logos/txt.png" width="120px" left="-60px" top="28px" />

            <section>
                <LandingContent />
            </section>

            <PageDivider />

            <section>
                <UXI />
            </section>

            <PageDivider />

            <section>
                <LoginForm />
            </section>
        </>
    )
}
