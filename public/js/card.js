function flipCard() {
    const front = document.querySelector('.card-face.front');
    const back = document.querySelector('.card-face.back');
    
    if (front.style.display === 'none') {
      front.style.display = 'block';
      back.style.display = 'none';
    } else {
      front.style.display = 'none';
      back.style.display = 'block';
    }
  }  