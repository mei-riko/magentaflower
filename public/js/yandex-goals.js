//YANDEXREALGOAL PHONE LINK
$(".contacts__item.contacts__item_phone a.header__link").on("click", function(){
    if (typeof yaCounter49234408 != 'undefined') {
      yaCounter49234408.reachGoal("telefon_shapka");
    }
})
//YANDEXREALGOAL BTN CLICK
$(".btn.btn-273").on("click", function(){
    if (typeof yaCounter49234408 != 'undefined') {
      yaCounter49234408.reachGoal("zak_sertifikat-btn");
    }
})
$(".timetable-col .timetable-btn").on("click", function(){
    if (typeof yaCounter49234408 != 'undefined') {
      yaCounter49234408.reachGoal("zaya_raspisanie-btn");
    }
})
// UPD 2020-09
// Семинар «Осенние букеты» https://magentaflower.ru/osennie-buketyi-i-kompoziczii
$(".btn.btn-goals-236").on("click", function(){
    if (typeof yaCounter49234408 != 'undefined') {
      yaCounter49234408.reachGoal("osennie_bukety");
    }
})
// Семинар «Осенние композиции» https://magentaflower.ru/seminar-po-floristike-osennie-kompoziczii
$(".btn.btn-goals-307").on("click", function(){
    if (typeof yaCounter49234408 != 'undefined') {
      yaCounter49234408.reachGoal("osennie-kompoziczii");
    }
})

//YANDEXREALGOAL BTN CLICK
// old CTA Block
$("section.choice .consult .btn-cons").on("click", function(){
    if (typeof yaCounter49234408 != 'undefined') {
      yaCounter49234408.reachGoal("konsult_knop");
    }
})
// new CTA Block
$("section.info-block .btn.btn_action").on("click", function(){
    if (typeof yaCounter49234408 != 'undefined') {
      yaCounter49234408.reachGoal("konsult_knop");
    }
})

// YANDEXREALGOAL FORM SUBMIT SUCCESS
$(document).on('af_complete', function (event, response) {
  var form = response.form;
  
  // Экспресс курс       идентификатор: express_kyrs         https://magentaflower.ru/express-course
  if (form.hasClass("form-page-231")) {
    form.attr('data-yareach', 'express_kyrs');
  }
  // Базовый курс	    идентификатор: base_kyrs            https://magentaflower.ru/base-course
  if (form.hasClass("form-page-233")) {
    form.attr('data-yareach', 'base_kyrs');
  }
  // Коммерческий	    идентификатор: commerce_kyrs        https://magentaflower.ru/commerce-floristic
  if (form.hasClass("form-page-234")) {
    form.attr('data-yareach', 'commerce_kyrs');
  }
  // Профпереподготовка	идентификатор: levelup_kyrs	        https://magentaflower.ru/levelup-course
  if (form.hasClass("form-page-241")) {
    // form.attr('data-yareach', 'levelup_kyrs');
    form.attr('data-yareach', 'year_kurs');
  }

  // Индивидуальные	    идентификатор: personal_kyrs        https://magentaflower.ru/individualnyie-zanyatiya-po-floristike
  if (form.hasClass("form-page-243")) {
    form.attr('data-yareach', 'personal_kyrs');
  }
  
  // МК_Оформление_свадеб_стола  идентификатор: oformlenie_svadeb_stol https://magentaflower.ru/master-klass-po-floristike-svadebnoe-oformlenie-stola
  if (form.hasClass("form-page-266")) {
    form.attr('data-yareach', 'oformlenie_svadeb_stol');
  }
  
  // МК_Свадеб_арка     идентификатор: svadeb_arka              https://magentaflower.ru/master-klass-dlya-florista-svadebnaya-arka
  if (form.hasClass("form-page-267")) {
    form.attr('data-yareach', 'svadeb_arka');
  }
  
  // Курс_Весенние_букеты   идентификатор: kyrs_vesennie_byk    https://magentaflower.ru/kyrs-po-floristike-vesennie-buketyi-i-kompoziczii
  if (form.hasClass("form-page-272")) {
    form.attr('data-yareach', 'kyrs_vesennie_byk');
  }
  
  // МК_Свадебные_букеты    идентификатор: svadebnie_byketi     https://magentaflower.ru/kyrs-svadebnyie-buketyi
  if (form.hasClass("form-page-260")) {
    form.attr('data-yareach', 'svadebnie_byketi');
  }
  
  // МК_Коммерч_бук_Шерехина идентификатор: kom_byk_sherehina   https://magentaflower.ru/kommercheskie-buketyi-i-sovremennyie-vidyi-upakovki-buketa
  if (form.hasClass("form-page-280")) {
    form.attr('data-yareach', 'kom_byk_sherehina');
  }
  
  // Подарочные сертификаты идентификатор: zak_sertifikat       https://magentaflower.ru/sertifikaty
  if (form.hasClass("form-page-273")) {
    form.attr('data-yareach', 'zak_sertifikat');
  }
  
  // Расписание  идентификатор: zaya_raspisanie      https://magentaflower.ru/raspisanie-kursov
  if (form.hasClass("form-page-244")) {
    form.attr('data-yareach', 'zaya_raspisanie');
  }
  
  //   console.log(form.data('yareach'));
  
  if (response.success) {
    if (form.data('yareach') && typeof yaCounter49234408 != 'undefined') {
      yaCounter49234408.reachGoal(form.data('yareach'));
    }
  }
});