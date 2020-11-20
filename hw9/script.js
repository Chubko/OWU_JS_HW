// let isRaining = false;
// let isFood = true;
// let isDoneRepeat = true;
// let isDoneHW = true;
// let isFound = true;
// let estimate = 'good';

//callback

// startMyDay(()=>{
//     repeatPreviousLecture(isDoneRepeat, (error, success)=>{
//         if(error){
//             console.log(error);
//             cookBorsch(isFood,()=>{
//                 goShopping(data =>{
//                     console.log(data);
//                 });
//             });
//             return;
//         }
//         console.log(success);
//         doHomework(isDoneHW,()=>{
//             if(!isDoneHW){  
//                 googleInfo(isFound,()=>{
//                     sendToReview(()=>{
//                         getEstimate(estimate, (error)=>{
//                             if(error){
//                                 console.log(error);
//                                 return;
//                             }
//                             goForAWalk(isRaining, ()=>{
//                                 console.log('Супер! Одягаємось і виходимо!');
//                             });
//                         });
//                     });
//                 });
//                 return;
//             }
//             sendToReview(()=>{
//                 getEstimate(estimate, (error)=>{
//                     if(error){
//                         console.log(error);
//                         return;
//                     }
//                     goForAWalk(isRaining, ()=>{
//                         console.log('Супер! Одягаємось і виходимо!');
//                     });
//                 });
//             });   
//         });
//     });
// });

// function startMyDay(callback){
//     console.log('Доброго ранку');
//     setTimeout(()=>{
//         callback();
//     }, 2000);
// }

// function repeatPreviousLecture(done, callback){
//     console.log('Треба ще раз переглянути вчорашню лекцію');
//     setTimeout(()=>{
//         if(!done){
//             callback('Немає часу, треба зварити щось поїсти', null);
//             return;
//         }
//         callback(null, 'Приступаю до ДЗ');
//     }, 3000);
// }

// function cookBorsch(food, callback){
//     console.log('Є все необхідне для борщу?');
//     setTimeout(()=>{
//         if(!food){
//             callback();
//             return;
//         }
//         console.log('Так. Скоро будем обідати!');
//     }, 6000);
// }

// function goShopping(callback){
//     callback('Ні, збираюсь в магазин');
// }

// function doHomework(hw, callback){
//     setTimeout(()=>{
//         if(!hw){
//             console.log('Треба гуглити');
//             callback();
//             return;
//         }
//         callback();
//     }, 3000);
// }

// function googleInfo(find, callback){
//     setTimeout(()=>{
//         if(!find){
//             console.log('Без менторів не обійтись!');
//             return;
//         }
//         callback();
//     }, 1000);
// }

// function sendToReview(callback){
//     setTimeout(()=>{
//         console.log('Відправлено, чекаю на результат!');
//         callback();
//     }, 2000);
// }

// function getEstimate(estimate, callback){
//     setTimeout(()=>{
//         if(estimate !== 'good'){
//             console.log('Не гуд!');
//             callback('Треба ще раз передивитись лекцію');
//             return;
//         }
//         console.log('Done!');
//         callback();
//     }, 1000);  
// }

// function goForAWalk(weather, callback){
//     console.log('Можна вийти прогулятись');
//     console.log('Яка погода?');
//     setTimeout(()=>{
//         if(weather){
//             console.log('Знову дощ((');
//             return;
//         }
//         callback();
//     }, 3000);
// }

//promise

let isDoneRepeat = false;
let isDoneHW = false;
let estimate = 'good';
let isRaining = false;
let isFood = false;

function startMyDay(){
    return new Promise((resolve)=>{
        console.log('Доброго ранку');
        setTimeout(()=>{
            resolve();
        }, 2000);
    }); 
}

function repeatPreviousLecture(done){
    return new Promise((resolve,reject)=>{
        console.log('Треба ще раз переглянути вчорашню лекцію');
        setTimeout(()=>{
            if(done){
                resolve('Приступаю до ДЗ');
            }else{
                console.log('Немає часу, треба зварити щось поїсти');
                reject(cookBorsch(isFood));
            }
        }, 3000);
    });
}
function cookBorsch(food){
        console.log('Є все необхідне для борщу?');
        setTimeout(()=>{
            if(food){
            console.log('Так. Скоро будем обідати!');
            }
            console.log('Ні, збираюсь в магазин'); 
        }, 2000);
}
    
function doHomework(hw){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(hw){
                resolve();
            }else{
                reject('Треба гуглити');
            }
        }, 3000);
    });
}
      
function sendToReview(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Відправлено, чекаю на результат!');
        }, 2000);
    });   
}
    
function getEstimate(estimate){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(estimate === 'good'){
                console.log('Done!');
                resolve();
            }
            reject('Не гуд! Треба ще раз передивитись лекцію');
        }, 1000);
    });      
}
    
function goForAWalk(weather){
    return new Promise((resolve, reject)=>{
        console.log('Можна вийти прогулятись');
        console.log('Яка погода?');
        setTimeout(()=>{
            if(!weather){
                resolve('Супер! Одягаємось і виходимо!');
            }
            reject('Знову дощ((');
        }, 3000);
    });   
}

startMyDay(()=>{
})
.then(() => {
    return repeatPreviousLecture(isDoneRepeat);
})
.then((success)=>{
    console.log(success);
})
.then(()=>{
    return doHomework(isDoneHW);
})
.then(()=>{
    return sendToReview();
})
.then(()=>{
    return getEstimate(estimate);
})
.then(() => {
    return goForAWalk(isRaining);
})
.then((success) => {
    console.log(success);
})    
.catch(error => {
    console.log(error);
});
