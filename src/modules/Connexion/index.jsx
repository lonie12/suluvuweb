import '../Shared/styles/connexion/index.css';
import TextInput from '../Shared/components/TextInput';
import BtnValidate from '../Shared/components/BtnValidate';
import {IoIosMail, IoIosLock} from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeRole } from '../ReduxStore/RoleReducers/MenuBaseOnRole';

export default function Connexion(){

    const loginInitialData = {
        username: '',
        password: '',
    }

    const userRole = useSelector(state => state.menurole.data);
    const dispatch = useDispatch();
    const [loginData, setLoginData] = useState(loginInitialData);
    const navigate = useNavigate();

    useEffect(() => {
        let loginData = localStorage.getItem('s_usertoken');
        loginData = JSON.parse(loginData);
        if(loginData && loginData.userIsLoggedIn) {
            navigate('/')
        }
    }, [])

    const handleInputChange = (e) => {
        setLoginData({...loginData, [e.target.id]: e.target.value})
    }

    const handleBtnValidateClick = async () => {

        let result = await fetch('http://localhost:8000/user/signin', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: loginData.username,
                password: loginData.password
            })
        })
        result = await result.json();
        
        localStorage.setItem('login', JSON.stringify(result.token));
        if(!result.error) {
            saveLocalUserData(result).then(() => {
                navigate('/');
            });
        } else {
            alert(result.error);
            console.log(result.message)
        }
    }

    const saveLocalUserData = async (result) => {
        let dataToSave = {
            userIsLoggedIn: true,
            token: result.token,
            roles: result.roles
        }
        localStorage.setItem('s_usertoken', JSON.stringify(dataToSave));
        dispatch(changeRole({role: result.roles}));
        return true;
    }
    
    return (
        <div id='p-connexion'>
            <span className='text title'>Connexion</span>
            <span className='text description'>Connectez vous pour continuer</span>

            <div className='forms'>
                <TextInput 
                    id='username'
                    style={{width: '100%', margin: '8px 0'}} 
                    icon={<IoIosMail size={30} color="gray" />} 
                    placeholder='Votre adresse mail'
                    onChange={handleInputChange}
                    value={loginData.username}
                />
                <TextInput 
                    id='password'
                    style={{width: '100%', margin: '8px 0'}} 
                    icon={<IoIosLock size={30} color="gray" />} 
                    placeholder='Votre mot de passe' 
                    secure
                    onChange={handleInputChange}
                    value={loginData.password}
                />

                <div style={{display: 'flex', justifyContent: 'space-around', margin: '10px 0'}}>
                    <div style={{display: 'flex', alignItems: 'center',}}>
                        <input type="checkbox" name="" id="" />
                        <span style={{marginLeft: '5px'}}>Se souvenir de moi</span>
                    </div>
                    <div>
                        <span style={{color: 'green'}}>Mot de passe oublié ?</span>
                    </div>
                </div>

                <BtnValidate 
                    style={{width: '50%', margin: '8px 0', alignSelf: 'center'}} 
                    onClick={handleBtnValidateClick}
                />

                {
                    JSON.stringify(loginData)
                }
            </div>
        </div>
    )
}