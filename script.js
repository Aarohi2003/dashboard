// icons- container switching 
function mycontents() {
  const homeicon = document.getElementById("home");
  const content = document.getElementById("content-items");

  const categoriesicon = document.getElementById("categories");
  const application = document.getElementById("application-items");

  const graphicon = document.getElementById("graph");
  const chart = document.getElementById("chart-items");


  homeicon.addEventListener("click", () => {
    content.classList.remove("d-none");
    application.classList.add("d-none");
    chart.classList.add("d-none");

  });

  categoriesicon.addEventListener("click", () => {
    application.classList.remove("d-none");
    content.classList.add("d-none");
    chart.classList.add("d-none");
  });


  graphicon.addEventListener("click", () => {
    chart.classList.remove("d-none");
    application.classList.add("d-none");
    content.classList.add("d-none");
  });
}


// toggle-container switching  
const togglebutton = document.getElementById("togglebar");
const containerbar = document.getElementById("container-bar");

togglebutton.addEventListener("click", () => {
  containerbar.classList.toggle("d-none");
  document.getElementById('right-pannel').classList.toggle('expand');
});


// // fullscreen button
function myscreen() {
  const fullscreenBtn = document.getElementById("fullscreenButton");
  fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });
}


// right navigation span switching
function mynavigation() {
  const languagedrop = document.getElementById("dropdown");
  const languagemenu = document.getElementById("dropmenu");

  const wishlist = document.getElementById("cart");
  const items = document.getElementById("cartmenu");

  const notification = document.getElementById("notify");
  const rings = document.getElementById("notifymenu");

  const profile = document.getElementById("profile");
  const usermodal = document.getElementById("profilemenu");


  languagedrop.addEventListener("click", () => {
    languagemenu.classList.toggle("d-none");
    items.classList.add("d-none");
    rings.classList.add("d-none");
    usermodal.classList.add("d-none");
  });

  wishlist.addEventListener("click", () => {
    items.classList.toggle("d-none");
    rings.classList.add("d-none");
    usermodal.classList.add("d-none");
    languagemenu.classList.add("d-none");

  });


  notification.addEventListener("click", () => {
    rings.classList.toggle("d-none");
    usermodal.classList.add("d-none");
    languagemenu.classList.add("d-none");
    items.classList.add("d-none");

  });


  profile.addEventListener("click", () => {
    usermodal.classList.toggle("d-none");
    languagemenu.classList.add("d-none");
    items.classList.add("d-none");
    rings.classList.add("d-none");

  });
};


// cart  drop down
// cart list
list = [
  {
    src: "4.jpeg",
    title: "Lorem ipsum dolor sit.",
    description: "Lorem ipsum dolor sit amet consectetur.",
    discount: "$56 25% off",
    amount: "$56 ",
  }
  ,
  {
    src: "5.jpg",
    title: "Lorem ipsum dolor sit.",
    description: "Lorem ipsum dolor sit amet consectetur.",
    discount: "$56 25% off",
    amount: "$56 ",
  }
  ,
  {
    src: "6.jpeg",
    title: "Lorem ipsum dolor sit.",
    description: "Lorem ipsum dolor sit amet consectetur.",
    discount: "$56 25% off",
    amount: "$56 ",
  }
];

// cart list menu
function addrow() {

  const item = document.getElementById("items");
  const add = list.map(list => ` 
<div class="imagelist p-13 d-flex content-spacebetween"> 
<img src="${list.src}" class="menu w-15"> 
<div class="itemslist px-19 d-block">
<h4>${list.title} </h4>
<p class ="fs-12" >${list.description}</p>
<p class="fs-10" >${list.discount}</p>
<p>${list.amount}</p>  
<div class="addicon content-end d-flex">
<i class="bi bi-plus-square" class="fs-19"></i>
<span class="counting-data"> 0 </span>
<i class="bi bi-dash-square" class="fs-19"></i>
</div>
</div>
<i class="bi bi-trash px-34" id="trash" ></i>
</div>`).join("");

  const button = `
    <div class="checkout p-17 w-100">
      <button class="proceed p-13 cursor-pointer w-100">Proceed to checkout</button>
    </div>
  `;
  item.innerHTML = add + button;
}
addrow();



// notifications dropdown
// notify list
events = [
  {
    src: "3.jpg",
    title: "New Message",
    description: "Received message from John",
  }
  ,
  {
    src: "7.png",
    title: "Task Reminder",
    description: "Dont forget to submit report by 3 pm today",
  }
  ,
  {
    src: "3.jpg",
    title: "Friend Request",
    description: "Ria Arora send you a friend request",
  }
  ,
  {
    src: "7.png",
    title: "Event Reminder",
    description: "Team Meeting on 20th July at<br>10 am",
  }
];

// notify list menu
function notifybar() {

  const ring = document.getElementById("rings");
  const alerts = events.map(events => ` 
<div class="imageevent p-13 d-flex"> 
<img src="${events.src}" class="menu2 w-15"> 
<div class="itemsevent px-16 d-block" >
<h4>${events.title} </h4>
<p class="fs-12">${events.description}</p>
</div>
</div>`).join("");
  ring.innerHTML = alerts;
}
notifybar();



// profile dropdown
// notify list
menu = [
  {
    src: "user.png",
    title: "Tom Philip",
    id: "tom4765@gmail.com",
  },
];

// profile list menu
function profilebar() {

  const info = document.getElementById("description");
  const updates = menu.map(menu => ` 
<div class="imagebar p-17 d-flex"> 
<img src="${menu.src}" class="menu3 w-15"> 
<div class="itemsbar px-16 d-block">
<h4>${menu.title} </h4>
<p style="color:rgb(122 98 197);" class="fs-12">${menu.id}</p>
</div>
</div>
<div class="details p-8 d-block fs-16">
<p class="p-13" ><i class="bi bi-person-circle"></i> &nbsp; Settings</p>
<p class="p-13"><i class="bi bi-gear-fill"></i> &nbsp; Account Settings</p>
</div>
<div class="details p-8 d-block fs-16">
<p class="p-13"><i class="bi bi-info-circle"></i> &nbsp; Support</p>
<p class="p-13"><i class="bi bi-activity"></i> &nbsp; Activity Logs</p>
</div>
<div class="details p-8 d-block fs-16">
<p class="p-13"><i class="bi bi-box-arrow-right"></i> &nbsp; Logout</p>
</div>`
  );
  info.innerHTML = updates;
}
profilebar();



//light mode 
function lightmode() {
  const modeIcon = document.getElementById("mode-toggle-icon");
  const root = document.documentElement; // This is the <html> element
  modeIcon.addEventListener("click", () => {
    root.classList.toggle("light-mode");

    const isLight = root.classList.contains("light-mode");
    if (isLight) {
      modeIcon.classList.replace("bi-moon", "bi-brightness-high") === `<i class="bi bi-brightness-high"></i>`;
    } else {
      modeIcon.classList.replace("bi-brightness-high", "bi-moon") === `<i class="bi bi-brightness-high"></i>`;
    }
  });
}


// openmodal popup login form
function loginclick() {
  const loginitems = document.getElementById("login-items");
  const formdetails = document.getElementById("form-details");

  loginitems.addEventListener("click", () => {
    formdetails.classList.remove("d-none");
  })
};

// close login form
function closeclick() {
  const modal = document.getElementById('form-details');
  modal.classList.add('d-none');
}


// login and sign up switching
window.onload = function () {
  const loginBox = document.getElementById('box-login');
  const signupBox = document.getElementById('box-signup');
  const showSignup = document.getElementById('show-signup');
  const showLogin = document.getElementById('show-login');


  showSignup.addEventListener('click', () => {
    loginBox.classList.add('d-none');
    signupBox.classList.remove('d-none');
  });

  showLogin.addEventListener('click', () => {
    signupBox.classList.add('d-none');
    loginBox.classList.remove('d-none');
  });
};


// setting tab toggle click
function mysettings() {
  const settingstoggle = document.getElementById("settings-toggle");
  const settingsmenu = document.getElementById("settingmenu");

  settingstoggle.addEventListener("click", () => {
    settingsmenu.classList.remove("d-none");
  });
}

// close settings toggle
function closesettings() {
  const settingtab = document.getElementById('settingmenu');
  settingtab.classList.add('d-none');
}

// settings bar
// general settings menu
function settingmenu() {
  const general = document.getElementById("general-elements");
  const settingdescription = document.getElementById("setting-description");

  general.addEventListener("click", () => {
    settingdescription.classList.toggle("d-none");

    const settingscontent = `
    <div class="settingslist p-21">
    <ul>
    <li class="p-6 ">UI elements</li>
    <li class="p-6">Utilities</li>
    <li class="p-6">Widgets</li>
    </ul>
    </div>`;
    settingdescription.innerHTML = settingscontent;
  });
};



// personal settings menu
function personalmenu() {
  const personal = document.getElementById("personal-elements");
  const personaldescription = document.getElementById("personal-description");

  personal.addEventListener("click", () => {
    personaldescription.classList.toggle("d-none");

    const personalcontent = `
    <div class="settingslist p-21">
    <ul>
    <li class="p-6">About</li>
    <li class="p-6">Status</li>
    <li class="p-6">Social Media</li>
    </ul>
    </div>`;
    personaldescription.innerHTML = personalcontent;
  });
};



// privacy settings menu
function privacymenu() {
  const privacy = document.getElementById("privacy-elements");
  const privacydescription = document.getElementById("privacy-description");

  privacy.addEventListener("click", () => {
    privacydescription.classList.toggle("d-none");

    const privacycontent = `
    <div class="settingslist p-21">
    <ul>
    <li class="p-6">Account Documentation</li>
    <li class="p-6">General Documnetation</li>
    <li class="p-6">Forum</li>
    </ul>
    </div>`;
    privacydescription.innerHTML = privacycontent;
  });
};


// pricing settings menu
function pricingmenu() {
  const pricing = document.getElementById("pricing-elements");
  const pricingdescription = document.getElementById("pricing-description");

  pricing.addEventListener("click", () => {
    pricingdescription.classList.toggle("d-none");

    const pricingcontent = `
    <div class="settingslist p-21">
    <ul>
    <li class="p-6">Pricing Plans</li>
    </ul>
    </div>`;
    pricingdescription.innerHTML = pricingcontent;
  });
};


// theme settings menu
function thememenu() {
  const theme = document.getElementById("theme-elements");
  const themedescription = document.getElementById("theme-description");

  theme.addEventListener("click", () => {
    themedescription.classList.toggle("d-none");

    const themecontent = `
    <div class="modes d-flex">
        <input type="radio">
        <label>Light Mode</label>
    </div>
    <div class="modes d-flex">
        <input type="radio">
        <label>Dark Mode</label>
    </div>`;

    themedescription.innerHTML = themecontent;
  });
};

// toggle switch profile notifications 
window.addEventListener("load", function () {
  document.querySelectorAll('.toggleSwitch').forEach((toggle) => {
    toggle.addEventListener('change', () => {
      const textElement = toggle.closest('.slider').querySelector('.switchText');
      textElement.textContent = toggle.checked ? 'ON' : 'OFF';
    });
  });
});


// functions include in data container
function myuser() {
  const userid = document.getElementById("user-id");
  const userdetails = document.getElementById("userdetails");

  const posid = document.getElementById("pos-system");
  const orders = document.getElementById("ordersystem");

  userid.addEventListener("click", () => {
    userdetails.classList.remove("d-none");
    orders.classList.add("d-none");
  });

  posid.addEventListener("click", () => {
    orders.classList.remove("d-none");
    userdetails.classList.add("d-none");
  });
}


// ongoing orders list
displayorders = [
  {
    order: "@SPK1",
    name: "Sophia Roy",
    time: "2 minutes ago",
    button: "Completed",
    backgroundcolor: "var(--box-hover)",

  },
  {

    order: "@SPK2",
    name: "Arjun Singh",
    time: "13 minutes ago",
    button: "Processing",
    backgroundcolor: "var(--lightblue)",
  },
  {

    order: "#SPK3",
    name: "Kriti Menon",
    time: "27 minutes ago",
    button: "Cancelled",
    backgroundcolor: "var(--blue)",
  },
  {

    order: "#SPK4",
    name: "Aarya Thakur",
    time: "8 minutes ago",
    button: "Out of Delivery",
    backgroundcolor: "var(--pushbutton)",
  },
  {

    order: "#SPK5",
    name: "Ria Choudhary",
    time: "32 minutes ago",
    button: "Completed",
    backgroundcolor: "var(--purple)",
  },
  {

    order: "#SPK6",
    name: "Anisha Patel",
    time: "40 minutes ago",
    button: "Pending",
    backgroundcolor: "var(--titlebar)",
  },
  {

    order: "#SPK7",
    name: "Steves Anderson",
    time: "5 minutes ago",
    button: "Processing",
    backgroundcolor: "var(--dark-pink)",
  },
  {

    order: "#SPK8",
    name: "Thomas Clieve",
    time: "17 minutes ago",
    button: "Cancelled",
    backgroundcolor: "var(--violet-blue)",
  },
  {

    order: "#SPK9",
    name: "Maira",
    time: "9 minutes ago",
    button: "Completed",
    backgroundcolor: "var(--purple)",
  },
];


//ongoing order menu 
function orderbar() {

  const Ordercontents = document.getElementById("ordercontents");
  const materials = displayorders.map(displayorders => ` 
    <div class="order-items p-8">
      <div class="order-blocks p-11 fs-smaller" style="background-color:${displayorders.backgroundcolor};">
          <h4 class="p-8">${displayorders.order}</h4>
          <p class="p-8">${displayorders.name}</p>
        <div class="setresponse d-flex content-spacebetween">
          <p class="p-8">${displayorders.time}</p>
          <div class="order-button px-2">
            <button type="button" class="p-8" >${displayorders.button}</button>
          </div>
        </div>
      </div>
    </div>
    `).join("");
  Ordercontents.innerHTML = materials;
}
orderbar();


// increment decrement of orders
document.getElementById("neworders").addEventListener("click", (e) => {

  if (e.target.classList.contains("increment")) {
    const counter = e.target.closest(".detaillist").querySelector(".counting-data");
    counter.textContent = parseInt(counter.textContent) + 1;
  }

  if (e.target.classList.contains("decrement")) {
    const counter = e.target.closest(".detaillist").querySelector(".counting-data");
    let value = parseInt(counter.textContent);
    if (value > 0) {
      counter.textContent = value - 1;
    }
  }
  updateTotal();
});


// delete orders 
function deleteorders(element) {
  const detailslist = element.closest(".detaillist");
  detailslist.remove();
  updateTotal();
}


// add orders to cart
function myorders(element) {
  const addnew = document.getElementById("neworders");
  const menublock = element.closest(".menu-block");

  const name = menublock.querySelector(".menu-content p").innerText;
  const price = menublock.querySelector(".rates p").innerText;
  const imgSrc = menublock.querySelector("img").src;


  addnew.innerHTML += `
    <div class="detaillist p-13 d-flex align-items-center">
      <img src="${imgSrc}" class="menu w-20">
      <div class="itemsdetails px-19 d-block w-65">
        <h4>${name}</h4>
        <p>${price}</p>
        <div class="addicon content-end d-flex cursor-pointer">
          <i class="bi bi-plus-square fs-19 increment"></i>
          <span class="counting-data">0</span>
          <i class="bi bi-dash-square fs-19 decrement"></i>
        </div>
      </div>
      <i class="bi bi-trash px-34 cursor-pointer" onclick="deleteorders(this)"></i>
    </div>
  `;
  updateTotal();
}


// subtotal, GST, packaging, total of orders in cart
function updateTotal() {
  let subtotal = 0;

  document.querySelectorAll("#neworders .detaillist").forEach(block => {
    const priceText = block.querySelector(".itemsdetails p").innerText.replace("$", "").trim();
    const price = parseFloat(priceText);
    const qty = parseInt(block.querySelector(".counting-data").textContent);
    subtotal += price * qty;
  });

  const packaging = 5.00;
  const gst = 10.00;
  const total = subtotal + packaging + gst;

  document.querySelector(".subtotal").innerText = `$ ${subtotal.toFixed(2)}`;
  document.querySelector(".packaging").innerText = `+$ ${packaging.toFixed(2)}`;
  document.querySelector(".gst").innerText = `$ ${gst.toFixed(2)}`;
  document.querySelector(".grand-total").innerText = `$ ${total.toFixed(2)}`;
  document.querySelector(".pay-button button").innerText = `Pay - $${total.toFixed(2)}`;
}
updateTotal();



// profile bio picture
// profile picture uploaded
function upload() {

  const filetab = document.getElementById('myFile');
  const imageupload = document.getElementById('uploadimage');

  filetab.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        imageupload.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
}

// remove uploaded image
function removeImage() {

  const filetab = document.getElementById('myFile');
  const imageupload = document.getElementById('uploadimage');

  imageupload.src = 'user.png';
  filetab.value = '';
}


// addtocart
function addtocart() {

  const addmenu = document.getElementById("add-menu");
  const addorders = document.getElementById("addorderitem");

  addmenu.addEventListener("click", () => {
    addorders.classList.remove("d-none");
    document.getElementsByClassName('menu-content').classList.add('d-flex');
  });
};
