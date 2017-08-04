/*
document.getElementById("submit").addEventListener('click',convert);

function convert()
{
    console.log("Number");
    var num=document.getElementById("number").value;
    console.log(num);    
}
*/




var num=4561323;

var numbers=['zero','one','two','three','four','five','six','seven','eight','nine'];
var place=['ones','tens','hundred'];
var hplace=['thousand','million','billion'];



function numTostring(num)
{
    var result='';
    var count=num.toString().length;

    var digPos=1;
    var i=count-3;
    var hcount=1;
    while(i>0)
    {
            digPos*=1000;
            i=i-3;
            hcount+=1;
    }
    console.log(digPos);
    
    while(hcount > 0)
    {
        var uDig=Math.floor(num/digPos);
        console.log(uDig+' '+num+' '+digPos);
        result=result+numToutil1(uDig,hcount);
        num=num%digPos;
        digPos=digPos/1000;
        hcount--;
    }
    return result;
}


function numToutil1(num,hcount)
{
    var result='';
    var count=num.toString().length;

    var digPos=1;
    var i=count-1;

    while(i>0)
    {
            digPos*=10;
            i--;
    }
    console.log(digPos);
    
    while(count > 0)
    {
        var uDig=Math.floor(num/digPos);
        console.log(uDig+' '+num+' '+digPos);
        result=result+numToutil2(uDig,count);
        num=num%digPos;
        digPos=digPos/10;
        count--;
    }
    
    var suffix='';
    switch(hcount)
    {
        case 1:
            break;
        case 2:
            suffix=' thousand ';
            break;
        case 3:
            suffix=' million ';
            break;
        case 4:
            suffix=' billion ';
        default:
            break;
    }

    return result+suffix;
}

function numToutil2(num,count)
{
    var tempRes='';
    

    switch(count)
    {
        case 1:
            tempRes+=numbers[num];
            break;
        case 2:
            tempRes+=numbers[num]+'ty ';
            break;
        case 3:
            tempRes+=numbers[num]+' hundred ';
            break;
    }
    
    return tempRes;
}

console.log(numTostring(num));