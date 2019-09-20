var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: 'auto',
          width: '100%',
          videoId: 'av1Ob5zjN-A',
          wmode: 'transparent',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          // setTimeout(stopVideo, 6000);
          // done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
// window.addEventListener("")