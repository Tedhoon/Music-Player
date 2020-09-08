import React, { useState, useEffect } from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

function MusicPlayer({playList}) {
    // console.log("뮤직플레이어 작동!!!")
    // console.log(playList)
    // const [audioLists, setAudioLists] = useState(playList)
    
    // console.log("오디오 리스트:", audioLists)
    const options = {
        defaultPlayIndex: 0,
        theme: 'dark',
        bounds: 'body',
        clearPriorAudioLists: true,
        autoPlayInitLoadPlayList: true,
        preload: false,
        glassBg: false,
        remember: false,
        remove: true,
        defaultPosition: {
            top: 150,
            right: 10,
        },
        defaultPlayMode: 'singleLoop',
        mode: 'mini',
        once: false,
        autoPlay: true,
        toggleMode: true,
        showMiniModeCover: true,
        showMiniProcessBar: false,
        drag: true,
        seeked: true,
        showProgressLoadBar: true,
        showPlay: true,
        showReload: false,
        showDownload: false,
        showPlayMode: false,
        showDestroy: false,
        extendsContent: [],
        defaultVolume: 0.05,
        playModeShowTime: 600,
        loadAudioErrorPlayNext: true,
        autoHiddenCover: false,
        spaceBar: true,

    };
    useEffect(() => {
        console.log(playList)
    }, [playList])
    // const onSetAudioList = () => {
    //     let a = []
    //     // a = playList
    //     // setAudioLists(playList)
    // }
    return (
        <>
            {playList && <ReactJkMusicPlayer {...options} audioLists={playList} /> }
        </>
    );
}

export default React.memo(MusicPlayer);