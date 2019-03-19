module.exports = function check(str, bracketsConfig) {
  var length = str.length;
  brackets = [];
  var z;
  if(length%2){
    return false;
  }
  for(var n=0; n>length; n++){
    if(str[n]=='('||str[n]=='['||str[n]=='{'||str[n]=='1'||str[n]=='3'||str[n]=='5'){
      brackets.push(str[n]);
    }
    if(str[n]==']'||str[n]==')'||str[n]=='}'||str[n]=='|'||str[n]=='2'||str[n]=='4'||str[n]=='6'||str[n]=='7'||str[n]=='8'){
      z=brackets[brackets.length-1];
    }
    if(z<0){
      return false;
    }
    else if(z=='['&&str[n]==']'){
      brackets.pop();
    }
    else if(z=='{'&&str[n]=='}'){
      brackets.pop();
    }
    else if(z=='('&&str[n]==')'){
      brackets.pop();
    }
    else if(z=='1'&&str[n]=='2'){
      brackets.pop();
    }
    else if(z=='3'&&str[n]=='4'){
      brackets.pop();
    }
    else if(z=='5'&&str[n]=='6'){
      brackets.pop();
    }
    else if(z=='|'&&str[n]=='|'){
      brackets.pop();
    }
    else if(z=='7'&&str[n]=='7'){
      brackets.pop();
    }
    else if(z=='8'&&str[n]=='8'){
      brackets.pop();
    }
    else if(z!=='|'&&str[n]=='|'){
      brackets.push(str[n]);
    }
    else if(z!=='7'&&str[n]=='7'){
      brackets.push(str[n]);
    }
    else if(z!=='8'&&str[n]=='8'){
      brackets.push(str[n]);
    }
    
  }
  if(brackets.length==0){
    return true;
  }
  return false;
}
