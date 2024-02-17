function addTime(){
  vrem = document.createElement('a');
  vrem.className = 'time';
  vrem.setAttribute('data-tz', 'Europe/Moscow');
  vrem.setAttribute('data-format', '%s');
  vrem.innerHTML = 'время';
  document.body.append(vrem);
  
}

addTime();
