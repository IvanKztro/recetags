import React from 'react';

import styled from '@emotion/styled'


const Error = ({error}) => {

    const Error = styled.p`
        background-color: #FE2E2E;
        color: white;
        margin-top: 10px;
    `;
    return ( 
        <Error className="text-center">{error}</Error>
     );
}
 
export default Error;