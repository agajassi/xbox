import React,{Component} from "react";
import ReactDOM from "react-dom";
import cvp from 'cvp';
// import './App.css';

class Player extends Component {
  // componentDidMount() {
  //   const script = document.createElement("script");
  //   script.async = true;
  //   script.src = "../hooks/playerSetup.js";
  //   this.div.appendChild(script);
  // }

  componentDidMount() {
    function load() {
      const config = cvp.createResourceConfig();
      player.resource = loveIsland(config);

      // assign player to global player
      window.$player = player;
    }
    
    let player;
    
    const cbsNews = (config) => {
      config.location.mediaUrl = 'https://dai.google.com/linear/hls/event/Sid4xiTQTkCT1SLu6rjUSQ/master.m3u8';
      config.metadata.videoTitle = 'CBS News';
      config.ad.adTagParameters.sz = '640x480';
      config.ad.adTagParameters.iu = '/8264/vaw-can/desktop/cbs';
      config.ad.adTagParameters.vid = "test vid";
      config.ad.dai.contentSourceId =  "19463";
      config.metadata.userId = "123456";
      return config;
    }

    const loveIsland = (config) => {
      config.metadata.videoId = "3rLmdqKpfFpU24GzgZRHs7y2zlN04CrF";
        config.metadata.videoTitle = 'Love Island - Episode 1';
        config.metadata.episodeFlag = true;
        config.ad.context = 'dai_api';
        config.ad.adTagParameters.sz = '640x480';
        config.ad.adTagParameters.iu = '/8264/vaw-can/desktop/cbs';
        config.ad.adTagParameters.vid = "3rLmdqKpfFpU24GzgZRHs7y2zlN04CrF";
        config.ad.adTagParameters.ppid = "b539d5e0d43130d617d64f8991f0a3e0";
        config.ad.adTagParameters.cmsid = "2289";
        config.ad.adTagParameters.cust_params = {
            vid: '3rLmdqKpfFpU24GzgZRHs7y2zlN04CrF',
            sb: '14',
            vguid: 'ed9bc79f-07c2-4f3c-9cb8-0ef3477685aa'
        };
        config.ad.dai.contentSourceId =  "20289";
        config.ad.dai.daiVideoId = "3rLmdqKpfFpU24GzgZRHs7y2zlN04CrF"; 
        config.ad.dai.apiKey = '7j3n273bfj7jcnvf22d713a51f'; 
        config.ad.dai.isLive = false; 
        config.metadata.userId = "123456"
        return config;
    }

    const bigBuckBunny = (config) => {
      config.location.mediaUrl = 'https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8';
    }

    const neighbourhood = (config) => {
      config.metadata.videoTitle = 'Neighbourhood Episode';
      config.metadata.category = '265382467628 410133059816';
      config.metadata.episodeFlag = true;
      config.metadata.seriesTitle = 'Neighbourhood episode';
      config.ad.context = 'dai_api';
      config.ad.adTagParameters.sz = '640x480';
      config.ad.adTagParameters.iu = '/8264/vaw-can/desktop/cbs';
      config.ad.adTagParameters.vid = "3rLmdqKpfFpU24GzgZRHs7y2zlN04CrF";
      config.ad.adTagParameters.ppid = "b539d5e0d43130d617d64f8991f0a3e0";
      config.ad.adTagParameters.cmsid = "2289";
      config.ad.adTagParameters.cust_params = {
          vid: '3rLmdqKpfFpU24GzgZRHs7y2zlN04CrF',
          sb: '6',
          vguid: 'ed9bc79f-07c2-4f3c-9cb8-0ef3477685aa'
      };
      config.ad.dai.contentSourceId =  "2497752";
      config.ad.dai.daiVideoId = "AYI3VfO2Xwo1KBWIijR9DRXsPtfMDTL8"; 
      config.ad.dai.apiKey = '7j3n273bfj7jcnvf22d713a51f'; 
      config.ad.dai.isLive = false; 
      config.ad.dai.format = 'dash'; 
      return config;
    }

    const hPlayerReady = (p, error) => {
      if (error) {
        console.error(error.message);
        return;
      }
    
      player = p;
      load();
    };
    
    var playerOptions = {    	           
      logLevel: cvp.LogLevel.DEBUG,    		
      autoplay: cvp.Autoplay.ATTEMPT_UNMUTED_THEN_MUTED,
      id: "Player-1",
      performanceMode: null,
      playsInline: true,
      useNativeControls: false,
      renderTextTrackNatively: true,
      offsetTextOnControlsVisible:true,       	
      container: "#player",
      id: "player",
      uiConfig: {
        posterUrl: 'poster.png'
      }   
    };

    player = cvp.createVideoPlayer(playerOptions, hPlayerReady);
  }

  render() {
    return (
      <div className="Player" ref={el => (this.div = el)}>
        {
          console.log(cvp.buildInfo)
        }
      </div>
    );
  }
}

export default Player;
