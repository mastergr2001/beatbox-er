document.getElementById("pause").classList.add("on-bg");

function play_active() {
  document.getElementById("play").classList.remove("on-bg");
  document.getElementById("pause").classList.remove("on-bg");
  document.getElementById("clear").classList.remove("on-bg");
}

function inactive() {
  document.getElementById("play").classList.add("on-bg");
  document.getElementById("pause").classList.remove("on-bg");
  document.getElementById("clear").classList.remove("on-bg");
}

function pause_acitve() {
  document.getElementById("play").classList.remove("on-bg");
  document.getElementById("pause").classList.add("on-bg");
  document.getElementById("clear").classList.remove("on-bg");
}

function clear_active() {
  document.getElementById("play").classList.remove("on-bg");
  document.getElementById("clear").classList.add("on-bg");
  document.getElementById("pause").classList.remove("on-bg");
}

function change_value_to_default() {
  document.getElementById("b1").options[0].selected = true;
  document.getElementById("b2").options[0].selected = true;
  document.getElementById("b3").options[0].selected = true;
  document.getElementById("b4").options[0].selected = true;
  document.getElementById("b5").options[0].selected = true;
  document.getElementById("b6").options[0].selected = true;
  //   document.getElementById("b7").options[0].selected = true;
}

// -----------------------------------------------------------------------------------------------------------------
document.getElementById("b1").addEventListener("change", function () {
  document.getElementById("play").classList.remove("on-bg");
  document.getElementById("clear").classList.remove("on-bg");
  document.getElementById("pause").classList.add("on-bg");

  var usr_select = document.getElementById("b1");
  var x = usr_select.value;
  var audio_name = x + ".wav";
  var beat1 = new Audio("sounds/" + audio_name);
  beat1.load();

  beat1.addEventListener("ended", function () {
    inactive();
  });

  document.getElementById("play").addEventListener("click", function () {
    play_active();
    beat1.load();
    beat1.play();
  });

  document.getElementById("pause").addEventListener("click", function () {
    pause_acitve();
    beat1.load();
    beat1.pause();
  });

  document.getElementById("clear").addEventListener("click", function () {
    change_value_to_default();
    clear_active();
    location.reload();
  });
});
// -----------------------------------------------------------------------------------------------------------------
document.getElementById("b2").addEventListener("change", function () {
  document.getElementById("play").classList.remove("on-bg");
  document.getElementById("clear").classList.remove("on-bg");
  document.getElementById("pause").classList.add("on-bg");

  var usr_select = document.getElementById("b2");
  var x = usr_select.value;
  var audio_name = x + ".wav";
  var beat2 = new Audio("sounds/" + audio_name);

  beat2.addEventListener("ended", function () {
    inactive();
  });

  document.getElementById("play").addEventListener("click", function () {
    play_active();
    beat2.load();
    beat2.play();
  });

  document.getElementById("pause").addEventListener("click", function () {
    pause_acitve();
    beat2.load();
    beat2.pause();
  });

  document.getElementById("clear").addEventListener("click", function () {
    change_value_to_default();
    clear_active();
    location.reload();
  });
});

// -----------------------------------------------------------------------------------------------------------------
document.getElementById("b3").addEventListener("change", function () {
  document.getElementById("play").classList.remove("on-bg");
  document.getElementById("clear").classList.remove("on-bg");
  document.getElementById("pause").classList.add("on-bg");

  var usr_select = document.getElementById("b3");
  var x = usr_select.value;
  var audio_name = x + ".wav";
  var beat3 = new Audio("sounds/" + audio_name);

  beat3.addEventListener("ended", function () {
    inactive();
  });

  document.getElementById("play").addEventListener("click", function () {
    play_active();
    beat3.load();
    beat3.play();
  });

  document.getElementById("pause").addEventListener("click", function () {
    pause_acitve();
    beat3.load();
    beat3.pause();
  });

  document.getElementById("clear").addEventListener("click", function () {
    change_value_to_default();
    clear_active();
    location.reload();
  });
});

// -----------------------------------------------------------------------------------------------------------------
document.getElementById("b4").addEventListener("change", function () {
  document.getElementById("play").classList.remove("on-bg");
  document.getElementById("clear").classList.remove("on-bg");
  document.getElementById("pause").classList.add("on-bg");

  var usr_select = document.getElementById("b4");
  var x = usr_select.value;
  var audio_name = x + ".wav";
  var beat4 = new Audio("sounds/" + audio_name);

  beat4.addEventListener("ended", function () {
    inactive();
  });

  document.getElementById("play").addEventListener("click", function () {
    play_active();
    beat4.load();
    beat4.play();
  });

  document.getElementById("pause").addEventListener("click", function () {
    pause_acitve();
    beat4.load();
    beat4.pause();
  });

  document.getElementById("clear").addEventListener("click", function () {
    change_value_to_default();
    clear_active();
    location.reload();
  });
});

// -----------------------------------------------------------------------------------------------------------------
document.getElementById("b5").addEventListener("change", function () {
  document.getElementById("play").classList.remove("on-bg");
  document.getElementById("clear").classList.remove("on-bg");
  document.getElementById("pause").classList.add("on-bg");

  var usr_select = document.getElementById("b5");
  var x = usr_select.value;
  var audio_name = x + ".wav";
  var beat5 = new Audio("sounds/" + audio_name);

  beat5.addEventListener("ended", function () {
    inactive();
  });

  document.getElementById("play").addEventListener("click", function () {
    play_active();
    beat5.load();
    beat5.play();
  });

  document.getElementById("pause").addEventListener("click", function () {
    pause_acitve();
    beat5.load();
    beat5.pause();
  });

  document.getElementById("clear").addEventListener("click", function () {
    change_value_to_default();
    clear_active();
    location.reload();
  });
});

// -----------------------------------------------------------------------------------------------------------------
document.getElementById("b6").addEventListener("change", function () {
  document.getElementById("play").classList.remove("on-bg");
  document.getElementById("clear").classList.remove("on-bg");
  document.getElementById("pause").classList.add("on-bg");

  var usr_select = document.getElementById("b6");
  var x = usr_select.value;
  var audio_name = x + ".wav";
  var beat6 = new Audio("sounds/" + audio_name);

  beat6.addEventListener("ended", function () {
    inactive();
  });

  document.getElementById("play").addEventListener("click", function () {
    play_active();
    beat6.load();
    beat6.play();
  });

  document.getElementById("pause").addEventListener("click", function () {
    pause_acitve();
    beat6.load();
    beat6.pause();
  });

  document.getElementById("clear").addEventListener("click", function () {
    change_value_to_default();
    clear_active();
    location.reload();
  });
});

// -----------------------------------------------------------------------------------------------------------------
// document.getElementById("b7").addEventListener("change", function () {
//   document.getElementById("play").classList.remove("on-bg");
//   document.getElementById("clear").classList.remove("on-bg");
//   document.getElementById("pause").classList.add("on-bg");

//   var usr_select = document.getElementById("b6");
//   var x = usr_select.value;
//   var audio_name = x + ".wav";
//   var beat7 = new Audio("sounds/" + audio_name);

//   beat7.addEventListener("ended", function () {
//     pause_acitve();
//   });

//   document.getElementById("play").addEventListener("click", function () {
//     play_active();
//     beat7.load();
//     beat7.play();
//   });

//   document.getElementById("pause").addEventListener("click", function () {
//     pause_acitve();
//     beat7.load();
//     beat7.pause();
//   });

//   document.getElementById("clear").addEventListener("click", function () {
//     change_value_to_default();
//     clear_active();
//     location.reload();
//   });
// });
// -----------------------------------------------------------------------------------------------------------------
