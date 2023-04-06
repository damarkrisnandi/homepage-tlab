import { Fragment } from "react";
import './Footer.css'

const Socials = () => (
    <Fragment>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '112px'
        }}>
            <img src="tlab/Facebook.svg" alt="fb" srcSet="" />
            <img src="tlab/Instagram.svg" alt="ig" srcSet="" />
            <img src="tlab/Youtube.svg" alt="yt" srcSet="" />
        </div>
    </Fragment>
)

const CompanySection = () => {
    const list = [
        'About', 'Career',  'Clients', 'logo', 'brand Identity', 'Article', 'Studi kasus', 'Kontak'
    ];

    return (
        <Fragment>
            <p>Company</p>
            {list.map(data => (
                <a href="/" key={ data }>{ data }</a>
            ))}
        </Fragment>
    )
}

const ServicesSection = () => {
    const list = [
        'IT managed Services', 'IT Consultant', 'IT Training',  'Big Data', 'Artificial intelligent', 'Cloud Computing', 'Internet Of Things', 'Web Development', 'Mobile App Development', 'System Integration', 'System Information'
    ]
    return (
        <Fragment>
            <p>Layanan</p>
            {list.map(data => (
                <a href="/" key={ data }>{ data }</a>
            ))}
        </Fragment>
    )
}

const ContactSection = () => {
    return (
        <Fragment>
            <p>Kontak</p>
            <div>
                <div className="company">PT. Teknologi Kode Indonesia</div>
                <div className="company">contact@tlab.co.id</div>
            </div>
            <div className="info">
                Head Office
                Jl Tanjung No.126, Sorosutan,
                Umbulharjo,
                Yogyakarta - 55162
            </div>
            <span className="info phone">
               <img src="tlab/phone.svg" alt="phone" srcSet="" style={{marginRight: '8px'}}/> 
               (0274) - 2870394
            </span>
            <div className="info">
                Jakarta Office
                SOHO Pancoran Unit S-1210
                Jl. Let. Jend. MT. Haryono Kav 2-3
                Pancoran,
                Jakarta Selatan 12810
            </div>
            <span className="info phone">
                <img src="tlab/phone.svg" alt="phone" srcSet=""  style={{marginRight: '8px'}}/> 
                (0274) - 2870394
            </span>
        </Fragment>
    )
}

const Footer = () => {
    return ( 
    <Fragment>
        <div className="footer_container">
            <div className="container footer_content_container">
                <div>
                    <p className="header-section">TLab Amazing Delivering Innovation</p>
                    <Socials />
                    <p style={{
                        fontFamily: `'Nuno Sans', sans-serif`,
                        fontWeight: '400',
                        fontSize: '11px',
                        marginTop: '39.42px'
                    }}>2010 - 2021 © TLab. All rights reserved.</p>
                </div>
                <div className="footer_section">
                    <CompanySection />
                </div>
                <div className="footer_section">
                    <ServicesSection />
                </div>
                <div className="footer_section">
                    <ContactSection />
                </div>
            </div>

        </div>
    </Fragment> 
    );
}
 
export default Footer;