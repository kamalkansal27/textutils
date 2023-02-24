import React from 'react'

export default function Alert(props) {
    const capitalisefirst = (word) => {
        const newtext = word.toLowerCase();
        return newtext.charAt(0).toUpperCase() + newtext.slice(1);
    }
    return (
        <div style={{height : '60px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalisefirst(props.alert.type)}</strong>  : {props.alert.msg}
            </div>}
        </div>
    )
}
