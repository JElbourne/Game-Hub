import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        playstation: FaPlaystation,
        xbox: FaXbox,
        pc: FaWindows,
        nintendo: SiNintendo,
        ios: MdPhoneIphone,
        web: BsGlobe,
        linux: FaLinux,
        mac: FaApple,
        abdroid: FaAndroid,
    };

    return (
        <HStack marginY={2}>
            {platforms.map((platform) => (
                <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
            ))}
        </HStack>
    );
};

export default PlatformIconList;
