function age(){
    var d1 = document.getElementById("date").value
    var m1 = document.getElementById("month").value
    var y1 = document.getElementById("year").value
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var result = document.getElementById("age");


    if(!d1){
        result.innerHTML = "please provide value";
        return false;
    }
    if(d1<0){
        result.innerHTML = "please provide valid date";
        return false;
    }
    if(isNaN(d1)){
        result.innerHTML = "please provide number"
        return false;
    }

    if(m1>month.length){
        result.innerHTML = "Please provide Month value in range from 1 to 12";
        return false;
    }

    if(y1.length!=4){
        result.innerHTML = "Please provide year in format YYYY";
        return false;
    }

    if(d1>month[m1-1]){
        result.innerHTML = "Please provide valid Date with respect to Month";
        return false;
    }
    
    if(d1>d2){
        d2 = d2 + month[m2-1];
        m2 = m2 -1;
    }
    if(m1>m2){
        m2 = m2 + 12;
        y2 = y2 - 1
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
    result.innerHTML = "Your Age is " + y + " Years " + m + " Months " + d + " Days";
}
