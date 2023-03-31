$(document).ready(function() {
   $(".alert").click(function() {
     $(".instruction1").addClass("none");
      $(".instruction2").removeClass("none");
  });
  $(".alert1").click(function() {
    $(".instruction2").addClass("none");
    $(".instruction1").removeClass("none");
  });
  $(".txt").click(function() {
    $(".instruction2").addClass("none");
    $(".first").removeClass("none");
  });
  $(".hair").click(function() {
    $(".first").addClass("none");
    $(".second").removeClass("none");
  });
  $(".eyebrows").click(function() {
    $(".second").addClass("none");
    $(".third").removeClass("none");
  });
  $(".eyes").click(function() {
    $(".third").addClass("none");
    $(".four").removeClass("none");
  });
  $(".ears").click(function() {
    $(".four").addClass("none");
    $(".five").removeClass("none");
  });
  $(".fangs").click(function() {
    $(".five").addClass("none");
    $(".six").removeClass("none");
  });
  $(".tongue").click(function() {
    $(".six").addClass("none");
    $(".seven").removeClass("none");
  });
  $(".vamp7").click(function() {
    $(".seven").addClass("none");
    $(".eight").removeClass("none");
  });
  $(".sunn").click(function() {
    $(".eight").addClass("none");
    $(".nine").removeClass("none");
  });
  $(".vamp8").click(function() {
    $(".eight").addClass("none");
    $(".ten").removeClass("none");
  });
  $(".fire").click(function() {
    $(".ten").addClass("none");
    $(".eleven").removeClass("none");
  });
  $(".sculll").click(function() {
    $(".eleven").addClass("none");
    $(".end").removeClass("none");
  });
  $(".vin").click(function() {
    location.reload();
    $(". nine").addClass("none");
    $(".instruction1").removeClass("none");
  });
  $(".lose").click(function() {
    location.reload();
    $(".end").addClass("none");
    $(".instruction1").removeClass("none");
  });
});
