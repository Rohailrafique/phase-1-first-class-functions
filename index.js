// function Monday() {
// console.log("Go for a five-mile run");
// console.log("Pump iron");
// }

// function Tuesday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//     }

//     function Wednesday() {
//         console.log("Go for a five-mile run");
//         console.log("Go for a five-mile run");
    
//         }

//         function Thursday() {
//             console.log("Go for a five-mile run");
//             console.log("Pump iron");
//             }

//             function Friday() {
//                 console.log("Go for a five-mile run");
//                 console.log("Swim 40 laps");
//                 }

// function runFiveMiles() {
//     console.log("Go for a five-mile run");
// }

// function liftWeights() {
//     console.log("Pump iron");
// }

// function swimFortyLaps() {
//     console.log("Swim 40 laps");
// }

// function Monday() {
//     runFiveMiles();
//     liftWeights();
// }

// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
// }

// function Monday() {
// exerciseRoutine(liftWeights);
// }

// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
// }




// The receivesAFunction function should:

// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function


// describe("index", () => {
//     describe("receivesAFunction(callback)", () => {
//       it("receives a function and calls it", () => {
//         const spy = chai.spy();
  
//         receivesAFunction(spy);
  
//         expect(spy).to.have.been.called();
//       });
//     });


// function receivesAFunction(Spy) {
//     const Spy = (a, b) => a + b;
// };


// exerciseRoutine(function () {
//     console.log("Stretch! Work that core!");
//   });

// //   exerciseRoutine() = () => console.log("Stretch! Work that core!");
//   exerciseRoutine(() => console.log("Stretch! Work that core!"));


//   function morningRoutine(exercise) {
// let breakfast;

// if(exercise === liftWeights) {
//     breakfast = "protein bar";
//   }
//   else if(exercise === swimFortyLaps) {
//       breakfast = "kale smoothie";}
// else {
//     breakfast = "granola";}
//   }

//   exerciseRoutine(exercise);

//   return function () {
//       console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//   }


// The receivesAFunction function should:

// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function


function callback() {return 1}
function receivesAFunction(callback) {
    return callback();
};

console.log(receivesAFunction(callback));


// The returnsANamedFunction function should:

// take no arguments
// return a named function





function returnsANamedFunction() {
    function namedFunction() {};
 return namedFunction;
}


function returnsAnAnonymousFunction() {
    return () => {};
};



