import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';


class Profile extends Component {
    render() {
        const {image, link} = this.props.profile
        return (
            <span>
            <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={image} alt="social" style={{height: 35, width: 35, margin:10}}/>
            </a>
            </span>
        )
    }
}

class SocialProfiles extends Component {
    render() {
        return(
            <div>
                <h2>Connect with me!</h2>
            <div>
            {SOCIAL_PROFILES.map((profile) =>
              <Profile key={profile.id} profile={profile}/>  
                )}
            </div>
        </div>
        )
    }
}

export default SocialProfiles;
