import { Flex, Link } from "@chakra-ui/react";

export default function Navbar() {
    return (
        <Flex
            px="5"
            bg="gray.200"
            h="40px"
            align="center"
            justify="flex-start"
            gap={5}
        >
            <Link href="/">Home</Link>
            <Link href="/content">Content</Link>
        </Flex>
    );
}
