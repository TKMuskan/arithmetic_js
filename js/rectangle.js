function CalculateRectangleArea(){
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidth.value;
    const width = parseFloat(rectangleWidthText);
    console.log(width); 
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLength.value;
    const length = parseFloat(rectangleLengthText);
    console.log(length); 

    // Area of Rectangle
    const area = width * length;
    console.log('Area of the rectangle: ', area);

    // Display triangle area
    const displayTotalArea = document.getElementById('total-area');
    displayTotalArea.innerText = area;

}