function animatedIcons() {
  let arm = document.getElementById('arm');
  arm.innerHTML = '<img class="rounded-circle" src="images/arm-icon.png">';
  setTimeout(function() {
    arm.innerHTML = '<img class="rounded-circle" id="arm-atrong" src="images/arm-icon-light.png"';
  }, 1000);
}

animatedIcons();

setInterval(animatedIcons, 2000);
