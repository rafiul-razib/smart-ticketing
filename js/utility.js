function decreaseNumberById(){
    const numberField = document.getElementById('available-seats')
    const number = parseInt(numberField.innerText)
    const currentNumber = number - 1;
    numberField.innerText = currentNumber
}

function increaseNumberById(){
    const numberField = document.getElementById('total-seats')
    const number = parseInt(numberField.innerText)
    const currentNumber = number + 1;
    numberField.innerText = currentNumber
}

// function appendSeat(clickedSeat){
//     const takenSeat = document.getElementById('seat-table');
//     const tableRow = document.createElement('tr');
//         tableRow.innerHTML = `<td>${clickedSeat}</td>
//                             <td>Economy</td>
//                             <td>550</td>`;
//         takenSeat.appendChild(tableRow)
  
    
// }

function calculateTotal(){
    const numberOfSeat = selectedSeats.length
    const totalCost = 550*numberOfSeat;
    const totalPrice = document.getElementById('total-price');
    const grandPrice = document.getElementById('grand-total');
    totalPrice.innerText = totalCost
    grandPrice.innerText = totalCost
    
}