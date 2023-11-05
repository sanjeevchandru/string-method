
document.write("1.lenght of string"+"<br>");
document.write("----------------------"+"<br>");
var a="sanjeev";
document.write("The string :"+a+"<br>");
x=a.length;
document.write(x+"<br><br>");

document.write("2.slice of string"+"<br>");
document.write("----------------------"+"<br>");
var a="chandru";
document.write("The string :"+a+"<br>");
x=a.slice(2,5);
document.write(x+"<br><br>");


document.write("3.substring of string"+"<br>");
document.write("----------------------"+"<br>");
var a="chandru";
document.write("The string :"+a+"<br>");
x=a.substring(2,5);
document.write(x+"<br><br>");


document.write("4.substr of string"+"<br>");
document.write("----------------------"+"<br>");
document.write("it's return new update string"+"<br>")
var a="chandru";
document.write("The string :"+a+"<br>");
x=a.substr(2,4);
document.write(x+"<br><br>");

document.write("5.replace of string"+"<br>");
document.write("----------------------"+"<br>");
document.write("it's change the string"+"<br>")
var a="chandru";
document.write("The string :"+a+"<br>");
x=a.replace("chandru","sanjeev");       //replace(old-string,new-string);
document.write(x+"<br><br>");


document.write("6.replaceAll of string"+"<br>");
document.write("----------------------"+"<br>");
// document.write("it's return new update string"+"<br>")
var a="hi am hi sanjeev";
document.write("The string :"+a+"<br>");
x=a.replaceAll("hi","hello");
document.write(x+"<br><br>");



document.write("7.toUpperCase of string"+"<br>");
document.write("----------------------"+"<br>");
// document.write("it's return new update string"+"<br>")
var a="chandru";
document.write("The string :"+a+"<br>");
x=a.toUpperCase();
document.write(x+"<br><br>");


document.write("8.toLowerCase of string"+"<br>");
document.write("----------------------"+"<br>");
// document.write("it's return new update string"+"<br>")
var a="SANJEEV";
document.write("The string :"+a+"<br>");
x=a.toLowerCase();
document.write(x+"<br><br>");


document.write("9.concat of string"+"<br>");
document.write("----------------------"+"<br>");
// document.write("it's return new update string"+"<br>")
var a="chandru";
document.write("The string :"+a+"<br>");
x=a.concat("sanjeev");
document.write(x+"<br><br>");


document.write("10.trim of string"+"<br>");
document.write("----------------------"+"<br>");
document.write("it's removes whitespace from both sides of a string."+"<br>")
var a="     chandru     ";
document.write("The string :"+a+"<br>");
x=a.trim();
document.write(x+"<br><br>");


document.write("11.charAt of string"+"<br>");
document.write("----------------------"+"<br>");
document.write("it's RETURN  charecter of to mention character index position"+"<br>");
var a="CHANDRU";
document.write("The string :"+a+"<br>");
x=a.charAt(2);
document.write(x+"<br><br>");


document.write("12.charCodeAt of string"+"<br>");
document.write("----------------------"+"<br>");
document.write("it's return the character code of to mention character ."+"<br>");
var a="CHANDRU";
document.write("The string :"+a+"<br>");
x=a.charCodeAt(4);
document.write(x+"<br><br>");


document.write("13.formCharCode of string"+"<br>");
document.write("----------------------"+"<br>");
document.write("it's return character of related character code."+"<br>");
// var a=(83,65,78,74,69,69,85);
document.write("The code :"+"83,65,78,74,69,69,86"+"<br>");
x=String.fromCharCode(83,65,78,74,69,69,86);
document.write(x+"<br><br>");


document.write("14.split of string"+"<br>");
document.write("----------------------"+"<br>");
document.write("it's return split the character separate with comma"+"<br>");
var a=("kathir");
document.write("The string :"+a+"<br>");
x=a.split("");
document.write(x+"<br><br>");



document.write("15.indexOf of string"+"<br>");
document.write("----------------------"+"<br>");
document.write("it's return starting index position of word or character"+"<br>");
var a=("anbu is a handsome boy");
document.write("The string :"+a+"<br>");
x=a.indexOf("a");
document.write(x+"<br><br>");



document.write("16.lastIndexOf of string"+"<br>");
document.write("----------------------"+"<br>");
document.write("it's return before index position of to mention a word or character"+"<br>");
var a=("nice to meet you");
document.write("The string:"+a+"<br>");
x=a.lastIndexOf("e");
document.write(x+"<br><br>");



document.write("17.includes of string"+"<br>");
document.write("----------------------"+"<br>");
document.write("includes() is retrun boolean value of check the character is true or false"+"<br>");
var a=("sanjeev is temper boy");
document.write("The string :"+a+"<br>");
x=a.includes("is");
document.write(x+"<br><br>");