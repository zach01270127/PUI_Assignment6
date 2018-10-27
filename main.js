//shoppingcart function



var shoppingCart = {};
shoppingCart.cart = [];


shoppingCart.Item = function(name, price, count, glazing){
    this.name = name
    this.price = price
    this.count = count
    this.glazing = glazing
}; 


//add the item selected in each page to the shopping cart, if the name and the glazing of the product is the same as any of the product in the cart, then add the quantity instead of creat a new item
shoppingCart.addItemToCart = function (name, price, count, glazing) {
    for (var i in this.cart){
        if (this.cart[i].name === name && this.cart[i].glazing === glazing){
            this.cart[i].count += count;
            this.saveCart();
            return;
        }

    }
    var item = new this.Item(name,price,count,glazing);
    console.log(this.cart);
    this.cart.push(item);
    this.saveCart();
}       


// delete all the itemazing that has same gl in the shopping cart.
shoppingCart.removeItemToCartAll = function (name,glazing) {
    console.log(this.cart);
    for(var i in this.cart){
        if(this.cart[i].glazing === glazing && this.cart[i].name === name){
            this.cart.splice(i,1);
            break;
            
                }
                                    
        }
        console.log(this.cart);
        this.saveCart();    
    }


//count how many items are currently in the shopping cart
shoppingCart.countCart = function(){
    var totalCount = 0
    for(var i in this.cart){
        totalCount += this.cart[i].count;
    }
    return totalCount;
}


//calculate how much is the total cost
shoppingCart.totalCart = function(){
    var totalCost = 0;
    for(var i in this.cart){
        totalCost += this.cart[i].price * this.cart[i].count;
    }
    return totalCost;
}


//list all the items in the cart
shoppingCart.listCart = function (){

    var cartCopy = [];
    for (var i in this.cart){
        var item = this.cart[i];
        var itemCopy = {};
        for (var p in item){
            itemCopy[p] = item[p];
        }
        itemCopy.total = item.price * item.count
        cartCopy.push(itemCopy);

    }
    return cartCopy;
}


//save the items in local storage
shoppingCart.saveCart = function(){
    localStorage.setItem("shoppingCart",JSON.stringify(this.cart)); 

}


//load the shopping cart from local storage
shoppingCart.loadCart = function(){
    this.cart = JSON.parse(localStorage.getItem("shoppingCart"));
}

shoppingCart.loadCart();
if (shoppingCart.cart === null){
    shoppingCart.cart = [];
}