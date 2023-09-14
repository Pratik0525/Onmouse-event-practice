
  function start(val) {
    let newname = "container" + val;
    let newnames = document.getElementById(newname)
    newnames.style.visibility = "visible"
    newnames.style.marginBottom="70px"
  }

  function stop(val) {
    let newname = "container" + val;
    let newnames = document.getElementById(newname)
    newnames.style.visibility="hidden"
    newnames.style.height="100px"
    newnames.style.marginBottom="0px"
  }

  
let prevname =""
function Nav(a) {
  let name = "nav" + a;
  let Navbar =document.getElementById(name);
  console.log(Navbar.className);
  console.log(Navbar.classList.length > 1, prevname);


  if(prevname){
    let Navbars = document.getElementById(prevname) ;
    Navbars.classList.remove("HOME")
    Navbar.classList.add("HOME");
    prevname=name;
  } else {
    console.log("else-part")
    Navbar.classList.add("HOME")
    prevname = name;
  }
}