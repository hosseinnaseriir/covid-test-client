import { Box, Container, H3, SkeletonLoading } from '@design';
import { ExaminationsList, StatsList } from './partials';
import { LocalesType } from '@/packages/types';
import { Suspense } from 'react';

const HomeModule = ({ locales }: LocalesType) => {

    return (
        <Container>
            <Box sx={{ py: 4 }}>
                <H3 fontWeight={400} pb={2}>{locales['all_examinations']}</H3>
                <Suspense fallback={<SkeletonLoading />}>
                    <ExaminationsList />
                </Suspense>
            </Box>
            <Box sx={{ py: 4 }}>
                <H3 fontWeight={400} pb={2}>{locales['examination_summary']}</H3>
                <Suspense fallback={<SkeletonLoading />}>
                    <StatsList />
                </Suspense>
            </Box>
        </Container>
    );
}

export default HomeModule;
