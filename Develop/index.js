function mondayData(day){

    // geting localStorage if eany
    var localDataScore = localStorage.getItem(day);

    // if there is nothing inside storage create this information 
    if(localDataScore == null){

        // creating a monday list
        let responseARMonda = JSON.parse(localStorage.getItem(day)) || [];

        // let dataSaver = [];
        for(let r = 0; r <= 24; r++){
            responseARMonda.push(r);
        }   

        // saving the new information
        let responseScore = JSON.stringify(responseARMonda);
        localStorage.setItem(day,responseScore);
        console.log("si paso por aqui");
        mondayData(day);
    }else{
        document.getElementById('days').classList.toggle("active");
        var informationtest = JSON.parse(localDataScore);
        var itemLenght = Object.keys(informationtest);
        // console.log(itemLenght.length);
    }
    
    // container for the schedule list
    var scheduleContainor = document.getElementById('schedule');

      // gets the list item by the name 
    for(let i = 1; i <= itemLenght.length -1;i++){

        // create li
        let childContainor = document.createElement("li");
        childContainor.id = 'child_Containor';

        // seting the time of day
        let time = document.createElement("h1");
        time.id = 'Time';

        // creating the text content
        let usersText = document.createElement("input");
        usersText.className = 'TX_Content';
        usersText.id='TX_Content'+ i;
        usersText.setAttribute('type', 'text');

        // creating the buton 
        let saveData = document.createElement("button");
        saveData.id ='lock_In';

        // geting the time
        time.innerHTML = i + ":H";
        childContainor.appendChild(time);

        // geting the text
        usersText.value = informationtest[i];
        childContainor.appendChild(usersText);

        // geting the save BT
        saveData.innerHTML = "lock";
        childContainor.appendChild(saveData);
        scheduleContainor.appendChild(childContainor);

        // on click this information will be seng to the function lockData()
        saveData.setAttribute('onclick','lockData("'+ i +'", "'+day+'")');
    }
    // remove active list and replace
    document.getElementById('back_BT').classList.toggle("active");
    isGoodOrNot(day);
}
// locink/ saving the new information placed inside the text box in localStorage
function lockData(i,day){
    // geting the textBox id to get the value of the box thaty's being presed
    let textValue = document.getElementById('TX_Content'+i).value;

    // geting the day selected to get the right saved information
    let responseARMonda = JSON.parse(localStorage.getItem(day)) || [];

    // seting the new value in the right listItem location
    responseARMonda[i] = textValue;

    // sending the information back to localStorage
    let responseScore = JSON.stringify(responseARMonda);
    localStorage.setItem(day,responseScore);
   
}
function back(){
    document.getElementById('back_BT').classList.toggle("active");
    document.getElementById('days').classList.toggle("active");

    // remove curent listContainor
    for( let i = 1; i <= 24 ; i++){
        let remove = document.getElementById('child_Containor');
        remove.remove();
    }  
    
}
function isGoodOrNot(day){
    // cheking if the day has passed or not
    if(moment().format('dddd') == day ){
        let time = 3;
        console.log(time);
        // if today is this day it will chek for the time;
        for(let i = 1 ; i <= 24; i++){
            if( i == time){
                document.getElementById('TX_Content'+ i).style.backgroundColor ="orange";
                document.getElementById('TX_Content'+ i).addEventListener("mouseover", function(event) {
                    setTimeout(function() {
                       event.target.style.backgroundColor = "orange";
                    },500);
                   // highlight the mouseover target
                   document.getElementById('TX_Content'+ i).style.backgroundColor = "rgb(243, 188, 86)";
               });
            }else if(i <= time){
                document.getElementById('TX_Content'+ i).style.backgroundColor ="red";
                document.getElementById('TX_Content'+ i).addEventListener("mouseover", function(event) {
                    setTimeout(function() {
                       event.target.style.backgroundColor = "red";
                    },500);
                   // highlight the mouseover target
                   document.getElementById('TX_Content'+ i).style.backgroundColor = "rgba(198, 33, 33, 0.857)";
               });
            }else{
                document.getElementById('TX_Content'+ i).style.backgroundColor ="green";
                document.getElementById('TX_Content'+ i).addEventListener("mouseover", function(event) {
                    setTimeout(function() {
                       event.target.style.backgroundColor = "green";
                    },500);
                   // highlight the mouseover target
                   document.getElementById('TX_Content'+ i).style.backgroundColor = "rgb(5, 202, 5)";
               });
            }
        }
    }else{
        let chekingDay = 0;
        switch(day) {
            case "Monday":chekingDay = 1;
              break;
            case "Tuesday":chekingDay = 2 ;
                break;
            case "Wednesday":chekingDay = 3;
                break;
            case "Thursday":chekingDay = 4;
                break;
            case "Friday":chekingDay = 5;
                break;
            case "Saturday":chekingDay = 6;
                break;
            case "Sunday":chekingDay = 7;
                break;
        }
        if(moment().isoWeekday() >= chekingDay){
            for(let i = 1 ; i <= 24; i++){
                document.getElementById('TX_Content'+ i).style.backgroundColor ="red";
                document.getElementById('TX_Content'+ i).addEventListener("mouseover", function(event) {
                    setTimeout(function() {
                       event.target.style.backgroundColor = "red";
                    },500);
                   // highlight the mouseover target
                   document.getElementById('TX_Content'+ i).style.backgroundColor = "rgba(198, 33, 33, 0.857)";
               });
            }
        }else{
            for(let i = 1 ; i <= 24; i++){
                document.getElementById('TX_Content'+ i).style.backgroundColor ="green";
                document.getElementById('TX_Content'+ i).addEventListener("mouseover", function(event) {
                     setTimeout(function() {
                        event.target.style.backgroundColor = "green";
                     },500);
                    // highlight the mouseover target
                    document.getElementById('TX_Content'+ i).style.backgroundColor = "rgb(5, 202, 5)";
                });
            }
        }
    }
    
    
}