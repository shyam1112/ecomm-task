function openNav(){
    document.getElementById("mySidenav").style.display="block";
}

function closeNav(){
    document.getElementById("mySidenav").style.display="none";
}

// const toparrow1=document.getElementById("toparrow");
// console.log(toparrow1);

window.onscroll =function(){
  scrollfunction();
  // myarrow.style.display="block";
  // return console.log(2+5);

}

function scrollfunction(){
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    document.getElementById("toparrow").style.display="block";
  }else{
    document.getElementById("toparrow").style.display="none";
  }
}

function topfunction(){
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
}