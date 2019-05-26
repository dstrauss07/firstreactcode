import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    useEffect(()=> {
        console.log('[Cockpit.js] useEffect');
        //Http request..
        //runs when created
        setTimeout(() => {
            alert('Saved date to cloud!')
        }, 1000);
    }, [props.persons]);

    useEffect(()=> {
        console.log('[Cockpit.js] useEffect');
        //Http request..
        //runs when created
        setTimeout(() => {
            alert('first time only')
        }, 1000);
        return () =>{
            console.log('[Cockpit.js] Cleanup work in progress')
        }
    }, []);

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPerson){
        btnClass= classes.Red;
    }
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (     
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
            

}

export default React.memo(Cockpit);