// Get our "clickable" elements
let clickableElements = document.querySelectorAll('.clickable');

for (var i = 0; i < clickableElements.length; i++) {
  let index = i;
  let el = clickableElements[i];
  let text = el.textContent;

  el.addEventListener('click', function() {
    // Example Output: `Element 1 reads, "Foo"`
    console.log('Element ' + index + ' reads, "' + text + '"');
  });
}
