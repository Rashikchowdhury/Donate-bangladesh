function getInnerTextById(id){
    const innerText = document.getElementById(id).innerText;
    const innerTextNumber = parseFloat(innerText);

    return innerTextNumber;
}

function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);

    return inputValueNumber;
}