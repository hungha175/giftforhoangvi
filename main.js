
$(document).ready(
  button = document.getElementsByClassName('button-64') 
  );
  function start() {
    document.getElementById('title').innerText='CHỜ CHÚT NHÉ! SẼ CÓ BẤT NGỜ ĐẤY'
    //var countDownDate = new Date("2023  Jan 05 11:00:00").getTime();// 2023 Feb 26 00:00:00
    var countDownDate = new Date('2023-02-22 23:15:00'.replace(/-/g, "/")).getTime();
    var sayTime = new Date("2023 Feb 25 23:14:49").getTime(); //2023 Feb 25 23:59:49 
  
    // Update the count down every 1 second
    var x = setInterval(function () {
      var audio = new Audio("./countdownsound.mp3");
      // Get today's date and time
      var now = new Date().getTime();
  
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
  
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the result in the element with id="demo"
      document.getElementById("day").innerHTML = "<span>" + days + "</span>Ngày";
      document.getElementById("hour").innerHTML = "<span>" + hours + "</span>Giờ";
      document.getElementById("minute").innerHTML = "<span>" + minutes + "</span>Phút";
      document.getElementById("second").innerHTML = "<span>" + seconds + "</span>Giây";
      // If the count down is finished, write some text
      if (now - (now % 1000) == sayTime) {
  
        audio.play();
      }
      if (distance <= 0) {
        clearInterval(x);
        document.getElementById("container").innerHTML = "<h2><br> <span>HAPPY BIRTHDAY BẠN IU</span></h2><br/><center><h2>Đỗ Hoàng Vi</h2></center>";
        var audio = new Audio("./song.mp3");
        audio.play();
        Run();
  
      }
  
    }, 1000);
  }

