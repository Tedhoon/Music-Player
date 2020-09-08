import React, { useState } from 'react';
import { MUSICLIST1 } from '../Music/MUSICLIST';
import MusicPlayer from '../Components/MusicPlayer';

function MainMusicPage () {
    console.log(MUSICLIST1)
    const [ playList, setPlayList ] = useState(MUSICLIST1)
    console.log(playList)
    return (
        <>
        <MusicPlayer playList={MUSICLIST1} />
        <div>1. 뮤직 리스팅</div>
        <div>2. Redux-persist 연결해서 현재 playList추가</div>
        <div>3. </div>
        </>
    )
}

export default MainMusicPage;