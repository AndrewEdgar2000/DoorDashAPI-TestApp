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