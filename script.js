// Get total price display element
const totalEl = document.getElementById('total')

// Select all products
const products = document.querySelectorAll('.card .card-body')
products.forEach((product) => {
  const plusBtn = product.querySelector('.fa-plus-circle')
  const minusBtn = product.querySelector('.fa-minus-circle')
  const trashBtn = product.querySelector('.fa-trash-alt')
  const heartBtn = product.querySelector('.fa-heart')
  const quantityEl = product.querySelector('.quantity')

  // Remove any existing event listeners (if needed)
  plusBtn.replaceWith(plusBtn.cloneNode(true))
  minusBtn.replaceWith(minusBtn.cloneNode(true))
  trashBtn.replaceWith(trashBtn.cloneNode(true))
  heartBtn.replaceWith(heartBtn.cloneNode(true))

  // Re-select after cloning
  const newPlusBtn = product.querySelector('.fa-plus-circle')
  const newMinusBtn = product.querySelector('.fa-minus-circle')
  const newTrashBtn = product.querySelector('.fa-trash-alt')
  const newHeartBtn = product.querySelector('.fa-heart')

  // Handle plus button
  newPlusBtn.addEventListener('click', () => {
    let quantity = parseInt(quantityEl.innerText) || 0
    quantity++
    quantityEl.innerText = quantity
    updateTotal()
  })

  // Handle minus button
  newMinusBtn.addEventListener('click', () => {
    let quantity = parseInt(quantityEl.innerText) || 0
    if (quantity > 0) {
      quantity--
      quantityEl.innerText = quantity
      updateTotal()
    }
  })

  // Handle trash button (remove item)
  newTrashBtn.addEventListener('click', () => {
    quantityEl.innerText = 0
    updateTotal()
  })

  // Handle heart button (toggle red)
  newHeartBtn.addEventListener('click', () => {
    newHeartBtn.classList.toggle('red')
  })
})

// Update total price function
function updateTotal() {
  let total = 0
  document.querySelectorAll('.card .card-body').forEach((item) => {
    const qty = parseInt(item.querySelector('.quantity').innerText) || 0
    const priceStr = item.querySelector('.unit-price').innerText
    const price = parseFloat(priceStr.replace('$', '').trim()) || 0
    total += qty * price
  })
  totalEl.innerText = total.toFixed(2) + ' $'
}