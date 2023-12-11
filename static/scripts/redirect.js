document.querySelector('.navbar-logo').onclick = function() {
    if (location.href.includes('/es/')) {
      location.href = '/workshop-website/es'
    } else {
     location.href = '/workshop-website'
    }
}
