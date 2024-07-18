import React from 'react';
import { Link } from 'react-router-dom'
import homePage from '../assets/homePage.png'
import '../Styles/home.css'

const Home = () => {

    return (
        <div className='home-container'>
            <main className='message-container'>
                <h1 className='home__bar'></h1>
                <h1 className='home__headline'>Empower Your Finances, Embrace Your <span>Freedom</span></h1>
                <h4 className='home__message'>Whether you're a busy professional, a globe-trotting entrepreneur, or a mindful parent, our app is designed to make budgeting effortless and intuitive. Join our community and take control of your financial future with personalized insights, real-time tracking, and smart budgeting tools. Subscribe today and start your journey towards financial freedom with Budgt. Your path to a stress-free, prosperous life starts here.</h4>
                <button className='home__transactions'><Link to='/transactions'>Demo Transactions</Link></button>
            </main>
            <img className='home__image' src={homePage} alt='preview of budget app displayed on phone by brown-skinned woman' height='1000'/>
        </div>
    );
};

export default Home;