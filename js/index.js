var num = 8
function nextShow() {
    var arr = document.querySelectorAll('.calendar .list-month');
    num++;
    if (num>=arr.length) num=0;
    for (i=0;i < arr.length; i++) {
        arr[i].style.display = "none";
    }
    arr[num].style.display = "block";
}
function prevShow(){
    var arr = document.querySelectorAll('.calendar .list-month');
    num--;
    if(num<=0) num=11;
    for (i=0;i<arr.length; i++) {
        arr[i].style.display = "none";   
    }
    arr[num].style.display = "block";
}


