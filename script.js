window.onload = () =>{
    let button = document.querySelector("#btn");
    button.addEventListener("click",calculateBMI);

};

function calculateBMI(){
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result");

    if(height === " " || isNaN(height)){
        result.innerHTML = "provide a valid height"
    }else if(weight === " " || isNaN (weight)){
        result.innerHTML = "provide a valid weight"
    }else{
        let bmi = [weight / height / height] * 10000 ;
        let Bmi = bmi.toFixed(1);
        

        if(bmi < 18.5){
            result.innerHTML= `Underweight: ${Bmi}`;
        }else if(bmi >= 18.5 && bmi <= 24.9){
            result.innerHTML = `Normal weight: ${Bmi}`;
        }else if(bmi >= 25 && bmi <= 29.9){
            result.innerHTML = `Overweight:${Bmi}`;
        }else if(bmi >=30 ){
            result.innerHTML = `Obesity : ${Bmi}`;
        }

        document.getElementById("result").style.color = "blue";
    }
}
