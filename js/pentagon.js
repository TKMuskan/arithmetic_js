function CalculatePentagonArea(){
    const pentagonP = document.getElementById('pentagon-p');
    const pentagonPText = pentagonP.value;
    const p = parseFloat(pentagonPText);
    console.log(p); 
    const pentagonB = document.getElementById('pentagon-b');
    const pentagonBText = pentagonB.value;
    const b = parseFloat(pentagonBText);
    console.log(b); 

    // Area of pentagon   
    const area = 0.5 * p * b;
    console.log('Area of the pentagon', area);

    // Display triangle area
    const displayTotalArea = document.getElementById('total-area');
    displayTotalArea.innerText = area;
}