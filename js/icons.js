function animatedIcons() {
  let arm = document.getElementById('arm');
  arm.innerHTML = '<img class="rounded-circle" src="images/arm-icon.png" alt="Generic placeholder image" width="140" height="140">';
  // arm.appendChild('<img class="rounded-circle" src="images/arm-icon.png" alt="Generic placeholder image" width="140" height="140">');
  setTimeout(function() {
    arm.innerHTML = '<img class="rounded-circle" src="images/arm-icon-light.png" alt="Generic placeholder image" width="140" height="140">';
    // arm.appendChild('<img class="rounded-circle" src="images/arm-icon-light.png" alt="Generic placeholder image" width="140" height="140">');
  }, 1000);
}

animatedIcons();

setInterval(animatedIcons, 2000);
