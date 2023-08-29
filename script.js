const inputbox=document.getElementById('input_box');
const list_container=document.getElementById('list_container');
 const taskcontainer=document.querySelector('#tasks');
 const countvalue=document.querySelector(".count_task");
 let taskcount=0;
 let count=0;
 
function addtask(){
    if(inputbox.value==""){
        alert('You must Add the task');
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        list_container.appendChild(li);

        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
       
    }
    inputbox.value="";
    taskcount+=1;
    displaycount(taskcount);
    savedatas();

   
}
list_container.addEventListener("click",function(e){
    if (e.target.tagName=='LI') {
        e.target.classList.toggle("checked");
        count+=1;
        savedatas();
        if(count==1)
        {
        taskcount-=1;
        count+=1;
        displaycount(taskcount);
        savedatas();
        }
    }
    else if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove();
        taskcount-=1;
        displaycount(taskcount);
        savedatas();
    }
}, false);

function savedatas(){
    localStorage.setItem('data',list_container.innerHTML,taskcount.innerHTML);
}

function showtasks()
{
    list_container.innerHTML=localStorage.getItem('data');
    
}

showtasks();
const displaycount=(taskcount)=>{
  
    countvalue.innerHTML=taskcount;
    
    };