$(document).ready(function(){   
	setTimeout(function(){
		$('.view').removeClass('filter-red_blur');
	}, 500);
	
  var analysis = "^4000<h2>python разработчик</h2><p>Опыт работы: 12 лет<br/><br/></p>^1000<p>участвовал в проектах:</p>^200<p>SELF</p>^200<p>FRESHZONE</p>^200<p>BIZERBA</p><p>ACCORD POST<br/><br/></p><p>работал в компаниях:</p><p>ООО “Ювенко”, Москва, uvenco.ru</p><p>ООО “РБС”, Москва, rbs-retail.ru</p></p><p>ЗАО “Аккорд Пост”, Москва, accordpost.ru</p><p>************<br/><br/></p><p>Стек:</p><p>Python</p><p>SQL</p><p>Django</p>";
	
	var tracking = "^1000подходит <span class='square'>&#9632;</span>";
  
	$(function(){
		var typed = new Typed("#report", {strings: ["^2000<p>......</p>", "^1000<p><b>Дунаев, Дмитрий</b></p><br/>^1000<p>Мужчина, 38 лет<br/><br/></p>^1000<p>+7(999)550-60-96<br/><br/></p>^500<p>dementiado@gmail.com<br/></p>^500<p>************<br/><br/><br/></p>^500<p>Образование: Высшее, 2014<br/><br/></p><p>ВУЗ: Курский государственный университет<br/><br/></p><p>Факультет: Информатика и вычислительная техника<br/></p>^500<p>************<br/><br/><br/></p>^500<p>Повышение квалификации, курсы:<br/><br/></p><p>2021, Университет искусственного интеллекта<br/>neural-university.ru<br/>AI разработчик<br/><br/></p><p>2018, ООО «Перфоманс Лаб»<br/>performance-lab.ru<br/>Нагрузочный тестировщик</p>"],

			showCursor:false,
			loop: false
		});	
  	var typed = new Typed("#analysis", {
      strings: [analysis],
      loop: false,
			showCursor:false,
			typeSpeed:0,
			onComplete: function() {
				var typed = new Typed("#tracking", {
						strings: [tracking],
						loop: false,
						showCursor:false,	
						typeSpeed:50	
				});
			}
    });		

  });
});