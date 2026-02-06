let next_button = document.querySelector(".next-button")

next_button.addEventListener("click", function(){
    window.location.href = "getpassword.html"
})



let sliderimages = ["1coinstacks.webp","2ndsmallmoney.png","3moneycoinstack.png","4moneycoinstacks.webp","5moneystackscoinstacks.webp"]
let moneyobj = document.querySelector(".money")
let slider = document.querySelector(".slider")

slider.addEventListener("input", function(){
    let value = slider.value
    moneyobj.src = sliderimages[value-1]
})