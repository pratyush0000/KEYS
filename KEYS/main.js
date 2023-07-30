$(document).ready(function () {
  // Existing code for dark mode toggle
  $(".radio-btn").click(function () {
    $(".radio-inner").toggleClass("active");
    $("body").toggleClass("dark");
    $("header").toggleClass("dark");
  });

  // Typewriter simulation
  let inputField = $(".input-field");
  let line1 = $(".line1");
  let line2 = $(".line2");
  let line3 = $(".line3");
  let line4 = $(".line4");
  let line5 = $(".line5");
  let text1 = "";
  let text2 = "";
  let text3 = "";
  let text4 = "";
  let text5 = "";


  let currentIndex = 0;

  $(document).on("keydown", function (e) {
    let key = e.key;

    if (key === "Enter") {
      // If Enter key is pressed, clear the text in the input field
      //inputField.val("")==line1.val("");
      text5=line4.text();
      line5.text(text5);
      text4=line3.text();
      line4.text(text4);
      text3=line2.text();
      line3.text(text3);
      text2=line1.text();
      line2.text(text2);
      line1.text(text1);
      text1 = "";
      inputField.val("");
      currentIndex = 0;
    } else if (key === "Backspace") {
      // If Backspace key is pressed, remove the last character from text
      text1 = text1.slice(0, -1);
      currentIndex = text1.length;
      inputField.val(text1);
    } else if (key.length === 1) {
      // For all other keys, append the character to text
      if(text1.length>=48){
        text1=text1
      }
      else{
        text1 = text1.slice(0, currentIndex) + key + text1.slice(currentIndex);
        currentIndex++;
        inputField.val(text1);
      }
    }
  });
});