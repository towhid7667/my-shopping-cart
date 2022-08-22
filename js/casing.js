function caseingQuantityTotal(isIncrease) {
    let casingFeild = document.getElementById('inputfield-02');
    let casingquantityString = casingFeild.value;
    let casingquantity = parseInt(casingquantityString);

    let newCasingquantity;

    if (isIncrease) {
        newCasingquantity = casingquantity + 1;
    }
    else {
        newCasingquantity = casingquantity - 1;
    }

    casingFeild.value = newCasingquantity;
    return newCasingquantity;

}

function casingPriceTotal(newCasingquantity) {
    let casingPrice = newCasingquantity * 59;
    let priceField = document.getElementById('case-price');
    priceField.innerText = casingPrice;

}

document.getElementById('decrease-02').addEventListener('click', function () {
    const newCasingQuantity = caseingQuantityTotal(false);
    casingPriceTotal(newCasingQuantity);
    calculateSubtotal();
});
document.getElementById('increase-02').addEventListener('click', function () {
    const newCasingQuantity = caseingQuantityTotal(true);
    casingPriceTotal(newCasingQuantity);
    calculateSubtotal();
});