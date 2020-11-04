<div class="header">Header</div>
  <main class="main">
    <div class="column column--right">
      <div class="price">
        Price: $<span id="price"></span> 
      </div>
    </div>

    <div class="column column--left">
      <select id="shipping" class="select js-select" onChange="addShipping(this)">
        <option value="" selected disabled> Select a shipping option </option>
        <option value="15">2 Day Shipping $15 </option> 
        <option value="10">3 Day Shipping $10</ option>
      </select>
    </div>
  </main>
<footer class="footer">Footer</footer>



// Note: do not edit the HTML for this exercise 
// some base styles are already included externally

// 1. Place the two .columns next to each other (.column--left on the left side and .column--right on the right side), with the footer beneath them. Each column should take up 1/2 of screen.
.column--left {
  float: left;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.column--right {
  float: right;
  width: 50%;
  position: relative;
}

.footer {
  clear: both;
}

// 2. Place the select in the direct center (vertically & horizontally) of the left column


// 3. Place the 'price' element 20px from the right and 20px from the bottom of the right column
.price {
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
}

// 4. Make the 'price' element orange when you hover over it 
.main .column--right > .price:hover {
  background-color: orange;
}

// 5. Make the 'price' element red when you hover over the right column.
// Make sure #4 still works!
.column--right:hover > .price {
  background-color: red;
}



// Please use vanilla javascript - no jQuery!

const cart = [
  {name: 'blender', price: 55.12 },
  {name: 'lamp', price: 33.34},
  {name: 'bowl', price: 12.50},
  {name: 'dog bed', price: 52}
];

function renderPrice(val = '0.00') {
  document.getElementById('price').innerHTML = val;
}

// sets initial value
renderPrice();

/*
 * 1) Use the `renderPrice` method to display the 
 * total price of the items in `cart`.
 * Expected value: $152.96
 */
const totalPrice = (data) => {
  let val = data.reduce(function(acc, curr) {
    return acc + curr.price;
  }, 0);
  return val;
}
// console.log(val);
let price = totalPrice(cart);
renderPrice(price);

// let val = 0;
// for(let i = 0; i < cart.length; i++){
//   let current = cart[i];
//   val += current.price;
// }
// console.log(val);

/* 
 * 2) When you select one of the 'shipping options', 
 * add the shipping cost to every item OVER $50. 
 * Expected values: $172.96, $182.96
 */
const addShipping = () => {
  let shipping = 0;
  let value = select.options[select.selectedIndex].value;
  for(let i = 0; i < cart.length; i++){
    let current = cart[i];
    if(current.price > 50){
      shipping++;
    }
  }
  let withShipping = (totalPrice(cart) + (shipping * value));
  renderPrice(withShipping);
}

const select = document.getElementById('shipping');
select.addEventListener('change', addShipping);