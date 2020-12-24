import React from 'react';
import './Sit.css';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

const Sit = ({available}) => {
    return (
        <div className={`${available ? "available-sit" : "unavailable-sit"}`}>
            <div className="col-1">
                <SupervisorAccountIcon />
            </div>
        </div>
    );
};

export default Sit;