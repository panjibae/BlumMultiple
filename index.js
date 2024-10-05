const { processQueries } = require('./start');
const { processQueriess } = require('./claimDaily');
const { processQueriesss} = require('./claim');

const figlet = require('figlet');

figlet('javascript!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});

const readline = require('readline')

const display = `BlumBotMultiple⚡`
const display2 = `
Select 0 to claimFarm🔥
Select 1 to StartFarm⚡
Select 2 to ClaimDaily🌊
https://github/panjibae⛩️`
console.log(display,display2)

const rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout
})


rl.question("input number program!",(answer)=>{
   switch (answer){
    case "0" :
      (async function start(){
  const getQ = await processQueriesss();
  console.log("🤖")
   })() 
    break;
    case "1" :
    (async function start(){
    const getQ = await processQueries();
    console.log("🤖")
   })() 
    break;
    case "2" :
   (async function start(){
    const getQ = await processQueriess();
    console.log("🤖")
     })() 
    break;
    default:
    console.log("wrong input!")
   }
   rl.close()
  })







