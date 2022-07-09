import { Text, Link } from "@chakra-ui/react";

export default function BookLink({ meta }) {
    if (meta === undefined) {
        return (
            // 
            null
        );
    }
    
    const pathWhere = `/book/summary?isbn=${meta.isbn}`;

    return (
        <Link
            _hover={{
                background: "gray.200",
            }}
            _active={{
                background: "blue.200",
            }}
            borderBottomColor="gray.200"
            borderBottomWidth="1px"
            borderBottomStyle="solid"
            width="100%"
            pt={4}
            href={pathWhere}
        >
            <Text display="inline" fontWeight="bold">
                {meta.title}
            </Text>{" "}
            by {meta.author}
        </Link>
    );
}
