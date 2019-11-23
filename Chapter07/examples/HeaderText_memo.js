
import React, { memo } from 'react';
const HeaderText = (props) =>  {
    return(
        <h1> {props.text}</h1>
    ) 
}
export default memo(HeaderText);