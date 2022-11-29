var myName = "StrayChoco";
function helloBye(){
  let message ="";
  if (myName[0] == "j" || myName[0] == "J"){
    message ="Good bye"+myName;
  }
  else{
    message = "Hello"+myName;
  }
  return(message);
}
helloBye();