import * as react from 'react'
import {
    Routes, 
    Route, 
    BrowserRouter as Router
} 
    from "react-router-dom";
import TeamPage from './views/team/';
import Home from './views/home';
import About from './views/about';
import Contact from './views/contact';
import styled from 'styled-components';
import CustomAppBar from './components/header';
import Footer from './components/footer';
import { ColorConstants } from './constants/Constants';
import './App.css'

const AppContainer = styled.div`
    background-color: ${ColorConstants.black};
    padding: 10px 50px 20px 50px; 
`

function App() {

    return (
        <>
            <AppContainer>
                <Router>
                    <CustomAppBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/team" element={<TeamPage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    <Footer />
                </Router>
            </AppContainer>
        </>
    );
}

export default App;



