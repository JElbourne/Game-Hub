
import { Card, CardBody, Heading, HStack, Image, Skeleton, SkeletonText, Text } from "@chakra-ui/react";

const GameCardSkeleton = () => {
    return (
        <Card>
            <Skeleton height="200px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    );
};

export default GameCardSkeleton;
