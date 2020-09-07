function load() {
	const config = cvp.createResourceConfig();
	
	if (!config.location.mediaUrl)
	  config.location.mediaUrl = 'https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8';
	player.resource = config;
  }
  
  let player;
  
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
