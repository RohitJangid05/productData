let products = [
    {
        title: "samsung mobile",
        price: 40000,
        color: "purple",
        img: "./images/mobile1.avif"
    },
    {
        title: "realme mobile",
        price: 30000,
        color: "brown",
        img: "./images/mobile2.jpeg"
    },
    {
        title: "oneplus mobile",
        price: 45000,
        color: "green",
        img: "./images/mobile3.png"
    },
    {
        title: "iphone mobile",
        price: 70000,
        color: "gold",
        img: "./images/mobile4.png"
    },
    {
        title: "iqoo mobile",
        price: 20000,
        color: "blue",
        img: "./images/mobile5.jpeg"
    },
    {
        title: "sandisk pendrive",
        price: 400,
        color: "silver",
        img: "./images/pendrive1.jpeg"
    },
    {
        title: "hp pendrive",
        price: 600,
        color: "silver",
        img: "./images/pendrive2.jpeg"
    },
    {
        title: "samsung pendrive",
        price: 1000,
        color: "silver",
        img: "./images/pendrive3.jpeg"
    },
    {
        title: "hp mouse",
        price: 800,
        color: "black",
        img: "./images/mouse1.jpeg"
    },
    {
        title: "zebronics mouse",
        price: 800,
        color: "green",
        img: "./images/mouse2.webp"
    },
    {
        title: "dell keyboard",
        price: 1600,
        color: "black",
        img: "./images/keyboard1.jpeg"
    },
    {
        title: "zebronics keyboard",
        price: 1200,
        color: "black",
        img: "./images/keyboard2.avif"
    },
    {
        title: "zebronics keyboard",
        price: 1800,
        color: "black",
        img: "./images/keyboard3.jpg"
    },
    {
        title: "hammer headphone",
        price: 1500,
        color: "grey",
        img: "./images/headphone1.jpeg"
    },
    {
        title: "boat headphone",
        price: 1800,
        color: "green",
        img: "./images/headphone2.jpeg"
    }
]

let tbody = document.getElementById("tbody")
let total = document.getElementById("total")
let inputField = document.getElementById("input")
let btn = document.getElementById("btn")


inputField.addEventListener("keyup",(e)=>{
    e.preventDefault()
    if(inputField.value.length<=0){
        tbody.innerHTML=""
        render(products)
    }
})

function render(productsRender) {
    productsRender.map(({ title, img, color, price }, index) => {
        tbody.innerHTML += `
        <tr>
        <td>${index + 1}</td>
        <td><img src="${img}"/></td>
        <td>${title}</td>
        <td>${color}</td>
        <td>₹${price}</td>
        </tr>
        `
    })

}
render(products)



function totalPrice(productsPrice) {
    let sum = productsPrice.reduce((acc, val) => {
        return acc + val.price
    }, 0)
    total.innerText += ` ₹${sum}`
}
totalPrice(products)



btn.addEventListener("click", (e) => {
    e.preventDefault()
    if (inputField.value == "") {
        alert("Please enter the product name!!")
    }
    let filteredProducts = products.filter(({ title, color, price }) => {
        let pValue = inputField.value.toLowerCase()
        title = title.toLowerCase()
        color = color.toLowerCase()
        price=String(price)
        
        return title.includes(pValue) || color.includes(pValue)
    })

    tbody.innerHTML = " "
    if (filteredProducts.length == 0) {
        tbody.innerHTML = `<td colspan=5 style="text-align:center; font-size:25px; color:red; padding:40px 0px;">OOPS!! Products Not Available 😵😵</td>`
    }
    render(filteredProducts)

    total.innerText = ""
    totalPrice(filteredProducts)

})