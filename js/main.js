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


const grandPrice = document.getElementById('grand-total').innerText;
const grandPriceNumber = parseInt(grandPrice);
console.log(grandPriceNumber)

document.getElementById('coupon-btn').addEventListener('click', function(){
    if(couponCode.value === 'NEW15'){
        console.log('you got 15%')
    }
    else if(couponCode.value === 'Couple 20'){
        console.log('you got 20%')
    }
    else{
        console.log('invalid coupon')
    }
})