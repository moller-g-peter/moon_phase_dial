var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var num2str = date.toString();
// console.log(month);

if((month == 1 && date <= 20) || (month == 12 && date >=22)) {
  $('#zodiacSigns').append('<img id="Capricorn" src="img/Zodiac_capricorn.png" />');
    // console.log("capricorn");
  } else if ((month == 1 && date >= 21) || (month == 2 && date <= 18)) {
    $('#zodiacSigns').append('<img id="Aquarius" src="img/Zodiac_Aquarius.png" />');
    // console.log("aquarius");
  } else if((month == 2 && date >= 19) || (month == 3 && date <= 20)) {
    $('#zodiacSigns').append('<img id="Pisces" src="img/Zodiac_Pisces.png" />');
    // console.log("pisces");
  } else if((month == 3 && date >= 21) || (month == 4 && date <= 20)) {
    $('#zodiacSigns').append('<img id="Aries" src="img/Zodiac_Aries.png" />');
    // console.log("aries");
  } else if((month == 4 && date >= 21) || (month == 5 && date <= 20)) {
    $('#zodiacSigns').append('<img id="Taurus" src="img/Zodiac_Taurus.png" />');
    // console.log("taurus");
  } else if((month == 5 && date >= 21) || (month == 6 && date <= 20)) {
    $('#zodiacSigns').append('<img id="Gemini" src="img/Zodiac_Gemini.png" />');
    // console.log("gemini");
  } else if((month == 6 && date >= 22) || (month == 7 && date <= 22)) {
    $('#zodiacSigns').append('<img id="Cancer" src="img/Zodiac_Cancer.png" />');
    // console.log("cancer");
  } else if((month == 7 && date >= 23) || (month == 8 && date <= 23)) {
    $('#zodiacSigns').append('<img id="Leo" src="img/Zodiac_Leo.png" />');
    // console.log("leo");
  } else if((month == 8 && date >= 24) || (month == 9 && date <= 23)) {
    $('#zodiacSigns').append('<img id="Virgo" src="img/Zodiac_Virgo.png" />');
    // console.log("virgo");
  } else if((month == 9 && date >= 24) || (month == 10 && date <= 23)) {
    $('#zodiacSigns').append('<img id="Libra" src="img/Zodiac_Libra.png" />');
    // console.log("libra");
  } else if((month == 10 && date >= 24) || (month == 11 && date <= 22)) {
    $('#zodiacSigns').append('<img id="Scorpio" src="img/Zodiac_Scorpio.png" />');
    // console.log("scorpio");
  } else if((month == 11 && date >= 23) || (month == 12 && date <= 21)) {
    $('#zodiacSigns').append('<img id="Sagittarius" src="img/Zodiac_Sagittarius.png" />');
    // console.log("sagittarius");
  }


  if((month == 1)) {
    $('#monthName').append('<img id="Jan" src="img/Month_Jan.png" />');
  } else if((month == 2)) {
    $('#monthName').append('<img id="Feb" src="img/Month_Feb.png" />');
  } else if((month == 3)) {
    $('#monthName').append('<img id="Mar" src="img/Month_Mar.png" />');
  } else if((month == 4)) {
    $('#monthName').append('<img id="Apr" src="img/Month_Apr.png" />');
  } else if((month == 5)) {
    $('#monthName').append('<img id="May" src="img/Month_May.png" />');
  } else if((month == 6)) {
    $('#monthName').append('<img id="Jun" src="img/Month_Jun.png" />');
  } else if((month == 7)) {
    $('#monthName').append('<img id="Jul" src="img/Month_Jul.png" />');
  } else if((month == 8)) {
    $('#monthName').append('<img id="Aug" src="img/Month_Aug.png" />');
  } else if((month == 9)) {
    $('#monthName').append('<img id="Sep" src="img/Month_Sep.png" />');
  } else if((month == 10)) {
    $('#monthName').append('<img id="Oct" src="img/Month_Oct.png" />');
  } else if((month == 11)) {
    $('#monthName').append('<img id="Nov" src="img/Month_Nov.png" />');
  } else if((month == 12)) {
    $('#monthName').append('<img id="Dec" src="img/Month_Dec.png" />');
  }



// for (var i = 0; i < num2str.length; i++) {
//   console.log("sdfsdf",num2str[i]);
// }





console.log("num2str: ", num2str);
if (num2str > 0 && num2str < 10) {
  // console.log("sdfs");
  $('#numbersLeft').append('<img id="zero" src="img/Date_0.png" />');
  if (num2str == 1) {
    $('#numbersRight').append('<img id="one" src="img/Date_1.png" />');
  } else if (num2str == 2){
    $('#numbersRight').append('<img id="two" src="img/Date_2.png" />');
  } else if (num2str == 3){
    $('#numbersRight').append('<img id="three" src="img/Date_3.png" />');
  } else if (num2str == 4){
    $('#numbersRight').append('<img id="four" src="img/Date_4.png" />');
  } else if (num2str == 5){
    $('#numbersRight').append('<img id="five" src="img/Date_5.png" />');
  } else if (num2str == 6){
    $('#numbersRight').append('<img id="six" src="img/Date_6.png" />');
  } else if (num2str == 7){
    $('#numbersRight').append('<img id="seven" src="img/Date_7.png" />');
  } else if (num2str == 8){
    $('#numbersRight').append('<img id="eight" src="img/Date_8.png" />');
  } else if (num2str == 9){
    $('#numbersRight').append('<img id="nine" src="img/Date_9.png" />');
  }
} else if (num2str == 10){
  $('#numbersLeft').append('<img id="one" src="img/Date_1.png" />');
  $('#numbersRight').append('<img id="zero" src="img/Date_0.png" />');

} else if (num2str == 11){
  $('#numbersLeft').append('<img id="one" src="img/Date_1.png" />');
  $('#numbersRight').append('<img id="one" src="img/Date_1.png" />');

} else if (num2str == 12){
  $('#numbersLeft').append('<img id="one" src="img/Date_1.png" />');
  $('#numbersRight').append('<img id="two" src="img/Date_2.png" />');

} else if (num2str == 13){
  $('#numbersLeft').append('<img id="one" src="img/Date_1.png" />');
  $('#numbersRight').append('<img id="three" src="img/Date_3.png" />');

} else if (num2str == 14){
  $('#numbersLeft').append('<img id="one" src="img/Date_1.png" />');
  $('#numbersRight').append('<img id="four" src="img/Date_4.png" />');

} else if (num2str == 15){
  $('#numbersLeft').append('<img id="one" src="img/Date_1.png" />');
  $('#numbersRight').append('<img id="five" src="img/Date_5.png" />');

} else if (num2str == 16){
  $('#numbersLeft').append('<img id="one" src="img/Date_1.png" />');
  $('#numbersRight').append('<img id="six" src="img/Date_6.png" />');

} else if (num2str == 17){
  $('#numbersLeft').append('<img id="one" src="img/Date_1.png" />');
  $('#numbersRight').append('<img id="seven" src="img/Date_7.png" />');

} else if (num2str == 18){
  $('#numbersLeft').append('<img id="one" src="img/Date_1.png" />');
  $('#numbersRight').append('<img id="eight" src="img/Date_8.png" />');

} else if (num2str == 19){
  $('#numbersLeft').append('<img id="one" src="img/Date_1.png" />');
  $('#numbersRight').append('<img id="nine" src="img/Date_9.png" />');

} else if (num2str == 20){
  $('#numbersLeft').append('<img id="two" src="img/Date_2.png" />');
  $('#numbersRight').append('<img id="zero" src="img/Date_0.png" />');

} else if (num2str == 21){
  $('#numbersLeft').append('<img id="two" src="img/Date_2.png" />');
  $('#numbersRight').append('<img id="one" src="img/Date_1.png" />');

} else if (num2str == 22){
  $('#numbersLeft').append('<img id="two" src="img/Date_2.png" />');
  $('#numbersRight').append('<img id="two" src="img/Date_2.png" />');

} else if (num2str == 23){
  $('#numbersLeft').append('<img id="two" src="img/Date_2.png" />');
  $('#numbersRight').append('<img id="three" src="img/Date_3.png" />');

} else if (num2str == 24){
  $('#numbersLeft').append('<img id="two" src="img/Date_2.png" />');
  $('#numbersRight').append('<img id="four" src="img/Date_4.png" />');

} else if (num2str == 25){
  $('#numbersLeft').append('<img id="two" src="img/Date_2.png" />');
  $('#numbersRight').append('<img id="five" src="img/Date_5.png" />');

} else if (num2str == 26){
  $('#numbersLeft').append('<img id="two" src="img/Date_2.png" />');
  $('#numbersRight').append('<img id="six" src="img/Date_6.png" />');

} else if (num2str == 27){
  $('#numbersLeft').append('<img id="two" src="img/Date_2.png" />');
  $('#numbersRight').append('<img id="seven" src="img/Date_7.png" />');

} else if (num2str == 28){
  $('#numbersLeft').append('<img id="two" src="img/Date_2.png" />');
  $('#numbersRight').append('<img id="eight" src="img/Date_8.png" />');

} else if (num2str == 29){
  $('#numbersLeft').append('<img id="two" src="img/Date_2.png" />');
  $('#numbersRight').append('<img id="nine" src="img/Date_9.png" />');

} else if (num2str == 30){
  $('#numbersLeft').append('<img id="three" src="img/Date_3.png" />');
  $('#numbersRight').append('<img id="zero" src="img/Date_0.png" />');

} else if (num2str == 31){
  $('#numbersLeft').append('<img id="three" src="img/Date_3.png" />');
  $('#numbersRight').append('<img id="one" src="img/Date_1.png" />');
}





























