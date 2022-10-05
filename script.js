s="";
let input = document.getElementById('input_box');
function evaluate(){
    s=input.value;
    let op="+", c1="";
    result=0;
    element = [];
    for(let i=0;i<=s.length;i++){
        if(s[i]=='+' || s[i]=='-' || s[i]=='/' || s[i]=='X' || i==s.length){
            if(c1!=""){
                c1 = parseFloat(c1);
                element.push(c1,s[i]);
                c1="";
            }
        }
        else{
            c1+=s[i];
        }
    }
    calculate(element);
}
function calculate(element){
    result;
    if(element.length==2){
        return element[0];
    }
    else{
        for(let i=0;i<element.length;i++){
            if(element[i]=='/'){
                a = element[i-1]/element[i+1]
                element[i-1]=a;
                element.splice(i,1);
                element.splice(i,1);
                result = calculate(element);
                break;
            }
            else if(element[i]=='X'){
                a = element[i-1]*element[i+1]
                element[i-1]=a;
                element.splice(i,1);
                element.splice(i,1);
                result = calculate(element);
                break;
            }
            else if(element[i]=='+'){
                a = element[i-1]+element[i+1]
                element[i-1]=a;
                element.splice(i,1);
                element.splice(i,1);
                result = calculate(element);
                break;
            }
            else if(element[i]=='-'){
                a = element[i-1]-element[i+1]
                element[i-1]=a;
                element.splice(i,1);
                element.splice(i,1);
                result = calculate(element);
                break;
            }
        }
        s=result
        input.value=result;
        return result;
    }
}
last="";
function click1(i){
    if(i=='='){
        evaluate();
    }
    else if(i=='<='){
        s = s.substr(0,s.length-1);
        input.value = s;
    }
    else if(i=='C'){
        s = "";
        input.value = s;
    }
    else if(i=='+' || i=='-' || i=='/' || i=='X'){
        if(last!='+' && last!='-' && last!='/' && last!='X'){
            input.value += i;
            s=input.value;
        }
        last=i;
    }
    else if(i=="%"){}
    else{
        last=i;
        input.value += i;
        s=input.value;
    }
}