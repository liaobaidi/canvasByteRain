const width = document.documentElement.clientWidth
const height = document.documentElement.clientHeight
const cvs = document.getElementById('cvs')
const ctx = cvs.getContext("2d")

cvs.width = width
cvs.height = height 

const columnWidth = 20
const columns = Math.floor(width / columnWidth)
const columnNextIndexs = new Array(columns).fill(1)

setInterval(draw, 40)

function draw() {
  ctx.font = '20px CocoGothicPro-Regular'
  ctx.fillStyle = 'rgba(240, 240, 240, 0.1)'
  ctx.fillRect(0, 0, width, height)
  for(let i = 0; i < columns; i++) {
    const x = i * columnWidth
    const y = columnNextIndexs[i] * columnWidth
    ctx.fillStyle = getRandomColor()
    ctx.fillText(getRandomStr(), x, y)
    if(y > height && Math.random() > 0.99) {
      columnNextIndexs[i] = 0
    } else {
      columnNextIndexs[i]++
    }
  }
}

function getRandomColor() {
	const arr = ['#00fecc', '#007bff', '#754165', '#2a35d4', '#6a5bc4', '#678954']
	return arr[Math.floor(Math.random() * 6)]
}

function getRandomStr() {
	const str = 'console.log("HelloWorld")'
	return str.split('')[Math.floor(Math.random() * 6)]
}
