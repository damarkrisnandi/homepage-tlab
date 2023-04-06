import { Fragment } from "react";
import './Connect.css'

const ConnectDesc = () => {
    return ( 
    <Fragment>
        <div className="connect_desc_container">
            <p className="connect_desc_text">Pengalaman partner TLab ketika berkolaborasi untuk menghasilkan produk terbaik</p>
            <a href="/"  className="connect_desc_link">
                Lihat Semua partner TLab
            
            <svg style={{marginLeft: '20px'}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1.2C9 1.02319 8.92977 0.85362 8.80474 0.728595C8.67972 0.603571 8.51015 0.533333 8.33334 0.533333L3.00001 0.5C2.82319 0.5 2.65362 0.570238 2.5286 0.695262C2.40358 0.820287 2.33334 0.989856 2.33334 1.16667C2.33334 1.34348 2.40358 1.51305 2.5286 1.63807C2.65362 1.7631 2.82319 1.83333 3.00001 1.83333H6.70667L1.19334 7.36C1.13085 7.42198 1.08126 7.49571 1.04741 7.57695C1.01357 7.65819 0.99614 7.74533 0.99614 7.83333C0.99614 7.92134 1.01357 8.00848 1.04741 8.08972C1.08126 8.17096 1.13085 8.24469 1.19334 8.30667C1.25531 8.36915 1.32905 8.41875 1.41029 8.45259C1.49153 8.48644 1.57866 8.50387 1.66667 8.50387C1.75468 8.50387 1.84182 8.48644 1.92306 8.45259C2.0043 8.41875 2.07803 8.36915 2.14 8.30667L7.66667 2.78V6.5C7.66667 6.67681 7.73691 6.84638 7.86193 6.9714C7.98696 7.09643 8.15653 7.16667 8.33334 7.16667C8.51015 7.16667 8.67972 7.09643 8.80474 6.9714C8.92977 6.84638 9 6.67681 9 6.5V1.2Z" fill="#5449D6"/>
            </svg>
            </a> 
        </div>
    </Fragment> 
    );
}


const ConnectPartner = ({ name, role, bgtestimonial }) => {
    return (
    <Fragment>
        <div className="connect_partner_container">
            <img src="tlab/avatar.png" alt="avatar" srcSet="" />
            <div style={{marginLeft: '24px'}}>
                <p className="connect_partner_name">{ name }</p>
                <p className="connect_partner_role">{ role }</p>
            </div>
        </div>
    </Fragment>
    )
}
const ConnectCard = ({ name, role, message, bgcolor, bgtestimonial}) => {
    return (
        <Fragment>
            <div className="connect_testimoni_container"
                style={{
                    backgroundColor: bgcolor
                }}
            >
                <div className="connect_testimoni_text">{ message }</div>
                <div style={{
                    width: '100%', 
                    height: '189.67px', 
                    backgroundImage: `url(${bgtestimonial || 'tlab/assets-testimonial_1.png'})`,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    borderRadius: '0px 0px 8px 8px'
                    }}>
                        
                    <ConnectPartner 
                    name={ name }
                    role={ role }
                    bgtestimonial={ bgtestimonial }
                    />
                </div> 
            </div>
        </Fragment>
    )
}
const Connect = () => {
    const testimonials = [
        {
            name: 'Hamdan Hamedan',
            role: 'CEO of Kesan Indonesia',
            message: `Our experience tells us it's better this way. Not only because it is more efficient – the outcome is simply much better.`,
            bgcolor: '#049CFB',
            bgtestimonial: 'tlab/assets-testimonial_1.png'
        },
        {
            name: 'Hamdan Hamedan',
            role: 'CEO of Kesan Indonesia',
            message: `Sejak akhir 2012, mulai dari konsep POS sederhana. Terus berkembang memenuhi kebutuhan. Dengan Tlab sistem dapat bertumbuh sesuai kebutuhan.`,
            bgcolor: '#5449D6',
            bgtestimonial: 'tlab/assets-testimonial_2.png'
        },
        {
            name: 'Hamdan Hamedan',
            role: 'CEO of Kesan Indonesia',
            message: `Kreativitas, tanggung jawab, serta komunikasi yang andal menjadi kunci kelancaran kerjasama kami bersama TLab dalam membangun aplikasi Anterin.`,
            bgcolor: '#00DE9C',
            bgtestimonial: 'tlab/assets-testimonial_3.png'
        }
    ]
    return ( 
        <Fragment>
            <div className="bg_connect">
                <div className="container">
                    <div className="connect_head_flex"> 
                        <p className="header-section head_width">Connect &amp; Collaborate</p>
                        <ConnectDesc />
                    </div>
                    <div className="connect_testimoni_flex">
                        {testimonials.map(t => (
                            <ConnectCard 
                                name={ t.name }
                                role={ t.role }
                                message={ t.message }
                                bgcolor={ t.bgcolor }
                                bgtestimonial={ t.bgtestimonial }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Connect;