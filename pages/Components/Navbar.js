import React, { useState } from 'react';
import NavbarCss from '../CSSfile/Navbar.module.css';
import { useRouter } from 'next/router';
// import { FcDownload } from 'react-icons/fc';

const Navbar = () => {
    const router = useRouter(); 
    const handleSignUpButton = () =>{
        const logOutConfirmation = window.confirm('Do you want to log out?')
        if(logOutConfirmation){
            router.push("/signup")
            localStorage.removeItem('savedUser')
            localStorage.removeItem('amount')
        }
        
    }
    return (
        <div className='pb-20'>
            <div style={{
                backgroundColor: '#247f9e',
                position:'fixed',
                zIndex: 1
            }} className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label onClick={()=>{router.push('/')}} tabIndex={0} className="">
                            <img className='w-16 h-16 rounded-md' src="https://i.ibb.co/L0jX9xc/Whats-App-Image-2023-06-06-at-15-02-22.jpg" alt="" />
                        </label>
                        <ul style={{
                            backgroundColor: '#247f9e',
                        }} tabIndex={0} className="mt-6 rounded-sm menu menu-compact dropdown-content w-72">
                        </ul>
                    </div>
                </div>

                <div className="navbar-end">
                    <a onClick={handleSignUpButton} className={`cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white rounded-sm `}><span className='flex justify-center'>Sign Up</span></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;










































































// import React, { useState } from 'react';
// import NavbarCss from '../CSSfile/Navbar.module.css';
// // import { FcDownload } from 'react-icons/fc';

// const Navbar = () => {
//     const [freeFire, setFreeFire] = useState(true);
//     const [screenShot, setScreenShot] = useState(false);
//     const [download, setDownload] = useState(false);
//     const [aboutUs, setAboutUs] = useState(false);
//     const [contactUs, setContact] = useState(false);
//     const [downloadApp, setDownloadApp] = useState(false);
//     return (
//         <div>
//             <div style={{
//                 backgroundColor: '#247f9e',
//             }} className="navbar">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <label tabIndex={0} className="lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                         </label>
//                         <ul style={{
//                             backgroundColor: '#247f9e',
//                         }} tabIndex={0} className="mt-6 rounded-sm menu menu-compact dropdown-content w-72">

//                             <li onClick={() => {
//                                 setDownloadApp(false);
//                                 setContact(false);
//                                 setAboutUs(false);
//                                 setDownload(false);
//                                 setScreenShot(true);
//                                 setFreeFire(false);
//                             }}><a className={`cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white rounded-sm flex justify-center ${screenShot ? NavbarCss.navbarItem : ''}`}>Screenshots</a></li>

//                             <li onClick={() => {
//                                 setDownloadApp(false);
//                                 setContact(false);
//                                 setAboutUs(false);
//                                 setDownload(true);
//                                 setScreenShot(false);
//                                 setFreeFire(false);
//                             }} tabIndex={0}>
//                                 <a className={`cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white rounded-sm flex justify-center my-2 ${download ? NavbarCss.navbarItem : ''}`}>Download</a>
//                             </li>

//                             <li onClick={() => {
//                                 setDownloadApp(false);
//                                 setContact(false);
//                                 setAboutUs(true);
//                                 setDownload(false);
//                                 setScreenShot(false);
//                                 setFreeFire(false);
//                             }}><a className={`cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white rounded-sm flex justify-center ${aboutUs ? NavbarCss.navbarItem : ''}`}>About Us</a></li>

//                             <li onClick={() => {
//                                 setDownloadApp(false);
//                                 setContact(true);
//                                 setAboutUs(false);
//                                 setDownload(false);
//                                 setScreenShot(false);
//                                 setFreeFire(false);
//                             }}><a className={`cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white rounded-sm flex justify-center mt-2 ${contactUs ? NavbarCss.navbarItem : ''}`}>Contact Us</a></li>

//                         </ul>
//                     </div>

//                     <a onClick={() => {
//                         setDownloadApp(false);
//                         setContact(false);
//                         setAboutUs(false);
//                         setDownload(false);
//                         setScreenShot(false);
//                         setFreeFire(true);
//                     }} className={`cursor-pointer btn-sm text-white normal-case text-xl border-0 ml-2 hover:text-black hover:bg-white rounded-sm ${freeFire ? NavbarCss.navbarItem : ''}`}>Home</a>
//                 </div>

//                 <div className="hidden navbar-center lg:flex">
//                     <ul className="px-1 menu menu-horizontal">
//                         <li onClick={() => {
//                             setDownloadApp(false);
//                             setContact(false);
//                             setAboutUs(false);
//                             setDownload(false);
//                             setScreenShot(true);
//                             setFreeFire(false);
//                         }}><a style={{
//                             borderRadius: '3px'
//                         }} className={`cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white ${screenShot ? NavbarCss.navbarItem : ''}`}>Screenshots</a></li>

//                         <li onClick={() => {
//                             setDownloadApp(false);
//                             setContact(false);
//                             setAboutUs(false);
//                             setDownload(true);
//                             setScreenShot(false);
//                             setFreeFire(false);
//                         }} tabIndex={0}>
//                             <a style={{
//                                 borderRadius: '3px'
//                             }} className={` cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white mx-2 ${download ? NavbarCss.navbarItem : ''}`}> <span className='flex justify-center'>Download</span></a>
//                         </li>

//                         <li onClick={() => {
//                             setDownloadApp(false);
//                             setContact(false);
//                             setAboutUs(true);
//                             setDownload(false);
//                             setScreenShot(false);
//                             setFreeFire(false);
//                         }}><a style={{
//                             borderRadius: '3px'
//                         }} className={`cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white ${aboutUs ? NavbarCss.navbarItem : ''}`}>About us</a></li>

//                         <li onClick={() => {
//                             setDownloadApp(false);
//                             setContact(true);
//                             setAboutUs(false);
//                             setDownload(false);
//                             setScreenShot(false);
//                             setFreeFire(false);
//                         }}><a style={{
//                             borderRadius: '3px'
//                         }} className={`cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white ml-2 ${contactUs ? NavbarCss.navbarItem : ''}`}>Contact Us</a></li>
//                     </ul>
//                 </div>
//                 <div className="navbar-end">
//                     <a onClick={() => {
//                         setDownloadApp(true);
//                         setContact(false);
//                         setAboutUs(false);
//                         setDownload(false);
//                         setScreenShot(false);
//                         setFreeFire(false);
//                     }} className={`cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white rounded-sm ${downloadApp ? NavbarCss.navbarItem : ''}`}><span className='flex justify-center'>Sign Up</span></a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;