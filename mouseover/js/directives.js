app.directive('gsChangeBackground', function() {
  return {
  	restrict: 'A',
  	scope: {
  		bcolor: '='
  	},
    link: function(scope, element, attrs) {

      var oldColor = element.css('background-color');

      element.on('mouseenter', function(event) {
      	console.log("mouseenter");
        element.css('background-color', scope.bcolor);
      });

      element.on('mouseleave', function(event) {
        element.css('background-color', oldColor);
      })
    }
  };
});

