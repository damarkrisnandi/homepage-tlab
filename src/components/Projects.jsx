import { Fragment } from "react";
import './Projects.css';

const ProjectImageCard = ({url, height, width, category, subject}) => {    
    return ( 
    <Fragment>
        <div 
        className="project_img"
        style={{ width, height, backgroundImage: `url(${url} )`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div 
        className="project_content"
        style={{width: Math.floor(width/(1.5)), height: Math.floor(height/2), backgroundColor: "white"}}>
            <div className="project_content_container">
                <p className="project_content_category">{ category }</p>
                <p className="project_content_subject">{ subject }</p>
            </div>
        </div>
        </div>
    </Fragment> 
    );
}

const ProjectDesc = () => {
    return ( 
        <Fragment>
            <div className="project_desc_container">
                <p className="project_desc_text">Integritas dan kreativitas menjadi kunci dalam membangun produk digital terbaik untuk bisnis Anda</p>
                <a href="/"  className="project_desc_link">Lihat Semua Layanan TLab
                
                <svg style={{marginLeft: '20px'}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1.2C9 1.02319 8.92977 0.85362 8.80474 0.728595C8.67972 0.603571 8.51015 0.533333 8.33334 0.533333L3.00001 0.5C2.82319 0.5 2.65362 0.570238 2.5286 0.695262C2.40358 0.820287 2.33334 0.989856 2.33334 1.16667C2.33334 1.34348 2.40358 1.51305 2.5286 1.63807C2.65362 1.7631 2.82319 1.83333 3.00001 1.83333H6.70667L1.19334 7.36C1.13085 7.42198 1.08126 7.49571 1.04741 7.57695C1.01357 7.65819 0.99614 7.74533 0.99614 7.83333C0.99614 7.92134 1.01357 8.00848 1.04741 8.08972C1.08126 8.17096 1.13085 8.24469 1.19334 8.30667C1.25531 8.36915 1.32905 8.41875 1.41029 8.45259C1.49153 8.48644 1.57866 8.50387 1.66667 8.50387C1.75468 8.50387 1.84182 8.48644 1.92306 8.45259C2.0043 8.41875 2.07803 8.36915 2.14 8.30667L7.66667 2.78V6.5C7.66667 6.67681 7.73691 6.84638 7.86193 6.9714C7.98696 7.09643 8.15653 7.16667 8.33334 7.16667C8.51015 7.16667 8.67972 7.09643 8.80474 6.9714C8.92977 6.84638 9 6.67681 9 6.5V1.2Z" fill="#5449D6"/>
                </svg>
                </a>     
            </div>
        </Fragment> 
    );
}

const Projects = () => {
    return ( 
        <Fragment>
            <p className="header-section">Rangkaian Proyek Menarik TLab</p>
            <div className="projects_container">
                <div>
                    <ProjectDesc />
                    <ProjectImageCard 
                    url={"/tlab/card__cover_main.png"} 
                    height={(785 * (window.screen.width - 160)) / (1440 * 1.5)} 
                    width={(785 * (window.screen.width - 160)) / 1440 } 
                    category={"IT Managed Services"}
                    subject={"kesan.id - Kedaulatan Santri dan Kepribadian Muslim"}
                    />
                </div>
                <div>
                    <ProjectImageCard 
                    url={"/tlab/card__cover_1.png"} 
                    height={(482 * (window.screen.width - 160)) / (1440 * 1.5)} 
                    width={(482 * (window.screen.width - 160)) / 1440} 
                    category={"Application Development"}
                    subject={"Anterin.id Ridesharing company"}
                    />
                    <div style={{marginBottom: '30px'}}></div>
                    <ProjectImageCard 
                    url={"/tlab/card__cover_2.png"} 
                    height={(482 * (window.screen.width - 160)) / (1440 * 1.5)} 
                    width={(482 * (window.screen.width - 160)) / 1440}
                    category={"Artificial Intelligent"}
                    subject={"Juru.id Smart Parking"}
                    />
                </div>
            </div>
        </Fragment>
    );
}
 
export default Projects;