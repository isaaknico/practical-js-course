
function priceWithDiscount(price, discount) {
    const discountPricePercentage = 100 - discount;
    const priceWithDiscount = (price * discountPricePercentage) / 100;

    return Number(priceWithDiscount.toFixed(2));
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const price = Number(inputPrice.value);
    const inputDiscount = document.getElementById("InputDiscount");
    const discount = Number(inputDiscount.value);

    const finalPrice = priceWithDiscount(price, discount);

    const pResult = document.getElementById("PResult");
    pResult.innerText = "El precio con descuento es: $ " + finalPrice;
}