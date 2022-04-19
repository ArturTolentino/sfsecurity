const checkbox = document.querySelector('#check')


function scroll() {
  const menuItems = document.querySelectorAll('.navigation_bar a')
  function select(element) {
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop
  }
  function scrollPostion(section) {
    window.scroll({ top: section, behavior: 'smooth' })
  }
  function scrollToId(event) {
    event.preventDefault()
    const element = event.target
    const section = select(element) 
    scrollPostion(section)
    checkbox.checked = !checkbox.checked
  }
  menuItems.forEach(i => {
    i.addEventListener('click', scrollToId)
    
  })
}
scroll()