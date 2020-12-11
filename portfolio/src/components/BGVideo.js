import React, { Component } from 'react';
import '../assets/css/bg-video.css';

class BGVideo extends Component {
  
  render() {
    return (
			<div>
				<div className="overlay"></div>
				<video autoPlay={this.props.autoplay} loop="loop" muted  className="bg-video">
					<source src={this.props.videoSrc} type="video/mp4" />
				</video>
			</div>
    )
  }
}

export default BGVideo;