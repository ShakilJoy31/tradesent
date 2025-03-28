import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NavbarCss from '../CSSfile/Navbar.module.css';
const Footer = () => {
    const router = useRouter(); 
    const [localStorageUser, setLocalStorageUser] = useState({});
    useEffect(() => {
        const localStorageSavedUser = JSON.parse(localStorage.getItem('savedUser'));
        if (localStorageSavedUser) {
            setLocalStorageUser(localStorageSavedUser);
        }
    }, [])
    return (
        <div className='mr-4 lg:mr-0 md:mr-0'>
            {
                router.pathname === '/' ? <div style={{ background: `${router.pathname == '/' ? 'black' : 'linear-gradient(45deg, #643843, #B799FF)'}`}} className={`pb-10 lg:pb-0 md:pb-0`}>
                <footer class="footer p-10 Footer grid md:flex lg:flex justify-around text-base-content">
                    <div className=''>
                        <span style={{
                            fontWeight: "700",
                            fontSize: "22px",
                            lineHeight: "41px",
                            color: `${router.pathname == '/' ? 'purple' : '#11009E'}`, 
                        }} class=" block mb-[20px] font-serif ">Trading Platform</span>
                        <p class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Minimum Deposit of 100 usdt</p>
                        <p class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Maximum Deposit 1,00,000 USD</p>
                        <p class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Stable profit (1--2%) every Day</p>
                        <p class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Guaranteed profit... (No loss)</p>
                    </div>
    
    
    
                    <div className=''>
                        <span style={{
                            color: '#61876E',
                            fontWeight: "700",
                            fontSize: "22px",
                            lineHeight: "41px",
                            color: `${router.pathname == '/' ? 'purple' : '#11009E'}`, 
                        }} class=" mb-[20px] font-serif ">Level 3 Commission (One time)</span>
                        <a class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Investment locked 365 days...</a>
                        <Link href='/' class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Weekly 2 days off ( Saturday & Sunday)</Link>
                        <a class={`cursor-pointer font-serif flex justify-center items-center ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>
                            <p className=''>Withdraw Every day 24 hours</p>
                        </a>
                        <a class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Minimum Withdrawal 20 usdt</a>
                        
                    </div>
    
    
    
                    <div className=''>
                        <span style={{
                            color: '#61876E',
                            fontWeight: "700",
                            fontSize: "22px",
                            lineHeight: "41px",
                            color: `${router.pathname == '/' ? 'purple' : '#11009E'}`, 
                        }} class=" mb-[20px] font-serif">Lifetime Income Guaranteed</span>
                        <a class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Maximum withdrawal of 10000 usdt Daily</a>
                        <Link href='/' class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Withdrawal fee only 3%</Link>
                        <a class="cursor-pointer font-serif flex justify-center items-center  text-white">
                            <p className={`${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Withdrawal to account within (1-- 24 hours)</p>
                        </a>
                        <a class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Payment methods: USDT TRC-20</a>
                        
                    </div>
                    
                </footer>
            </div> : <div className={`pb-2 mx-2 mt-4 mb-16 md:mb-8 lg:mb-6 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0 ${router.pathname == '/deposit' ? 'w-full' : ''}`}>
        <div
          style={{
            borderRadius: "5px",
            backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
          }}
          className="w-full p-4 lg:p-8 md:p-6 lg:mb-0 md:mb-0"
        >
          
          <div className={`grid items-center justify-between lg:flex md:flex`}>
          
                <div className='grid'>
                    <span style={{
                        fontWeight: "700",
                        fontSize: "22px",
                        lineHeight: "41px",
                        color: `${router.pathname == '/' ? 'purple' : '#11009E'}`, 
                    }} class=" block mb-[20px] font-serif ">Trading Platform</span>
                    <p class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Minimum Deposit of 100 usdt</p>
                    <p class={`cursor-pointer my-2 font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Maximum Deposit 1,00,000 USD</p>
                    <p class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Stable profit (1--2%) every Day</p>
                    <p class={`cursor-pointer mt-2 font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Guaranteed profit... (No loss)</p>
                </div>



                <div className={`${router.pathname == '/deposit' ? NavbarCss.gaping : ''} grid`}>
                    <span style={{
                        color: '#61876E',
                        fontWeight: "700",
                        fontSize: "22px",
                        lineHeight: "41px",
                        color: `${router.pathname == '/' ? 'purple' : '#11009E'}`, 
                    }} class=" mb-[20px] font-serif ">Level 3 Commission (One time)</span>
                    <a class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Investment locked 365 days...</a>
                    
                    <Link href='/' class={`cursor-pointer my-2 font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Weekly 2 days off ( Saturday & Sunday)</Link>

                    <a class={`cursor-pointer font-serif flex items-center ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>
                        <p className=''>Withdraw Every day 24 hours</p>
                    </a>

                    <a class={`cursor-pointer mt-2 font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Minimum Withdrawal 20 usdt</a>
                    
                </div>



                <div className='grid'>
                    <span style={{
                        color: '#61876E',
                        fontWeight: "700",
                        fontSize: "22px",
                        lineHeight: "41px",
                        color: `${router.pathname == '/' ? 'purple' : '#11009E'}`, 
                    }} class=" mb-[20px] font-serif">Lifetime Income Guaranteed</span>

                    <a class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Maximum withdrawal of 10000 usdt Daily</a>

                    <Link href='/' class={`cursor-pointer my-2 font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Withdrawal fee only 3%</Link>

                    <a class="cursor-pointer font-serif flex items-center  text-white">
                        <p className={`${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Withdrawal to account within (1-- 24 hours)</p>
                    </a>

                    <a class={`cursor-pointer mt-2 font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Payment methods: USDT TRC-20</a>
                    
                </div>
                
          </div>
        </div>
      </div>
            }
        
        </div>
    );
};

export default Footer;








// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// const Footer = () => {
//     const router = useRouter(); 
//     const [localStorageUser, setLocalStorageUser] = useState({});
//     useEffect(() => {
//         const localStorageSavedUser = JSON.parse(localStorage.getItem('savedUser'));
//         if (localStorageSavedUser) {
//             setLocalStorageUser(localStorageSavedUser);
//         }
//     }, [])
//     return (
//         <div style={{ background: `${router.pathname == '/' ? 'black' : 'linear-gradient(45deg, #643843, #B799FF)'}`}} className={`pb-10 lg:pb-0 md:pb-0`}>
//             <footer class="footer p-10 Footer grid md:flex lg:flex justify-around text-base-content">
//                 <div className=''>
//                     <span style={{
//                         fontWeight: "700",
//                         fontSize: "22px",
//                         lineHeight: "41px",
//                         color: `${router.pathname == '/' ? 'purple' : '#11009E'}`, 
//                     }} class=" block mb-[20px] font-serif ">Trading Platform</span>
//                     <p class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Minimum Deposit of 100 usdt</p>
//                     <p class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Maximum Deposit 1,00,000 USD</p>
//                     <p class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Stable profit (1--2%) every Day</p>
//                     <p class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Guaranteed profit... (No loss)</p>
//                 </div>

//                 {/* Useful Links */}
//                 <div className=''>
//                     <span style={{
//                         color: '#61876E',
//                         fontWeight: "700",
//                         fontSize: "22px",
//                         lineHeight: "41px",
//                         color: `${router.pathname == '/' ? 'purple' : '#11009E'}`, 
//                     }} class=" mb-[20px] font-serif ">Level 3 Commission (One time)</span>
//                     <a class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Investment locked 365 days...</a>
//                     <Link href='/' class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Weekly 2 days off ( Saturday & Sunday)</Link>
//                     <a class={`cursor-pointer font-serif flex justify-center items-center ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>
//                         <p className=''>Withdraw Every day 24 hours</p>
//                     </a>
//                     <a class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Minimum Withdrawal 20 usdt</a>
                    
//                 </div>
//                 <div className=''>
//                     <span style={{
//                         color: '#61876E',
//                         fontWeight: "700",
//                         fontSize: "22px",
//                         lineHeight: "41px",
//                         color: `${router.pathname == '/' ? 'purple' : '#11009E'}`, 
//                     }} class=" mb-[20px] font-serif">Lifetime Income Guaranteed</span>
//                     <a class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Maximum withdrawal of 10000 usdt Daily</a>
//                     <Link href='/' class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Withdrawal fee only 3%</Link>
//                     <a class="cursor-pointer font-serif flex justify-center items-center  text-white">
//                         <p className={`${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Withdrawal to account within (1-- 24 hours)</p>
//                     </a>
//                     <a class={`cursor-pointer font-serif ${router.pathname == '/' ? 'text-white' : 'text-white'}`}>Payment methods: USDT TRC-20</a>
                    
//                 </div>

//                 {/* ml-2 md:ml-10 lg:ml-2 */}
                
//             </footer>
//         </div>
//     );
// };

// export default Footer;