// Get our "clickable" elements
var clickableElements = document.querySelectorAll('.clickable');

// CAVEAT: clickableElements is a NodeList,
// and IE 11 doesn't support `NodeList.forEach()`!
/** @see https://developer.mozilla.org/en-US/docs/Web/API/NodeList#Browser_compatibility */
clickableElements.forEach(function(el, i) {
  var text = el.textContent;

  el.addEventListener('click', function() {
    // Example Output: `Element 1 reads, "Foo"`
    console.log('Element ' + i + ' reads, "' + text + '"');
  });
});
