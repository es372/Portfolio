/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*global document*/
// Get the container element
var btnContainer = document.getElementById("hoverID"); // Get all buttons with class="btn" inside the container

var btns = btnContainer.getElementsByClassName("btn"); // Loop through the buttons and add the active class to the current/clicked button

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active"); // If there's no active class

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    } // Add the active class to the current/clicked button


    this.className += " active";
  });
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbImJ0bkNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJidG5zIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwiY3VycmVudCIsImNsYXNzTmFtZSIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQTtBQUNBLElBQUlBLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQW5CLEMsQ0FFQTs7QUFDQSxJQUFJQyxJQUFJLEdBQUdILFlBQVksQ0FBQ0ksc0JBQWIsQ0FBb0MsS0FBcEMsQ0FBWCxDLENBRUE7O0FBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixJQUFJLENBQUNHLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDRixNQUFJLENBQUNFLENBQUQsQ0FBSixDQUFRRSxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFXO0FBQ3pDLFFBQUlDLE9BQU8sR0FBR1AsUUFBUSxDQUFDRyxzQkFBVCxDQUFnQyxRQUFoQyxDQUFkLENBRHlDLENBR3pDOztBQUNBLFFBQUlJLE9BQU8sQ0FBQ0YsTUFBUixHQUFpQixDQUFyQixFQUF3QjtBQUNwQkUsYUFBTyxDQUFDLENBQUQsQ0FBUCxDQUFXQyxTQUFYLEdBQXVCRCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLFNBQVgsQ0FBcUJDLE9BQXJCLENBQTZCLFNBQTdCLEVBQXdDLEVBQXhDLENBQXZCO0FBQ0gsS0FOd0MsQ0FRekM7OztBQUNBLFNBQUtELFNBQUwsSUFBa0IsU0FBbEI7QUFDSCxHQVZEO0FBV0gsQyIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbCBkb2N1bWVudCovXG5cbi8vIEdldCB0aGUgY29udGFpbmVyIGVsZW1lbnRcbnZhciBidG5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvdmVySURcIik7XG5cbi8vIEdldCBhbGwgYnV0dG9ucyB3aXRoIGNsYXNzPVwiYnRuXCIgaW5zaWRlIHRoZSBjb250YWluZXJcbnZhciBidG5zID0gYnRuQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG5cIik7XG5cbi8vIExvb3AgdGhyb3VnaCB0aGUgYnV0dG9ucyBhbmQgYWRkIHRoZSBhY3RpdmUgY2xhc3MgdG8gdGhlIGN1cnJlbnQvY2xpY2tlZCBidXR0b25cbmZvciAodmFyIGkgPSAwOyBpIDwgYnRucy5sZW5ndGg7IGkrKykge1xuICAgIGJ0bnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBhY3RpdmUgY2xhc3NcbiAgICAgICAgaWYgKGN1cnJlbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY3VycmVudFswXS5jbGFzc05hbWUgPSBjdXJyZW50WzBdLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCB0aGUgYWN0aXZlIGNsYXNzIHRvIHRoZSBjdXJyZW50L2NsaWNrZWQgYnV0dG9uXG4gICAgICAgIHRoaXMuY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xuICAgIH0pO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9