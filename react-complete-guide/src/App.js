import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props =>{
  const [personsState, setPersonsState] = useState({
     persons:[
       {name: 'Max', age:28 },
       {name: 'Manu', age:52 },
       {name: 'dave', age:34 }
     ],
   });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

   const switchNameHandler = () => {
    setPersonsState({
        persons:[
          {name: 'Max', age:28 },
          {name: 'Manu', age:52 },
          {name: 'dave', age:54 }
        ]
     })
   }

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}> My Hobbies: Music </Person>
      </div>
    );
  }

export default App;

