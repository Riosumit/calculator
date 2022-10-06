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
function div(element){
    for(let i=0;i<element.length;i++){
        if(element[i]=='/'){
            a = element[i-1]/element[i+1]
            element[i-1]=a;
            element.splice(i,1);
            element.splice(i,1);
            element = div(element);
            break;
        }
    }
    return element
}
function mul(element){
    for(let i=0;i<element.length;i++){
        if(element[i]=='X'){
            a = element[i-1]*element[i+1]
            element[i-1]=a;
            element.splice(i,1);
            element.splice(i,1);
            element = mul(element);
            break;
        }
    }
    return element
}
function add(element){
    for(let i=0;i<element.length;i++){
        if(element[i]=='+'){
            a = element[i-1]+element[i+1]
            element[i-1]=a;
            element.splice(i,1);
            element.splice(i,1);
            element = add(element);
            break;
        }
    }
    return element
}
function sub(element){
    for(let i=0;i<element.length;i++){
        if(element[i]=='-'){
            a = element[i-1]-element[i+1]
            element[i-1]=a;
            element.splice(i,1);
            element.splice(i,1);
            element = sub(element);
            break;
        }
    }
    return element
}
function calculate(element){
    element = div(element);
    element = mul(element);
    element = add(element);
    element = sub(element);
    s=element[0];
    input.value=element[0];
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