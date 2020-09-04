import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

function MusicPlayer(props) {
    const audioList1 = [
        {
            name: 'IU(아이유) _ Blueming(블루밍)',
            cover: props.icon,
            musicSrc: props.music,
        }, {
            name: 'IU(아이유) _ Blueming(블루밍)',
            cover: props.icon,
            musicSrc: props.music,
        }
    ];

    const options = {
        audioLists: audioList1,
        defaultPlayIndex: 0,
        theme: 'dark',
        bounds: 'body',
        clearPriorAudioLists: false,
        autoPlayInitLoadPlayList: false,
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
        showDestroy: true,
        extendsContent: [],
        defaultVolume: 0.05,
        playModeShowTime: 600,
        loadAudioErrorPlayNext: true,
        autoHiddenCover: false,
        spaceBar: true,

    };

    return (
        <ReactJkMusicPlayer {...options}/>
    );
}

export default MusicPlayer;