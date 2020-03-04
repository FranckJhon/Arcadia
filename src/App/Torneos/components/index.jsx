import React,{useEffect} from 'react';

const Torneos = (props) => {

    console.log(props);
    const values ='/Torneos';
    const res = props.tornaments(values);

    return (
        <div className="torneos">
            Torneos
        </div>
    )
}

export default Torneos;
