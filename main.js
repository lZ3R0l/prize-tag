let prize
let newprize
let currency = ''

prize = prompt('Enter prize: ')

const match = prize.match(/[\u20A0-\u20CF$₹€£¥₩₦]/);
if (match) {
  currency = match[0]
  prize = prize.replace(currency, '')
}

prize = Number(prize) // Converts string to number
newprize = prize * 0.9

console.log(`New prize after 10% discount: ${currency}${newprize.toFixed(2)}`)