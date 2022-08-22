function getCalculatingTotal(provideId) {
    let doCalculateElements = document.getElementById(provideId);
    let totalAmountString = doCalculateElements.innerText;
    let totalAmount = parseInt(totalAmountString);
    return totalAmount;

}

function setCalculatingTotal(elementId, value) {
    const subTotalelement = document.getElementById(elementId);
    subTotalelement.innerText = value;
}


function calculateSubtotal() {
    const currentPhoneTotal = getCalculatingTotal('phone-price');
    const currentCaseTotal = getCalculatingTotal('case-price');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setCalculatingTotal('sub-total', currentSubTotal);
}