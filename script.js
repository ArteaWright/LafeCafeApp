function validate(e) {
    let u = document.forms["myform"]["flname"].value;
    let v = document.forms["myform"]["email"].value;
    let y = document.getElementById("coffee").selectedIndex;
    let z = document.getElementsByTagName("option")[y].value;
    let s = document.getElementById("size").selectedIndex;
    let t = document.getElementsByTagName("option")[s].value;
    let w = document.forms["myform"]["date"].value;
    let x = document.forms["myform"]["time"].value;
    if (u, v, z, t, w, x === "") {
    alert("please fill");
    return false;
}
else {
    document.getElementById("confirmation").style.display = "block";
    document.getElementById("button").style.display = "none";
    }
}