for(let i=0; i<100; i++){
    
    let vari = `
    <div class="col-4">
        <p>${i+1}</p>
    </div>`;

    //html element write korar jonno `` backticks use kora hoy and backticks'r moddhe kono variable print korar jonno $ use kora hoy.

    document.getElementById("main-div").innerHTML += vari;
    console.log(vari);
}