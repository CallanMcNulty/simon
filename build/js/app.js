(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Simon(){
  this.colors = ["red", "blue", "yellow", "green"];
  this.sequence = [];
  this.currentColor = 0;
  this.addColor();
}

Simon.prototype.addColor = function(){
  rand = Math.floor(Math.random() * (3));
  this.sequence.push(this.colors[rand]);
};
Simon.prototype.iterate = function() {
  console.log(this.currentColor);
  if(this.currentColor===this.sequence.length-1) {
    this.currentColor = 0;
    this.addColor();
    return true;
  }
  this.currentColor += 1;
  return false;
};
Simon.prototype.reset = function() {
  this.sequence = [];
  this.currentColor = 0;
  this.addColor();
}

exports.simonModule = Simon;

},{}],2:[function(require,module,exports){
var Simon = require('./../js/simon.js').simonModule;


$(document).ready(function(){
  sequenceActive = true;
  game = new Simon();
  sequenceActive = true;
  displaySequence(game);

  // $(".color").click(function(){
  //   setTimeout(function(){ alert("Hello"); }, 3000);
  //
  // })
  $(".color").click(function() {
    console.log("in");
    if(!sequenceActive) {
      if($(this).attr("id")===game.sequence[game.currentColor]) {
        if(game.iterate()) {
          displaySequence(game);
        }
      } else {
        alert("You Lose.");
        game.reset();
        displaySequence(game);
      }
    }
  });
});

var displaySequence = function(simon) {
  var currentColor = simon.sequence[simon.currentColor];
  $("#"+currentColor).removeClass(currentColor);
  $("#"+currentColor).addClass("flash");
  setTimeout(function(){
    $("#"+currentColor).removeClass("flash"); $("#"+currentColor).addClass(currentColor);
    if(simon.currentColor===simon.sequence.length-1)
    {
      sequenceActive = false;
      simon.currentColor = 0;
      return;
    } else {
      simon.iterate();
    }
    displaySequence(simon);
  }, 1000);
};

},{"./../js/simon.js":1}]},{},[2]);
