
window.onload = function() {

  var absolute = document.getElementById('absolute');
  var alpha = document.getElementById('alpha');
  var beta = document.getElementById('beta');
  var gamma = document.getElementById('gamma');

  console.log(gamma)
  window.addEventListener('deviceorientation', handleOrientation);
}


function handleOrientation(event) {
  var absoluteValue = event.absolute;
  var alphaValue    = event.alpha;
  var betaValue     = event.beta;
  var gammaValue    = event.gamma;

  absolute.innerHTML = absoluteValue;
  alpha.innerHTML = alphaValue;
  beta.innerHTML = betaValue;
  gamma.innerHTML = gammaValue;

}
