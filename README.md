# Custom Directives: Part 2

####EXERCISE: Research `link` and `compile`.  What do the two functions do in angular?  Which one would be most commonly used for DOM manipulation?
#####$compile is Angular's HTML compiler, which walks the DOM and matches DOM elements to directives. You would use compile for directives like ng-repeat, ng-if, and ng-switch; and when you need to reuse an HTML template multiple times. Generally, though, directives don't need $compile, unless you're doing advanced DOM manipulation. The link property is only used if the compile property is not defined; it registers DOM listeners and updates the DOM. The link function has access to the scope; the compile method does not. The link function would be most commonly used for DOM manipulation.


####EXERCISE: How is the code able to call `element.on` and `element.css`?  What type of object is it?  Look in the angular docs for all available methods.
#####Element references in Angular are wrapped with jqLite (Angular's built-in subset of jQuery) or jQuery (which, if used, needs to be loaded before angular.js). `element.css` and `element.on` can be called through jqLite. There are 33 other jQuery methods for element provided by jqLite. `element` is an HTML string or DOMElement to be wrapped into jQuery.

**EXERCISE**

The `gsChangeBackground` directive could be more customizable.  Change the code so that the user of the directive can set an attribute on the tag that specifies what the new background color should be on mouse enter.  Also, add the ability for the user to change the text color on mouse enter as well.  If no new text color is specified, the text color should not change.  Lastly, our directive only makes sense in one context.  Add a restriction to the directive so that it can only be used in the correct way.  You'll have to figure out which way that is!

**EXERCISE**

Make an image carousel.  The carousel should be made with a custom directive.  The directive should expect an array of images to be passed in via an attribute.  The directive should also add left and right arrows each with their own `ng-click`.  Make sure the directive has an isolated scope.

[Click here for animated gif](http://s13.postimg.org/5lvbgxa0l/carousel_angular_animated.gif")


**EXERCISE**

Build on the previous custom directive.  Add a thumb nail view at the top of the carousel.  Only show the thumb nail view if there are 5 or move images in the carousel.  The thumbnail should show the previous 2 images, the current image, and the next 2 images.
