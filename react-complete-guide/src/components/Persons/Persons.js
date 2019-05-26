import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }
 
    //LEGACY FEATURE
    // componentWillReceiveProps(props){
    //     console.log('[Persons.js] componentWillReceiveProps', props);
    // }


    // shouldComponentUpdate(nextProps, nextState){
    //     if(nextProps.persons !== this.props.persons){
    //        return true
    //     } else
    //       return false;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Perons.js] getSnapshotBeforeUpdate' );
        return {message: 'Snapshot!'};
    }

    // componentWillUpdate ALSO LEGACY

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Perons.js] componentDidUpdate' );
        console.log(snapshot);
    }
    render(){
        console.log('[Perons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        })
    };

}


export default Persons;