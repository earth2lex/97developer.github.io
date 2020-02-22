// // alert("hello, world");

// let name = "sola";
// let age = 44;

// console.log(name, age);
// console.log(name[3]);
// console.log(name.length);
// let ninjas = ["web", "rake", "mayo"];
// let jas = ninjas.join(' ');
// console.log(jas);
// let email = "lexsola727@gmail.com";
// let result = email.includes("@");
// console.log(result);
//  for (let i = 0; i <= 10; i++){
//  	console.log('in loop: '+i);
//  }


//  let teams = ['barca', 'madrid', 'united', 'bayern'];
//  for( let i =0; i<=3;i++){
//  	// console.log(teams[i]);
//  	let html =`<div><h2>${teams[i]}</h2></div>`;
//  	console.log(html);	
//  }

//  let i = 0;

//  while(i<5){
//  	console.log(i);
//  	i++;
//  }
// i = 0;
//  do{
//  	console.log('this is ', i);
//  	i++;
//  }
//  while(i <0);

//  function lex() {
//  		// body...
//  		console.log('hello bich');
//  	}	

//  const messi = function(name='zaki'){
//  	console.log(`nigga i hate people who are ${name}`);
//  };
//  	messi('boom');


//  const hexi = function(radius){
//  	return 3.14 * radius**2;
//  };

//  const vol = function(hexi){
//  	return 40 * hexi;
//  };
//  const mirror = vol(24);
//  console.log(mirror);

//  const neymar = age => age * 5;
//  console.log(neymar(5));

//  console.log(Math);
//  const mayo=(5.7);
//  console.log(Math.round(mayo));

// const mee = function(meee){
//  	return meee * 8;
//  };

//  const hell = mee(8);
//  console.log(hell);	
//  // const random = Math.random();
//  // function wiz(){
//  // 	Math.round(random);
//  // }

//  // const messy = wiz();
//  // console.log(messy);
 
//  // 
//  // for ( i > 99; i++) {
//  // 	alert(Math.round(i*100));
//  // 	console.log(i);
//  // }
// const random = Math.random();
// alert( Math.round(random*10000));

// // if( random > 60){
// //  	alert(Math.round(random*100));
// //  	// console.log(i);
// //  }


let database = [
	{
		username: "lex.olorunsola",
		password: "26september1997"
	},
	{
		username: "henry",
		password: "henry"
	},
	{
		username: "rotimi",
		password: "rotimi"
	},
	{
		username: "victor",
		password: "victor"
	},
	{
		username: "olorunsola",
		password: "olorunsola"
	}
];

let newsfeed = [
	{
		username: "vswayze",
		timeline: "i am an artist"
	},
	{
		username: "roti",
		timeline: "i am an footballer"
	},
	{
		username: "henry",
		timeline: "i am an designer"
	},
	{
		username: "lex",
		timeline: "i am an developer"
	}
]

function isUserValid(user, pass){
	// forEach();
	for (let i = 0; i < database.length; i++){
		if (database[i].username === user && database[i].password === pass ){
		// console.log(newsfeed);
		return true;
	}
	}return false;
  }

function signIn(user, pass){
	if (isUserValid(user, pass)){
		console.log(newsfeed);
	}else{
		alert("sorry wrong username or password bitch");
	}
}
let usernamePrompt = prompt("what is your username");
let passwordPrompt = prompt("what is your password");

signIn(usernamePrompt, passwordPrompt);
