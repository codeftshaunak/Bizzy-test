import {
    Box,
    Button,
    HStack,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { useEffect, useState } from "react";
import FullContainer from "../FullContainer";
import CTAButton from "../CTAButton";

import {
    BsAlarm,
    BsBell,
    BsChevronDown,
    BsCommand,
    BsSearch,
    BsSend,
} from "react-icons/bs";

// export const Header = () => {
//     const navigate = useNavigate();
//     const [isHeaderFixed, setIsHeaderFixed] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 0) {
//                 setIsHeaderFixed(true);
//             } else {
//                 setIsHeaderFixed(false);
//             }
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     // Define a CSS class for the fixed header
// const headerStyles = {
//     // position: isHeaderFixed ? "fixed" : "relative",
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "#fff",
//     zIndex: 1000,
//     borderBottom: isHeaderFixed && "1px solid #E5E7EB",
//     transition: "position 0.3s ease-in-out",
// };

// const boxStyle = {
//     display: "flex",
//     alignItems: "center",
//     color: "#374151",
//     fontSize: "1rem"
// }

//     return (
//         <FullContainer borderBottom={"1px solid #E5E7EB"} bg={"#fff"} mg={"auto"}>
//             <HStack
//                 style={headerStyles}
//                 transition={"0.3s ease-in-out"}
//                 height={"76px"}
//                 alignItems={"center"}
//                 justifyContent={"space-between"}
//             >

//                 <HStack justifyContent={"space-between"} width={"40%"}>
//                     <Text color={"#22C55E"} fontWeight={"600"} fontSize={"25px"} onClick={() => navigate("/")} cursor={"pointer"}>Bizzzy</Text>
//                     <HStack justifyContent={"space-around"} width={"80%"}>
//                         <Box style={boxStyle}>
//                             <Text>Find Talent</Text>
//                             <FiChevronDown />
//                         </Box>
//                         <Box style={boxStyle}>
//                             <Text>Find Work</Text>
//                             <FiChevronDown />
//                         </Box>
//                         <Box style={boxStyle}>
//                             <Text>Why Bizzzy</Text>
//                             <FiChevronDown />
//                         </Box>
//                     </HStack>
//                 </HStack>

//                 <HStack width={"45%"} justifyContent={"space-between"}>
//                     <Box style={boxStyle} width={"370px"} border={"1px solid #9CA3AF"} padding={"0.0rem 1rem"} borderRadius={"5px"}>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
//                             <circle cx="6.66667" cy="6.66667" r="4.66667" stroke="#6B7280" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
//                             <path d="M14 14L10 10" stroke="#6B7280" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
//                         </svg>
//                         <Input placeholder={"Search here..."} width={"100%"} border={"none"} marginLeft={"0"} />
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
//                             <g clip-path="url(#clip0_3745_2309)">
//                                 <path d="M4.66634 6.00065C4.40263 6.00065 4.14485 5.92245 3.92558 5.77594C3.70632 5.62944 3.53542 5.4212 3.4345 5.17756C3.33359 4.93393 3.30718 4.66584 3.35863 4.4072C3.41007 4.14856 3.53706 3.91098 3.72353 3.72451C3.91 3.53804 4.14758 3.41105 4.40622 3.3596C4.66486 3.30816 4.93295 3.33456 5.17659 3.43548C5.42022 3.5364 5.62846 3.70729 5.77497 3.92656C5.92148 4.14582 5.99968 4.40361 5.99968 4.66732V11.334C5.99968 11.5977 5.92148 11.8555 5.77497 12.0747C5.62846 12.294 5.42022 12.4649 5.17659 12.5658C4.93295 12.6667 4.66486 12.6931 4.40622 12.6417C4.14758 12.5903 3.91 12.4633 3.72353 12.2768C3.53706 12.0903 3.41007 11.8527 3.35863 11.5941C3.30718 11.3355 3.33359 11.0674 3.4345 10.8237C3.53542 10.5801 3.70632 10.3719 3.92558 10.2254C4.14485 10.0789 4.40263 10.0007 4.66634 10.0007H11.333C11.5967 10.0007 11.8545 10.0789 12.0738 10.2254C12.293 10.3719 12.4639 10.5801 12.5648 10.8237C12.6658 11.0674 12.6922 11.3355 12.6407 11.5941C12.5893 11.8527 12.4623 12.0903 12.2758 12.2768C12.0893 12.4633 11.8518 12.5903 11.5931 12.6417C11.3345 12.6931 11.0664 12.6667 10.8228 12.5658C10.5791 12.4649 10.3709 12.294 10.2244 12.0747C10.0779 11.8555 9.99968 11.5977 9.99968 11.334V4.66732C9.99968 4.40361 10.0779 4.14582 10.2244 3.92656C10.3709 3.70729 10.5791 3.5364 10.8228 3.43548C11.0664 3.33456 11.3345 3.30816 11.5931 3.3596C11.8518 3.41105 12.0893 3.53804 12.2758 3.72451C12.4623 3.91098 12.5893 4.14856 12.6407 4.4072C12.6922 4.66584 12.6658 4.93393 12.5648 5.17756C12.4639 5.4212 12.293 5.62944 12.0738 5.77594C11.8545 5.92245 11.5967 6.00065 11.333 6.00065H4.66634Z" stroke="#6B7280" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
//                             </g>
//                             <defs>
//                                 <clipPath id="clip0_3745_2309">
//                                     <rect width="16" height="16" fill="white" />
//                                 </clipPath>
//                             </defs>
//                         </svg>
//                     </Box>
//                     <Box style={boxStyle} justifyContent={"space-between"} width={"210px"}>
//                         <CTAButton
//                             text={"Login"}
//                             fontSize="1rem"
//                             height="2.5rem"
//                         ></CTAButton>
//                         <CTAButton
//                             text={"SignUp"}
//                             bg={"#22C55E"}
//                             color={"#ffff"}
//                             fontSize="1rem"
//                             height="2.5rem"
//                         ></CTAButton>
//                     </Box>
//                 </HStack>
//             </HStack>
//         </FullContainer>
//     );
// };

export const Header = () => {
    const boxStyle = {
        display: "flex",
        alignItems: "center",
        color: "#374151",
        fontSize: "1rem"
    }

    return (
        <div className=" w-full  shadow-slate-700 border-b-[1px]  ">
            <div className="flex w-[90%] mx-auto justify-between py-4 ">
                <div className="flex w-full items-baseline gap-[40px] justify-start">
                    <p className=" text-[22px] font-bold text-green-500 ">Bizzzy</p>
                    <div className="flex gap-[20px]">
                        <NavItem title={"Find Work"} />
                        <NavItem title={"My Jobs"} />
                        <NavItem title={"Reports"} />
                        {/* <NavItem noIcon={true} title={"Messages"} /> */}
                    </div>
                </div>
                <div className="flex gap-4 w-full justify-end ">
                    <div className="flex w-[350px]">
                        <div className="flex w-[350px] items-center  rounded-lg border-[#D1D5DB] border-[1px] py-1 px-2 justify-between">
                            <div className="flex items-center gap-4">
                                <BsSearch />
                                <input
                                    placeholder="Search here..."
                                    type="text"
                                    className=" border-none outline-none text-[#9CA3AF] text-[14px] "
                                />
                            </div>

                            <BsCommand />
                        </div>
                    </div>
                    <Box style={boxStyle} justifyContent={"space-between"} width={"210px"}>
                        <CTAButton
                            text={"Login"}
                            fontSize="1rem"
                            height="2.5rem"
                        ></CTAButton>
                        <CTAButton
                            text={"SignUp"}
                            bg={"#22C55E"}
                            color={"#ffff"}
                            fontSize="1rem"
                            height="2.5rem"
                        ></CTAButton>
                    </Box>
                </div>
            </div>
        </div>
    );
};



export const AuthHeader = () => {
    return (
        <div className=" w-full  shadow-slate-700 border-b-[1px]  ">
            <div className="flex w-[90%] mx-auto justify-between py-4 ">
                <div className="flex w-full items-baseline gap-[40px] justify-start">
                    <p className=" text-[22px] font-bold text-green-500 ">Bizzzy</p>
                    <div className="flex gap-[20px]">
                        <NavItem title={"Find Work"} />
                        <NavItem title={"My Jobs"} />
                        <NavItem title={"Reports"} />
                        <NavItem noIcon={true} title={"Messages"} />
                    </div>
                </div>
                <div className="flex gap-4 w-full justify-end ">
                    <div className="flex w-[350px]">
                        <div className="flex w-[350px] items-center  rounded-lg border-[#D1D5DB] border-[1px] py-1 px-2 justify-between">
                            <div className="flex items-center gap-4">
                                <BsSearch />
                                <input
                                    placeholder="Search here..."
                                    type="text"
                                    className=" border-none outline-none text-[#9CA3AF] text-[14px] "
                                />
                            </div>

                            <BsCommand />
                        </div>
                    </div>
                    <div className=" flex items-center justify-center w-[36px] h-[36px] bg-slate-100 rounded-md ">
                        <BsSend width={"20px"} height={"20px"} />
                    </div>
                    <div className=" flex items-center justify-center w-[36px] h-[36px] bg-slate-100 rounded-md ">
                        <BsBell width={"20px"} height={"20px"} />
                    </div>
                    <div
                        className="flex items-center justify-center rounded-full w-[36px] h-[36px] "
                        style={{ background: `url(${"./images/user.jpeg"})`, backgroundSize: "contain" }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

const NavItem = ({ title, noIcon }) => {
    return (
        <div className="flex items-center gap-[8px] text-[#536e53]">
            <p className="  text-[14px] font-[500] text-[#374151] ">{title}</p>
            {!noIcon && <BsChevronDown />}
        </div>
    );
};



// export const AuthHeader = () => {
//     const navigate = useNavigate();
//     const [isHeaderFixed, setIsHeaderFixed] = useState(false);
//     const user_info = useState(localStorage.getItem("cfl_id"));

//     useEffect(() => {
//         // Add an event listener to track scroll position
//         const handleScroll = () => {
//             if (window.scrollY > 0) {
//                 setIsHeaderFixed(true);
//             } else {
//                 setIsHeaderFixed(false);
//             }
//         };

//         window.addEventListener("scroll", handleScroll);

//         // Remove the event listener when the component unmounts
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     // Define a CSS class for the fixed header
//     const headerStyles = {
//         position: isHeaderFixed ? "fixed" : "relative",
//         top: 0,
//         left: 0,
//         right: 0,
//         backgroundColor: "#fff", // Change the background color as needed
//         zIndex: 1000, // Adjust the z-index as needed
//         borderBottom: isHeaderFixed && "1px solid #CEE0FF",
//     };

//     const handleLogout = () => {
//         localStorage.removeItem("cflToken");
//         localStorage.removeItem("username");
//         navigate("/");
//     }

//     return (
//         <FullContainer borderBottom={"1px solid #CEE0FF"} bg={"#fff"}>
//             <HStack style={headerStyles}>
//                 <HStack
//                     alignItems={"center"}
//                     width={isHeaderFixed ? ["97%", "95%", "75%"] : "full"}
//                     justifyContent={"space-between"}
//                     paddingY={"20px"}
//                     margin={"auto"}
//                 >
//                     <Image
//                         src="/assets/images/newLogo.png"
//                         width={["200px", "200px", "200px", "300px"]}
//                         onClick={() => {
//                             navigate("/dashboard");
//                         }}
//                     />

//                     <HStack
//                         alignItems={"center"}
//                         gap={5}
//                         display={["none", "none", "none", "flex"]}
//                     >
//                         {/* <NavLink text={"Dashboard"} link={"/dashboard"} /> */}
//                         <div onClick={() => navigate('/edit-profile/' + user_info[0])}>
//                             <CTAButton
//                                 text={
//                                     <HiOutlineUser />
//                                 }
//                                 bg={"white"}
//                                 border={"1px solid #E2E8f0"}
//                                 fontSize={"1.4rem"}
//                                 padding={"1px"}
//                                 color={"black"}
//                                 borderRadius={"10px"}
//                                 fontWeight={"200"}
//                                 hoverbg={"#E2E8f0"}
//                             />
//                         </div>
//                         <div onClick={() => navigate('/message')}>
//                             <CTAButton
//                                 text={
//                                     <>
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                                             <path d="M20.25 8.511C21.134 8.795 21.75 9.639 21.75 10.608V14.894C21.75 16.03 20.903 16.994 19.77 17.087C19.43 17.114 19.09 17.139 18.75 17.159V20.25L15.75 17.25C14.396 17.25 13.056 17.195 11.73 17.087C11.4413 17.0637 11.1605 16.9813 10.905 16.845M20.25 8.511C20.0955 8.46127 19.9358 8.42939 19.774 8.416C17.0959 8.19368 14.4041 8.19368 11.726 8.416C10.595 8.51 9.75 9.473 9.75 10.608V14.894C9.75 15.731 10.21 16.474 10.905 16.845M20.25 8.511V6.637C20.25 5.016 19.098 3.611 17.49 3.402C15.4208 3.13379 13.3365 2.99951 11.25 3C9.135 3 7.052 3.137 5.01 3.402C3.402 3.611 2.25 5.016 2.25 6.637V12.863C2.25 14.484 3.402 15.889 5.01 16.098C5.587 16.173 6.167 16.238 6.75 16.292V21L10.905 16.845" stroke="#1E1E1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//                                         </svg>
//                                     </>
//                                 }
//                                 bg={"white"}
//                                 border={"1px solid #E2E8f0"}
//                                 fontSize={"1.4rem"}
//                                 padding={"1px"}
//                                 color={"black"}
//                                 borderRadius={"10px"}
//                                 fontWeight={"200"}
//                                 hoverbg={"#E2E8f0"}
//                             />
//                         </div>

//                         <div onClick={() => navigate('/notifications')}>
//                             <CTAButton
//                                 text={
//                                     <>
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                                             <path d="M14.857 17.082C16.7202 16.8614 18.5509 16.4217 20.311 15.772C18.8204 14.1208 17.9967 11.9745 18 9.75V9.05V9C18 7.4087 17.3678 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88257 3.63214 7.75735 4.75736C6.63213 5.88258 5.99999 7.4087 5.99999 9V9.75C6.00301 11.9746 5.17898 14.121 3.68799 15.772C5.42099 16.412 7.24799 16.857 9.14299 17.082M14.857 17.082C12.959 17.3071 11.041 17.3071 9.14299 17.082M14.857 17.082C15.0011 17.5319 15.0369 18.0094 14.9616 18.4757C14.8862 18.942 14.7018 19.384 14.4234 19.7656C14.1449 20.1472 13.7803 20.4576 13.3592 20.6716C12.9381 20.8856 12.4724 20.9972 12 20.9972C11.5276 20.9972 11.0619 20.8856 10.6408 20.6716C10.2197 20.4576 9.85506 20.1472 9.57661 19.7656C9.29816 19.384 9.11375 18.942 9.0384 18.4757C8.96305 18.0094 8.99889 17.5319 9.14299 17.082" stroke="#1E1E1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//                                         </svg>
//                                     </>
//                                 }
//                                 bg={"white"}
//                                 border={"1px solid #E2E8f0"}
//                                 fontSize={"1.4rem"}
//                                 padding={"1px"}
//                                 color={"black"}
//                                 borderRadius={"10px"}
//                                 fontWeight={"200"}
//                                 hoverbg={"#E2E8f0"}
//                             />
//                         </div>
//                         <div onClick={() => handleLogout()} className="text-bold">
//                             <CTAButton
//                                 text={
//                                     <>
//                                         Logout
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginLeft: "10px" }}>
//                                             <g clip-path="url(#clip0_26_2554)">
//                                                 <path d="M11.6667 6.66659V4.99992C11.6667 4.55789 11.4911 4.13397 11.1785 3.82141C10.8659 3.50885 10.442 3.33325 10 3.33325H4.16667C3.72464 3.33325 3.30072 3.50885 2.98816 3.82141C2.67559 4.13397 2.5 4.55789 2.5 4.99992V14.9999C2.5 15.4419 2.67559 15.8659 2.98816 16.1784C3.30072 16.491 3.72464 16.6666 4.16667 16.6666H10C10.442 16.6666 10.8659 16.491 11.1785 16.1784C11.4911 15.8659 11.6667 15.4419 11.6667 14.9999V13.3333" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
//                                                 <path d="M7.5 10H17.5L15 7.5" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
//                                                 <path d="M15 12.5L17.5 10" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
//                                             </g>
//                                             <defs>
//                                                 <clipPath id="clip0_26_2554">
//                                                     <rect width="20" height="20" fill="white" />
//                                                 </clipPath>
//                                             </defs>
//                                         </svg>
//                                     </>
//                                 }
//                                 bg={"#0086ff"}
//                                 fontSize={"md"}
//                                 padding={"5px 30px"}
//                                 color={"white"}
//                                 borderRadius={"2rem"}
//                                 fontWeight={"600"}
//                             />
//                         </div>

//                     </HStack>
//                     <Box display={["block", "block", "block", "none"]}>
//                         <HamburgerIcon fontSize={"24px"} color={"brand.400"} />
//                     </Box>
//                 </HStack>
//             </HStack>
//         </FullContainer>
//     );
// };

// export default Header;

// const NavLink = (props) => {
//     return (
//         <>
//             <Link to={props.link}>
//                 <Text
//                     fontSize={"md"}
//                     color={"white.900"}
//                     _hover={{ color: "brand.300" }}
//                     fontWeight={"600"}
//                     marginBottom={"0px"}
//                 >
//                     {props.text}
//                 </Text>
//             </Link>
//         </>
//     );
// };
