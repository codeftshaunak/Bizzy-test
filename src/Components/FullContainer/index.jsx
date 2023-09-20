/* eslint-disable react/prop-types */
import { Box, Container } from "@chakra-ui/react";

const FullContainer = (props) => {
    return (
        <Box width={"100%"} bg={props.bg} p={props.pad} borderBottom={props.borderBottom} margin={props.mg}>
            <Container maxW={["100%", "100%", "85%"]} m={"auto"}>{props.children}</Container>
        </Box>
    );
};

export default FullContainer;
