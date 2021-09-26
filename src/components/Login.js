import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'

function Login({ setUser }) {

    const signInWithGoogle = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                let user = result.user;
                let newUser = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }
                setUser(newUser);
                localStorage.setItem("user", JSON.stringify(newUser));
            }).catch((error) => {
                alert(error.message);
            })
    }

    return (
        <Container>
            <Content>
                <AmazonLogo src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" />
                <h1>Sign into Amazon</h1>
                <LoginButton
                    onClick={signInWithGoogle}>
                    Sign in with Google
                </LoginButton>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #f8f8f8;
display: grid;
place-items: center;
`
const Content = styled.div`
padding: 100px;
background-color: white;
border-radius: 5px;
box-shadow: 0 1px 3px grey;
text-align: center;
`
const AmazonLogo = styled.img`
height: 75px;
margin-bottom: 40px;
`
const LoginButton = styled.button`
margin-top: 50px;
background-color: #f0c14b;
height: 40px;
border: 2px solid #a88734;
border-radius: 4px;
padding: 4px 8px;
cursor: pointer;
`