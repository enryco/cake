import React, { Component } from 'react';

const firstnames = ['Anna', 'Martha', 'Frieda', 'Berta', 'Emma', 'Marie', 'Maria', 'Margarethe', 'Erna', 'Elsa', 'Luise', 'Johanna', 'Gertrud', 'Elisabeth', 'Minna', 'Auguste', 'Helene', 'Ida', 'Wilhelmine', 'Clara', 'Dorothea', 'Hedwig', 'Olga', 'Agnes', 'Else', 'Meta', 'Paula', 'Carolin', 'Elise', 'Henny', 'Carl', 'Wilhelm', 'Otto', 'Heinrich', 'Friedrich', 'Paul', 'Hans', 'Gustav', 'Max', 'Ernst', 'Hermann', 'Johannes', 'Fritz', 'August', 'Emil', 'Walter', 'Robert', 'Franz', 'Hugo', 'Georg', 'Ludwig', 'Johann', 'Willi', 'Rudolf', 'Oskar', 'Alfred', 'Richard', 'Albert', 'Artur']
const lastNames = ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann', 'Schäfer', 'Koch', 'Bauer', 'Richter', 'Klein', 'Wolf', 'Schröder', 'Neumann', 'Schwarz', 'Zimmermann', 'Braun', 'Krüger', 'Hofmann', 'Hartmann', 'Lange', 'Schmitt', 'Werner', 'Schmitz', 'Krause', 'Meier', 'Lehmann', 'Schmid', 'Schulze', 'Maier', 'Köhler', 'Herrmann', 'König', 'Walter', 'Mayer', 'Huber', 'Kaiser', 'Fuchs', 'Peters', 'Lang', 'Scholz', 'Möller', 'Weiß', 'Jung', 'Hahn', 'Schubert', 'Vogel', 'Friedrich', 'Keller', 'Günther', 'Frank', 'Berger', 'Winkler', 'Roth', 'Beck', 'Lorenz', 'Baumann', 'Franke', 'Albrecht', 'Schuster', 'Simon', 'Ludwig', 'Böhm', 'Winter', 'Kraus', 'Martin', 'Schumacher', 'Krämer', 'Vogt', 'Stein', 'Jäger', 'Otto', 'Sommer', 'Groß', 'Seidel', 'Heinrich', 'Brandt', 'Haas', 'Schreiber', 'Graf', 'Schulte', 'Dietrich', 'Ziegler', 'Kuhn', 'Kühn', 'Pohl', 'Engel', 'Horn', 'Busch', 'Bergmann', 'Thomas', 'Voigt', 'Sauer', 'Arnold', 'Wolff', 'Pfeiffer']
function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

class Pg3 extends Component {

  componentDidMount() {
  }

  state = {
    testFam: [
      {
        name: "Robert Root",
        spouse: {
          name: "Susanne Root",
        },
        kids: [
          {
            name: "Marley Root",
            spouse: {
              name: "Richard Foo "
            },
            kids: [
              {
                name: "Simon Foo",
              },
              {
                name: "Pierre Foo",
                spouse: {
                  name: "Katy Perry"
                },
              },
              {
                name: "Claudius Foo",
                spouse: {
                  name: "Sandy Bar"
                },
              },
            ]
          },
          {
            name: "Theo Root",
            spouse: {
              name: "Beth Berendsen-Root"
            },
            kids: [
              {
                name: "Mr Robot Root",
              },
              {
                name: "Summer Root",
                spouse: {
                  name: "/"
                },
              },
            ]
          },
          {
            name: "Valery Root",
            spouse: {
              name: "Robert Pickle"
            },
            kids: [
              {
                name: "Rick Pickle",
              }
            ]
          },
        ]
      }
    ]
  }

  renderTopGeneration = (family) => {

    return (
      <div className="col">
        <div className="header" >
          {family && family.name}
          {' + '}
          {family.spouse ? family.spouse.name : '(  )'}
        </div>
        <div>
          <br />
        </div>
        <div className="row">
          {
            family.kids && family.kids.map(e => {
              return this.renderTopGeneration(e)
            })
          }
        </div>
      </div>
    )

  }


  render() {
    const testFam = this.state.testFam
    console.log(testFam)
    return (
      <div className="Pg1" style={{textAlign: "center"}}>
        <h3>#codevember 03 - "Tree"</h3>
        <p>This is a rendering of a family tree using a recursive render function</p>
        <br/>
        <br/>
        {this.renderTopGeneration(testFam[0])}
      </div>
    );
  }
}

export default Pg3;



