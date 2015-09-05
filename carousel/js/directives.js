app.directive('lsImageCarousel', function() {
  return {
    restrict: 'A',
    scope: {
      slides: '=',
    },
    templateUrl: 'partials/carousel-template.html',
    link: function(scope, element, attrs) {

      scope.currentImgIndex = 0;
      scope.slides[scope.currentImgIndex].showing = true;

      scope.prev = function() {
        // if there are images to the left of the current image
        if (scope.currentImgIndex > 0) {
          scope.currentImgIndex--;
        } else {
          // make it look like it's an actual carousel,
          // by going to the very far right image
          scope.currentImgIndex = scope.images.length - 1;
        };
        scope.slides.forEach(function(slide){
          slide.showing = false;
        });
        scope.slides[scope.currentImgIndex].showing = true;
      };

      scope.next = function() {
        // if there are images to the right of the current image
        if (scope.currentImgIndex < scope.slides.length - 1) {
          scope.currentImgIndex++;
        } else {
          // make it look like it's an actual carousel,
          // by going to the very far left image
          scope.currentImgIndex = 0;
        };
        scope.slides.forEach(function(slide){
          slide.showing = false;
        });
        scope.slides[scope.currentImgIndex].showing = true;
      };

    } // closing curly brace for link
  }; // closing curly brace for return
});
