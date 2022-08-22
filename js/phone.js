function phoneQuantityTotal(qauntity) {
    let phoneElement = document.getElementById('inputFeild');
    let phoneQuantityString = phoneElement.value;
    let phoneQuantity = parseInt(phoneQuantityString);
    let newQuantity;

    if (qauntity) {
        newQuantity = phoneQuantity + 1;
    }
    else {
        newQuantity = phoneQuantity - 1;
    }


    phoneElement.value = newQuantity;
    return newQuantity;
}

function phonePriceTotal(newQuantity) {
    let phonePrice = newQuantity * 1219;
    let phonePriceElement = document.getElementById('phone-price');
    phonePriceElement.innerText = phonePrice;


}

document.getElementById('decrease').addEventListener('click', function () {
    const newQuantity = phoneQuantityTotal(false);
    phonePriceTotal(newQuantity);
    calculateSubtotal();
});
document.getElementById('increase').addEventListener('click', function () {
    const newQuantity = phoneQuantityTotal(true);
    phonePriceTotal(newQuantity);
    calculateSubtotal();
});