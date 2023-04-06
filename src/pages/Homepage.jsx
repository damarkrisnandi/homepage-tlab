import { Fragment } from "react";
import Banner from "../components/Banner";
import Connect from "../components/Connect";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Sponsors from "../components/Sponsors";
import './Homepage.css';

const Homepage = () => {
    return ( 
        <Fragment>
            <div className="container">
                <Header/>
                <Banner/>
                <Projects/>
                <Connect/>
                <Sponsors/>
            </div>
            <Footer/>
        </Fragment> 
    );
}
 
export default Homepage;