import React from 'react';

const Host = (props) => {
    return (
        <div>
            <div className="host__name">{props.name}</div>
			<div className="host__Picture">
				<img src={props.picture} alt="" />
			</div>
        </div>
    );
};

export default Host;