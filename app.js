
function li()
{

  if(text1.value===' ')
  {
    alert("Enter Your TASK First")
  }
  else
  {
    

    let a=document.getElementById("ol1")
    console.log(a)
    let nw=document.createElement("li")
    console.log(nw)
    nw.id="li"
    nw.textContent=document.getElementById("text1").value
    a.appendChild(nw)


  let btn=document.createElement("button")
  btn.id="btn";
  let x="&#128465";
  btn.innerHTML=x;
  nw.appendChild(btn)
  
  
  let b5=document.getElementsByClassName("btn")
  btn.addEventListener('click',function(){a.removeChild(nw)})

  
  }
  
}
 

function clear1()
{
  document.getElementById("text1").value=""
}


