const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const colors = ['#00FFFF', '#7FFFD4', '#0000FF', '#8A2BE2' , '#7FFF00' , '#00FFFF', '#FF1493', '#ADFF2F']

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  

  square.addEventListener('mouseover', () => 
    setColor(square))
  
  square.addEventListener('mouseleave', () => 
    removeColor(square))
    board.append(square)

  function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
  }
  function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
  }

  function getRandomColor() {
    return  colors[Math.floor(Math.random() * colors.length)]
  
  }
  
}
