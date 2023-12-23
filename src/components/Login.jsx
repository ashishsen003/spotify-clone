import React from 'react'
import styled from 'styled-components'

const Login = () => {

    const handleClick = ()=>{
        const clientId = '0890bc09cb2c433eb8e0f9799b5f7648'
        const redirectURL = 'http://localhost:3000/'
        const apiUrl = 'https://accounts.spotify.com/authorize'
        const scope = [
            'user-read-email',
            'user-read-private',
            'user-modify-playback-state',
            'user-read-playback-state',
            'user-read-currently-playing',
            'user-read-recently-played',
            'user-read-playback-position',
            'user-top-read'
        ]
        window.location.href= `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scope.join(' ')}&response_type=token&show_daialog=true`;
    }

  return (
    <Container>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="spotify" />
        <button onClick={handleClick} >Connect Spotify</button>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #1db954;
    gap: 5rem;

    img{
        height: 20vh;
    }

    button{
        padding: 1rem 5rem;
        border-radius: 5rem;
        border: none;
        background-color: black;
        color: #49f585;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.4rem;
        cursor: pointer;
    }
`

export default Login