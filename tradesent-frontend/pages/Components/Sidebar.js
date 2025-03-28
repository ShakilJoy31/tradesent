import { ImHome3 } from 'react-icons/im';
import { RiLuggageDepositFill } from 'react-icons/ri';
import { IoIosSettings } from 'react-icons/io';
import { AiOutlineLogout } from 'react-icons/ai';
import { useRouter } from 'next/router';
import FoodProductStyle from '../CSSfile/FoodProductStyle.module.css';
import { useEffect, useState } from 'react';
import { getUser } from '@/lib/healper';
const Sidebar = () => {
    const [user, setUser] = useState(null); 
    useEffect(()=>{
        const localStorageSavedUser = JSON.parse(localStorage.getItem('savedUser'));
                getUser().then(res=> {
                  if(localStorageSavedUser){
                      const specificUser = res?.find(singleUser => singleUser?.email == localStorageSavedUser?.email);
                      setUser(specificUser); 
                    }
                })
    },[])
    const router = useRouter();
    const [home, setHome] = useState(false)
    const [deposit, setDeposit] = useState(false)
    const [profile, setProfile] = useState(false)
    const handleHome = () =>{
        router.push('/dashboard');
        setDeposit(false);
        setHome(true);
        setProfile(false);
    }
    const handleDeposit = () =>{
        router.push('/deposit');
        setDeposit(true);
        setHome(false);
        setProfile(false);
    }
    const handleProfile = () =>{
        router.push('/profile');
        setDeposit(false);
        setHome(false);
        setProfile(true);
    }
    const handleLogOutFromMobile = () =>{
        const logOutConfirmation = window.confirm('Do you want to log out?')
        if(logOutConfirmation){
            localStorage.removeItem('savedUser')
            localStorage.removeItem('amount')
            router.push("/login")
        }
    }
    return (
        <div style={{ backgroundColor: '#247f9e' }} className='w-full lg:min-h-screen lg:w-32 md:w-32 md:min-h-screen md:h-full lg:h-full'>
            <div className='flex items-center justify-center mx-4 lg:mx-0 md:mx-0'>
                <div className='flex items-center justify-between w-full my-3 lg:w-0 md:w-0 lg:grid md:grid lg:mt-0 md:mt-0'>

                    <span onClick={handleHome} className={` cursor-pointer lg:my-10 md:my-8 hover:text-white ${home ? 'text-white' : 'text-purple-800'}`}><ImHome3 size={25}></ImHome3></span>

                    {
                        user?.isVerified != true && <span onClick={handleDeposit} className={` cursor-pointer hover:text-white ${deposit ? 'text-white' : 'text-purple-800'}`}><RiLuggageDepositFill size={25}></RiLuggageDepositFill></span>
                    }

                    <span onClick={handleProfile} className={` cursor-pointer ${!user?.isVerified ?'lg:my-10 md:my-8':'lg:mb-10 md:mb-8'} hover:text-white ${profile ? 'text-white' : 'text-purple-800'}`}><IoIosSettings size={28}></IoIosSettings></span>

                    <label htmlFor="logoutModal" className='hidden text-purple-800 cursor-pointer hover:text-red-600 lg:block md:block'><AiOutlineLogout size={28}></AiOutlineLogout></label>

                    {/* For mobile */}
                    <label onClick={handleLogOutFromMobile} className='block text-purple-800 cursor-pointer hover:text-red-600 lg:hidden md:hidden'><AiOutlineLogout size={28}></AiOutlineLogout></label>

                </div>
            </div>

            <div>
                <input type="checkbox" id="logoutModal" className="modal-toggle" />
                <label htmlFor="logoutModal" className="cursor-pointer modal">
                <label style={{
                    borderRadius: '5px',
                    backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                }} className="relative modal-box" htmlFor="">
                            <h3 className="flex justify-center py-4 text-3xl text-white">Are you sure to log out?</h3>
                            <div className='flex justify-end gap-x-6'>
                                <label htmlFor="logoutModal" style={{
                                    backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat",
                                }} className={`normal-case btn ${FoodProductStyle.moreFoodButton} btn-sm border-0 text-xl text-black mt-2 w-32`}>No
                                </label>

                                <label onClick={() => {
                                    localStorage.removeItem('savedUser')
                                    localStorage.removeItem('amount')
                                    router.push("/login")
                                }} htmlFor="logoutModal" style={{
                                    backgroundImage: "linear-gradient(45deg ,green ,white)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat",
                                }} className={`normal-case btn ${FoodProductStyle.logOut} btn-sm border-0 text-xl text-black mt-2 w-32`}>Yes
                                </label>
                            </div>
                        </label>
                </label>
            </div>
        </div>
    );
};

export default Sidebar;