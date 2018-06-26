import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    console.log(video)

    const imageUrl = video.snippet.thumbnails.medium.url;

    return (
        <li onClick={ () => onVideoSelect(video)} className="list-group-item col-xs-6 col-md-12">
            <div className="video-item media">
                <div className="media-left col-xs-12">
                    <img className="media-object" src={ imageUrl } />
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        { video.snippet.title }
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;