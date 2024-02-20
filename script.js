const btn = document.getElementById('calculator');


btn.addEventListener('click', function(){
    let height = document.querySelector('#height').value ;
    let Weight = document.querySelector('#Weight').value ;

    if(height == '' || Weight=='') {
        alert('please fill out the input detail');
        return;
    }

    // BMI = weight in KG / (height in m * height in m)

    height = height /100  //because height is metter so we have to convert into cm 

    let BMI = (Weight/ (height * height));

    BMI = BMI.toFixed(2);

    document.querySelector('#result').innerHTML =BMI;


    let status = "";

    if(BMI < 18.5){
        status = "Underweight";
    }
    if (BMI >=18.5 && BMI <25){
        status ="Healthy"
    }
    if (BMI >=25 && BMI <30){
        status ="Overweight"
    }
    if (BMI >=30){
        status ="Obese"
    }

    document.querySelector('.comment').innerHTML=`comment: you are <span id="comment">${status}</span>`;

});