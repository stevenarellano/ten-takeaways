import { Flex, Box, Button, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";

// baseurl
import { BASEURL } from "../data/BASEURL";
import { Book } from "../schemas/Book";
import BookLink from "./book/bookLink";

export default function Content() {
    const [bookLinks, setBookLinks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [buttonLoading, setButtonLoading] = useState(false);

    function hideMore() {
        if (typeof window !== 'undefined') {
            const button = document.getElementById("moreButton");
            if (button) {
                button.style.visibility = "hidden";
                button.disabled = true;
            }
        }
    }

    // creates new link 
    const addLinks = (bookInfo) => {
        const len = bookInfo.length;
        if (len < 10) {
            hideMore();
            if (len === 0) {
                return 0;
            }
        }


        const toAppend = bookInfo.map((book) => {
            const b = new Book(book.title, book.author, book.isbn);
            if (b !== undefined) {
                return (

                    <BookLink key={book.id} meta={b} />
                );
            }
        });

        const newLinks = bookLinks.concat(toAppend);
        setLoading(false);
        setBookLinks(newLinks);
        return len;
    };

    useEffect(() => {
        if (bookLinks.length === 0) {
            axios.get(`${BASEURL}startup`).then((response) => {
                console.log(response.data[0]);
                addLinks(response.data);
            });
        }


    }, [bookLinks]);




    function fetchTen() {
        setButtonLoading(true);
        const reqUrl = `${BASEURL}fetchTen`;
        axios.get(reqUrl).then((response) => {
            console.log(response.data[0]);
            setButtonLoading(false);
            return addLinks(response.data);
        });
    }



    return (
        <Flex className="container" alignItems="center" direction="column">
            {loading ? null
                :
                <Box my={4} fontSize="4xl">
                    Books
                </Box>}

            {loading ? (
                <Image src="/hourglass.gif" alt="Loading..." />
            ) : (
                bookLinks
            )}
            {loading ? null : buttonLoading ? (
                <Image
                    my={4}
                    boxSize="50px"
                    src="/spinner.gif"
                    alt="Loading..."
                />
            ) : (
                <Button
                    id="moreButton"
                    _hover={{ background: "blue.300" }}
                    _active={{ background: "blue.700" }}
                    borderRadius={{ base: ".75rem", md: "1rem" }}
                    width={{ base: "100%", md: "25%" }}
                    my={8}
                    colorScheme="blue"
                    onClick={fetchTen}
                >
                    Load More
                </Button>
            )}
        </Flex>
    );
}
