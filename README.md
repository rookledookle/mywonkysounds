##My Wonky Sounds! 

#### What is this craziness?
It's a 3x3 soundboard of sounds produced using 100% human vocals. By human I mean me. Set to the tune of Uptown Funk.

#### Code Snippetz
```javascript
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
}
```