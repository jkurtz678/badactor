var song_names = ['momentsgone','sleep','offbalance','frominside'];
var playBtnClass = 'playSong faFree brands fas fa-play-circle shadowAnimated'
var pauseBtnClass = 'playSong faFree brands fas fa-pause-circle shadowAnimated'
var loaded_song = null;

function playSong(songNum){
  var btn = document.getElementById(song_names[songNum]+"Btn");
  var player = document.getElementById("audioPlayer");
  var source = document.getElementById("audioSource");
  if(btn.classList.contains("fa-pause-circle")) {
    player.pause();
    btn.className = playBtnClass;
  }
  else if (loaded_song == songNum) {
    player.play();
    btn.className = pauseBtnClass;
    updateProgress(player);
  }
  else {
    loaded_song = songNum
    loadSong(songNum);
    player.load();
    player.play();
    updateUI(songNum);
    updateProgress(player);
  }
}

function updateUI(songNum) {
  var i;
  for(i = 0; i < song_names.length; i++) {
    var btn = document.getElementById(song_names[i]+"Btn");
    btn.className = playBtnClass;
    var name = document.getElementById(song_names[i] + "Title");
    name.style.textShadow = 'none';
  }

  var playBtn = document.getElementById(song_names[songNum]+"Btn");
  playBtn.className = pauseBtnClass;
  var title = document.getElementById(song_names[songNum] + "Title");
  title.style.textShadow = '0 0 5px #fffcd3';
}

function loadSong(songNum) {
  var source = document.getElementById("audioSource");
  
  song_url = "audio/" + song_names[songNum] + ".mp3"
  console.log("playing song: " + song_url);
  source.src = song_url;
}

function updateProgress(player) {
  var prog_bar = document.getElementById("progressBar"); 
  var duration = document.getElementById("duration_label");
  var curr_time = document.getElementById("curr_time_label")
  player.onloadedmetadata = function() {
  duration.innerHTML = formatSongTime(player.duration)
  };
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      curr_time.innerHTML = formatSongTime(player.currentTime);
      var progress = player.currentTime/player.duration;
      width = Math.round(progress * 100);
      var progress_percent = width + "%"
      prog_bar.style.width = progress_percent; 
    }
  }
}

function formatSongTime(time) {
  var mind = time % (60 * 60);
  var minutes = Math.floor(mind / 60);

  var secd = mind % 60;
  var seconds = Math.ceil(secd);
  if(seconds < 10) {
    return minutes + ":0" + seconds;
  }
  else {
      return minutes + ":" + seconds;
  }
}