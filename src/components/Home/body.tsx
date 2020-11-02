import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

function body() {
    return (
        <div className="homeMovie">
            {/* <ReactPlayer 
                url="https://www.youtube.com/watch?v=7C2z4GqqS5E" autoplay muted loop
            /> */}
            
            <ReactPlayer className="homeMovie__player" width="100%" height="100%"
                url="https://media.istockphoto.com/videos/exuberant-young-woman-throwing-golden-autumn-leaves-overhead-in-video-id1201413051?b=1&k=6&m=1201413051&h=2JOgByGpG81M2LFJ3aRokMFvUP1FloEU2iTYGKf__x4=" playing muted loop
            />
            <Link to="/board">
                <h2>BOARD</h2>
            </Link>
            
        </div>
    )
}

export default body;
