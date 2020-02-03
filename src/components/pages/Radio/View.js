import React from 'react';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

import './style.css';

export const Radio = props => (
    <div className="home_box">
        <div className="title">Radio</div>

        <div className="category_header_section">
            <div className="category_header">
                <span>FM Stations</span>
                <div className="Home_scroll_left_right">
                    <div className="back">
                        <KeyboardArrowLeftIcon className="nav" />
                    </div>
                    <div className="forward">
                        <KeyboardArrowRightIcon className="nav" />
                    </div>
                </div>
            </div>
            <div className="category_divider" />
        </div>

        <div className="home_recentlyPlayedList">
            {props.radio.stations.map(station =>
                <div className="recentylPlayed_item">
                    <div className="recentlyPlayed_art_play">
                        <img
                            src={require(`assets/${station.albumArt}`)}
                            alt={station.title}
                            className="recentlyPlayed_art"
                        />
                        <div
                            className="recentlyPlayed_play"
                            style={
                                props.selectedTrack.id === station.id
                                    ? { visibility: 'visible' }
                                    : null
                            }
                        >
                            {props.selectedTrack.id === station.id && props.playing ? (
                                <PauseCircleOutlineIcon
                                    className="c_PausePlayIcon"
                                    onClick={() => props.playTrack({ radio: true, ...station })}
                                />
                            ) : (
                                    <PlayCircleOutlineIcon
                                        className="c_PausePlayIcon"
                                        onClick={() => props.playTrack({ radio: true, ...station })}
                                    />
                                )}
                        </div>
                    </div>
                    <div className="recentlyPlayed_title">{station.title}</div>
                </div>
            )}
        </div>
    </div>
);

export default Radio;
