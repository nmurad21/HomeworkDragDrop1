let allTable1=document.querySelectorAll(".table1")
let area1=document.querySelector(".area1")

allTable1.forEach(table1=>{
    table1.ondragstart=function(e){
        e.dataTransfer.setData("id", this.id)
    }
})

area1.ondragover=function(e){
    e.preventDefault();
}

area1.ondrop=function(e){
    let id= e.dataTransfer.getData("id");
    let table=document.getElementById(id);
    if (this.id===table.id) {
        area1.appendChild(table);
    }
    else{
        alert("OLMAZ!")
    }
}


let allTable2=document.querySelectorAll(".table2")
let area2=document.querySelector(".area2")

allTable2.forEach(table2=>{
    table2.ondragstart=function(e){
        e.dataTransfer.setData("id", this.id)
    }
})

area2.ondragover=function(e){
    e.preventDefault();
}

area2.ondrop=function(e){
    let id= e.dataTransfer.getData("id");
    let table=document.getElementById(id);
    if (this.id===table.id) {
        area2.appendChild(table);
    }
    else{
        alert("OLMAZ!")
    }
}


let allTable3=document.querySelectorAll(".table3")
let area3=document.querySelector(".area3")

allTable3.forEach(table3=>{
    table3.ondragstart=function(e){
        e.dataTransfer.setData("id", this.id)
    }
})

area3.ondragover=function(e){
    e.preventDefault();
}

area3.ondrop=function(e){
    let id= e.dataTransfer.getData("id");
    let table=document.getElementById(id);
    if (this.id===table.id) {
        area3.appendChild(table);
    }
    else{
        alert("OLMAZ!")
    }
}