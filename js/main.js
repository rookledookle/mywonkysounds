$(document).ready(function(){
  console.log('js file loaded')
  var grid = $('.grid');
  var b_one = $('#b-one');
  var b_two = $('#b-two');
  var b_three = $('#b-three');
  var b_four = $('#b-four');
  var b_five = $('#b-five');
  var b_six = $('#b-six');
  var b_seven = $('#b-seven');
  var b_eight = $('#b-eight');
  var b_nine = $('#b-nine');
  var title = $('#title');
  var quak = $('#quak');
  var haaop = $('#haaop');
  var haua = $('#haua');
  var bum = $('#bum');
  var tss = $('#tss');
  var chhchh = $('#chhchh');
  var ding = $('#ding');
  var sigh = $('#sigh');
  var wat = $('#wat');

  soundManager.setup({
    url: 'swf/',
    flashVersion: 9,
    preferFlash: false,
    onready: function() {
      console.log('sound ready')
    }
  });

  soundManager.ontimeout(function() {
    alert('something went wrong with sound manager');
  });

  soundManager.onready(function() {
    soundManager.createSound({
    id: 'b-one-sound',
    url: 'mp3/sound1.m4a',
    autoLoad: true,
    autoPlay: false,
    onload: function() {
      console.log('The sound '+this.id+' loaded!');
      },
    volume: 50
    });
    soundManager.createSound({
    id: 'b-two-sound',
    url: 'mp3/sound2.m4a',
    autoLoad: true,
    autoPlay: false,
    onload: function() {
      console.log('The sound '+this.id+' loaded!');
      },
    volume: 50
    });
    soundManager.createSound({
    id: 'b-three-sound',
    url: 'mp3/sound3.m4a',
    autoLoad: true,
    autoPlay: false,
    onload: function() {
      console.log('The sound '+this.id+' loaded!');
      },
    volume: 50
    });
    soundManager.createSound({
    id: 'b-four-sound',
    url: 'mp3/sound4.m4a',
    autoLoad: true,
    autoPlay: false,
    onload: function() {
      console.log('The sound '+this.id+' loaded!');
      },
    volume: 50
    });
    soundManager.createSound({
    id: 'b-five-sound',
    url: 'mp3/sound5.m4a',
    autoLoad: true,
    autoPlay: false,
    onload: function() {
      console.log('The sound '+this.id+' loaded!');
      },
    volume: 50
    });
    soundManager.createSound({
    id: 'b-six-sound',
    url: 'mp3/sound6.m4a',
    autoLoad: true,
    autoPlay: false,
    onload: function() {
      console.log('The sound '+this.id+' loaded!');
      },
    volume: 50
    });
    soundManager.createSound({
    id: 'b-seven-sound',
    url: 'mp3/sound7.m4a',
    autoLoad: true,
    autoPlay: false,
    onload: function() {
      console.log('The sound '+this.id+' loaded!');
      },
    volume: 50
    });
    soundManager.createSound({
    id: 'b-eight-sound',
    url: 'mp3/sound8.m4a',
    autoLoad: true,
    autoPlay: false,
    onload: function() {
      console.log('The sound '+this.id+' loaded!');
      },
    volume: 50
    });
    soundManager.createSound({
    id: 'b-nine-sound',
    url: 'mp3/sound9.m4a',
    autoLoad: true,
    autoPlay: false,
    onload: function() {
      console.log('The sound '+this.id+' loaded!');
      },
    volume: 50
    });
    soundManager.createSound({
    id: 'uptownfunk',
    url: 'mp3/uptownfunk.mp3',
    autoLoad: true,
    autoPlay: true,
    onload: function() {
      console.log('The sound '+this.id+' loaded!');
      },
    volume: 50
    });

    $(document).keydown(function(e){
    colorblue = randomColor({
         hue: 'blue'
      });
    colorred = randomColor({
         hue: 'red'
      });
    
    switch(e.which){
      case 32:
        console.log('space');
        soundManager.togglePause('uptownfunk');
        break;
      case 81:
        console.log('q');
        b_one.css("border-color", colorblue);
        b_one.addClass("animated wobble");
        quak.removeClass("hidden");
        setTimeout(function () {
          quak.addClass("hidden");
        }, 300);
        setTimeout(function () {
          b_one.removeClass("animated wobble");
        }, 500);
        soundManager.play('b-one-sound');
        break;
      case 87:
        console.log('w');
        b_two.css("border-color", colorred);
        b_two.addClass("animated wobble");
        haaop.removeClass("hidden");
        setTimeout(function () {
          haaop.addClass("hidden");
        }, 300);
        setTimeout(function () {
          b_two.removeClass("animated wobble");
        }, 500);
        soundManager.play('b-two-sound');
        break;
      case 69:
        console.log('e');
        b_three.css("border-color", colorblue);
        b_three.addClass("animated wobble");
        haua.removeClass("hidden");
        setTimeout(function () {
          haua.addClass("hidden");
        }, 300);
        setTimeout(function () {
          b_three.removeClass("animated wobble");
        }, 500);
        soundManager.play('b-three-sound');
        break;

      case 65:
        console.log('a');
        b_four.css("border-color", colorred);
        b_four.addClass("animated wobble");
        bum.removeClass("hidden");
        setTimeout(function () {
          bum.addClass("hidden");
        }, 300);
        setTimeout(function () {
          b_four.removeClass("animated wobble");
        }, 500);
        soundManager.play('b-four-sound');
        break;
      case 83:
        console.log('s');
        b_five.css("border-color", colorblue);
        b_five.addClass("animated wobble");
        tss.removeClass("hidden");
        setTimeout(function () {
          tss.addClass("hidden");
        }, 300);
        setTimeout(function () {
          b_five.removeClass("animated wobble");
        }, 500);
        soundManager.play('b-five-sound');
        break;
      case 68:
        console.log('d');
        b_six.css("border-color", colorred);
        b_six.addClass("animated wobble");
        chhchh.removeClass("hidden");
        setTimeout(function () {
          chhchh.addClass("hidden");
        }, 300);
        setTimeout(function () {
          b_six.removeClass("animated wobble");
        }, 500);
        soundManager.play('b-six-sound');
        break;

      case 90:
        console.log('z');
        b_seven.css("border-color", colorblue);
        b_seven.addClass("animated wobble");
        ding.removeClass("hidden");
        setTimeout(function () {
          ding.addClass("hidden");
        }, 300);
        setTimeout(function () {
          b_seven.removeClass("animated wobble");
        }, 500);
        soundManager.play('b-seven-sound');
        break;
      case 88:
        console.log('x');
        b_eight.css("border-color", colorred);
        b_eight.addClass("animated wobble");
        sigh.removeClass("hidden");
        setTimeout(function () {
          sigh.addClass("hidden");
        }, 300);
        setTimeout(function () {
          b_eight.removeClass("animated wobble");
        }, 500);
        soundManager.play('b-eight-sound');
        break;
      case 67:
        console.log('c');
        b_nine.css("border-color", colorblue);
        b_nine.addClass("animated wobble");
        wat.removeClass("hidden");
        setTimeout(function () {
          wat.addClass("hidden");
        }, 300);
        setTimeout(function () {
          b_nine.removeClass("animated wobble");
        }, 500);
        soundManager.play('b-nine-sound');
        break;

      }
    });

    b_one.click(function(){
      console.log('b one clicked');
      soundManager.play('b-one-sound');
    });
    b_two.click(function(){
      console.log('b two clicked');
      soundManager.play('b-two-sound');
    });
    b_three.click(function(){
      console.log('b three clicked');
      soundManager.play('b-three-sound');
    });
    b_four.click(function(){
      console.log('b four clicked');
      soundManager.play('b-four-sound');
    });
    b_five.click(function(){
      console.log('b five clicked');
      soundManager.play('b-five-sound');
    });
    b_six.click(function(){
      console.log('b six clicked');
      soundManager.play('b-six-sound');
    });
    b_seven.click(function(){
      console.log('b seven clicked');
      soundManager.play('b-seven-sound');
    });
    b_eight.click(function(){
      console.log('b eight clicked');
      soundManager.play('b-eight-sound');
    });
    b_nine.click(function(){
      console.log('b nine clicked');
      soundManager.play('b-nine-sound');
    });

  });
})