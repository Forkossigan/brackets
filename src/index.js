module.exports = function check(str, bracketsConfig) {
  var length = str.length;
  var string=str;
  var brackets = [];
  var z;
 
  if(length%2){
    return false;
  }
  var n=0;
 
 
  while(n<length){
      var v = string[n];
    if(v=='('||v=='['||v=='{'||v=='1'||v=='3'||v=='5'){
      brackets.push(v);
      n++;
      continue;
    }
    if(v==']'||v==')'||v=='}'||v=='|'||v=='2'||v=='4'||v=='6'||v=='7'||v=='8'){
      z=brackets[brackets.length-1];
    }
    if(z==undefined){
      return false;
    }
    else if(z=='['&&v==']'){
      brackets.pop();
    }
    else if(z=='{'&&v=='}'){
      brackets.pop();
    }
    else if(z=='('&&v==')'){
      brackets.pop();
    }
    else if(z=='1'&&v=='2'){
      brackets.pop();
    }
    else if(z=='3'&&v=='4'){
      brackets.pop();
    }
    else if(z=='5'&&v=='6'){
      brackets.pop();
    }
    else if(z=='|'&&v=='|'){
      brackets.pop();
    }
    else if(z=='7'&&v=='7'){
      brackets.pop();
    }
    else if(z=='8'&&v=='8'){
      brackets.pop();
    }
    else if(z!=='|'&&v=='|'){
      brackets.push(v);
    }
    else if(z!=='7'&&v=='7'){
      brackets.push(v);
    }
    else if(z!=='8'&&v=='8'){
      brackets.push(v);
    }
    else if( 1==1 ){
      return false;
    }
    n++;
    
  }
  if(brackets.length==0){
    return true;
  }
  return false;
}
