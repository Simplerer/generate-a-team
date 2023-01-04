const fs = require('fs');

const populate = (content) =>{
    fs.appendFile('team.html', content)
}

let content

const generateTeam = (myTeam) => {
    for (const mem of myTeam) {
        console.log(mem.name)
        console.log(mem.id)
        console.log(mem.role)
        console.log(mem.email)
        console.log(mem.github)
        console.log(mem.school)
        console.log(mem.officeNum)
        content = `<section>
        <header>
          <h2></h2>
          <h2></h2>
        </header>
        <p></p>
        <p></p>
        <p></p>
      </section>`
    }
};

module.exports = {
    generateTeam
};
