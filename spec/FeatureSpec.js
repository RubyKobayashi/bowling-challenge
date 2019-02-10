'use strict';

describe('FeatureTest', function(){
  var scorecard;

  // 1) As a player, if I scores 0 on 20 rolls, I would like to see
  //    that my total score would be 0 and that the scorecard would be complete

  beforeEach(function(){
   scorecard = new Scorecard();

  });

  describe('if player scores 0 20 times', function(){

    it('completes the scorecard', function(){
      var times = 20;
      for(var i=0; i < times; i++){
      scorecard.roll(0);
      }
      expect(scorecard.isComplete()).toEqual(true)
      expect(scorecard.numberOfFrames()).toEqual(10)
      expect(scorecard.total()).toEqual(0)
      });

  });


});