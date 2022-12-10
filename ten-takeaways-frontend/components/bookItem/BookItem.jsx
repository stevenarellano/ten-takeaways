import { useState, useEffect } from "react";
import { TAKEAWAYS } from '/context'

import styles from '/styles/modules/Content.module.scss'

function BookItem({ title, author }) {
    const [active, setActive] = useState(false);

    function toggle() {
        setActive(!active)
    }
    useEffect(() => {
        if (active) { document.body.style.overflow = "hidden"; }
        if (!active) { document.body.style.overflow = "unset"; }
    }, [active]);

    return (
        <>
            <div className={styles.bookElement} >
                <span>{title}</span>
                <span>{author}</span>

                <button onClick={toggle}>view</button>
            </div>
            <div
                style={{ display: active ? "inline-block" : "none" }}
                className={styles.overlay}
                onClick={toggle}
            />
            <div
                className={styles.modal}
                style={{ display: active ? "inline-block" : "none" }}
            >
                <div>Takeaways</div>
                <div onClick={toggle} className={styles.x}>X</div>
                <ol className={styles.orderedList}>
                    {TAKEAWAYS[title].map((ele, i) => <li key={i}>{ele}</li>)}
                </ol>
            </div>
        </>
    )
}

export default BookItem;