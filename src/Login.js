import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import {actionTypes} from "./reducer"

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) =>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }).catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />

                <img src="https://kininnov.com/wp-content/uploads/2020/05/Facebook-Logo.wine_.png" alt="" />
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
            <div className="login__footer">
                <a href="https://docs.microsoft.com/en-us/advertising/scripts/examples/authenticating-with-google-services" target="_blank"><h4>It's totally safe to authenticate by google</h4></a>
                <a className="more" href="https://github.com/lethaianhle/facebook-clone-reacjs" target="_blank"><h4>More about us</h4></a>
            </div>
        </div>
    )
}

export default Login
