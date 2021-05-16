function CalculateArea() {
    var results = Number(document.getElementById("number").value) *
        Number(document.getElementById("number").value);
    document.getElementById("area").innerHTML = results;
}

function CalculatePerimeter() {
    var results = Number(4) *
        Number(document.getElementById("number").value);
    document.getElementById("perimeter").innerHTML = results;
}
