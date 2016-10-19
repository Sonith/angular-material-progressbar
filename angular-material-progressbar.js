/*

Written for Rentping.
If you can, then leave this comment as it is.
v1.0

*/
angular.module('angular-material-progressbar', []).directive('mProgressBar', function() {

  return {

    restrict: 'E',

    scope: {
      curVal            :'@',
      label             :'@',
      caption           :'@',
      centerCaption     :'@',
      largePercentText	:'@'
    },
    template: 	"<span layout='column'>" + 
                  "<span>" +
                    "<span class='md-caption'>{{caption}}</span>" +
                  "</span>" +
                  "<span layout layout-align='start center'>" +
                    "<div flex='70' class='progress-bar'>" +
                      "<div class='progress-bar-bar'></div>" +
                    "</div>" +
                    "<span class='progress-label' ng-class='{\"md-title\" : largePercentText , \"md-caption\" : !largePercentText}'>{{label||curVal+'%'}}</span>" +
                  "</span>" +
                "</span>",

    link: function($scope, element, attrs) {

      function updateProgress() {
        var progress = 0;
        var info = "#2ab573";
        var warn = "#ef953b";
        var critical = "#f16521";
        var progressColor = null;

        progress = Math.min($scope.curVal, 100) / 100 * element[0].querySelector('.progress-bar').clientWidth;
        if ($scope.curVal < 33) {
        	progressColor = critical;
        } else if ($scope.curVal < 66) {
        	progressColor = warn;
        } else {
        	progressColor = info;
        	progress = progress + 1; // to remove a tiny white bit when progress is 100.
        }
        
        angular.element(element[0].querySelector('.progress-bar-bar')).css({'width': progress  + 'px', 'background-color': progressColor});
        var progressLabel = angular.element(element[0].querySelector('.progress-label'));
        if ($scope.largePercentText){
        	progressLabel.css({'margin-left':'6px', 'color': progressColor});
        } else {
        	progressLabel.css({'margin-left':'3px', 'color': progressColor});
        }
        
        if (!!$scope.centerCaption) {
        	var captionSpan = angular.element(element[0].querySelector('.md-caption'));
        	var captionSpanWidth = captionSpan[0].offsetWidth;
        	var progressBarWidth = element[0].querySelector('.progress-bar').clientWidth;
        	var offset = (progressBarWidth / 2) - (captionSpanWidth / 2);
        	captionSpan.css({'left' : offset + 'px' , 'position' : 'relative'});
        }
        
      }
      
      $scope.$watch(function(){return element[0].querySelector('.progress-bar').clientWidth;}, function(oldValue, newValue) {
          if (oldValue !== newValue) {
        	  updateProgress();
          }
      }, true);
      $scope.$watch('curVal', updateProgress);
    }
  };
});