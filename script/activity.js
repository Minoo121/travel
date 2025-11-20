
function descbutton(name) {
  const desc = document.getElementById(name + '_desc');
  const img = document.getElementById(name + '_descbutton_img');
  if (!desc) { console.warn('no desc element:', name); return; }

  const isHidden = getComputedStyle(desc).display === 'none';
  if (isHidden) {
    desc.style.display = 'block';
    if (img) img.src = './img/apper.png';
  } else {
    desc.style.display = 'none';
    if (img) img.src = './img/ander.png';
  }
}