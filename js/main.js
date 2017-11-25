<!DOCTYPE html>
<html>
<body>

<p>Buzzkill was created by Joe Palmer, it is very early on InDev!</p>

<button onclick="myFunction()">Lets begin!</button>

<p id="demo"></p>

<script>
function myFunction() {
    var person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}
</script>

</body>
</html>

