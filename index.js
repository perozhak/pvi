var submitClicked = (event) => {
    var username = document.getElementById("username");
    var passw = document.getElementById("passw");
    var age = document.getElementById("age");
    var sex = document.querySelector("input[name='sex']:checked");
    var additionalInfo = document.getElementById("addInfo");

    alert(`Hello, ${username.value} your gender is ${sex.value}
You are ${age.value} year old, your password is ${passw.value} 
${additionalInfo.value? "Some info:" + additionalInfo.value  : " "}`);

    var data = {
        'username': username.value,
        'passw': passw.value,
        'age': age.value,
        'sex': sex.value,
        'additionalInfo': additionalInfo.value

    }

    console.log(data);
    console.log(JSON.stringify(data));

}