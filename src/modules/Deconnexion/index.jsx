import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';



export default function Deconnexion() {

    const navigate = useNavigate();

    useEffect(() => {
        let loginData = localStorage.getItem('s_usertoken');
        loginData = JSON.parse(loginData);
        if(loginData && loginData.userIsLoggedIn) {
            localStorage.removeItem('s_usertoken');
            navigate('/connexion')
        }
        if(loginData);
    }, []);

    return (
        <></>
    )
}