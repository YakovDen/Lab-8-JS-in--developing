/**
 * 
 */
//function make_json(form) {
    
    //var doc = document;	
     /*let json={
         
        "number":form.number.value,
        "typeAccount":form.select.value,
        "PIN":form.pin.value,
        "balance":form.balance.value,
        "dataCreation":form.dataCreation.value,
        "user":form.user.value,
        "userType":form.typeUser.value,
        "historyRevision":form.historyRevision.value,
        "costService":form.costService.value,
        "userSystemType":form.userSystemType.value,
        "time":form.time.value,
        "percent":form.percent.value,
        "period":form.period.value
     }*/

    /*var html = JSON.stringify(json,0,"\t");
    doc.getElementById('output').innerHTML = html;  */     
//--------------------------------------------------------------------
   /*  var fs = require('fs');

    let person={
        name:"Ivan",
        lastName:"Ivanovich",
        patronymic:"Ivanov",
        age:30,
        cellPhone:375292346579
    }
    
    
    
    fs.writeFile("data.json", JSON.stringify(person), function (error) {
    
        if (error) throw error; // если возникла ошибка
        console.log("Асинхронная запись файла завершена.");
    });
    
    
    let data;
    fs.readFile('data.json', "utf8", function (err, data) {
        if (err) {
            console.error(err);
        } else {
            console.log(data);
            user = JSON.parse(data);
            console.log(user.patronymic); // 1
        }
    }); */
 //---------------------------------------------------   
    /* function download(content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([content], {type: contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
    download(json, 'json.txt', 'text/plain'); */    
    
    
   // return false;
   var express = require('express');
   var bodyParser = require('body-parser');
    
   var app = express();  

   var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/constructor', urlencodedParser, function(req, res){
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.render('constructor');

});

//}