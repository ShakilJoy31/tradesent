import { useRouter } from "next/router";
import FoodProductStyle from '../pages/CSSfile/FoodProductStyle.module.css';
const Premium = () => {
    const router = useRouter();
    return (
        <div className="mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0">
            <h1 className="my-6 text-3xl text-black">COMBAT BOTS PREMIUM</h1>
            <div style={{
                borderRadius: '5px',
                backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
            }} className="w-full p-2 mb-4 lg:p-6 md:p-4 lg:mb-0 md:mb-0">
                <div className="">
                    <div className="flex items-center justify-between">
                        <p>Daily Profit</p>
                        <p>2.3% - 7% daily</p>
                    </div>
                    <div className="flex items-center justify-between my-1">
                        <p>Minimum Amount</p>
                        <p>10 $</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p>Duration</p>
                        <p>24 hr</p>
                    </div>
                </div>
                <div className={`${FoodProductStyle.customDividerAlpha} my-4 w-ful`}></div>
                <div>
                    <span className="font-mono text-xl">Amount (USD)</span>
                    <input type="number" className="w-full my-2 text-white bg-purple-500 input focus:outline-none" />
                    <label style={{
                        backgroundImage: "linear-gradient(45deg ,#B71375, #6C9BCF)",
                        backgroundSize: "100%",
                        backgroundRepeat: "repeat",
                    }} className={`normal-case btn ${FoodProductStyle.moreFoodButton} border-0 text-xl text-white w-full lg:w-36 md:w-36 btn-sm mt-1`}>Subscribe
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Premium;