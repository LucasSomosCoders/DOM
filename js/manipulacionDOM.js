
let contador = 0;
let imagen = document.querySelector('img');
let parr = document.querySelector('p');

function contarClicks(element) {
  console.log(element);
  element.style.backgroundColor = 'red';
  contador++;
  // console.log('Se realizaron ' + contador + ' clicks');
  // document.write('Se realizaron ' + contador + ' clicks');
  document.getElementById('cuenta').innerHTML = 'Se realizaron ' + contador + ' clicks';
  // console.log('Se realizaron ' + contador + ' clicks');

  if (contador % 2 == 0){
    imagen.src = 'https://i.scdn.co/image/ab67616d00001e02cf3012e999e2810045f886e4';
    parr.style.color = 'red';
  } else{
    imagen.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS19EZfPr_8-SUkfykDCEqpkRr7o-kAfXZilW5-1qH6uz1JA5r2xx_zvXl8DGZA9NM1ic&usqp=CAU';
    parr.style.color = 'blue';
  }
}

console.log(this);

// document.getElementsByTagName('p')
// document.querySelector('p')

