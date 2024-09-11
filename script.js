const inputValue = document.getElementById("number").value;
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", ()=>{
    const inputValue = document.getElementById("number").value;
    if(!inputValue){
        output.classList.toggle("hidden")
        output.classList.add('alert');
        output.innerText = "Please enter a valid number"
    }else if(inputValue < 0){
        output.classList.toggle("hidden")
        output.classList.add('alert');
        output.innerText = "Please enter a number greater than or equal to 1"
    }else if(inputValue >= 4000){
        output.classList.toggle("hidden")
        output.classList.add('alert');
        output.innerText = "Please enter a number less than or equal to 3999"
    }else{ 
const convertToRoman = num =>{
const romans = [
            ['M', 1000],
            ['CM', 900],
            ['D', 500],
            ['CD', 400],
            ['C', 100],
            ['XC', 90],
            ['L', 50],
            ['XL', 40],
            ['X', 10],
            ['IX', 9],
            ['V', 5],
            ['IV', 4],
            ['I', 1]
        ]
        const result = [];
        romans.forEach(function (e) {
            while (num >= e[1]) {
                result.push(e[0]);
                num -= e[1]
            }
        })

        return result.join("")
    }
        output.classList.toggle("hidden")
    output.innerText = convertToRoman(inputValue)}
   
})
