function menuToggle() {
    var x = document.getElementById('my-nav-toggle');
    if (x.className === 'nav-toggle') {
      x.className += ' responsive';
    } else {
      x.className = 'nav-toggle';
    }
}
