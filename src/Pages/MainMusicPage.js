import React, { useState, useEffect } from 'react';
import { MUSICTHEME1, MUSICTHEME2 } from '../Music/MUSICTHEME';
import MusicPlayer from '../Components/MusicPlayer';

function MainMusicPage () {

    const [playList, setPlayList] = useState([])
    
    const playMusicTheme = (event) => {
        const { id } = event.target;
        console.log(id)
        switch (id) {
            case "MUSICTHEME1":
                setPlayList([...playList, ...MUSICTHEME1])
                break;

            case "MUSICTHEME2":
                setPlayList([...playList, ...MUSICTHEME2])
                break;

            default:
                return;
        }
    }

    const addMusic = (e) => {
        setPlayList([...playList, MUSICTHEME1[e.target.id]])
    }
    
    // console.log(playList)
    return (
        <>
            {
                MUSICTHEME1.map((music, key) => <button onClick={addMusic} id={key}>{music.name}</button>)
            }
            <button onClick={playMusicTheme} id="MUSICTHEME1">테마 1</button>
            <button onClick={playMusicTheme} id="MUSICTHEME2">테마 2</button>
            <MusicPlayer 
                playList={playList} 
            />        

        </>
    )
}

export default MainMusicPage;

/*
    1. 뮤직 리스팅
    2. Redux-persist 연결해서 현재 playList추가
    3. 
*/