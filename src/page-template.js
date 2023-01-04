const fs = require('fs');

const populate = (content) => {
    fs.appendFile('dist/team.html', content, (err) => (err))
}

let content
let symbol 

const generateTeam = (myTeam) => {

    populate(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MY TEAM</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
    <Header id='tops'><H1>Team Roster</H1></Header>
    <div>`)
   
    for (let i = 0; i < myTeam.length; i++) {           

        if (myTeam[i].role == 'Manager') {
            symbol = '☕'
            content = `
      <section id='card'>
        <header id='info'>
          <h2>${myTeam[i].name}</h2>
          <h2>${symbol} ${myTeam[i].role}</h2>
        </header>
        <p>ID: ${myTeam[i].id}</p>
        <p>Email: <a href='mailto:${myTeam[i].email}'>${myTeam[i].email}</a></p>
        <p>Office Num: ${myTeam[i].officeNum}</p>
      </section>`
            populate(content);
        } else if (myTeam[i].role == 'Engineer') {
            symbol = '🔍'
            content = `
      <section id='card'>
        <header id='info'>
          <h2>${myTeam[i].name}</h2>
          <h2>${symbol} ${myTeam[i].role}</h2>
        </header>
        <p>ID: ${myTeam[i].id}</p>
        <p>Email: <a href='mailto:${myTeam[i].email}'>${myTeam[i].email}</a></p>
        <p>GitHub: <a href='https://github.com/${myTeam[i].github}' target='_blank'>${myTeam[i].github}</a></p>
      </section>`
            populate(content);
        } else {
            symbol = '📖'
            content = `
      <section id='card'>
        <header id='info'>
          <h2>${myTeam[i].name}</h2>
          <h2>${symbol} ${myTeam[i].role}</h2>
        </header>
        <p>ID: ${myTeam[i].id}</p>
        <p>Email: <a href='mailto:${myTeam[i].email}'>${myTeam[i].email}</a></p>
        <p>School: ${myTeam[i].school}</p>
      </section>`
            populate(content);
        } 
    };  

    setTimeout(() => {
        populate(`
    </div>
    </body>
    </html>
    `)
    console.log(`Your Team Roster Page is finished!
    Check for team.html in dist folder!`)}, 2000);
   
}
    module.exports = {
        generateTeam
    };
