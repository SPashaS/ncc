// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// window.onload = function () {
//   document.addEventListener('click', documentActions, { passive: true });

//   //Actions делегирование события click
//   function documentActions(e) {
//     const targetElement = e.target;
//     console.log(window.innerWidth);
//     if (window.innerWidth > 1456 && isMobile.any()) {
//       console.log('work');
//       if (targetElement.classList.contains('.menu-item-has-children')) {
//         console.log('hover');
//         targetElement.closest('.menu__item').classList.toggle('_hover');
//       }
//       if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
//         _removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover");
//       }
//     }
//     // if (targetElement.classList.contains('search-form__icon')) {
//     //   document.querySelector('.search-form').classList.toggle('_active');
//     // } else if (!targetElement.closest('.search-form') && document.querySelectorAll('.search-form._active')) {
//     //   document.querySelector('.search-form').classList.remove('_active');
//     // }
//   }
// }


const toTop = document.querySelector(".to-top");
const header = document.querySelector(".header");

if (toTop) {
	document.addEventListener("scroll", function (e) {
		const scrollTop = window.scrollY;

		if (scrollTop > 500) {
			toTop.classList.add("to-top_active")
		} else {
			toTop.classList.remove("to-top_active")
		}

	})

	toTop.addEventListener("click", (e) => {

		window.scrollTo({
			top: header,
			behavior: 'smooth',
		});
		e.preventDefault();

	});

}







// function whoseBicycle(diary1, diary2, diary3) { 
// 	let a = { 
//     0: "first", 
//     1: "second", 
//     2: "third"
//   };   
  
// 	let max = -1000;   
//   let son = -1;   
//   let total = 0;  
  
// 	for (let i = 0; i < arguments.length; i++) {            
// 		total = 0;        
// 		for (key in arguments[i]) {       
// 			total = total + arguments[i][key];           
// 		}     
// 		arguments[i]["total"] = total;     
// 		arguments[i]["age"] = ageTable[a[i] + "SonAge"];    
// 		arguments[i]["res"] = 'I need to buy a bicycle for my ' + a[i] + ' son.'        

// 		console.log(ageTable);     
// 		console.log(arguments[i]);       
		  
// 		if (total > max) {
//       max = total; son = i;
// 		} else if (total == max && arguments[i]["age"] < arguments[son]["age"])  { 
// 			son = i; 
// 		};         
// 		console.log("max:"+max+" son:"+ (son + 1));    
// 	}      
// 		return arguments[son]["res"] ; 
// 	}


// 	function whoseBicycle(diary1, diary2, diary3) { 
  
// 		let sons = {
// 			0: {
// 				"num": "first",
// 			},
// 			1: {
// 				"num": "second",
// 			},
// 			2: {
// 				"num": "third",
// 			},
// 		}
		
// 		for (let i = 0; i < arguments.length; i++) {
// 			let sum = 0;
// 			for (let key in arguments[i]) {
// 				sum = sum + arguments[i][key];
// 			}
// 			sons[i]["age"] = ageTable[`${sons[i]["num"]}SonAge`];
// 			sons[i]["sum"] = sum;
// 		}
		
// 		let winSon = 0;
// 		let maxSum = 0;
// 		for (let key in sons ) {
// 			let currentSum = sons[key]["sum"];
// 			if ( currentSum >= maxSum) {
// 				maxSum = currentSum;
// 				winSon = sons[key]["num"];
// 			}
// 		}

// 		return `I need to buy a bicycle for my ${winSon} son.`
// 	}