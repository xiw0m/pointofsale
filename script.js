function calculateTotal() {
    const productPrice = {
        "No Order": 0,
        "burger": 60,
        "fries": 50,
        "fishbol": 20,
        "kikiam": 25
    };

    // Calculate and display order 1 details
    const productId1 = "product1";
    const quantityId1 = "quantity1";
    const totalDisplayId1 = "totalDisplay1";
    const breakdownDivId1 = "orderBreakdown1";
    const selectedProduct1 = document.getElementById(productId1).value;
    const quantity1 = document.getElementById(quantityId1).value;
    const totalPrice1 = productPrice[selectedProduct1] * quantity1;
    const breakdownText1 = `Order 1: ${quantity1}x ${selectedProduct1.toUpperCase()} - ₱${totalPrice1.toFixed(2)}`;
    document.getElementById(totalDisplayId1).textContent = breakdownText1;

    // Calculate and display order 2 details
    const productId2 = "product2";
    const quantityId2 = "quantity2";
    const totalDisplayId2 = "totalDisplay2";
    const breakdownDivId2 = "orderBreakdown2";
    const selectedProduct2 = document.getElementById(productId2).value;
    const quantity2 = document.getElementById(quantityId2).value;
    const totalPrice2 = productPrice[selectedProduct2] * quantity2;
    const breakdownText2 = `Order 2: ${quantity2}x ${selectedProduct2.toUpperCase()} - ₱${totalPrice2.toFixed(2)}`;
    document.getElementById(totalDisplayId2).textContent = breakdownText2;

    // Calculate and display grand total
    const grandTotal = totalPrice1 + totalPrice2;
    document.getElementById("grandTotalDisplay").textContent = `Grand Total: ₱${grandTotal.toFixed(2)}`;
    const ordertotal = "Your order total is: ₱" + grandTotal;
    alert(ordertotal);
}


window.onscroll = function () { myFunction() };

var header = document.getElementById("head_logo");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


const btnplaceOrder = document.getElementById("btnplaceOrder");
const placeOrder = document.getElementById("placeOrder");
const btnclearOrder = document.getElementById("btnclearOrder");
const btncheckoutOrder = document.getElementById("btncheckoutOrder");

const containerOrder = document.getElementById("containerOrder");

btnplaceOrder.addEventListener("click", function () {
    placeOrder.style.display = "block";
    btncheckoutOrder.style.display = "block";
    btnxtraOrder.style.display = "block";
    btnclearOrder.style.display = "block";
    btnplaceOrder.style.display = "none";
    orderSummary.style.display = "none";
    payment.style.display = "none";
});

const btnxtraOrder = document.getElementById("btnxtraOrder");
const xtraOrder = document.getElementById("xtraOrder");

btnxtraOrder.addEventListener("click", function () {
    xtraOrder.style.display = "block";
    btncheckoutOrder.style.display = "block";
    btnxtraOrder.style.display = "none";
});

const orderSummary = document.getElementById("orderSummary");
const payment = document.getElementById("payment");

btncheckoutOrder.addEventListener("click", function () {
    placeOrder.style.display = "none";
    btncheckoutOrder.style.display = "none";
    btnxtraOrder.style.display = "none";
    xtraOrder.style.display = "none";
    btnplaceOrder.style.display = "none";
    orderSummary.style.display = "block";
    btnpayment.style.display = "block";
});


btnpayment.addEventListener("click", function () {
    btnpayment.style.display = "none";
    payment.style.display = "block";
});

function calculatePayment() {
    const grandTotal = parseFloat(document.getElementById("grandTotalDisplay").textContent.split("₱")[1]);
    const cashInput = parseFloat(document.getElementById("cashInput").value);

    if (isNaN(cashInput)) {
        alert("Please enter a valid cash amount.");
        return;
    }

    const payment = Math.min(cashInput, grandTotal);
    const change = cashInput - grandTotal;

    document.getElementById("paymentDisplay").textContent = `Payment: ₱${payment.toFixed(2)}`;
    document.getElementById("changeDisplay").textContent = `Change: ₱${change.toFixed(2)}`;
    const totalchange = "Your total change is: ₱" + change;
    alert(totalchange);
}

btnprocesspay.addEventListener("click", function () {
    btnprocesspay.style.display = "none";
    change.style.display = "block";
    cashInput.style.display = "none";
    cash.style.display = "none";
    btnclearOrder.style.display = "none";
    btnplaceOrder.style.display = "block";
});