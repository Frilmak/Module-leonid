// №1
// function setText(selector, text) {
//     let elem = document.querySelector(selector);
//     if (elem) {
//         elem.textContent = text;
//     } else {
//         console.error('Element not found for selector:', selector);
//     }
// }
// setText('#elem1', 'text1');
// setText('.class1', 'text2');
// setText('p', 'text3');
// №2
// let exportedModule = (function() {
//     let str1 = 'переменная модуля';
//     let str2 = 'переменная модуля';
//     let str3 = 'переменная модуля';
  
//     function func1() {
//       alert('функция модуля');
//     }
  
//     function func2() {
//       alert('функция модуля');
//     }
  
//     function func3() {
//       alert('функция модуля');
//     }
  
//     return {
//       str1: str1,
//       func1: func1,
//       func2: func2
//     };
//   })();
//   console.log(exportedModule.str1);
//     exportedModule.func1();
//     exportedModule.func2();
// №3
// ;(function() {
//     let module = {};
    
//     let str1 = 'переменная модуля';
//     let str2 = 'переменная модуля';
//     let str3 = 'переменная модуля';
   
//     module.func1 = function() {
//      alert('функция модуля');
//     }
//     module.func2 = function() {
//      alert('функция модуля');
//     }
//     module.func3 = function() {
//      alert('функция модуля');
//     }
//     module.func4 = function() {
//      alert('функция модуля');
//     }
//     module.func5 = function() {
//      alert('функция модуля');
//     }
    
//     module.str1 = str1;
//     module.str2 = str2;
   
//     window.exportedModule = module;
//    })();