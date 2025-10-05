function patrick() {

     let personName = (document.getElementById("Client").value);
    let weightKg = (document.getElementById("weight").value);
    let heightM = (document.getElementById("height").value);
    let Bmi = (weightKg)/(heightM * heightM) ;
    Bmi = Bmi.toFixed(2)


  let isUnderWeight = Bmi < 18.5;
  let isNormalWeight = Bmi > 18.5 &&  Bmi < 25;
  let isOverWeight = Bmi >= 25;

  let isHighRisk = isOverWeight || weightKg > 90;
  if(isHighRisk) {
    window.alert(`your weight ${weightKg} is too much`)
  }
  console.log("personName:",personName);
  console.log("BMI:", Bmi);
  console.log("underweight:",isUnderWeight);
  console.log("normalweight:",isNormalWeight);
  console.log("overweight:",isOverWeight);
  console.log("highriskalert:", isHighRisk);
  
}

   
