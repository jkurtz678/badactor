
var oldContent;
var lyrics;
var moments_gone_lyrics;
var sleep_lyrics;
var off_balance_lyrics;
var from_inside_lyrics;
var lyric_number = null;

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

  	});
});


$(document).on('click', '#momentsgone', function() {
	if(lyric_number != 0) {
		animateCSS("#lyric_container", 'fadeOut', function() {
  		var div1 = document.querySelector("#lyric_1");
  		div1.innerHTML = moments_gone_lyrics[0];
  		var div2 = document.querySelector("#lyric_2");
  		div2.innerHTML = moments_gone_lyrics[1];
  		var div3 = document.querySelector("#lyric_3");
  		div3.innerHTML = moments_gone_lyrics[2];
  		lyric_number = 0;
  		animateCSS('#lyric_container', 'fadeIn', function() {});
  	});
	}
});

$(document).on('click', '#sleep', function() {
	if(lyric_number != 1) {
		animateCSS("#lyric_container", 'fadeOut', function() {
  		var div1 = document.querySelector("#lyric_1");
  		div1.innerHTML = sleep_lyrics[0];
  		var div2 = document.querySelector("#lyric_2");
  		div2.innerHTML = sleep_lyrics[1];
  		var div3 = document.querySelector("#lyric_3");
  		div3.innerHTML = sleep_lyrics[2];
  		lyric_number = 1;
  		animateCSS('#lyric_container', 'fadeIn', function() {});
  	});
	}
});

$(document).on('click', '#offbalance', function() {
	animateCSS("#lyricContainer", 'fadeOut', function() {
  		console.log("tried fading out main...");
  		var element = document.querySelector("#lyricContainer");
  		var newElement = document.createElement('div');
  		newElement.setAttribute('id','lyricContainer');
  		newElement.setAttribute('class','animated fadeIn slow');
  		var contents = lyrics[2];
  		newElement.innerHTML = contents;
  		element.parentNode.replaceChild(newElement, element);
  	});
});

$(document).on('click', '#frominside', function() {
	animateCSS("#lyricContainer", 'fadeOut', function() {
  		console.log("tried fading out main...");
  		var element = document.querySelector("#lyricContainer");
  		var newElement = document.createElement('div');
  		newElement.setAttribute('id','lyricContainer');
  		newElement.setAttribute('class','animated fadeIn slow');
  		var contents = lyrics[3];
  		newElement.innerHTML = contents;
  		element.parentNode.replaceChild(newElement, element);
  	});
});

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
  						+ "<a id='return' class='return' href='#'><i class='playSong faFree fas fa-chevron-left shadowAnimated'></i>"
  						+ "<p class='songName stretched shadowAnimated'>return</p></a></div>"
  						+ "<div id='playerContainer' class='animated fadeIn slow'><div class='row'>"
  						+ "<div id='songNames' class='col-sm-6'>"
  						+ "<span><a id='momentsgone' class='' href='#'><i class='playSong faFree brands fas fa-play-circle shadowAnimated'></i></a>"
  						+ "<p class='songName stretched shadowAnimated'>moment's gone</p></span></br>"
  						+ "<span><a id='sleep' class='' href='#'><i class='playSong faFree brands fas fa-play-circle shadowAnimated'></i></a>"
  						+ "<p class='songName stretched shadowAnimated'>sleep</p></span></br>"
  						+ "<span><a id='offbalance' class='' href='#'><i class='playSong faFree brands fas fa-play-circle shadowAnimated'></i></a>"
  						+ "<p class='songName stretched shadowAnimated'>off balance</p></span></br>"
  						+ "<span><a id='frominside' class='' href='#'><i class='playSong faFree brands fas fa-play-circle shadowAnimated'></i></a>"
  						+ "<p class='songName stretched shadowAnimated'>from inside</p></span></br>"
  						+ "</div>"
  						+ "<div class='col-sm-6'>"
  						+ "<img id='momentsgoneimage' class='shadowAnimated animated fadeIn slow' src='images/badactormomentsgone.jpg' alt='momentsgone'></div>"
  						+ "</div></div>"
  						+ "<div id='lyric_container' class='row animated fadeIn slow'><div id='lyric_1' class='col-sm-4'></div>"
  						+ "<div id='lyric_2' class='col-sm-4'></div><div id='lyric_3' class='col-sm-4'></div></div>";
  		newE1.innerHTML = contents;

  		e1.parentNode.replaceChild(newE1, e1);
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
oh, no no no
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
no?
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

