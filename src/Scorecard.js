'use strict';

function Scorecard(){
  this._frames = [];
  this._total = 0;
  this._isComplete = false
};



  Scorecard.prototype.roll = function(roll){
    this._total += roll
    this._frames.push(roll);
  };

  Scorecard.prototype.numberOfFrames = function(){
    return this._frames.length / 2
  };

  Scorecard.prototype.total = function(){
    return this._total
  }

  Scorecard.prototype.isComplete = function(){
    if (this._frames.length === 20) {
    this._isComplete = true
    return this._isComplete
  } else {
    return this._isComplete
    }

  };
