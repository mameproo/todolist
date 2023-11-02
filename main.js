const addbtn = document.getElementById('Addbtn');
const input = document.getElementById('inputxt');
const div = document.getElementById('todocon');

addbtn.addEventListener("click", Addlist);

function Addlist(){
  var par = document.createElement('p');
  par.innerText = input.value;
 div.appendChild(par)
  input.value = ''; 
}
div.addEventListener('click', function(event) {
  const target = event.target;
  if (target.tagName === 'P') {
    target.style.textDecoration = 'line-through';
  }
});
div.addEventListener('dblclick', function(event) {
  const target = event.target;
  if (target.tagName === 'P') {
    target.remove();
  }
});