$(document).ready(function() {
	introduction();
	playGame();
});

function playGame() {
	$('.ryu').on('mouseover',function() {
		$('.action').hide();
		$('.ryu-ready').show();
	});
	$('.ryu').on('mouseout',function() {
		$('.action').hide();
		$('.ryu-still').show();
	});
	$('.ryu').on('mousedown', function() {
		playHadouken();
		$('.action').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
			.animate(
	        {'left': '300px'},
	        500,
		        function() {
		          $(this).hide();
		          $(this).css('left', '-170px');
		        }
	        );
	});
	$('.ryu').on('mouseup', function() {
		$('.action').hide();
		$('.ryu-ready').show();
	});

	$('.mute-button').on('mousedown', function() {
		$(this).hide();
		$('#theme-music').trigger('pause');
		$('.play-button').show();
	});

	$('.play-button').on('mousedown', function() {
		$(this).hide();
		$('#theme-music').trigger('play');
		$('.mute-button').show();
	});
	
	$('body').on('keydown',function(e) {
	    if (e.keyCode == 88) {
	      $('.action').hide();
	      $('.ryu-cool').show();
	  }
	}).on('keyup',function(e) {
	    if (e.keyCode == 88) {
	      $('.action').hide();
	      $('.ryu-still').show();
	    }
	});   
}

var hadoukenSound = false;
function playHadouken () {
  hadoukenSound = !hadoukenSound;
  if (hadoukenSound) {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }
}


function introduction() {
  $('#theme-music')[0].volume = 0.3;
  $('#theme-music')[0].play();
  $('.sf-logo').fadeIn(3500, function() {
    $(this).fadeOut(1000, function() {
      $('.brought-by').fadeIn(1500, function() {
        $(this).fadeOut(1000, function() {
          $('.jquery').fadeIn(1500, function() {
            $(this).fadeOut(1500, function() {
              $('.instructions').fadeIn(2000, function() {
              	$(this).fadeOut(3000, function() {
              		$('.bottom-instructions').fadeIn(2000)
              	})
              })
            })
          })
        })
      })
    })
  })
};

