/* Funcion que obtiene precio con descuento */
function priceWithDiscount(price, discount) {
    const discountPricePercentage = 100 - discount;
    const priceWithDiscount = (price * discountPricePercentage) / 100;

    return Number(priceWithDiscount.toFixed(2));
}



/* Funcion que muestra en HTML precio con descuento */
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const price = Number(inputPrice.value);
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discount = Number(inputDiscount.value);

    //Obtiene precio final con descuento aplicado
    const finalPrice = priceWithDiscount(price, discount);

    /* Reto: */
    const inputCoupon = document.getElementById("InputCoupon");
    const coupon = inputCoupon.value;

    
    const pResult = document.getElementById("PResult");

    if (coupon) {
        const couponPercentage = isValid(coupon);
        console.log(couponPercentage);
        const couponValue = couponPercentage.percentageDiscount;
        console.log(couponValue);
    
        //Obtiene precio definitivo con cupon aplicado
        const definitivePrice = priceWithCoupon(finalPrice, couponValue);
        pResult.innerText = "El precio con descuento es: $" + finalPrice + " y el precio con descuento y cupon es: $" + definitivePrice;
        /* reto */
    } else {
        pResult.innerText = "El precio con descuento es: $" + finalPrice;
    }
    

    
}

/* RETO: */
// Nuestros clientes están muy felices de poder calcular el precio final de sus productos después del descuento,
// pero la tienda tiene una nueva solicitud para nosotros: implementar descuentos con cupones.

const coupon = "BFD010";

/** Funcion que valida si el cupon es valido */
function isValid(coupon) {
    const couponList = [
        { coupon: "CPON10", percentageDiscount: 10 },
        { coupon: "CPON20", percentageDiscount: 20 },
        { coupon: "PDAY15", percentageDiscount: 15 },
        { coupon: "BFIN25", percentageDiscount: 25 } 
    ];

    var couponIsValid = couponList.find(function(couponCode) {
        return couponCode.coupon === coupon;
    });

    return couponIsValid;
}

/** Funcion que obtiene precio con cupon */
function priceWithCoupon(priceWDiscount, coupon) {
    const discountPricePercentage = 100 - coupon;
    const priceDefinitive = (priceWDiscount * (discountPricePercentage)) / 100;

    return Number(priceDefinitive.toFixed(2));
}

/** Funcion que imprime en HTML si cupon es valido */
function onClickButtonValidateCoupon() {
    const inputCoupon = document.getElementById("InputCoupon");
    const coupon = inputCoupon.value;
    
    const pMessage = document.getElementById("PMessage");

    const isValidCoupon = isValid(coupon);

    if (isValidCoupon) {
        pMessage.innerText = "Cupón: " + coupon + " aplicable";
        pMessage.classList.add("messageCoupon--success");
        pMessage.classList.remove("messageCoupon--error")
    } else {
        pMessage.innerText = "Cupón: " + coupon + " no valido";
        pMessage.classList.remove("messageCoupon--success");
        pMessage.classList.add("messageCoupon--error")
    }
}