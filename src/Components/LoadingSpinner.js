import React from 'react';
import Loader from 'react-loader-spinner';

export default function LoadingSpinner(){
    return (
        <React.Fragment>
            <Loader 
                type="Puff"
                height="35"
                color="#FFF"
                width="60"
            
            />
        </React.Fragment>
    )
};
