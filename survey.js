const readline = require('readline');
// const { stdin: input, stdout: output } = require('process');

// const rl = readline.createInterface({ input, output });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// const profile = {
//   name: '',
//   activity: '',
//   sounds: '',
//   mealOfDay: '',
//   favFood: '',
//   favTV: '',
//   superPower: ''
// };

// rl.question(query[, options], callback)
// rl.question('What is your name or nickname? ', (answer) => {
//   profile.name = answer;
//   console.log(`Hello ${answer}!`);
//   console.log(profile.name);

//   rl.close();
// });

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

// rl.question(query[, options], callback)
