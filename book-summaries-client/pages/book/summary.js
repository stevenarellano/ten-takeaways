import { Flex, Box, OrderedList, ListItem, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useLayoutEffect, useEffect } from "react";
import axios from "axios";
import { BASEURL } from "../../data/BASEURL";
import { Book } from "../../schemas/Book";

export default function Summary() {
    const router = useRouter();
    const [isbn, setIsbn] = useState("");
    const [takeaways, setTakeaways] = useState([]);
    const [book, setBook] = useState();
    const [header, setHeader] = useState();

    function createHead(bk) {
        const head = (
            <Box mt={4}>
                <Text lineHeight="40px" fontSize="40px" fontWeight="bold">
                    {bk.title}
                </Text>{" "}
                by {bk.author}
            </Box>
        );
        setHeader(head);

    }

    useLayoutEffect(() => {
        const newISBN = router.query.isbn;

        if (newISBN) {
            setIsbn(newISBN);
        }
    }, [router]);

    useEffect(() => {
        const configureBook = (takeaways) => {
            if (takeaways.length === 0) {
                return;
            }
            const takeaway = takeaways[0];
            const b = new Book(takeaway.title, takeaway.author, takeaway.isbn);
            setBook(b);
            createHead(b);

        };

        // creates new link
        const addTakeaways = (summaries) => {
            const len = summaries.length;
            if (!len) {
                return 0;
            }

            const toAppend = [];

            for (let i = 0; i < len; i++) {
                const summary = summaries[i];
                const domEle = (
                    <Box
                        key={i}
                        width={{ base: "100%", md: "75%" }}
                        borderWidth={1}
                        borderColor="blue.200"
                        borderStyle="solid"
                        shadow="xl"
                        padding={5}
                    >
                        <Text fontWeight="bold">
                            {summary.added_by}&apos;s Takeaways
                        </Text>
                        <OrderedList>
                            <ListItem>{summary.p1}</ListItem>
                            <ListItem>{summary.p2}</ListItem>
                            <ListItem>{summary.p3}</ListItem>
                            <ListItem>{summary.p4}</ListItem>
                            <ListItem>{summary.p5}</ListItem>
                            <ListItem>{summary.p6}</ListItem>
                            <ListItem>{summary.p7}</ListItem>
                            <ListItem>{summary.p8}</ListItem>
                            <ListItem>{summary.p9}</ListItem>
                            <ListItem>{summary.p10}</ListItem>
                        </OrderedList>
                    </Box>
                );
                toAppend.push(domEle);
            }

            const newTakeways = takeaways.concat(toAppend);

            setTakeaways(newTakeways);
            return len;
        };

        if (takeaways.length === 0 && isbn) {
            axios
                .post(`${BASEURL}revs`, { isbn })
                .then((response, err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    const ta = response.data;

                    addTakeaways(ta);
                    configureBook(ta);
                });
        }
    }, [isbn, takeaways]);

    return (
        <Flex
            className="container"
            alignItems="center"
            gap={8}
            direction="column"
        >
            {header}
            {takeaways}
        </Flex>
    );
}
