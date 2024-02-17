function addTime(){
  vrem = document.createElement('a');
  vrem.className = 'time';
  vrem.setAttribute('data-tz', 'Asia/Bangkok');
  vrem.setAttribute('data-format', '%H:%i:%s');
  vrem.style = 'position:fixed;bottom:0;left:20px;z-index:100000'
  vrem.innerHTML = 'время';
  document.body.append(vrem);
  
}

addTime();
