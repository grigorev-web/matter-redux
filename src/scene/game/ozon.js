jQuery(document).ready(function ($) {
  var call, date, operator, url;
  date = new Date();
  date = date.toLocaleDateString() + " " + date.toLocaleTimeString();
  var cityUrl = "nizhny-novgorod";
  if (!("GetActivePhoneCall" in window.external)) {
    alert("Ошибка! Нет объекта звонка");
    return;
  } else call = window.external.GetActivePhoneCall();
  operator = window.external.GetAgent.LoginName.split("\\")[1];
  $(".field_phone").val("8" + call.Address);
  $(".field_fio").val(call.Property("NUMBER1"));
  $(".field_date").val(date);
  $(".field_number").val(call.Property("NUMBER"));
  $(".field_operator").val(operator);
  var city = call.Property("NUMBER1");
  var nn,ekb,tumen,samara;
  nn = " Нижний Новгород : Заработная плата, одна из самых высоких по рынку и составляет: от 52 800 рублей. Склад находится по адресу: Кудьминская промзона, улица Индустриальная, 13 График работы сменный: 2 в день с 8:00 до 20:00/1 выходной/2 в ночь с 20:00 до 08:00/3 выходных ";
  tumen =" Тюмень : Заработная плата, одна из самых высоких по рынку и составляет: от 35 500 рублей. Склад находится по адресу: ул. Широтная, 200с56 График работы сменный: два через два с 20.00 до 8.00 За ночные смены дополнительная надбавка 20%.";
  ekb = " Екатеринбург: Заработная плата, одна из самых высоких по рынку и составляет: от 54 000 рублей. Склад находится по адресу: г. Верхняя Пышма, поселок Залесье, Индустриальный проезд, 1 График работы сменный: два через два с 22:00 до 10:00 или 2 в день/2 выходных /2 в ночь /2 выходных с 22:00 до 10:00 и с 10:00 до 22:00";
  samara = " Самара: Заработная плата, одна из самых высоких по рынку и составляет: от 50 600 рублей. Склад находится по адресу: Кудьминская промзона, улица Индустриальная, 13 График работы сменный: 2 день с 9:00 до 21:00/2 ночь с 21:00 до 9:00/4 выходных ";
  switch (city) {
    case "Нижний Новгород":
      $("#field_city").html(nn);

      break;
    case "Тюмень":
      $("#field_city").html(tumen);
      break;
    case "Екатеринбург":
      $("#field_city").html(ekb);
      break;
    case "Самара":
      $("#field_city").html(samara);
      break;
    default:
      $("#field_city").html(call.Property("NUMBER2"));
      break;
  }
  url ="https://job.ozon.ru/"+cityUrl+"/sklad/?utm_medium=cpc&utm_source=Solonicyn_5&utm_operator=";
  url += operator;
  $("#qhr").click(function (e) {new ActiveXObject("Shell.Application").ShellExecute("chrome", url);});
});
