import React from 'react';

interface IProps {
    name: string;
    company: string;
    since?: number; // opcional
}

const HelloWorld: React.FC <IProps> = (props) => {
    console.log(props);
    return(
        <> 
            <div>HelloWorld!, {props.name}</div>
            <div>company: {props.company}</div>
        </>
// ou usa <React.Fragment></React.Fragment> para encapsular e não quebrar pq o react não aceita duas div soltas.

    )
}

export default HelloWorld;