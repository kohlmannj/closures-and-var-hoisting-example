// Get our "clickable" elements
let clickableElements = document.querySelectorAll('.clickable');

for (let i = 0; i < clickableElements.length; i++) {
  let el = clickableElements[i];
  let text = el.textContent;

  el.addEventListener('click', function() {
    // Example Output: `Element 1 reads, "Foo"`
    console.log('Element ' + i + ' reads, "' + text + '"');
  });
}
