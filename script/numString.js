
document.getElementById("convert").addEventListener('click',convert);

function convert()
{
    var num=document.getElementById("number").value;
    document.getElementById("toString").innerHTML=numTostring(num);  
}




var numbers=['','one','two','three','four','five','six','seven','eight','nine'];
var place=['ones','tens','hundred'];
var hplace=['thousand','million','billion'];

var oTens=['ten','eleven','tweleve','thirteen','forteen','fifteen','sixteen','seventeen','eightteen','ninteen'];
var pTens=['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninty'];


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
    var flagOn=false;
    while(count > 0)
    {
        var uDig=Math.floor(num/digPos);
       
        switch(count)
        {
            case 1:
                if(flagOn === false)
                    result+=numbers[uDig];
                break;
            case 2:
                if(uDig === 1)
                    {
                        result+=oTens[num-10];
                        flagOn=true;
                    }
                else
                    {
                        result+=pTens[uDig-2]+' ';
                    }
                    break;
            case 3:
                    result+=numbers[uDig]+' hundred ';
                    break;
        }
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
