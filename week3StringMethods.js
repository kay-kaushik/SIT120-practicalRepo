var string1 = "Kartik's project";
// first method  len
console.log(string1);
var len = string1.length;
console.log(len);

// second method slice
var random_txt =  "Hi my name is kartik Kaushik";
var name_from_txt = random_txt.slice(14,21);
console.log(name_from_txt);

//third method replace
var txt_replace = "Nasa is a rocket company";
var new_replace = txt_replace.replace("Nasa","Space X");
console.log(new_replace);

//fourth method uppercase

var ltext = " hi, how are you ?"
var uppercaseApplied = ltext.toUpperCase();
console.log(uppercaseApplied);

//fifth method lowercase

var utext = " HI, HOW ARE YOU?"
var lcaseapplied = utext.toLowerCase();
console.log(lcaseapplied);

//sixth method concat

var txt1 = "Kartik" ;
var txt2 = " Kaushik"; 
var fullName = txt1.concat("",txt2);
console.log(fullName);

// seventh method trim

var rndmTxt = "          hi        ";
var trimTxt = rndmTxt.trim();
console.log(trimTxt);

// eighth method charAt

var txt_extrct = "Kartik Kaushik"
var xtrctd = txt_extrct[2];
console.log(xtrctd);