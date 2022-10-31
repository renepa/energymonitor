import React, {useEffect, useState} from "react";

export function Clock() {
    const [currentDate, setCurrentDate] = useState(new Date())

    useEffect(() => {
        let interval = setInterval(
            () => setCurrentDate(new Date()),
            1000
        );
    })
    return (
        <div>
            <h2>Es ist {currentDate.toLocaleTimeString()}.</h2>
        </div>
    );
}