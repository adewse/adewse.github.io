// Эта функция запускатеся при нажатии на кнопку
function removeAdd(){

    // находим окошко с игрой
    g_frame = document.querySelectorAll('iframe')[1];
    // добавляем ему новый стиль
    g_frame.style = 'position: fixed; top:0; left: 1px; z-index: 10000; background-color: #000';

    // находим холст с игрой
    g_canvas = document.querySelector('#unity-canvas');
    // выводим значение тэга в консоль разработчика (выдаёт null)
    console.log(g_canvas);
    // добавляем новый стиль, чтобы футер с кнопками "Группа игры вконтакте" и "Форум" пропал (выдаёт ошибку в связи с предыдущей) 
    g_canvas.style = 'height: 100% !important';

    // находим шапку вконтакте
    top_popup = document.querySelector('#page_header_cont');
    // и меняем ей стиль, чтобы можно было управлять элементами меню
    top_popup.style = 'position: unset !important';

    // находим плеер вконтакте
    ap_frame = document.querySelector('li.HeaderNav__item.HeaderNav__audio');
    // выносим его на первый план перед окном с игрой
    ap_frame.style = 'z-index: 100000';
}

// создаём переменную, которая будет хранить кнопку
var act_btn = document.createElement('button');
// добавляем кнопке идентификатор
act_btn.setAttribute('id', 'actBtn');
// добавляем стиль кнопки
act_btn.setAttribute('style', 'position:fixed; z-index:100000; bottom:0; right:0; background-color: #000; color: #fff');
// добавляем текст внутри кнопки
act_btn.innerText = 'RemoveAddFrame';
// задаём кнопке функцю, которая будет выполняться при нажатии на неё
act_btn.addEventListener('click', removeAdd);
// добавляем кнопку на страницу
document.body.append(act_btn);