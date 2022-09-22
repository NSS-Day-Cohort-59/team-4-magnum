/* A TV watcher wants to see a list of actors. Just their names. 
When the actor name is clicked on, the show in which the actor is the star should be display in an alert message.*/


const actorsHTML = (actorsObj) => {
    const actorsHTMLSection = `<section id="actors--1">
        <h1>Ashton Kutcher</h1>
            </section>`
        `<section id="actors--2">
       <h2>Jodie Foster</h2>
        </section>`
        `<section id="actors--3">
    <h3>Denzel Washington</h3>
    </section>`
        `<section id="actors--4">
        <h4>Whoopi Goldberg</h4>
        </section>`
        `<section id="actors--5">
    <h5>Jasmine Somebody</h5>
    </section>`
        `<section id="actors--6>
    <h6>Alladin Dude</h6>
    </section>`
        `<section id="actors--7>
    <h7>Jaffar Badguy</h7>
    </section>`

    return actorsHTMLSection

}
const stringReturnedFromFunction = actorsHTML(actorsObj)
console.log(stringReturnedFromFunction)
