import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Menu from "../Shared/Menu";
import { changeRole } from "../ReduxStore/RoleReducers/MenuBaseOnRole";
import { useDispatch } from 'react-redux';
import { IoNotificationsOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function Wrapper() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkAuthentication = () => {
    let loginData = localStorage.getItem('s_usertoken');
    if(loginData) {
        loginData = JSON.parse(loginData);
        const userRole = loginData.roles;
        const token = loginData.token;
        dispatch(changeRole({role: userRole, token: token }));
    } else {
      navigate('/connexion');
    }
  }

  useEffect(() => {
      checkAuthentication();
  }, []);

    return (
        <>
            <div>
                <div className="topBarContainer">
                    <Link to='/' className="logoContainer" style={{width: "90px", height: '110%'}}>
                        <img style={{width: '100%', height: '100%'}} src="/logo3.png" alt="" />
                    </Link>
                    <div className="topBarStatusBar" style={{display: 'flex', alignItems: 'center', marginRight: '20px'}}>
                        <div style={{marginRight: '20px', position: 'relative'}}>
                            <IoNotificationsOutline size={30} color="#1E1E1E" />
                            <div style={{background: 'red', fontWeight: 'bold', fontSize: '12px',
                                position: 'absolute', top: '-4px', right: '-5px', padding: '2px 4px', color: 'white', borderRadius: '50%'
                            }}>25</div>
                        </div>
                        <div style={{width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(0, 0, 0, 0.5)', margin: '0 10px'}}> 
                            <svg width="30" height="30" viewBox="0 0 676 676" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2_2)">
                                <path d="M676 338C676.06 383.755 666.799 429.042 648.78 471.1L647.66 473.68C617.181 543.019 564.33 600.135 497.56 635.894C430.791 671.653 353.958 683.989 279.35 670.93C277.32 670.57 275.293 670.197 273.27 669.81C252.363 665.757 231.891 659.72 212.13 651.78C208.92 650.49 205.733 649.153 202.57 647.77C200.41 646.83 198.25 645.86 196.11 644.86C137.569 617.728 88.0051 574.426 53.2593 520.058C18.5135 465.69 0.0343666 402.522 0 338C0 151.33 151.33 0 338 0C524.67 0 676 151.33 676 338Z" fill="#30AA4E"/>
                                <path d="M360.261 412.794C433.036 412.794 492.031 353.799 492.031 281.024C492.031 208.25 433.036 149.254 360.261 149.254C287.486 149.254 228.491 208.25 228.491 281.024C228.491 353.799 287.486 412.794 360.261 412.794Z" fill="#D0CDE1"/>
                                <path d="M283.622 377.062C283.622 377.062 279.902 456.983 277.807 464.948C275.713 472.913 343.147 528.97 343.147 528.97L415.06 535.11L458.185 469.811C458.185 469.811 433.443 399.436 439.728 375.542L283.622 377.062Z" fill="#D0CDE1"/>
                                <path d="M245.99 174.862C245.99 174.862 287.827 84.2157 368.014 105.134C448.2 126.052 493.523 157.43 497.01 188.807C500.496 220.184 495.266 267.251 495.266 267.251C495.266 267.251 486.55 202.753 430.768 216.698C374.986 230.644 287.827 220.184 287.827 220.184L273.881 345.694C273.881 345.694 258.193 323.033 240.761 336.978C223.329 350.924 190.208 202.753 245.99 174.862Z" fill="#2F2E41"/>
                                <path d="M620.696 528.932L619.088 531.24C575.515 593.194 512.425 638.747 439.908 660.614C367.391 682.481 289.635 679.4 219.076 651.863C217.157 651.109 215.244 650.342 213.337 649.564C193.642 641.462 182.803 639.194 165 627.508C162.108 625.609 154.118 625.021 151 619.008C151 619.008 142.529 615.397 140.629 613.995C123.388 601.354 105.545 584.674 91 569.008L62 533.008L88.4746 519.807L98.4049 514.973L118.833 505.022L140.629 494.408L146.296 491.642L231.817 449.993L238.128 446.919L279 425L282.579 429.508C282.579 429.508 310.577 501.543 375.197 493.559C439.816 485.574 448 429.508 448 429.508L620.696 528.932Z" fill="#2F2E41"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_2_2">
                                <rect width="676" height="676" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <h4>Kumavi moise</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottomDataContainer" style={{position: 'absolute', width: '100%', height: `calc(100% - 44px)`, bottom: 0, display: 'flex'}}>
                <div className='header'>
                    <Menu />
                </div>
                <div className='container'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}