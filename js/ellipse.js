function CalculateEllipseArea(){
    const ellipseA = document.getElementById('ellipse-A');
    const ellipseAText = ellipseA.value;
    const a = parseFloat(ellipseAText);
    console.log(a); 
    const ellipseB = document.getElementById('ellipse-B');
    const ellipseBText = ellipseB.value;
    const b = parseFloat(ellipseBText);
    console.log(b); 

    // Area of ellipse
    const area = Math.PI * a * b;
    console.log('Area of the ellipse: ', area);

    // Display triangle area
    const displayTotalArea = document.getElementById('total-area');
    displayTotalArea.innerText = area;
}