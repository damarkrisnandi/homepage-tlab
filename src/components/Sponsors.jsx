import { Fragment } from "react";
import './Sponsors.css'

const Sponsors = () => {
    const logos = [
        'tlab/logo_google.svg',
        'tlab/logo_jaya.svg',
        'tlab/logo_suhu.svg',
        'tlab/logo_anterin.svg',
        'tlab/logo_kesan.svg',
        'tlab/logo_ipb.svg',
        'tlab/logo_kehutanan.svg',
        'tlab/logo_bms.svg',
        'tlab/logo_ugm.svg',
        'tlab/logo_gojek.svg',
        'tlab/logo_grab.svg',
        'tlab/logo_uber.svg'
    ]
    return ( 
        <Fragment>
            <div className="sponsors_container">
                {logos.map(logo => (
                    <Fragment>
                        <img src={logo} alt={logo} srcSet="" />
                    </Fragment>
                ))}
            </div>
        </Fragment>
    );
}
 
export default Sponsors;