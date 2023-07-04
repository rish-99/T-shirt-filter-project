 const data = [
    {
        id: 1,
        name: ' Plain Vintage Oversized T Shirt',
        img:"https://s.alicdn.com/@sc04/kf/Hf77d42b474fb462498699d54a7d7270ec.jpg_960x960.jpg",
        price:450,
        cat: "Casual"
    },
    {
        id: 2,
        name: 'Drop Shoulder 100% Cotton Short Sleeve T-shirt',
        img:"https://s.alicdn.com/@sc04/kf/Hb39d552bc92447acaee2e25f1af74af09.jpg_960x960.jpg",
        price:450,
        cat: "Casual"
    },
    {
        id: 3,
        name: 'Cotton t-shirt plain blank T-shirt',
        img:"https://s.alicdn.com/@sc04/kf/H3e7489bf25a246b8afd72ca481831db0g.jpg_960x960.jpg",
        price:450,
        cat: "Casual"
    },
    {
        id: 4,
        name: 'Cotton Formal Office Full Sleeve mens shirts',
        img:"https://s.alicdn.com/@sc04/kf/Hf368a41a68234a26a4050dd0e55b9bcbO.jpg_960x960.jpg",
        price:800,
        cat: "Formal"
    },
    {
        id: 5,
        name: 'Slim Fit Mens Long Sleeve Shirt',
        img:"https://s.alicdn.com/@sc04/kf/He394ebcb733a4521878f4b727181fbbai.jpg_960x960.jpg",
        price:850,
        cat: "Formal"
    },
    {
        id: 6,
        name: 'Jogging Casual Sportswear Quick Dry Outdoor Sports Shirt',
        img:"https://s.alicdn.com/@sc04/kf/Hc8e1257c5a6e43d0b2b3766ad9bf4e875.jpg_960x960.jpg",
        price:400,
        cat: "Sports"
    },
    {
        id: 7,
        name: 'Fitness Sports Top Gym Training Shirt',
        img:"https://s.alicdn.com/@sc04/kf/Hcd3b75ced82b4a6da74a9e253f7180eay.jpg_960x960.jpg",
        price:380,
        cat: "Sports"
    },
    {
        id: 8,
        name: 'Summer Golf Polo T-shirt',
        img:"https://s.alicdn.com/@sc04/kf/Hf9b5de74b2de45f2bf96d7d21c9c92554.jpg_960x960.jpg",
        price:1350,
        cat: "Branded"
    },
    {
        id: 9,
        name: 'Coton polo T-shirts',
        img:"https://s.alicdn.com/@sc04/kf/H3240ba5b90264a5f9a2267671ad8da1ae.jpg_960x960.jpg",
        price:1250,
        cat: "Branded"
    },
    {
        id: 10,
        name: 'High Fashion Plaid Flannel Shirt',
        img:"https://s.alicdn.com/@sc04/kf/Ad7af608f56ee46dfbc3a4918dc6984a4P.jpg_960x960.jpg",
        price:950,
        cat: "Formal"
    }

 ];

 const productContainer = document.querySelector('.products');
 const searchInput = document.querySelector('.search');
 const categoriesContainer = document.querySelector('.cats');
 const priceRange = document.querySelector('.priceRange');
 const priceValue = document.querySelector('.priceValue');

 const displayProducts = (filteredProducts) => {
    productContainer.innerHTML = filteredProducts.map((product) => 
        `
        <div class="product">
            <img src=${product.img} alt=""/>
            <span class="name">${product.name}</span>
            <span class="priceText">$${product.price}</span>
        </div>
        `
    ).join("");
 };

 displayProducts(data);

//finding unique items
 searchInput.addEventListener('keyup', (e) => {
    const value = e.target.value.toLowerCase();
    if (value) {
       displayProducts(data.filter(item => item.name.toLowerCase().indexOf(value)!== -1));
    } else {
         displayProducts(data);
     }
    }); 

//displaying categories
const setCategories = () => {
    const allCats = data.map((item) => item.cat);
    const categories = ['All', ...allCats.filter((item, i) => allCats.indexOf(item) === i)];
  
    categoriesContainer.innerHTML = categories
      .map((cat) => `<span class="cat">${cat}</span>`)
      .join("");

    //filtering by category
    categoriesContainer.addEventListener("click", (e) => {
        const selectedCat = e.target.textContent;

        selectedCat === "All"
            ? displayProducts(data)
            : displayProducts(data.filter((item) => item.cat === selectedCat));
    });
  };

const setPrices = () => {
    const priceList = data.map((item) => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = minPrice;

    priceValue.textContent = "$" + maxPrice;

    priceRange.addEventListener("input", (e) => {
        priceValue.textContent = "$" + e.target.value;
        displayProducts(data.filter((item) => item.price <= e.target.value));
    });
};

setCategories();
setPrices();
