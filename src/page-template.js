const fs = require('fs');

const populate = (content) => {
    fs.appendFile('dist/team.html', content, (err) => {
        err ? console.error(err) : console.log('Commit logged!')
    })
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
        <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
    </head>
    <body>
    <Header id='tops'>Team Roster</Header>`)
   
    for (let i = 0; i < myTeam.length; i++) {

        if (myTeam[i].role == 'Manager') {
            symbol = '☕'
            content = `
      <section>
        <header>
          <h2>${myTeam[i].name}</h2>
          <h2>${symbol} ${myTeam[i].role}</h2>
        </header>
        <p>${myTeam[i].id}</p>
        <p>${myTeam[i].email}</p>
        <p>${myTeam[i].officeNum}</p>
      </section>`
            populate(content);
        } else if (myTeam[i].role == 'Engineer') {
            symbol = '🔍'
            content = `<section>
        <header>
          <h2>${myTeam[i].name}</h2>
          <h2>${myTeam[i].role}</h2>
        </header>
        <p>${myTeam[i].id}/p>
        <p>${myTeam[i].email}</p>
        <p>${myTeam[i].github}</p>
      </section>`
            populate(content);
        } else {
            symbol = '📖'
            content = `<section>
        <header>
          <h2>${myTeam[i].name}</h2>
          <h2>${myTeam[i].role}</h2>
        </header>
        <p>${myTeam[i].id}/p>
        <p>${myTeam[i].email}</p>
        <p>${myTeam[i].school}</p>
      </section>`
            populate(content);
        }
    };

    populate(`</body>
    </html>`)
}
    module.exports = {
        generateTeam
    };
