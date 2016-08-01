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
