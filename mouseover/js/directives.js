app.directive('gsChangeBackground', function() {
  return {
  	restrict: 'A',
  	scope: {
  		bcolor: '=',
  		tcolor: '='
  	},
    link: function(scope, element, attrs) {

      var oldBColor = element.css('background-color');
      var oldTColor = element.css('color');


      element.on('mouseenter', function(event) {
        element.css({'background-color': scope.bcolor, 'color': scope.tcolor});
      });

      element.on('mouseleave', function(event) {
        element.css({'background-color': oldBColor, 'color': oldTColor});
      })
    }
  };
});

