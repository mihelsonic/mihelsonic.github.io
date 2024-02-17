document.getElementById('myButton').addEventListener('click', function() {
    // Play the audio
    var myAudio = document.getElementById('myAudio');
    myAudio.play();

    // Change the background image
    var body = document.body;
    body.classList.add('changed-background');

    // Change the background back to color after 15 seconds
    setTimeout(function() {
        body.classList.remove('changed-background');
    }, 10000);
});

/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
/*button.addEventListener('click', function() {
	alert('Если волк молчит, то лучше его не перебивать.')
})*/
const btnUp = {
	el: document.querySelector('.btn-up'),
	show() {
	  // удалим у кнопки класс btn-up_hide
	  this.el.classList.remove('btn-up_hide');
	},
	hide() {
	  // добавим к кнопке класс btn-up_hide
	  this.el.classList.add('btn-up_hide');
	},
	addEventListener() {
	  // при прокрутке содержимого страницы
	  window.addEventListener('scroll', () => {
		// определяем величину прокрутки
		const scrollY = window.scrollY || document.documentElement.scrollTop;
		// если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
		scrollY > 400 ? this.show() : this.hide();
	  });
	  // при нажатии на кнопку .btn-up
	  document.querySelector('.btn-up').onclick = () => {
		// переместим в начало страницы
		window.scrollTo({
		  top: 0,
		  left: 0,
		  behavior: 'smooth'
		});
	  }
	}
  }
  
  btnUp.addEventListener();
