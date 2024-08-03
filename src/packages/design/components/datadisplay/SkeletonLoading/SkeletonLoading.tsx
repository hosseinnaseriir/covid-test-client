import { Skeleton, LinearProgress, Box } from "@design";

export const SkeletonLoading = () => {
    return (
        <Box sx={{ p: 3 }}>
            <LinearProgress />
            <Skeleton
                variant="rectangular"
                width={"100%"}
                height={500}
            >
            </Skeleton>
        </Box>
    );
}
