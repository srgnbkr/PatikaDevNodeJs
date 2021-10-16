const arguments = process.argv.slice(2);

function calculateCircleArea(radius){
    var circleArea = Math.PI *(radius *radius);
    console.log(circleArea);
}

calculateCircleArea(arguments[0] * 1);