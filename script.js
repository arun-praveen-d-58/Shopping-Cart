let shop = document.getElementById('shop');


let shopItemsData = [
    {
      id: "jfhgbvnscs",
      name: "Casual Shirt",
      price: 45,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-1.jpg",
    },
    {
      id: "ioytrhndcv",
      name: "Office Shirt",
      price: 100,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-2.jpg",
    },
    {
      id: "wuefbncxbsn",
      name: "T Shirt",
      price: 25,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-3.jpg",
    },
    {
      id: "thyfhcbcv",
      name: "Mens Suit",
      price: 300,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-4.jpg",
    },
    {
      id: "thiecbawdjksadjk",
      name: "Mens Tie",
      price: 25,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-5.png",
    },
    {
      id: "iuertrywebncdjksadjk",
      name: "Casual shoes",
      price: 200,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-6.png",
    },
    {
      id: "thierytbvcbvzdhadjk",
      name: "black suit",
      price: 450,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-7.png",
    },
    {
      id: "trfoiwfcnbcawdjksadjk",
      name: "polo shirt",
      price: 45,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-8.png",
    },
    {
      id: "cbvxbcvsceldk",
      name: "denim shirt",
      price: 85,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-9.png",
    },
    {
      id: "oiopijmjkhuihb",
      name: "denim pants",
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-10.png",
    },
    {
      id: "oiopijewyiohbjhib",
      name: "basic cap",
      price: 35,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-11.png",
    },
    {
      id: "rtytytuyuytyytbvncv",
      name: "leather boots",
      price: 350,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-12.png",
    },
  ];

let basket = [ 
];

  /*
let generateShop =()=>{
    return (shop.innerHTML = `
    <div class="item">
    <img width="220px" src="images/img-1.jpg" alt="">
    <div class="details">
        <h3>Casual Shirt</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque voluptatum aspernatur </p>
        <div class="price-quantity">
            <h2>$ 45</h2>
             <div class="buttons">
                <i class="bi bi-plus"></i>
                <div class="quantity">0</div>
                <i class="bi bi-dash"></i>
             </div>
        </div>
    </div>   
   </div>
    ` );
   };
   */

   let generateShop = ()=>{
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let { id, name, price, desc, img} = x;
        return ` <div id=product-id-${id} class="item">
    <img width="220px" src=${img} alt="">
    <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
            <h2>$ ${price}</h2>
             <div class="buttons">
                <i class="bi bi-plus" onclick="increment(${id})"></i>
                <div class="quantity" id="${id}">0</div>
                <i class="bi bi-dash" onclick="decrement(${id})"></i>
             </div>  
        </div>
    </div>   
   </div>` ;
   }).join(""))
   };
   
   
   generateShop();

   let increment = (id)=>{
    let selectedItem = id
   let searchItem = basket.find((x)=> x.id === selectedItem.id);   
    
   if(searchItem === undefined){
   basket.push({
        id:selectedItem.id,
        item: 1,
    });
   }
   else{
    searchItem.item +=1;
   }
    console.log(basket);
  update(selectedItem.id);  
};

  let decrement = (id)=>{
    let selectedItem = id;
    let searchItem = basket.find((x)=> x.id === selectedItem.id);   
    
    if(searchItem.item === 0){
    return;
    }
    else{
     searchItem.item -=1;
    }
     console.log(basket);
     update(selectedItem.id);
  };

  let update = (id)=>{
    let search = basket.find((x)=> x.id === id);
   // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
  calculations();  
};

  let calculations=()=>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
    console.log(basket.map((x)=>x.item).reduce((x,y)=>x+y,0));
  };