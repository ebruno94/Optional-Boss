import React, {useState} from 'react';

import './Status.css';
import live from './../../assets/live.png'
import axios from 'axios';

const Status = (props) => {
    
    const [img, setImg] = useState('');
    const [game, setGame] = useState('');

    let getUser = async () => {
        await axios.get(`https://api.twitch.tv/helix/users?login=${props.member.username}`, {
                headers: {
                'Content-Type': 'application/json',
                'Client-ID': 'bsmusanbzprjf19r25tet37rk3pe84'
                }
        }).then((res) => {
            let apiData = res.data.data[0]
            console.log(apiData);
            setImg(apiData.profile_image_url);
        });
    }

    let getGame = async () => {
        await axios.get(`https://api.twitch.tv/helix/games?id=${props.member.status[0].game_id}`, {
            headers: {
            'Content-Type': 'application/json',
            'Client-ID': 'bsmusanbzprjf19r25tet37rk3pe84'
            }
        }).then((res) => {
            setGame(res.data.data[0].name);
        });
    }


    getUser();
    getGame();
    console.log(props.member)

    return (
        <div className='status__container'>
            <img className='status__img' src={img}/>
            <div className='status__details'>
                <p><img src={live}/><em>LIVE!</em></p>
                <p>{props.member.username}</p>
                <p>Playing: <em>{game}</em></p>
            </div>
        </div>
    )
}

export default Status;