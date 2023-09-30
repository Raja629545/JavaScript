const form = document.querySelector('form')

// This usecase give you empty result
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // show the result
        results.innerHTML = `<span>${bmi}</span>`

        //    This is the additional part

        const msg = document.querySelector("#msg")
        if (bmi < 18.6) {
            msg.innerHTML = `You are under weight`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            msg.innerHTML = `You are in Normal range`;
        } else {
            msg.innerHTML = `You are in Overweight`;
        }

    }
    
})