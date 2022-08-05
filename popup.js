status = "Mr.Linhkool";
var a = new Array(),
  n = "";
a[1] = "H";
a[2] = "ả";
a[3] = "o";
a[4] = " ";
a[5] = "i";
a[6] = "u";
a[7] = " ";
a[8] = "a";
a[9] = "n";
a[10] = "h";
a[11] = " ";
a[12] = "Đ";
a[13] = "ỗ";
a[14] = " ";
a[15] = "n";
a[16] = "h";
a[17] = "i";
a[18] = "ề";
a[19] = "u";
a[20] = "♥";
a[21] = "♥";
a[22] = "♥";
a[23] = "♥";
a[24] = "♥";
function one() {
  t = document.f.txt.value;
  j = t.length;
  if (j > 0) {
    for (var i = 1; i <= j; i++) {
      n = n + a[i];
      if (i == 25) {
        document.f.txt.value = "";
        n = "";
      }
    }
  }
  document.f.txt.value = n;
  n = "";
  setTimeout("one()", 1);
}
// function s() {}
function on() {
  one();
}

function Yeu() {
  new Audio("sound/Swish1.mp3").play();
  $("#divResult").fadeOut(0);
  $("#divResult").html(
    "</br><h2>Haha Hảo đừng có chối nữa nhé!<img src='img/3.gif'</img></h2>"
  );
  $("#divResult").fadeIn(2000, function () {
    new Audio("sound/Swish1.mp3").play();
    $("#divResult2").fadeOut(0);
    $("#divResult2").html(
      "<h2>Anh Đỗ biết hết ròi nhaaa :v<img src='img/1.gif'/></h2></br>"
    );

    $("#divResult2").fadeIn(3000, function () {
      new Audio("sound/Swish1.mp3").play();
      $("#divResult3").fadeOut(0);
      $("#divResult3").html(
        "<h2>Thật ra thì anh Đỗ rất muốn... <img src='img/2.gif'/></h2></br>"
      );

      $("#divResult3").fadeIn(5000, function () {
        new Audio("sound/Swish1.mp3").play();
        $("#divResult4").fadeOut(0);
        $("#divResult4").html(
          "<h2>2 chúng ta có thể kết nối lại gần với nhau hơn<img src='img/2 (1).gif'/></h2></br>"
        );

        $("#divResult4").fadeIn(6000, function () {
          new Audio("sound/Swish1.mp3").play();
          $("#divResult5").fadeOut(0);
          $("#divResult5").html(
            "<h2>Cảm ơn Hảo đã coi hết những gì anh Đỗ làm.<img src='img/4.gif'/></h2></br>"
          );

          $("#divResult5").fadeIn(3000, function () {
            new Audio("sound/Swish1.mp3").play();
            $("#divResult6").fadeOut(0);
            $("#divResult6").html(
              "<h2>Nhớ nhắn cho anh Đỗ qua f.b này để anh Đỗ biết nhé! <a href='https://www.facebook.com/profile.php?id=100006467926989'>Send message to Đỗ</a> <img src='img/4.gif'/></h2></br>"
            );
            $("#divResult6").fadeIn(2000);
          });
        });
      });
    });
  });
}
