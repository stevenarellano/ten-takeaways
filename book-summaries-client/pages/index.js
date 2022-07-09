import { Flex, Box } from "@chakra-ui/react";

export default function Home() {
    return (
        <Flex
            className="container"
            width="100%"
            alignItems="center"
            justifyContent="space-between"
            direction="column"
        >
            <Flex
                mt={8}
                width="100%"
                justifyContent="center"
                fontSize="4xl"
            >
                Ten Takeaways: What is It?
            </Flex>
            <Box py={5} width={{ base: "100%", md: "65%" }} fontSize="xl">
                Ten takeaways is a platform where individuals are able to share
                what they learn or find interesting in a book with others.
            </Box>
            <Box py={5} width={{ base: "100%", md: "65%" }} fontSize="xl">
                As of right now, this project acts as a place where I can post
                about books I&apos;ve read and find interesting. It helps me to
                retain information through a report basis.
            </Box>

            <Box py={5} width={{ base: "100%", md: "65%" }} fontSize="xl">
                The end goal for this project is to turn it into a media
                platform where users are able to post their own takeaways as see
                what other people are reading.
            </Box>
            <Box py={5} width={{ base: "100%", md: "65%" }} fontSize="xl">
                To break down the tools used for this project, I have the
                following: Front end - Next.js, ChakraUI. Backend - Node.js,
                Postgres SQL
            </Box>
        </Flex>
    );
}
