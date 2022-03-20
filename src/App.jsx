import * as react from 'react'
import {
    Routes, 
    Route, 
    BrowserRouter as Router
} 
from "react-router-dom";
import TeamPage from './views/team/';
import Home from './views/home';
import Test from './views/test';
import Contact from './views/contact';
import styled from 'styled-components'
import CustomAppBar from './components/header';


const AppContainer = styled.div`
  background-color: #111111;
`
const Container = styled.div`
  background-color: #111111;
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
                        <Route path="/about" element={<Test />} />
                        <Route path="/contact" element={<Test />} />
                    </Routes>
                </Router>
            </AppContainer>
        </>
    );
}

export default App;


{/* <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/team" element={<TeamPage />} />
    <Route path="/about" element={<Test />} />
</Routes> */}