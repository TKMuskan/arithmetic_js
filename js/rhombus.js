function CalculateRhombusArea(){
    const rhombusD1 = document.getElementById('rhombus-D1');
    const rhombusD1Text = rhombusD1.value;
    const D1 = parseFloat(rhombusD1Text);
    console.log(D1); 
    const rhombusD2 = document.getElementById('rhombus-D2');
    const rhombusD2Text = rhombusD2.value;
    const D2 = parseFloat(rhombusD2Text);
    console.log(D2); 

    // Area of rhombus
    const area = 0.5 * D1 * D2;
    console.log('Area of the rhombus: ', area);

    // Display triangle area
    const displayTotalArea = document.getElementById('total-area');
    displayTotalArea.innerText = area;
}