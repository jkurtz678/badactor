
var oldContent;
var lyrics;
var moments_gone_lyrics;
var sleep_lyrics;
var off_balance_lyrics;
var from_inside_lyrics;
var jplayer;
var current_lyrics = null;

function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

$(document).on('click', '#return', function() {
	console.log("return clicked...");
	animateCSS("#player", 'fadeOut', function() {
  		console.log("tried fading out main...");
  		var e1 = document.querySelector("#player");
  		e1.parentNode.replaceChild(oldContent, e1);
  		current_lyrics = null;
  		loaded_song = null;
  	});
});


$(document).on('click', '#momentsgone', function() {
	playSong(0);
	updateLyrics(0, moments_gone_lyrics);
});

$(document).on('click', '#sleep', function() {
	playSong(1);
	updateLyrics(1, sleep_lyrics);
});

$(document).on('click', '#offbalance', function() {
	playSong(2);
	updateLyrics(2, off_balance_lyrics);
});

$(document).on('click', '#frominside', function() {
	playSong(3);
	updateLyrics(3, from_inside_lyrics);
});

function updateLyrics(songNum, lyricArr) {
	if(current_lyrics != songNum) {
		animateCSS("#lyric_container", 'fadeOut', function() {
  		var div1 = document.querySelector("#lyric_1");
  		div1.innerHTML = lyricArr[0];
  		var div2 = document.querySelector("#lyric_2");
  		div2.innerHTML = lyricArr[1];
  		var div3 = document.querySelector("#lyric_3");
  		div3.innerHTML = lyricArr[2];
  		current_lyrics = songNum;
  		animateCSS('#lyric_container', 'fadeIn', function() {});
  	});
	}
}

$(document).ready(function(){
  $(".playBtn").click(function(){
  	//const element = document.getElementById('bandname')
  	animateCSS("#landing", 'fadeOut', function() {
  		console.log("tried fading out title...");
  		
  		//$('#main').load('../player.html');
  		
  		var e1 = document.querySelector("#landing");
  		oldContent = e1;

  		var newE1 = document.createElement('main');
  		newE1.setAttribute('id','player');
  		var contents =  "<div id='returnBtn' class='icons animated fadeIn slow'>"
  						+ "<a id='return' class='return' href='#'><i id='returnIcon' class='faFree fas fa-chevron-left shadowAnimated'></i>"
  						+ "<p class='songName stretched shadowAnimated'>return</p></a></div>"
  						+ "<div id='playerContainer' class='animated fadeIn slow'><div class='row'>"
  						+ "<div class='col-sm-6'>"
  						+ "<img id='momentsgoneimage' class='shadowAnimated animated fadeIn slow' src='images/badactormomentsgone.jpg' alt='momentsgone'>"
  						+ "<audio id='audioPlayer'><source id='audioSource' src=''></audio>"
  						+ "<div id='progressDiv'><p id='curr_time_label' class='progressLabel'></p><div id='progressContainer' class='shadowAnimated'><div id='progressBar'></div></div>"
  						+ "<p id='duration_label' class='progressLabel'></p></div></div>"
  						+ "<div id='songNames' class='col-sm-6'>"
  						+ "<span><a id='momentsgone' class='' href='#'><i id='momentsgoneBtn' class='playSong faFree brands fas fa-play-circle shadowAnimated'></i></a>"
  						+ "<p id='momentsgoneTitle' class='songName stretched shadowAnimated'>moment's gone</p></span></br>"
  						+ "<span><a id='sleep' class='' href='#'><i id='sleepBtn' class='playSong faFree brands fas fa-play-circle shadowAnimated'></i></a>"
  						+ "<p id='sleepTitle' class='songName stretched shadowAnimated'>sleep</p></span></br>"
  						+ "<span><a id='offbalance' class='' href='#'><i id='offbalanceBtn'class='playSong faFree brands fas fa-play-circle shadowAnimated'></i></a>"
  						+ "<p id='offbalanceTitle' class='songName stretched shadowAnimated'>off balance</p></span></br>"
  						+ "<span><a id='frominside' class='' href='#'><i id='frominsideBtn' class='playSong faFree brands fas fa-play-circle shadowAnimated'></i></a>"
  						+ "<p id='frominsideTitle' class='songName stretched shadowAnimated'>from inside</p></span></br>"
  						+ "</div>"
  						+ "</div></div>"
  						+ "<div id='lyric_container' class='row animated fadeIn slow'><div id='lyric_1' class='col-sm-4'></div>"
  						+ "<div id='lyric_2' class='col-sm-4'></div><div id='lyric_3' class='col-sm-4'></div></div>";
  		newE1.innerHTML = contents;

  		e1.parentNode.replaceChild(newE1, e1);
  		updateLyrics(0, moments_gone_lyrics);
  		playSong(0);
  	})
    //$("h1").fadeOut(1000);
    //$(".icons").fadeOut(1000);
  });
});

moments_gone_lyrics = [`i can wait
<br>
until the day
<br>
you wake up,
<br>
and open your eyes
<br>

<br>
the moment's gone,
<br>
it's been too long
<br>
since i have seen
<br>
you smile
<br>

<br>
but no matter what we say
<br>
it will never be the same,
<br>
but today
<br>
we can look the other way
<br>`,`

i'll find out
<br>
where it all went wrong
<br>
and i'll find out
<br>
where we've gone
<br>

<br>
i still believe
<br>
despite what it seems
<br>
that we could
<br>
make it through, together
<br>

<br>
so come on out,
<br>
before it all falls down
<br>
and for one day, we'll pretend
<br>
it's the old times
<br>`,`

but no matter what we say
<br>
it will never be the same
<br>
but today
<br>
we can look the other way
<br>

<br>
it won't matter what we say
<br>
you and i will never change
<br>
so close your eyes
<br>
and we'll picture better days`];

sleep_lyrics = [`i know that
<br>
you're leaving,
<br>
you've packed your bags,
<br>
and you'll vanish in the night
<br>

<br>
i know you,
<br>
you're restless
<br>
this place must have
<br>
worn out your welcome
<br>

<br>
and you may have had your mind made up
<br>
but you haven't thought about it enough
<br>
i said, you may have had your mind made up
<br>
but are you sure that's what you really want?
<br>`,`
you got to sleep, sleep on it
<br>
you need some time to think it through
<br>
sleep, sleep on it
<br>
you may not like how this ends up
<br>

<br>
just tell me
<br>
who hurt you
<br>
i promise
<br>
it won't happen again
<br>

<br>
some people
<br>
will trick you
<br>
he says he'll
<br>
make it all worthwhile
<br>`,`
can you see the truth through those tears in your eyes?
<br>
have you thought about who you're leaving behind? 
<br>

<br>
you got to sleep, sleep on it
<br>
you need some time to think it through
<br>
sleep, sleep on it
<br>
you may not like how this ends up
<br>`];

off_balance_lyrics = [`i waited for my moment
<br>
i found my thoughts and put them onto the page
<br>
i was ready for the moment
<br>
i held my breath as i walked onto the stage
<br>

<br>
but something didn't feel right
<br>
as thoughts clouded my mind
<br>
when you stepped into the light
<br>
and i looked into your eyes
<br>`,`
you pretend like you know what is right for me
<br>
when you say that this would be the last time
<br>
it was too good to be true
<br>
but that's all the same to you
<br>

<br>
you knocked me out of sync
<br>
and i stood there speechless up in front of the crowd
<br>
i was ready to go missing
<br>
i can't fix my mistakes when they're played out loud
<br>`,`
when you stepped into the light
<br>
i could feel all of their eyes
<br>

<br>
don't pretend like you know what is right for me
<br>
i can tell you this won't be the last time
<br>
it was too good to be true
<br>
but that's all the same to you
<br>

<br>
it was too good to be true
<br>
but that's all the same to you`];

from_inside_lyrics = [`it comes from deep inside
<br>
emptiness fills our minds
<br>

<br>
you will give us what we paid for
<br>
you will give us what we came here for
<br>

<br>
killers, priests, beggars, and thieves,
<br>
honest men, we all gotta eat
<br>

<br>
we will get what we paid for
<br>
you will give us what we came for
<br>
<br>
do you think you've got your fill?
<br>
tell me, are you satisfied?
<br>
well, it won't be long before
<br>
you come crawling back for more
<br>`,`
this hunger guides my hand
<br>
you can't fight what you do not understand
<br>

<br>
we will get what we paid for
<br>
you will give us what we came here for
<br>
<br>
so, i see you've made your kill
<br>
was it worth your peace of mind?
<br>
well, it won't be long before
<br>
you come crawling back for more
<br>
<br>
now that it's all gone
<br>
you got what you wanted,
<br>
but it feels wrong
<br>`,`
we thought we came so far
<br>
you had it all, 
<br>
but here you are
<br>

<br>
this is how it starts:
<br>
you got one bite,
<br>
but here you are 
<br>

<br>
we thought we came so far
<br>
you had it all, 
<br>
but here you are`];
