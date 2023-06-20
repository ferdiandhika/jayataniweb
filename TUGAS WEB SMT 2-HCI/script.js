function keyupFunction(){
   document.getElementById("erase").classList.add("move");
}
function erase(){
   document.getElementById("search").value = "";
   document.getElementById("erase").classList.remove("move");
}
// class Search{
//    constructor(){
//       let i;
//    }
//    ok(){
//       i++;
//    }
// }
