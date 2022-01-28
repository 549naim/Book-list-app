// selcting all the elements 
let userName=document.querySelector(".username");
let authorName=document.querySelector(".authorname");
let year=document.querySelector(".year");
let category=document.querySelector(".category");
let addButton=document.querySelector(".addbtn");
let clearButton=document.querySelector(".clearbtn");
let parentDisplay=document.querySelector(".t-info");
// let tableRow=document.querySelector(".table-row");
// let tabledata1=document.querySelector(".tabledata1");
// let tabledata2=document.querySelector(".tabledata2");
// let tabledata3=document.querySelector(".tabledata3");
// let tabledata4=document.querySelector(".tabledata4");




// triggering addbook list button

addButton.addEventListener("click",function(e) {
    e.preventDefault();
    // user invalid input solution
    if((userName.value=="") || (authorName.value=="") ||(year.value=="") || (category.value=="")){
        alert("Please give the input")
    }
    // valid input part
    else{
        // // appending and changing data in table data
        // tabledata1.innerHTML=userName.value;
        // tableRow.appendChild(tabledata1);

        // tabledata2.innerHTML=authorName.value;
        // tableRow.appendChild(tabledata2);

        // tabledata3.innerHTML=year.value;
        // tableRow.appendChild(tabledata3);

        // tabledata4.innerHTML=category.value;
        // tableRow.appendChild(tabledata4);
   
        // // adding with parentDisplay / tablebody

        // parentDisplay.appendChild(tableRow);

        //  the problem of the code is it will not show thw list dinamicly.when we will input the second list then it will take place of the first list. and it will remove the first list.



        // creating new table row
        let newrow = document.createElement("tr");
        // creating new table data
        let tabledata1 = document.createElement("td");
        tabledata1.innerHTML =userName.value;
        newrow.appendChild(tabledata1);
        console.log(tabledata1);

        let tabledata2 = document.createElement("td");
        tabledata2.innerHTML =authorName.value;
        newrow.appendChild(tabledata2);
        console.log(tabledata2);

        let tabledata3 = document.createElement("td");
        tabledata3.innerHTML =year.value;
        newrow.appendChild(tabledata3);
        console.log(tabledata3);

        let tabledata4 = document.createElement("td");
        tabledata4.innerHTML =category.value;
        newrow.appendChild(tabledata4);
        console.log(tabledata4);

        // appending the table row on the table body

        parentDisplay.appendChild(newrow);
        console.log(parentDisplay);
    }
   
})

clearButton.addEventListener("click", function(){
    userName.value = "";
    authorName.value = "";
    year.value = "";
    category.value = "";
})