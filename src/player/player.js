function load() {
	const config = cvp.createResourceConfig();
	if (!config.location.mediaUrl)
		config.location.mediaUrl = 'https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8';
	player.resource = config;
}

cvp
	.createVideoPlayer({
		container: "#player",
		id: "player",
		uiConfig: {
			posterUrl: 'poster.png'
		}
	})
	.then(player => {
		window.player = player;
		load();
	})
	.catch(error => {
		console.error(error.message);
	});