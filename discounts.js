/* Funcion que obtiene precio con descuento */
function priceWithDiscount(price, discount) {
    const discountPricePercentage = 100 - discount;
    const priceWithDiscount = (price * discountPricePercentage) / 100;

    return Number(priceWithDiscount.toFixed(2));
}

/** Funcion que valida si el cupón es valido */
function isValid(coupon) {

    const couponList = [
        { name: "CPON10", percentageDiscount: 10 },
        { name: "CPON20", percentageDiscount: 20 },
        { name: "PDAY15", percentageDiscount: 15 },
        { name: "BFIN25", percentageDiscount: 25 } 
    ];

    const couponValid = couponList.find(function(authenticCoupon) {
        return authenticCoupon.name === coupon;
    });

    //Otra forma de escribir la validacion
    // const isAuthenticCoupon = function(authenticCoupon) {
	//     return authenticCoupon.name === coupon;
    // };
    // const couponValid = couponList.find(isAuthenticCoupon);

    return couponValid;
}

/* Funcion que muestra en HTML precio con descuento y/o cupón */
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const price = Number(inputPrice.value);

    const inputDiscount = document.getElementById("InputDiscount");
    const discount = Number(inputDiscount.value);

    const inputCoupon = document.getElementById("InputCoupon");
    const userCoupon = inputCoupon.value;

    const pResult = document.getElementById("PResult");
    const pMessage = document.getElementById("PMessage");

    //Obtiene precio final con descuento aplicado
    const finalPrice = priceWithDiscount(price, discount);

    //Si el usuario No ingresó un cupón
    if (!userCoupon) {
        //Muestra en HTML precio con descuento
        pResult.innerText = "El precio con descuento es: $" + finalPrice;

    } else {
        //Si se ingresó un cupon:
        //Comprueba si el cupon es valido, si lo es lo guarda en var
        const coupon = isValid(userCoupon);

        //Si el cupón No es válido
        if (!coupon) {
            pMessage.innerText = "Cupón: " + userCoupon + " no valido";
            pMessage.classList.remove("message-coupon--success");
            pMessage.classList.add("message-coupon--error")

            //Muestra en HTML precio con descuento
            pResult.innerText = "El precio con descuento es: $" + finalPrice;

        } else {
            //Si el cupón es válido
            pMessage.innerText = "Cupón: " + userCoupon + " aplicable";
            pMessage.classList.add("message-coupon--success");
            pMessage.classList.remove("message-coupon--error")
            
            const couponPctDiscount = coupon.percentageDiscount;
    
            //Obtiene precio definitivo con cupon y descuento aplicado
            const definitivePrice = priceWithDiscount(finalPrice, couponPctDiscount);

            //Muestra en HTML precio con descuento y cupon
            pResult.innerText = "El precio con descuento es: $" + finalPrice + " y el precio con descuento y cupon es: $" + definitivePrice;
        }
    }
}

/* Funcion que muestra en HTML si el cupón es valido o no */
function onClickButtonValidateCoupon() {
    const inputCoupon = document.getElementById("InputCoupon");
    const coupon = inputCoupon.value;
    
    const pMessage = document.getElementById("PMessage");

    const isValidCoupon = isValid(coupon);

    if (!isValidCoupon) {
        pMessage.innerText = "Cupón: " + coupon + " no valido";
        pMessage.classList.remove("message-coupon--success");
        pMessage.classList.add("message-coupon--error");

    } else {
        pMessage.innerText = "Cupón: " + coupon + " aplicable";
        pMessage.classList.add("message-coupon--success");
        pMessage.classList.remove("message-coupon--error");
    }
}