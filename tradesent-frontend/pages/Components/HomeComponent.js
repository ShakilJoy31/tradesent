import { useRouter } from "next/router";
import FoodProductStyle from "../CSSfile/FoodProductStyle.module.css";
import { BsArrowRightShort } from "react-icons/bs";
import { RiErrorWarningFill } from "react-icons/ri";
import { TbRosetteNumber1 } from "react-icons/tb";
import { TbRosetteNumber2 } from "react-icons/tb";
import { TbRosetteNumber3 } from "react-icons/tb";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const HomeComponent = () => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  },[])
  const router = useRouter();
  return (
    <div
      style={{
        background: "black",
        backgroundSize: "100%",
        backgroundRepeat: "repeat",
        zIndex: '0'
      }}
    >
      {/* First one */}
      <div className="mt-8 mb-4 lg:mb-8 md:mb-6">
        <div className="flex-col hero-content lg:flex-row">
          <div className="" data-aos='fade-up'>
            <div
              style={{ borderBottom: "1px solid purple", paddingBottom: "6px" }}
              className="flex items-center px-4 text-yellow-600 lg:px-0 md:px-0"
            >
              <span className="mr-3 text-3xl">
                <RiErrorWarningFill></RiErrorWarningFill>
              </span>
              <p>What is the Trade Sent System</p>
            </div>
            <h1 className="px-4 py-4 font-serif text-2xl font-bold text-white lg:px-0 md:px-0 lg:text-4xl md:text-3xl">
              The Trade Sent System
            </h1>
            <p className={`mb-4 ${FoodProductStyle.para} px-4 md:px-0 lg:px-0`}>
              The TRADE SENT is a venture procedure where in a financial backer
              at the same time trades a resource in various business sectors to
              exploit a cost distinction and produce a benefit. When multiplied
              by a large volume, the returns can be impressive despite the
              typically modest price differences when multiplied by a large
              volume.
            </p>
            <div className="ml-4 lf:ml-0 md:ml-0">
              <div>
                <label
                  onClick={() => router.push("/signup")}
                  className={`normal-case btn ${FoodProductStyle.moreFoodButton} border-0 text-xl text-white btn`}
                >
                  Get Started{" "}
                  <span className="text-2xl">
                    <BsArrowRightShort></BsArrowRightShort>
                  </span>
                </label>

                <label
                  onClick={() => router.push("/login")}
                  className={`normal-case btn ${FoodProductStyle.moreFoodButton} lg:ml-5 md:ml-3 ml-2 border-0 text-xl text-white btn`}
                >
                  Log in{" "}
                  <span className="text-2xl">
                    <BsArrowRightShort></BsArrowRightShort>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <img
            src="https://i.ibb.co/PYCzfdr/tred-1.jpg"
            className={`max-w-sm rounded-lg shadow-2xl lg:max-w-md md:max-w-md ${FoodProductStyle.homePIcture} px-4 lg:px-0 md:px-0`} data-aos='fade-down'
          />
        </div>
      </div>

      {/* Second One */}
      <div className="">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="" data-aos='zoom-in'>
            <div>
              <div
                style={{
                  borderBottom: "1px solid purple",
                  paddingBottom: "6px",
                }}
                className="flex items-center px-4 text-yellow-600 lg:px-0 md:px-0"
              >
                <span className="mr-3 text-3xl">
                  <RiErrorWarningFill></RiErrorWarningFill>
                </span>
                <p>Our Trades</p>
              </div>
              <h1 className="px-4 py-4 font-serif text-2xl font-bold text-white lg:px-0 md:px-0 lg:text-4xl md:text-3xl">
                Acquire hugely with these Trade sent
              </h1>
              <div
                className={`pt-4 mr-2 ${FoodProductStyle.para} px-4 md:px-0 lg:px-0`}
              >
                <div className="flex items-center">
                  <span className="mr-4 text-4xl text-blue-600">
                    <TbRosetteNumber1></TbRosetteNumber1>
                  </span>

                  <span className="">
                    <span className="text-xl text-blue-600 cursor-pointer hover:underline">
                      Trade Sent
                    </span>
                    <p>
                      Exchange sent Produces Benefit Going FROM 1.5% TO 2% FROM
                      Exchanging GOLD, STOCKS, AND CFDS. Withdrawal fees are not
                      charged by the Universal Arbitration Trading System.
                    </p>
                  </span>
                </div>
                With minimal human intervention, the Trade Sent System takes
                trading to the next level by offering fully automated
                transactions. By harnessing advanced algorithms and cutting-edge
                technology, the system eliminates the need for constant manual
                oversight and execution.
              </div>
            </div>
            <div>
              <div
                className={`pt-4 mr-2 ${FoodProductStyle.para} px-4 md:px-0 lg:px-0`}
              >
                <div className="flex items-center">
                  <span className="mr-4 text-4xl text-blue-600">
                    <TbRosetteNumber2></TbRosetteNumber2>
                  </span>

                  <span className="">
                    <span className="text-xl text-blue-600 cursor-pointer hover:underline">
                      Trade sent Alpha
                    </span>
                    <p>
                      This Trade Sent generates a daily 1.5% -2.% % profit from
                      GOLD, STOCKS, AND CFDS. The system gives you room for your
                      profit and capital. Available to accumulate profit after
                      24 Hours from depositing time, If your profit is 20 USDT
                      profit.
                    </p>
                  </span>
                </div>
                Minimum Trading capital: 100 usdt Maximum Usdt: 1,00,000 usdt.
                Your deposit capital will be fixed for 1 year. You can open one
                deposit and one e-account from one account. Every day your
                capital will be returned in the form of profit for 365 days.
                With the Trade Sent System, you can participate in trading with
                a minimum trading capital of 100 USDT, offering accessibility to
                a wide range of individuals interested in entering the market.
                Additionally, the system accommodates higher investment amounts,
                with a maximum limit of 1,00,000 USDT, allowing for scalability
                and catering to investors with different risk profiles and
                financial capabilities. When you deposit your capital, it will
                remain fixed for a period of 1 year. This means that you commit
                your funds for the entire duration of the investment term,
                allowing the Trade Sent System to generate consistent returns
                over the course of 365 days.
              </div>
            </div>
            <div>
              <div
                className={`pt-4 mr-2 ${FoodProductStyle.para} px-4 md:px-0 lg:px-0`}
              >
                <div className="flex items-center">
                  <span className="mr-4 text-4xl text-blue-600">
                    <TbRosetteNumber3></TbRosetteNumber3>
                  </span>

                  <span className="">
                    <span className="text-xl text-blue-600 cursor-pointer hover:underline">
                      Trade Sent Premium
                    </span>
                    <p>
                      This bot generates 1.5% -2% profit daily from GOLD,
                      STOCKS, AND CFDS. Trading capital: 20 usdt, Minimum
                      Withdrawal: Maximum withdrawal: 10,000 Usdt. With minimal
                      human intervention, all transactions are fully automated.
                    </p>
                  </span>
                </div>
                This bot, powered by the Trade Sent System, is designed to
                generate consistent profits from trading in gold, stocks, and
                CFDs (Contracts for Difference). With its advanced algorithms
                and market analysis, the bot aims to deliver a daily profit
                range of 1.5% to 2%. To get started, you can begin trading with
                a trading capital as low as 20 USDT. This low minimum
                requirement allows individuals with varying budget sizes to
                participate in the trading activities facilitated by the bot.
                When it comes to withdrawals, the Trade Sent System offers
                flexibility. The minimum withdrawal amount is 20 $ but the
                maximum withdrawal limit is set at 10,000 USDT.
              </div>
            </div>
            <div className="mt-4 ml-4 lf:ml-0 md:ml-0">
              <div>
                <label
                  onClick={() => router.push("/signup")}
                  className={`normal-case btn ${FoodProductStyle.moreFoodButton} border-0 text-xl text-white btn`}
                >
                  Get Started{" "}
                  <span className="text-2xl">
                    <BsArrowRightShort></BsArrowRightShort>
                  </span>
                </label>

                <label
                  onClick={() => router.push("/login")}
                  className={`normal-case btn ${FoodProductStyle.moreFoodButton} lg:ml-5 md:ml-3 ml-2 border-0 text-xl text-white btn`}
                >
                  Log in{" "}
                  <span className="text-2xl">
                    <BsArrowRightShort></BsArrowRightShort>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <img
            src="https://i.ibb.co/hMqzK8n/tred-2.jpg"
            className={`max-w-sm rounded-lg shadow-2xl lg:max-w-md md:max-w-md ${FoodProductStyle.homePIcture} px-4 lg:px-0 md:px-0`} data-aos='zoom-out'
          />
        </div>
      </div>

      {/* Third one */}
      <div className="mb-4 lg:mb-8 md:mb-6">
        <div className="flex-col hero-content lg:flex-row">
          <div data-aos="fade-up-right">
            <div
              style={{ borderBottom: "1px solid purple", paddingBottom: "6px" }}
              className="flex items-center px-4 text-yellow-600 lg:px-0 md:px-0"
            >
              <span className="mr-3 text-3xl">
                <RiErrorWarningFill></RiErrorWarningFill>
              </span>
              <p>About Us</p>
            </div>
            <h1 className="px-4 py-4 font-serif text-2xl font-bold text-white lg:px-0 md:px-0 lg:text-4xl md:text-3xl">
              Who We Are?
            </h1>
            <p className={`py-6 ${FoodProductStyle.para} px-4 md:px-0 lg:px-0`}>
              TRADE SENT was established in 2019 TARDE SENT SYSTEM was
              established in 2019 by two brothers. One brother is a successful
              GOLD TARDER and FX TARDER with more than ten years of experience,
              while the other brother is an IT specialist. With the mix of an
              effective GOLD MARKET, FOREX MARKET, CRYPTO MARKET, Worldwide
              Capital Market Technical Examination, crucial investigation
              subject matter expert and an IT expert you make certain to have a
              manageable, steady and solid framework certainly.
            </p>
            <div className="mt-4 ml-4 lf:ml-0 md:ml-0">
              <div>
                <label
                  onClick={() => router.push("/signup")}
                  className={`normal-case btn ${FoodProductStyle.moreFoodButton} border-0 text-xl text-white btn`}
                >
                  Get Started{" "}
                  <span className="text-2xl">
                    <BsArrowRightShort></BsArrowRightShort>
                  </span>
                </label>

                <label
                  onClick={() => router.push("/login")}
                  className={`normal-case btn ${FoodProductStyle.moreFoodButton} lg:ml-5 md:ml-3 ml-2 border-0 text-xl text-white btn`}
                >
                  Log in{" "}
                  <span className="text-2xl">
                    <BsArrowRightShort></BsArrowRightShort>
                  </span>
                </label>
              </div>
            </div>
          </div>

          <img
            src="https://i.ibb.co/tKQq4vL/tred-3.jpg"
            className={`max-w-sm rounded-lg shadow-2xl lg:max-w-md md:max-w-md ${FoodProductStyle.homePIcture} px-4 lg:px-0 md:px-0`} data-aos="fade-up-left"
          />
        </div>
      </div>

      {/* Fourth one */}
      <div className="mb-4 lg:mb-8 md:mb-6">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div data-aos="fade-down-right">
            <div
              style={{ borderBottom: "1px solid purple", paddingBottom: "6px" }}
              className="flex items-center px-4 text-yellow-600 lg:px-0 md:px-0"
            >
              <span className="mr-3 text-3xl">
                <RiErrorWarningFill></RiErrorWarningFill>
              </span>
              <p>Vision & Mission</p>
            </div>
            <h1 className="px-4 py-4 font-serif text-2xl font-bold text-white lg:px-0 md:px-0 lg:text-4xl md:text-3xl">
              Why Trade sent System
            </h1>
            <p className={`py-6 ${FoodProductStyle.para} px-4 md:px-0 lg:px-0`}>
              Trade Sent System offers a revolutionary approach to trading that
              empowers individuals and businesses to optimize their investment
              strategies. With the Trade Sent System, you can automate various
              aspects of your trading activities, streamlining processes and
              increasing efficiency. The system can execute trades, monitor
              market conditions, and even adjust strategies based on predefined
              rules, reducing the need for manual intervention and saving you
              incomes.
            </p>

            {/* FAQ */}
            <div
              style={{ borderBottom: "1px solid purple", paddingBottom: "6px" }}
              className="flex items-center px-4 text-yellow-600 lg:px-0 md:px-0"
            >
              <span className="mr-3 text-3xl">
                <RiErrorWarningFill></RiErrorWarningFill>
              </span>
              <p>FAQ (Frequently Asked Question)</p>
            </div>

            <div className="justify-center mx-4 mt-4 md:flex lg:flex lg:mx-0 md:mx-0">
              <div style={{border:'1px solid purple'}}
                tabIndex={0}
                className="mb-2 border collapse collapse-arrow lg:mb-0 md:mb-0"
              >
                <div className="text-xl font-medium collapse-title">
                  How do I get my daily Income?
                </div>
                <div className="collapse-content">
                  <p>
                    You will get 1.5% of your deposit amount and can never withdraw before a year. You can withdraw the referral amount you got and the daily income will be added to your account by out Trade sent System Application.
                  </p>
                </div>
              </div>

              <div style={{border:'1px solid purple'}}
                tabIndex={0}
                className="mb-2 border collapse collapse-arrow lg:mb-0 md:mb-0"
              >
                <div className="text-xl font-medium collapse-title">
                What is the Withdraw Policy?
                </div>
                <div className="collapse-content">
                  <p>
                    You can only withdraw your referral and daily income. You can not withdraw you root amount that is deposited before a year and you can not withdraw less than 20$. Besides 3% of your withdrawal amount will be charged per withdraw.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 ml-4 lf:ml-0 md:ml-0">
              <div>
                <label
                  onClick={() => router.push("/signup")}
                  className={`normal-case btn ${FoodProductStyle.moreFoodButton} border-0 text-xl text-white btn`}
                >
                  Get Started{" "}
                  <span className="text-2xl">
                    <BsArrowRightShort></BsArrowRightShort>
                  </span>
                </label>

                <label
                  onClick={() => router.push("/login")}
                  className={`normal-case btn ${FoodProductStyle.moreFoodButton} lg:ml-5 md:ml-3 ml-2 border-0 text-xl text-white btn`}
                >
                  Log in{" "}
                  <span className="text-2xl">
                    <BsArrowRightShort></BsArrowRightShort>
                  </span>
                </label>
              </div>
            </div>
          </div>

          <img
            src="https://img.freepik.com/free-photo/business-strategy-success-target-goals_1421-33.jpg?size=626&ext=jpg&ga=GA1.2.190334821.1684960559&semt=ais"
            className={`max-w-sm rounded-lg shadow-2xl lg:max-w-md md:max-w-md ${FoodProductStyle.homePIcture} px-4 lg:px-0 md:px-0`} data-aos="fade-down-left"
          />
        </div>
      </div>

      <div className={`${FoodProductStyle.homePageDivider}`}></div>
    </div>
  );
};

export default HomeComponent;
