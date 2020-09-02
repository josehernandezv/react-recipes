import { useState, useEffect } from 'react'

const useClock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timerID = setInterval(
            () => tick(),
            1000
        );

        return () => {
            clearInterval(timerID);
        }
    }, [])

    const tick = () => {
        setDate(new Date());
    }

    return date;
}

export default useClock;