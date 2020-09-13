import React from 'react';
import useClock from './useClock';
import Typography from '@material-ui/core/Typography';

const Clock = () => {
    const date = useClock();
    return <Typography>{date.toLocaleTimeString()}</Typography>;
};

export default Clock;
