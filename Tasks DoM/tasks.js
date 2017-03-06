// function makeElement(parent, parentOfParent) {
//     if (Array.isArray(parent)) {
//         var childs = Array.prototype.slice.call(parent, 1);
//         var parent = document.createElement(parent[0]);
//         parentOfParent.appendChild(parent);
//         childs.forEach(function (child) {
//             if (Array.isArray(child)) {
//                 makeElement(child, parent);
//                 return;
//             }
//             var child = document.createElement(child);
//             parent.appendChild(child);
//         })
//     } else {
//         var parent = document.createElement(parent);
//         document.body.appendChild(parent);
//         var childs = Array.prototype.slice.call(arguments, 2);
//         childs.forEach(function (child) {
//             if (Array.isArray(child)) {
//                 makeElement(child, parent);
//                 return;
//             }
//             var child = document.createElement(child);
//             parent.appendChild(child);
//         })
//     }
// }

// makeElement('div', 'p', 'img', 'span', ['div', ['span', 'a'], 'p'], 'p');


/////////////////////////////////


// function getValues() {
//     var form = document.getElementById('form');

//     var formChilds = Array.prototype.slice.call(form.childNodes);

//     formChilds.forEach(function (tag) {
//         if (tag.tagName == 'INPUT') {
//             document.body.appendChild(document.createElement('p')).textContent = tag.value;
//         }
//     })
// }

///////////////////////////////////

// function Person(name, age, pic) {
//     this.name = name;
//     this.age = age;
//     this.pic = pic;
// }

// Person.prototype.showInfo = function() {
//     var container = document.createElement('div');
//     container.className = 'container';
//     document.body.appendChild(container);

//     var picContainer = document.createElement('div');
//     picContainer.className = 'picContainer';
//     container.appendChild(picContainer);

//     var pic = document.createElement('img');
//     pic.className = 'pic';
//     pic.src = this.pic;
//     picContainer.appendChild(pic);

//     var pContainer = document.createElement('div');
//     pContainer.className = 'pContainer';
//     container.appendChild(pContainer);

//     var nameP = document.createElement('p');
//     nameP.className = 'nameP';
//     nameP.textContent = 'Name: ' + this.name;
//     pContainer.appendChild(nameP);

//     var ageP = document.createElement('p');
//     ageP.className = 'ageP';
//     ageP.textContent = 'Age: ' + this.age;
//     pContainer.appendChild(ageP);

// }


// var person1 = new Person("Jo", 24, "https://www.wilsoncenter.org/sites/default/files/styles/450x550-scale-crop/public/18457363298_3ac27e78fb_o.jpg?itok=9nrUxEfI")
// person1.showInfo();

// var person2 = new Person("Jo", 24, "https://www.wilsoncenter.org/sites/default/files/styles/450x550-scale-crop/public/18457363298_3ac27e78fb_o.jpg?itok=9nrUxEfI")
// person2.showInfo();






var shoppingCart = {
    products: [],

    addProduct: function(product) {
        this.products.push(product);
    },

    removeProduct: function(which) {
        this.products.splice(which - 1, 1);
    }
}


function Product(img, name, quantity) {
    this.img = img;
    this.name = name;
    this.quantity = quantity;
}


function displayCart() {
    var products = document.getElementById('products');
    products.innerHTML = '';

    shoppingCart.products.forEach(function(item) {
       var itemCont = document.createElement('div');
       itemCont.style.border = '1px solid black';
       itemCont.style.display = 'inline-block';
       itemCont.style.padding = '20px';
       products.appendChild(itemCont);

       var prodImg = document.createElement('img');
       prodImg.src = item.img;
       prodImg.style.width = '100px';
       itemCont.appendChild(prodImg);

       var prodName = document.createElement('p');
       prodName.textContent = 'Name: ' + item.name;
       itemCont.appendChild(prodName);

       var prodQuan = document.createElement('p');
       prodQuan.textContent = 'Quantity: ' + item.quantity;
       itemCont.appendChild(prodQuan);
    })
}

// shoppingCart.addProduct(new Product('https://karolinadimovska.files.wordpress.com/2008/09/domat.jpg', 'Domat', 1));
// shoppingCart.addProduct(new Product('https://karolinadimovska.files.wordpress.com/2008/09/domat.jpg', 'Domat', 1));
// displayCart()

// shoppingCart.removeProduct(0);

// displayCart()


var buttonadd = document.getElementById('addprod');
buttonadd.onclick = function() {
    var img = document.getElementById('prod_img').value;
    var name = document.getElementById('prod_name').value;
    var quan = document.getElementById('prod_quantity').value;

    shoppingCart.addProduct(new Product(img, name, quan));
    displayCart()
}

var buttonremove = document.getElementById('removeprod');
buttonremove.onclick = function() {
    var index = document.getElementById('prod_remove').value;

    shoppingCart.removeProduct(index);
    displayCart()
}