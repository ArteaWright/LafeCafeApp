function order() {
    const u = document.forms["myform"]['flname'].value;
    const v = document.forms["myform"]['email'].value;
    const w = document.forms["myform"]['date'].value;
    const x = document.forms["myform"]['time'].value;
    const y = document.getElementById('coffee').selectedIndex;
    const z = document.getElementsByTagName('option')[y][t].value;
    const s = document.getElementById('size').selectedIndex;
    if (u, v, w, x, z === "") {
        alert("please fill");
    }
    else {
        const confrm = document.getElementById('confirmation').style.display= 'block';
        const buttn = document.getElementById('button').style.display = 'none';
    }
}