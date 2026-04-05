import { useEffect, useState } from "react";
import "./CorePillars.css";

const counters = [
    { end: 1000, label: "Citizens-Digital Literacy Mission 2026" },
    { end: 10000, label: "Trees Planted" },
    { end: 50, label: "Schools Digital Board Installation" },
    { end: 1200, label: "Students Knowledge Test" },
];

function CorePillars() {

    const [counts, setCounts] = useState(counters.map(() => 0));

    useEffect(() => {

        const duration = 2000;
        const intervalTime = 30;

        const timers = counters.map((counter, index) => {

            let start = 0;
            const increment = Math.ceil(counter.end / (duration / intervalTime));

            return setInterval(() => {

                start += increment;

                if (start >= counter.end) {
                    start = counter.end;
                }

                setCounts(prev => {
                    const updated = [...prev];
                    updated[index] = start;
                    return updated;
                });

            }, intervalTime);

        });

        return () => timers.forEach(clearInterval);

    }, []);

    return (
        <section className="core-pillars">

            <h2 className="impact-heading">
                Shivmala Foundation चा Impact :
            </h2>

            <div className="grid">

                {counters.map((counter, index) => (
                    <div key={index}>
                        <h2 className="impact-number" style={{ color: "#0ea5e9" }}>
                            {counts[index]}+
                        </h2>
                        <p>{counter.label}</p>
                    </div>
                ))}

            </div>

        </section>
    );
}

export default CorePillars;