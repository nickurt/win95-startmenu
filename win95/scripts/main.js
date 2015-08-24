/* jshint devel:true */
(function () {
	'use strict';
	var win95 = {
		init: function () {
			this.loadHTML();
			this.loadCSS('/win95/styles/main.css');
			this.playSound();
			this.makeInteractive();
		},
		loadHTML: function () {
			$('body').append('<div class="win95">' +
		        '<div id="startMenu">' +
		            '<div id="startMenuLeft"></div>' +
		            '<ul id="startMenuRight">' +
		                '<li data-start-menu="programs">' +
		                    '<a href="/">' +
		                    	'<img src="/win95/img/icons/shell32_20.ico" alt="" />' +
		                    	'<u>H</u>ome' +
		                    '</a>' +
		                '</li>' +
		                '<li data-start-menu="documents">' +
		                    '<a href="/cm/vrtnieuws/videozone">' +
		                    	'<img src="/win95/img/icons/mmsys_111.ico" alt="" />' +
		                    	'<u>V</u>ideozone' +
		                    '</a>' +
		                '</li>' +
		                '<li data-start-menu="settings">' +
		                    '<a href="/cm/vrtnieuws/Livecenter">' +
		                    	'<img src="/win95/img/icons/shell32_22.ico" alt="" />' +
		                    	'<u>L</u>ive center' +
		                    '</a>' +
		                '</li>' +
		                '<li data-start-menu="find">' +
		                    '<a href="/cm/vrtnieuws/weer">' +
		                    	'<img src="/win95/img/icons/shell32_26.ico" alt="" />' +
		                    	'<u>W</u>eer' +
		                    '</a>' +
		                '</li>' +
		                '<li data-start-menu="help">' +
		                    '<a href="/cm/vrtnieuws/verkeer">' +
		                    	'<img src="/win95/img/icons/shell32_21.ico" alt="" />' +
		                    	'<u>V</u>erkeer' +
		                    '</a>' +
		                '</li>' +
		                '<li data-start-menu="run">' +
		                    '<a href="http://deredactie.be/p/1.2418786">'+
		                    '<img src="/win95/img/icons/shell32_24.ico" alt="" />' +
		                    '20 <u>j</u>aar...' +
		                    '</a>' +
		                '</li>' +
		                '<hr />' +
		                '<li data-start-menu="shutDown">' +
		                    '<a href="#" class="bsod">Sh<u>u</u>t Down...' +
		                    '<img src="/win95/img/icons/shell32_28.ico" alt="" />' +
		                    '</a>' +
		                '</li>' +
		            '</ul>' +
		        '</div>' +
		        '<div id="taskBar">' +
		            '<div id="startButton" data-open="false">' +
		                '<span class="startButtonDotted">' +
		                    '<img src="/win95/img/icons/shell32_40.ico" alt="" />' +
		                    '<span class="startButtonText">Start</span>' +
		                '</span>' +
		            '</div>' +
		            '<div id="taskBarItems">' +
		            '</div>' +
		            '<div id="clock">' +
		                '<span></span>' +
		            '</div>' +
		        '</div>' +
		    '</div>'+
	    	'<div id="bluescreen">' +
			'<a class="bsod-close" href="#">X</a> <p>A problem has been detected while shutting down<br />' +
			'<p>REQUEST_FULL_SCREEN</p>' +
			'<p>If this is the first time you\'ve seen this stop error screen,<br />' +
			'that is normal. If this screen appears again, follow these steps:</p>' +
			'<p>Check to make sure any new hardware or software is properly installed.<br />' +
			'If this is a new installation, ask your hardware or software manufacturer<br />' +
			'for any updates you might need.</p>' +
			'<p>If problems continue disable or remove any newly installed hardware<br />' +
			'or software. Disable BIOS memory options such as caching or shadowing.<br />' +
			'If you need to use Safe Mode to remove or disable components, <br />' +
			'press F8 to select Advanced Startup Options, and then <br />select Safe Mode.</p>' +
			'<p>Or just press Esc or F11.</p>' +
			'<p>Technical information: <br /><br />' +
			'***STOP: 0x00000054 (0x68697320, 0x00000069, 0x73206661, 0x00006B65)<br /></p>' +
			'</div>');
		},
		loadCSS: function (url) {
			var fileref=document.createElement('link');
			fileref.setAttribute('rel', 'stylesheet');
			fileref.setAttribute('type', 'text/css');
			fileref.setAttribute('href', url);
		    document.getElementsByTagName('head')[0].appendChild(fileref);
		},
		playSound: function () {
			if ($('body.deredactiebe').size() > 0){
				(new Audio('/win95/mp3/win95.mp3')).play();
			}
		},
		currentTime: function() {
			var dateObject = new Date();
			var hours = dateObject.getHours();
			var minutes = dateObject.getMinutes();
			minutes = minutes < 10 ? '0' + minutes : minutes;
			return hours + ':' + minutes;
		},
		makeInteractive: function () {
			var startButton = $('.win95 #startButton');

			startButton.mousedown(function() {
				$('.icon').attr('data-status', 'normal');
				var isOpen = $(this).attr('data-open');
				if (isOpen === 'true') {
					$(this).attr('data-open', false);
					$('.win95 #startMenu').hide();
				} else if (isOpen === 'false') {
					$(this).attr('data-open', true);
					$('.win95 #startMenu').show();
				}
			});

			$('.bsod').click(function () {
				$('#bluescreen').show();
				setTimeout(function () {
					$('.bsod-close').fadeIn();
				}, 3000);
				return false;
			});

			$('.bsod-close').click(function () {
				$('#bluescreen').hide();
				return false;				
			});

			$(window).keyup(function() {
				$('#bluescreen').hide();
			});

			$(window).mousedown(function() {
				$('#bluescreen').hide();
			});

			setInterval(function() {
				$('.win95 #clock span').text(win95.currentTime());
			}, 1000);
		}
	};

	win95.init();
}());
