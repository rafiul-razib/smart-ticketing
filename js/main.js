const selectedSeats = [];

document.getElementById('bus').addEventListener('click', function(event){
    const selection = event.target
    const clickedSeat = selection.innerText;
    

    if(clickedSeat.length === 2 && selectedSeats.includes(clickedSeat)=== false && selectedSeats.length<=3){
        selectedSeats.push(clickedSeat)
        selection.classList.add('bg-green', 'text-white')
        // console.log(selection)

        decreaseNumberById()
        increaseNumberById()
        // appendSeat()
        const takenSeat = document.getElementById('seat-table');
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `<td>${clickedSeat}</td>
                            <td>Economy</td>
                            <td>550</td>`;
        takenSeat.appendChild(tableRow)
        calculateTotal()


    }

    
})

const couponCode = document.getElementById('coupon-code');



document.getElementById('coupon-btn').addEventListener('click', function(){
    if(couponCode.value === 'NEW15'){
        // console.log('you got 15%')
        const newGrandPrice = document.getElementById('grand-total');
        const newGrandPriceNumber = parseInt(newGrandPrice.innerText);
        const discount = newGrandPriceNumber*0.15;
        const discountedPrice = newGrandPriceNumber - discount;
        newGrandPrice.innerText = discountedPrice
        const discountOption = document.getElementById('coupon-option');
        const totalDiscount = document.getElementById('total-discount');
        totalDiscount.innerText= discount;
        const discountField = document.getElementById('totalDiscountField');
        discountField.classList.remove('hidden')
        discountOption.classList.add('hidden')
    }
    else if(couponCode.value === 'Couple 20'){
        console.log('you got 20%')
        const newGrandPrice = document.getElementById('grand-total');
        const newGrandPriceNumber = parseInt(newGrandPrice.innerText);
        const discount = newGrandPriceNumber*0.2;
        const discountedPrice = newGrandPriceNumber - discount;
        newGrandPrice.innerText = discountedPrice;
        const discountOption = document.getElementById('coupon-option');
        const totalDiscount = document.getElementById('total-discount');
        totalDiscount.innerText= discount;
        const discountField = document.getElementById('totalDiscountField');
        discountField.classList.remove('hidden')
        discountOption.classList.add('hidden');
    }
    else{
        console.log('invalid coupon')
    }
})