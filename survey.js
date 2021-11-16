const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your first name or nickname? ', (name) => {
  rl.question('What is your favourite activity? ', (activity) => {
    rl.question('What do you like listening to during that activity? ', (sounds) => {
      rl.question('What is your favourite meal of the day? ', (mealOfDay) => {
        rl.question(`What is your favourite food to eat during ${mealOfDay}? `, (favFood) => {
          rl.question('What is your favourite TV show? ', (favTV) => {
            rl.question('What is your superpower? ', (superPower) => {
              console.log('\nThank you for completing the survey! Here is your awesome profile:\n');
              console.log(`Hi my name is ${name}! Here are some fun facts about me: I love to listen to ${sounds} while ${activity}. My favourite thing to eat is ${favFood} for ${mealOfDay}, and I can't get enough of watching ${favTV}. It's widely known that I'm awesome at ${superPower}.`);
              rl.close();
            })
          })
        })
      })
    })
  })
});