import { Flex, Box, Button, Image } from "@chakra-ui/react";


import { BookItem } from '/components'
import { TAKEAWAYS, BOOK_INFO } from '/context'
import { useState, useEffect } from "react";

import styles from '/styles/modules/Content.module.scss'

export function Content() {
    const takeaways = BOOK_INFO;
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
                {BOOK_INFO.map(ele => <BookItem title={ele.title} author={ele.author} />)}
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