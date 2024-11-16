
document.getElementById("containerH1").addEventListener("click", function handleClick() {
    const newDiv = document.createElement("div");
    newDiv.textContent = "New Div Welcome thanks for clicked!";
    newDiv.style.color = "blue";
    newDiv.style.textAlign = "center";
    newDiv.style.fontSize = "50px";
    document.body.appendChild(newDiv);
    alert("Click to confirm");
 
 
    document.getElementById("containerH1").removeEventListener("click", handleClick);
 });
 