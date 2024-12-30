let productos = [
    {
        nombre: "Nissan Skyline GTR R35", 
        imagen: "https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/Nissan-GT-R-Nismo-2020-port.jpg?resize=980:*",
        precio: 76991,
        discripción: "Descripción del Auto 1."
    },
    {
        nombre: "Toyota Supra MK5", 
        imagen: "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_0af7c37196244856bafa47c32232ebca.webp",
        precio: 43000,
        discripción: "Descripción del Auto 2."
    },
    {
        nombre: "Toyota AE86 Trueno", 
        imagen: "https://wallpapers.com/images/hd/ae86-7yyvwkunrbbr3djf.jpg",
        precio: 38500,
        discripción: "Descripción del Auto 3."
    },
    {
        nombre: "Nissan Skyline GTR R34", 
        imagen: "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_bb5451ef5d2b435983d22c6b23f333ed.webp",
        precio: 61995,
        discripción: "Descripción del Auto 4."
    },
    {
        nombre: "Toyota Supra MK4", 
        imagen: "https://cdn.motor1.com/images/mgl/PKZQL/s1/1997-toyota-supra-sold-for-176-000-at-auction.webp",
        precio: 63041,
        discripción: "Descripción del Auto 5."
    },
    {
        nombre: "Nissan Silvia S15", 
        imagen: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d79e5211928041.56254c090f8c0.jpg",
        precio: 28751,
        discripción: "Descripción del Auto 6."
    },
    {
        nombre: "Nissan Skyline GTR R33", 
        imagen: "https://img.remediosdigitales.com/0c3bec/nismo-400-r-01/1366_2000.jpeg",
        precio: 48504,
        discripción: "Descripción del Auto 7."
    },
    {
        nombre: "Chevrolet Corvette C5 Z06", 
        imagen: "https://images.pistonheads.com/nimg/48236/mceu_980502211708712922889.jpg",
        precio: 41995,
        discripción: "Descripción del Auto 8."
    },
    {
        nombre: "El BMW M3 E36", 
        imagen: "https://stradalebilbao.com/wp-content/uploads/2021/12/P1455455-scaled.jpg",
        precio: 64990,
        discripción: "Descripción del Auto 9."
    },

]


let productoHTML = "";

for (let i = 0; i < productos.length; i++)  {
    productoHTML +=`
        <section class="productos" id="productos">
            <div class="productos__container">
                <div class="producto">
                    <h3 class="producto__titulo">${productos[i].nombre}</h3>
                    <img class="producto__imagen" src=${productos[i].imagen} alt="">
                    <p class="producto__descripcion"><strong>Precio $${productos[i].precio}</strong> ${productos[i].discripción}</p>
                    <input class="producto__boton" type="button" value="Comprar">

                </div>
            </div>
        </section>
    `
}







const container__productos = document.getElementById("container__productos");
container__productos.innerHTML = productoHTML;


const btnAgregar = document.querySelectorAll(".producto__boton");
console.log(btnAgregar)


const listaCarrito = document.querySelector("#carrito-compras ul")
console.log(listaCarrito)

const totalCarrito = document.querySelector("#carrito-compras p")
console.log(totalCarrito)

let totalApagar = 0; 
const mensajePagarCarrito = document.getElementById("mensaje__carrito")

const botonBorrar = document.querySelector("#boton-borrar")
console.log(botonBorrar)


const botonPagar = document.querySelector("#boton-pagar");


for (let i = 0; i < btnAgregar.length; i++) { 
    function agregarElemCarrito() {
        console.log("clic" + i);
        const elementoLi = document.createElement("li");

        elementoLi.innerText = `${productos[i].nombre} $${productos[i].precio}`;
        console.log(elementoLi);

        listaCarrito.appendChild(elementoLi);

        totalApagar += productos[i].precio;

        totalCarrito.innerText = "Total a pagar: $" + totalApagar
        mensajePagarCarrito.innerText = ""

    }

    btnAgregar[i].addEventListener("click", agregarElemCarrito) 
}



function borrarCarrito() {
    listaCarrito.innerHTML = "";
    totalCarrito.innerHTML = "Total a Pagar: $0";
    totalApagar = 0;
    mensajePagarCarrito.innerText = "";
}

botonBorrar.addEventListener("click", borrarCarrito)


function irApagar() {

    if (listaCarrito.innerHTML === "") {
        mensajePagarCarrito.innerText = "No hay autos en el carrito";
    } else {
        window.location.href = "./pages/pagos.html"
    }
}

botonPagar.addEventListener("click", irApagar)


