import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Sliders from '../components/Sliders'

export const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Sliders/>
        </div>
    )
}
