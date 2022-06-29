const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://gimmedelicious.com/wp-content/uploads/2021/02/Chicken-Ramen-SQ-500x500.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bibimbap-500x500.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://takestwoeggs.com/wp-content/uploads/2022/02/Dan-Dan-Noodles-Dan-Dan-Mian-5overhead-sq-500x500.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://chefjacooks.com/wp-content/uploads/2021/10/natto-chahan-square-500x500.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2017/09/Onigiri-Rice-Balls-3082-500x500.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.spoonforkbacon.com/wp-content/uploads/2021/03/Jajangmyeon-recipe-card-500x500.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://www.ohmyfoodrecipes.com/wp-content/uploads/2020/01/ants-climb-on-the-tree-horiztonal-with-chopsticks-500x500.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Dorayaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.honestfoodtalks.com/wp-content/uploads/2022/02/Dorayaki-recipe-red-bean-500x500.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];

// filters
  const koreaFilter = menu.filter(item => item.category === "Korea");
  const japanFilter = menu.filter(item => item.category === "Japan");
  const chinaFilter = menu.filter(item => item.category === "China");

// buttonDOM
  const btn_ALL = document.querySelector("#all");
  const btn_Korea = document.querySelector("#korea");
  const btn_Japan = document.querySelector("#japan");
  const btn_China = document.querySelector("#china");

  const AddMenu = (filter) => {
    for (let i = 0; i < filter.length; i++){
      let item = filter[i];
      AddHTML(item);
    }
  }

  
  let MENU_DIV = document.querySelector("#menu_div");
  
  const AddHTML = (item) => {
    const menuItems = document.createElement("div");
    menuItems.classList.add("menu-items", "col-lg-6", "col-sm-12");
    MENU_DIV.appendChild(menuItems);
    
    const menuImg = document.createElement("img");
    menuImg.classList.add("photo");
    menuImg.setAttribute("src",`${item.img}`);
    menuItems.appendChild(menuImg);
    
    const menuInfo = document.createElement("div");
    menuInfo.classList.add("menu-info");
    menuItems.appendChild(menuInfo);
    
    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");
    menuInfo.appendChild(menuTitle);
    
    const menuTitle_H4 = document.createElement("h4");
    menuTitle_H4.textContent = `${item.title}`;
    menuTitle.appendChild(menuTitle_H4);
    
    const menuTitle_Price = document.createElement("h4");
    menuTitle_Price.classList.add("price");
    menuTitle_Price.textContent = `${item.price}`;
    menuTitle.appendChild(menuTitle_Price);
    
    const menuText = document.createElement("div");
    menuText.classList.add("menu-text");
    menuText.textContent = `${item.desc}`;
    menuInfo.appendChild(menuText);
    
  }

  AddMenu(menu); // first init : default page view 
  
  const removeItems = () => {
    const menuItemsDOM = document.querySelectorAll(".menu-items");
    menuItemsDOM.forEach( n => n.remove() );
  }

  btn_ALL.addEventListener('click', function(){removeItems(), AddMenu(menu)});
  btn_Korea.addEventListener('click', function(){removeItems(), AddMenu(koreaFilter)});
  btn_Japan.addEventListener('click', function(){removeItems(), AddMenu(japanFilter)});
  btn_China.addEventListener('click', function(){removeItems(), AddMenu(chinaFilter)});



  