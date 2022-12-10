import { BookItem } from '/components'
import { BOOK_INFO } from '/context'
import { useState } from "react";

import styles from '/styles/modules/Content.module.scss'

export function Content() {
    const [lastInd, setLastInd] = useState(10);

    function extendList() {
        setLastInd(lastInd + 10);
    }
    function hideItems() {
        setLastInd(Math.max(lastInd - 10, 1));
    }

    return (
        <div className={styles.container}>
            <div className={styles.bookList}>
                {BOOK_INFO.map((ele, i) => <BookItem key={i} title={ele.title} author={ele.author} />)}
            </div>
            <button
                className={styles.loadButton}
                style={{ display: (lastInd <= 10) ? "none" : "inline-flex" }}
                onClick={(lastInd < BOOK_INFO) ? extendList : hideItems}
            >
                {(lastInd < BOOK_INFO) ? "load more" : "hide items"}
            </button>
        </div>
    );
}

export default Content;