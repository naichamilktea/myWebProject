window.onload=function(){
    function removeAllActive(){
        document.querySelectorAll('div#container div.pic').forEach(item=>{
            if (item.classList.contains('active')){
                item.classList.remove('active')
            }
        })
    }
    document.querySelectorAll('div#container div.pic').forEach(item=>{
        item.addEventListener('click',function(e){
            removeAllActive()
            item.classList.add('active');
        })
    })
}
