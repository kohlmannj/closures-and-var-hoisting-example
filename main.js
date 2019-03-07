// Get our "clickable" elements
var clickableElements = document.querySelectorAll('.clickable');

for (var i = 0; i < clickableElements.length; i++) {
  (function() {
    var index = i;
    var el = clickableElements[i];
    var text = el.textContent;

    el.addEventListener('click', function() {
      // Example Output: `Element 1 reads, "Foo"`
      console.log('Element ' + index + ' reads, "' + text + '"');
    });
  })();
}
