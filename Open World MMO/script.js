function removeAdd(){
    g_frame = document.querySelectorAll('iframe')[1];
    g_frame.style = 'position: fixed; top:0; left: 1px; z-index: 10000; background-color: #000';
    g_canvas = document.querySelector('#unity-canvas');
    console.log(g_canvas);
    //g_canvas.style = 'height: 100% !important';
    ap_frame = document.querySelector('li.HeaderNav__item.HeaderNav__audio');
    ap_frame.style = 'z-index: 100000';
    top_popup = document.querySelector('#page_header_cont');
    top_popup.style = 'position: unset !important';
}

var act_btn = document.createElement('button');
act_btn.setAttribute('id', 'actBtn');
act_btn.setAttribute('style', 'position:fixed; z-index:100000; bottom:0; right:0; background-color: #000; color: #fff');
act_btn.innerText = 'RemoveAddFrame';
act_btn.addEventListener('click', removeAdd);
document.body.append(act_btn);