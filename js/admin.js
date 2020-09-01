/* 
    http://restclass.azurewebsites.net/api/points
    http verbs
    POST: create/send data
    GET: get info
    PUT: update some existing elements
    PATCH: update part of an existing element
    DELETE: remove an existing element
*/

//object constructor for Item
class Item {
    constructor(code, title, price, category, image){
    this.code = code;
    this.title = title;
    this.price = price;
    this.category = category;
    this.image = image;
    this.user = "Colin";
    }
}

function clearFields(){
    document.getElementById('productCode').value = "";
    document.getElementById('title').value = "";
    document.getElementById('price').value = "";
    document.getElementById('category').value = "";
    document.getElementById('image').value = "";
}

function register(){
    // get values from inputs
    let code = document.getElementById('productCode').value;
    if(isNaN(code)){
        alert('Product code must be a number');
    }
    let title = document.getElementById('title').value;
    let price = document.getElementById('price').value;
    let category = document.getElementById('category').value;
    let image = document.getElementById('image').value;
    if(code.length === 0 || title.length === 0 || price.length === 0 || category.length === 0 || image.length === 0){
        alert("No empty strings");
        return 0;
    }
    var item=new Item(code, title, price, category, image);
    console.log(item);
    console.log(JSON.stringify(item));
    //console.log
    // create ajax request
    $.ajax({
        url: 'http://restclass.azurewebsites.net/api/points',
        type: 'POST',
        data:JSON.stringify(item),
        contentType: 'application/json',
        success:function(response){
            console.log('Yeeiiii', response);
            $('#successAlert').removeClass('hidden');
            setTimeout(function(){
                $('#successAlert').addClass("hidden");
            }, 3000);
        },
        error:function(errorDetails){
            console.log('Ouch', errorDetails);
        }
    });
    clearFields();
}

function init(){
    console.log("Admin Page");
    // click events
    $('#btnRegister').click(register);
}

window.onload=init;