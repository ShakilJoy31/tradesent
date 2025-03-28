import { getUser } from '@/lib/healper';
import FoodProductStyle from '../pages/CSSfile/FoodProductStyle.module.css';
import { useEffect, useState } from 'react';

const DepositReports = () => {
    const [user, setUser] = useState(null);
  useEffect(() => {
    const localStorageSavedUser = JSON.parse(localStorage.getItem("savedUser"));
    getUser().then((res) => {
      if (localStorageSavedUser) {
        const specificUser = res?.find(
          (singleUser) => singleUser?.email == localStorageSavedUser?.email
        );
        setUser(specificUser);
      }
    });
  }, []);
    console.log(user)
    return (
        <div className='mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0'>
            <h1 className='my-6 ml-2 text-3xl text-black'>Deposit Reports</h1>
            <div style={{
                    borderRadius: '5px',
                    backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                }} className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th> <span className='flex justify-center'>SL</span></th>
                            <th> <span className='flex justify-center'>Name</span> </th>
                            <th> <span className='flex justify-center'>Wallet Address</span> </th>
                            <th> <span className='flex justify-center'>Amount</span> </th>
                            <th> <span className='flex justify-center'>Tr Id</span> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={`${FoodProductStyle.tableRow}`}>
                            <th> <span className='flex justify-center'>1</span> </th>
                            <td> <span className='flex justify-center'>{user?.fullName}</span> </td>
                            <td> <span className='flex justify-center'>{user?.userTrId}</span> </td>
                            <td> <span className='flex justify-center'>{user?.isVerified == true ? user?.amount : 'In active yet'}</span> </td>
                            <td> <span className='flex justify-center'>{user?.userTrId}</span> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DepositReports;