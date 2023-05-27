
window.onload=function(){
    let curvalue=1;
    buttonprev=document.querySelector('button.prev');
    buttonnext=document.querySelector('button.next');
    circlelist=document.querySelectorAll('div.circle');
    linelist=document.querySelectorAll('div.connector');
    let refresh=function(){
        buttonprev.disabled=false;
        buttonnext.disabled=false;
        if (curvalue==1){
            buttonprev.disabled=true;
        }else if (curvalue==4){
            buttonnext.disabled=true;
        }
        let i=1;
        for (;i<curvalue;++i){
            circlelist[i].classList.add('active');
            linelist[i-1].classList.add('active')
        }
        for (;i<4;++i){
            if (circlelist[i].classList.contains('active'))
                circlelist[i].classList.remove('active');
                if (linelist[i-1].classList.contains('active'))
                linelist[i-1].classList.remove('active')
        }
    }
    buttonprev.onclick=function(){
        curvalue--;
        refresh();
    }
    buttonnext.onclick=function(){
        ++curvalue;
        refresh();
    }
}