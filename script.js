function toggle (name) {
  var el = document.getElementById(name)
  var button = document.querySelector('button[onClick="toggle(\'' + name + '\')"]')
  console.log(el.style.display)
  if (el.style.display === 'none' || el.style.display === '') {
    el.style.display = 'block'
    el.style.visibility = 'visible'
    el.style.opacity = 1
    var anchor = document.querySelector('a[name="' + name + '"]')
    anchor.scrollIntoView(true)
    button.innerHTML = 'Hide'
  } else {
    el.style.display = 'none'
    el.style.visibility = 'hidden'
    el.style.opacity = 0
    button.innerHTML = 'Expand'
  }
}
