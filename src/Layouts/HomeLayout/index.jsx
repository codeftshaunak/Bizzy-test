/* eslint-disable react/prop-types */
import { VStack } from "@chakra-ui/react";
import Header from "../../Components/Header";

const HomeLayout = (props) => {
    return (
        <VStack width={"full"} spacing={0} gap={"5"}>
            <Header />

            <VStack width={"full"} gap={props.gap ? props.gap : "60px"} bg={props.bg}>
                {props.children}
            </VStack>
        </VStack>
    );
};

export default HomeLayout;
