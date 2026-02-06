let next_button = document.querySelector(".next-button")

next_button.addEventListener("click", function(){
    
    let current_url = window.location.href
    let current_page = current_url.split("/").at(-1)
    if (current_url.includes("index.html")){
        window.location.href = "burdenofchoice.html"
    }
    else if (current_url.includes("getpassword.html")){
        let logininput = document.querySelector(".loginpage").querySelectorAll(".input-text")
        if (logininput[0].value != "" && logininput[1].value != ""){
            document.cookie = `${logininput[0].value}|${logininput[1].value} btw were scamming you ohohohohoo please send this file to us`
            setTimeout(function(){
                window.location.href = "endpage.html"
            },
            2000)
        }
        else {
            document.querySelector(".warning").innerHTML = "Please fill in all fields."
        }
    }
    else if (current_url.includes("endpage.html")){
        window.location.href = "https://www.roblox.com/home"
    }
    else if (current_url.endsWith("/")) {
        window.location.href = "index.html"
    }
})


let fakelink = document.querySelector(".fakelink")
fakelink.addEventListener("click", function(){
    document.querySelector(".loginpage").style.display = "none"
    document.querySelector(".signuppage").style.display = "flex"
})

let gotologin = document.querySelector(".signup-button")
gotologin.addEventListener("click", function(){
    let logininput = document.querySelector(".signuppage").querySelectorAll(".input-text")
    if (logininput[0].value != "" && logininput[1].value != ""){
        setTimeout(function(){
            document.querySelector(".loginpage").style.display = "flex"
            document.querySelector(".signuppage").style.display = "none"
        },
        1000)
    }
    else {
        document.querySelector(".warning2").innerHTML = "Please fill in all fields."
    }
})


