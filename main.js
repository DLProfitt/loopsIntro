var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"];

for (let i = 0; i < cohortOneStudents.length; i++) {
    console.log(cohortOneStudents[i]);
}

let davidsInterests = ['Minecraft', 'Drawing', 'Skateboarding', 'Crypto', 'NFTs'];

let davidsFav = 'Minecraft';

for (let i = 0; i < davidsInterests.length; i++) {
    if (davidsInterests[i] === davidsFav) {
        console.log(`My absolute favorite interest is: ${davidsFav}.`);
    }
    else {
        console.log(`One of my interests is: ${davidsInterests[i]}.`);
    }  
}