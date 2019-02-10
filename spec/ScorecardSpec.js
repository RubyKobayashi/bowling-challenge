'use strict';

describe('Scorecard', function(){
  var scorecard;




  beforeEach(function(){
   scorecard = new Scorecard();
  });


    describe('Total', function(){
        it('score starts off at 0', function(){
        expect(scorecard.total()).toEqual(0)
      });

      it('calculates the score', function(){

        expect(scorecard.total()).toEqual(0)
      });
      });

    describe('isComplete', function(){
      it('returns false when score is incomplete and true if game is completed', function(){
        var times = 19;
        for(var i=0; i < times; i++){
        scorecard.roll(0);
        }
      expect(scorecard.isComplete()).toEqual(false)
      var times = 1;
      for(var i=0; i < times; i++){
      scorecard.roll(0);
      }
      expect(scorecard.isComplete()).toEqual(true)
      });
      });



      describe('numberOfFrames', function(){
        it('returns the number of frame player is currently on', function(){
        var times = 20;
        for(var i=0; i < times; i++){
        scorecard.roll(0);
        }
        expect(scorecard.numberOfFrames()).toEqual(10)

        });
        });



  });
