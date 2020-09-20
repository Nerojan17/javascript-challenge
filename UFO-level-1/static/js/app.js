// from data.js
var tableData = data;



// function to insert data

function insertData(dataArray) {

    var tBody = d3.select("tbody")
    tBody.html("")
    dataArray.forEach(data => {
        var tRow = tBody.append("tr")   
        Object.values(data).forEach(value => {
            tRow.append("td").text(value)
        });
        
    });
    
}

// function to filter data 

function filter(dataArray, datetime) {
    
    var filtredData = dataArray.filter(data => data.datetime === datetime )
    
    insertData(filtredData)
}


// d3 event event listener 

 d3.select("#filter-btn").on( "click" , function updateTable() {
    d3.event.preventDefault()
    var date = d3.select("#datetime").property("value")
    if (date) {filter(tableData, date)}
    else {insertData(tableData)}
 
 })

 insertData(tableData)