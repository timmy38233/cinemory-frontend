import React, { useContext, useState } from 'react';
import './LoginForm.scss';
import CmButton from '../CmButton/CmButton';
import { AppStateContext } from '../../state/context/AppStateContext';
import { ActionType } from '../../state/actions/Actions';


function LoginForm() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [errorOcurred, setErrorOcurred] = useState<boolean>(false);
    const [errorDetail, setErrorDetail] = useState<string>('');

    const {dispatch} = useContext(AppStateContext);

    const handleUsernameInput = (event: React.FormEvent<HTMLInputElement>) => {
        setUsername(event.currentTarget.value);
    }

    const handlePasswordInput = (event: React.FormEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value);
    }


    const login = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        console.log('login', username, password);

        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/login_check`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            
            .then(response => response.json())
            .then(data => {
                if (!data.token) {
                    setErrorOcurred(true);
                    setErrorDetail(data.message);
                    return;
                }
                setErrorOcurred(false);
                localStorage.setItem('token', data.token);
                localStorage.setItem('isAuthenticated', 'true');

                dispatch({
                    type: ActionType.setIsAuthenticated,
                    payload: true
                });
                dispatch({
                    type: ActionType.setToken,
                    payload: data.token
                });

                window.location.href = '/watchlist';
            }
            );
    }

    return (
        <div className='LoginForm'>
            <div className='LoginForm__content'>
                <h2>Login to <span className='logoText'>cinemory</span></h2>
                <form>
                    {errorOcurred && <div className='errorMessage'>{errorDetail}</div>}
                    <input type='text' placeholder='Username' onChange={handleUsernameInput} />
                    <input type='password' placeholder='Password' onChange={handlePasswordInput} />
                    <CmButton text='Login' clickHandler={login} />
                </form>
            </div>
        </div>
    )
}

export default LoginForm