const product = [
    {
        id: 1,
        image: "narutoramen.jpg",
        title:'Narutoramen',
        price:1,
    }
    ,
    {
        id: 2,
        image: "tonkotsuramen.jpg",
        title:'Tonkotsuramen',
        price:300,
    },
     {
        id: 3,
        image: "misoramen.jpg",
        title:'Miso',
        price:350,
    }, 
    {
        id: 4,
        image: "shoyuramen.jpg",
        title:'Shoyuramen',
        price:200,
    }
];


const categories =[...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById("root").innerHTML=categories.map((item)=>
    {
        var{image,title,price }=item;
        return(
            `<div class ='box>
            <div class='img-box'>
            <img class='images' src='${image}'> </img>
            </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2> ` +
            "<button onclick='addtocart("+(i++)+")'>Add to Cart</button>" +
            `</div>
            <div>`

        )

    }).join('');

    var cart =[];

    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }

    function delElement(a){
        cart.splice(a,1);
        displaycart();
    }
    function displaycart(a){
        let j=0 ,total=0;
        document.getElementById("count").innerHTML=cart.length;
        document.getElementById("total").innerHTML="$"+0+".00";




        if(cart.length==0){
            document.getElementById("cartItem").innerHTML="Your Cart is Empty";

        }
        else{
            document.getElementById("cartItem").innerHTML=cart.map((item)=>
            {
                var{image,title,price }=item;
                total=total+price;
                document.getElementById("total").innerHTML="$"+total+".00";

                return(
                    `<div class ='cart-item>
                    <div class='row-img'>
                    <img class='images' src='${image}'> 
                    </div>
                    <p style = 'font-size: 12px;'>${title}</p>
                    <h2 style = 'font-size: 15px'>$ ${price}.00</h2> `+
                    "<i class='fa-solid fa-trash'onclick='delElement("+(j++)+ ")'></i></div>" 

                );

                    
        }).join('');
    }
}
    
    
                                                            