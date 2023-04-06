import { Fragment } from "react";
import './Banner.css'

const Banner = () => {
    return ( 
    <Fragment>
        <div className="banner_container">
            <h1 className="banner_h_text">Dapatkan solusi digital terbaik untuk mengembangkan bisnis anda</h1>
            <p className="banner_c_text">Jadikan bisnis semakin berkembang dengan pemilihan teknologi yang tepat dan andal</p>
            <img className="banner_group" src="/tlab/Group.svg" alt="banner_group" srcSet="" />
        </div>
    </Fragment> 
    );
}
 
export default Banner;