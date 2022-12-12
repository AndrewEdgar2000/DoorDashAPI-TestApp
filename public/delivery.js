import { response } from "express";

function getFormValues(){
    const inputContainer = document.getElementById("order-details");
    const fileList = inputContainer.querySelectorAll("input");
    const fileArray = Array.from(fileList);

    const payload = fileArray.reduce(
        (obj, field) => {
            if(field.name === "items"){
                if(field.checked){
                    obj["order_value"] += parseInt(field.value);
                }
            }else{
                obj[field.name] = field.value;
            }
            return obj;
        }, 
        {order_value: 0}
    );
    console.log(payload);
    return payload;
}

async function getFee(){
    const payload = getFormValues()
    const finalPayload = JSON.stringify(payload)

    const formInput = document.querySelector("form")

    if(formInput.checkValidity()){
        const response = await fetch("/get-delivery-rate",{
            method: "POST", 
            body: finalPayload,
            headers: {"Content-Type" : "application/json"} 
        }).then(response => {
            let resp = response.json()
            return resp
        }).catch((rejected) => {
            console.log(rejected)
        })

        const deliveryFee = document.getElementById("fee")
        const clothingTotal = document.getElementById("price")
        const orderTotal = document.getElementById("total")
    
        clothingTotal.textContent =`$${(window.menuItems / 100).toFixed(2)}`
        deliveryFee.textContent = `$${(response.data.fee / 100).toFixed(2)}`
        orderTotal.textContent = `$${((Number(window.menuItems) + response.data.fee) / 100).toFixed(2)}`
    
        console.log("I filled it out")
    } else {
        console.log("Fill out the form")
    }
    
}
