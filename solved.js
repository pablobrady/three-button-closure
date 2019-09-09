/* ./index.js */

module.exports = function() {

  // Convert arguments object to an array
  var args = Array.prototype.slice.call(arguments);

  // Arguments should contain (finite) number values
  // if (!args.every(Number.isFinite)) {
  //   throw new TypeError('Expecting only numbers.')
  // }

  // Debugging assistance
  var sleep = function (milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

  // Use the "solution(xx)" function to return data for testing.
  function solution(arg) {

    const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
    for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
  
      // For each of our buttons, when the user clicks it...
      document.getElementById(`btn-${btnNum}`).onclick = (frozenBtnNum) => {
        return () => {
          alert(prizes[frozenBtnNum]);
        }
      };
    }
  }

  var retVal = solution(args);


  return retVal;
}
