jQuery(document).ready(function ($) {
  $("#qhr").click(function (e) {
    var url ="https://job.ozon.ru/tyumen/sklad/?utm_medium=cpc&utm_source=Solonicyn_5";
    new ActiveXObject("Shell.Application").ShellExecute("chrome", url);
  });
  $(".field_phone").val("8" + window.external.GetActivePhoneCall().Address);
  $(".field_fio").val(window.external.GetActivePhoneCall().Property("NUMBER1"));
  $(".field_city").val(window.external.GetActivePhoneCall().Property("NUMBER2"));
  $(".field_date").val(new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString());
  $(".field_number").val(window.external.GetActivePhoneCall().Property("NUMBER"));
  $(".field_operator").val($_GET("AGENT").split("\\")[1]);
  
  
  function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + "=([^&=]+)"));
    return s ? s[1] : false;
  }
});
