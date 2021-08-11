const inputBox = document.querySelector(".inputField input");
const btnAdd = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const clearList = document.querySelector(".clearAllTasks");
const countTasks = document.querySelector('.countTasks');

inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if(userData.trim() != 0){
        btnAdd.classList.add("active");
    }else{
        btnAdd.classList.remove("active");
    }
}

btnAdd.onclick = ()=>{

    let userData =inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null) {
        listArr = [];//neu ma localstorage trong thi tao list mang 
    }else{
        listArr =JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTasks();        
}

const showTasks = () =>{
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];
        countTasks.textContent = "0";
        
    }else{
        listArr =JSON.parse(getLocalStorage);
    } 
    countTasks.textContent = listArr.length;
  
    let newLiTag = '';
    listArr.forEach((element,index) => {
        newLiTag += `<li> ${element} <span onclick = "deleteTasks(${index})" ><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = '';
}

const deleteTasks = (index) =>{
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index,1)
    // after remove thi` update task
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTasks();//calling all task;
}

const clearAllTasks = () =>{
    localStorage.clear();
    showTasks();//calling all task;
}