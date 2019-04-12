import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles'
import profile from './assets/profile.png';

class App extends Component {
    
    state = {displayBio: false} 
    toggleBio = () => {
        this.setState({displayBio: !this.state.displayBio})
    }

    render() {    
        return(
            <div>
                <img src={profile} alt="profile" className="profile"/>
                <h1>Hello</h1>
                <p> my name is dj.</p>
                {this.state.displayBio ? (
                    <div>
                    <p>I live in Bangalore</p>
                    <p>My fav language is Javascript</p>
                    <p>React is awesome</p>
                    <p>Angular sucks</p>
                    <button onClick={this.toggleBio}>
                        Show less
                    </button>
                    </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleBio}>
                                Read More
                            </button>
                        </div>
                    )
                }
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles />
            </div>
        );
    }
}

export default App;