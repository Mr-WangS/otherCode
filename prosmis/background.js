//
//

window.onload=function () {
//
//
//     function adds(a) {
//         return new Promise(function (resolve,reject) {
//             a=a+4
//             if(a>10){
//                 resolve(a)
//             }else {
//                 reject(a)
//             }
//         })
//     }
// //
//
//     function adds1(a) {
//         return new Promise(function (resolve,reject) {
//             a+=4
//             if(a<10){
//                 resolve(a)
//             }else {
//                 reject(a)
//             }
//         })
//     }
//
//
//     function adds2(a) {
//         return new Promise(function (resolve,reject) {
//             a+=4
//             if(a<10){
//                 resolve(a)
//             }else {
//                 reject(a)
//             }
//         })
//     }
//
//
//     var p = new Promise(function (resolve,reject) {
//
//         resolve(1)
//
//
//     })
//
//     p.then(adds)
//         .catch(function (b) {
//             console.log(b)
//         })
//
//     p.then(function (a) {
//        adds(a).then(function (b) {
//            adds1(b).then(function (c) {
//                console.log(c)
//            })
//        })
//     })















        // function test(resolve,reject) {
        //     var timeOut = Math.random() * 2;
        //     // log('set timeout to: ' + timeOut + ' seconds.');
        //
        //     setTimeout(function (){
        //         if(timeOut<1){
        //             resolve("200ok"+timeOut)
        //         }
        //         else {
        //             reject('timeout in ' + timeOut + ' seconds.');
        //         }
        //     },timeOut * 1000)
        //
        // }


      // new Promise(test).then(function (mes) {
      //     console.log("ok")
      // },function (err) {
      //     console.log("no")
      // })



      //   var p1 = new Promise(test)
      //   var p2 = p1.then(function (result) {
      //       console.log("成功"+result)
      //   })
      //   var p3 = p2.catch(function (reason) {
      //       console.log("失败"+reason)
      //   })


        //
        // new Promise(test).then(function (mes) {
        //     console.log("OK"+mes)
        // }).catch(function (res) {
        //     console.log(("no"+res))
        // })










// // 0.5秒后返回input*input的计算结果:
//     function multiply(input) {
//         return new Promise(function (resolve, reject) {
//             console.log('calculating ' + input + ' x ' + input + '...');
//             // setTimeout(resolve, 1500, input * input);
//
//             resolve(input * input)
//         });
//     }
//
// // 0.5秒后返回input+input的计算结果:
//     function add(input) {
//         return new Promise(function (resolve, reject) {
//             console.log('calculating ' + input + ' + ' + input + '...');
//             setTimeout(resolve, 500, input + input);
//             // resolve(input + input)
//         });
//     }
//
//     var p = new Promise(function (resolve, reject) {
//         console.log('start new Promise...');
//         resolve(12231231);
//     });
//
//     p.then(multiply)
//         .then(add)
//         .then(multiply)
//         .then(add)
//         .then(multiply)
//         .then(function (result) {
//             console.log('Got value: ' + result);
//         });

















//     var p1 = new Promise(function (resolve, reject) {
//         setTimeout(resolve, 500, 'P1');
//     });
//     var p2 = new Promise(function (resolve, reject) {
//         setTimeout(resolve, 600, 'P2');
//     });
//     var p3 = new Promise(function (resolve, reject) {
//         setTimeout(resolve, 600, 'P2');
//     });
//     var p4 = new Promise(function (resolve, reject) {
//         setTimeout(resolve, 600, 'P2');
//     });
//     var p5 = new Promise(function (resolve, reject) {
//         setTimeout(resolve, 600, 'P2');
//     });
//     var p6 = new Promise(function (resolve, reject) {
//         setTimeout(resolve, 600, 'P2');
//     });
//
//
// // 同时执行p1和p2，并在它们都完成后执行then:
//     Promise.all([p1, p2,p3,p4,p5,p6]).then(function (results) {
//         console.log(results); // 获得一个Array: ['P1', 'P2']
//     })





    







}

