var toggleButton = document.querySelector('.toggle-button');
var widget = document.querySelector('.widget-container');

toggleButton.addEventListener('click', function() {
  var isVisible = widget.style.opacity === "1";

  if (isVisible) {
    widget.style.opacity = "0";
    setTimeout(function() { widget.style.visibility = "hidden"; }, 200);
    toggleButton.classList.remove('clicked');
  } else {
    widget.style.visibility = "visible";
    widget.style.opacity = "1";
    toggleButton.classList.add('clicked');
  }
});
