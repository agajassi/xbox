function load() {
	const config = cvp.createResourceConfig();
	if (!config.location.mediaUrl)
		config.location.mediaUrl = 'https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8';
	player.resource = config;
}

let player;
    
const playResource = () => {
	player.resource = stan_imaPid(cvp.createResourceConfig());
}

const hPlayerReady = (p, error) => {
	if (error) {
		console.error(error.message);
		return;
	}

	player = p;
	playResource();
};

var playerOptions = {    	           
	//logLevel: this.cvp.LogLevel.DEBUG,    		
	autoplay: "none",
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

const start = () => {
	player = window.cvp.createVideoPlayer( playerOptions,hPlayerReady);
};
document.addEventListener('DOMContentLoaded', start);