window.onload = function() {
  add();
};
var box = document.getElementById('box');
var tarea = document.getElementById('tarea');
var post = document.getElementById('post');

function add() {
  tarea.addEventListener('click', function() {
    var ipt = document.createElement('input');
    var btn = document.createElement('button');
    var icon = document.createElement('span');
    btn.textContent = 'Añadir una lista';
    icon.textContent = 'x';
    var divv = document.createElement('div');
    divv.appendChild(ipt);
    divv.appendChild(btn);
    divv.appendChild(icon);
    box.appendChild(divv);
    box.removeChild(tarea);
    btn.addEventListener('click', function() {
      if (ipt.value) {
        var text = document.createElement('p');
        var div1 = document.createElement('div');
        var tarea1 = document.createElement('div1');
        var tareatext = document.createElement('span');
        div1.classList.add('left');
        text.textContent = ipt.value;
        ipt.value = '';
        div1.appendChild(text);
        tareatext.textContent = 'Añadiendo Tarea';
        tarea1.appendChild(tareatext);
        div1.appendChild(tarea1);
        box.insertBefore(div1, divv);
        tareatext.addEventListener('click', function() {
          var tinp = document.createElement('input');
          var tx = document.createElement('span');
          var tb = document.createElement('button');
          tx.textContent = 'x';
          tb.textContent = 'Añadir';
          tarea1.appendChild(tinp);
          tarea1.appendChild(tb);
          tarea1.appendChild(tx);
          tarea1.removeChild(tareatext);
          tb.addEventListener('click', function() {
            if (tinp.value) {
              var tc = document.createElement('p');
              tc.textContent = tinp.value;
              tinp.value = '';
              div1.insertBefore(tc, tarea1);
            }
          });
        });
      }
    });
  });
}
