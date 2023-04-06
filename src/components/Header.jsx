import { Fragment } from "react";
import './Header.css'


const HeaderMenuList = () => {
    const menus = [
        {name: 'Company', url: '#'},
        {name: 'Layanan', url: '#'},
        {name: 'Studi Kasus', url: '#'},
        {name: 'Data Center', url: '#'}
    ]
    return ( 
        <Fragment>
            {menus.map(menu => (
            <a href={menu.url} className="menu_items" key={ menu.name }>{ menu.name }</a>
            ))}
        </Fragment> 
    );
}

const HeaderButton = ({ label, onClick }) => {
    return ( 
        <Fragment>
            <a onClick={() => onClick()} className="button_header" href="/">{ label }</a>
        </Fragment> 
    );
}

const Header = () => {
    return ( 
    <Fragment>
        <div className="header_container">
            <img id="brand_logo" src="/tlab/brand_logo.svg" alt="brand_logo" srcSet="" />
            <div className="menubar">
                <HeaderMenuList />
            </div>
            <HeaderButton label="Hubungi Kami" onClick={() => {console.log('click')}}/>
        </div>
    </Fragment> 
    );
}
 
export default Header;