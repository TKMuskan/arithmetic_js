function calculateParallelogramArea(){
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
    console.log(base);
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText);
    console.log(height);
    

    // Area Calculation
    const area = base * height;
    console.log('Area of the parallelogram: ', area);
    
    // Display triangle area
    const displayTotalArea = document.getElementById('total-area');
    displayTotalArea.innerText = area;
}
