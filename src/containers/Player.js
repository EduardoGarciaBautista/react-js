import React, {useEffect} from 'react';
import '../assets/styles/components/Player.scss';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {getVideoRequest} from "../Actions";

const Player = (props) => {
    const {playing} = props;
    if (!playing) {
        return <h1>Loading</h1>
    }
    const hasPlaying = Object.keys(playing).length > 0;
    useEffect(() => {
        props.getVideoRequest(props.match.params.id);
    }, []);
    return hasPlaying ? (
        <div className="Player">
            <video controls autoPlay>
                <source src={playing.source} type="video/mp4"/>
            </video>
            <div className="Player-back">
                <Link to="/">
                    <button type="button">
                        Regresar
                    </button>
                </Link>
            </div>
        </div>
    ) : <h1>Getting video</h1>
}

const mapStateToProps = state => {
    return {
        playing: state.playing
    }
}
const mapDispatchToProps = {
    getVideoRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
