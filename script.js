document.addEventListener("DOMContentLoaded", function() {
  var height = 50;
  var width = 70;
  var currentColor = 'black';
  var reset = 'white';
  var clicked = false;
  var selectedColor = document.querySelector('.colorPicked > .selectedColor');

  var table = document.querySelector('table');
    for (var i = 0; i < height; i++) {
      var tr = document.createElement('tr');
      table.append(tr);

      for (var j = 0; j < width; j++) {
        var td = document.createElement('td');
        tr.append(td);
        td.addEventListener('mousedown', function() {
          clicked = true;
          if(this.className === currentColor) {
            this.className = reset;
          } else {
            this.className = currentColor;
          }
        })
        td.addEventListener('mouseenter', function() {
          if(clicked) {
            this.className = currentColor;
          }
        })
      }
    }

  var colors = document.querySelectorAll('.palette > div');
  for (var i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', function() {
      currentColor = this.className;
      selectedColor.className = 'selectedColor ' + currentColor;
    })
  }

  table.addEventListener('mouseleave', function() {
    clicked = false;
  })

  table.addEventListener('mouseup', function() {
    clicked = false;
  })

})
