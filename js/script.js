"use strict"; //qattiy rejim yangi kodlar uchun yani eski kodlar ishlamaydi hato chiqarib beradi//

// alert("Hello Nurik")

// ///////////////////////////////////////////////////

// let number = 10;// o'zgaradigan o'zgaruvchi MODERN//
// const borderColor = "red";//o'zgartirish abyekt orqali qiyinroq o'zgaradigan o'zgaruvchi//
// console.log(number)


// number =20;
// console.log(number)  

// ///////////////////////////////////////////////////

// let number = 10; //o'zgaradigan o'zgaruvchi MODERN//
// const borderColor = "red"; //o'zgartirish abyekt orqali qiyinroq o'zgaradigan o'zgaruvchi//

// console.log(borderColor)//?????????????

// const person ={ //o'zgartirish abyekt orqali qiyinroq o'zgaradigan o'zgaruvchi//
//     name: "Nur"
// }

// console.log(person)//  

// person.name ="Nurik"
// console.log(person)

////////////////////////////////////////////////////////////

// console.log(clientName);?????????????????????

// console.log(clientName);// varda hatoni ko'rsatmaydi o'zgaruvchini o'zidan oldingi qatorda chaaqirib bo'lmaydi
// var clientName = "Nurik";
// console.log(clientName);

////////////////////////////////////////////////////

//Number
// let number = 5.6;// data type number//
// console.log(-8 / 0); //infinity
// console.log("Nurik" * 8) //not a number yani NaN
///////////////////////////////////////////////////

//String
// const clientName = "Nurik";

///////////////////////////////////////////////////
//Boolean
// const isMarried = false;
// const isCircleEarth = true;
///////////////////////////////////////////////////

//NULL
//null bu ReferenceError: clientAge is not defined yani yo'q o'zgaruvchini chaqirish yoki o'zgaruvchini elon qilmasdan chaqirilgan paytida NULL chiqadi
// console.log(clientAge);
///////////////////////////////////////////////////

//UNDEFINED 
//UNDEFINED bu ReferenceError:  is not defined yani o'zgaruvchi bor lekin hech qanday qiymat berilmagan bo'lsa undefiend chiqadi yali o'zgaruvchi hech qanday qiymatga teng emas bolgan payti chiqadi
// let und;
// console.log(und)
///////////////////////////////////////////////////

// OBJECT
// const thief = {
//    // key bu kalit so'zlar yani age, jacket, islong // value bu qiymatlari degani//
//     age: 30, //number malumot
//     jacket: "black",//string malumot
//     isLong: false,//boolean
// }
// console.log(thief.jacket)
// console.log(thief.age)
// console.log(thief)
/////////////////////////////////////////////////

//ARRAY
// array massiv hissoblanadi o'zi key beradi 0 dan boshlab masalan red0 black1 green2 10,3 []4 {}5 qilib yani son bilan noldan sanab array ichidagi malumotlarga key yani kalit berib chiqadi
// const colors = ["red", "black", "green", 10, [], {}];
// console.log(colors[2]);

///////////////////////////////////////////////////

//ALERT
// alert("Hello JavaScript");
// const place = confirm("Are  you here?");
// console.log(place)

// const currentPlace =prompt("Where are you?", "Nurik" )
// // console.log(currentPlace)
// console.log(typeof currentPlace);// bu string malumot turi yani typof malutni qanday turga ega ekanligini bilib beradi (ESLATMA: cliendan bizga faqat matn yani stringmalumot turi qaytadi har doim inputdaham boshqasidaham clientdan matnli malumot keladi)

// const age = prompt("How old are you?", "18")
// // console.log(age)
// console.log( age +10)// "18 (yani ege)" + 10 (yani number) = 1810 bo'ladi yani string malumot bilan number malumot alohida alohida qo'shiladi


// const age = +prompt("How old are you?", "18")
// // console.log(age)
// // console.log( age + 10)// "18 (yani ege)" + 10 (yani number) = 28 bo'ladi yani string malumot bilan number malumot bir biriga pilus qilib qo'shiladi propmt va +promptni farqi shu 
// console.log( typeof age)// va yana +prompt orqali string bilan numberni bir biriga realni to'g'ri qo'shib togri javobni olishimiz mumkun ekan

// const favoriteColor =[];// massiv malumot turi hissoblanmaydi massiv abjectga yaqin funksya hissoblanadi yani massivni malumot turi abjectga teng hissoblanadi consol logda

// favoriteColor[0] = prompt("What is your favorite color #1", "" )
// favoriteColor[1] = prompt("What is your favorite color #2", "" )
// favoriteColor[2] = prompt("What is your favorite color #3", "" )

// // console.log(favoriteColor)
// console.log(typeof favoriteColor)

/////////////////////////////////////////////////////////////

//INTERPOLATSIYA

// const channel = prompt("What's your favorite youtuber?");
// // console.log("https://youtube.com/" + channel + "/videos");//eskisi
// console.log(`"https://youtube.com/${channel}`);//yangisi

// const user = "Nurik"
// const job = "JavaScript devoloper"

// console.log(`User name is ${user}, he is ${job} `)

// const client = prompt("Hello")// prompt va alertlar run codderda ishlamaydi faqat browserda ishlaydi
// console.log("client")
///////////////////////////////////////////////////////////////
//OPERATORLAR
//INCR, DECR
// console.log("Nurik " + "Yorov");
////////////////////////////////////////////////////////////
// let incr = 10;
// let decr = 10;

// incr++;// 1 ni qo'shadi
// decr --;//1 ni ayiradi

// console.log(incr)
// console.log(decr)
///////////////////////////////////////////////////////////
// let incr = 10;
// let decr = 10;


// console.log(incr++)
// console.log(decr--)

// console.log(incr++)
// console.log(decr--)

// console.log(incr)
// console.log(decr)
/////////////////////////////////////////////////////////////
// let incr = 10;
// let decr = 10;

// console.log(++incr)
// console.log(--decr)
//////////////////////////////////////////////////////////////
// console.log(5 % 2)
// console.log(10 % 3)
// console.log(5 * 5 == 25) //ikkita teng faqat qiymat bilan slishtiradi
// console.log(5 * 5 === "25") //uchta tengni farqi malumot turiniham solishtiradi
// console.log(6 + "9")//69
// console.log(6 + 9)//15

// && = va degan belgi || yoki degan belgi

// const isAge = true; &&yani va da hammasi truu bolishi kerak
// const isClose =true;
// console.log(isAge && isClose)

// const isAge = true; ||yokida bitta faslse bolsaham faqat falseni chiqaradi
// const isClose =false;
// const isChecked=false;

// console.log(isAge || isClose || isChecked)

// const isAge = true;
// const isClose =true;
// const isChecked=false;

// console.log(isAge && isClose && !isChecked)//undov bolsa turuni qaytarib beradi ! teskarisiga o'girib beradi

// console.log(2 + 2 * 2 === 8);//false birinchi ko'patiradi
// console.log(2 + 2 * 2 !== 8);
