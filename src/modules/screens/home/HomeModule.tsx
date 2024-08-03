import { Box, Container, H1 } from '@design';
import { ExaminationsList, StatsList } from './partials';
import { LocalesType } from '@/packages/types';

const HomeModule = ({ locales }: LocalesType) => {

    return (
        <Container>
            <Box sx={{ py: 4 }}>
                <H1>{locales['all_examinations']}</H1>
                <ExaminationsList />
            </Box>
            <Box sx={{ py: 4 }}>
                <H1>{locales['examination_summary']}</H1>
                <StatsList />
            </Box>
        </Container>
    );
}

export default HomeModule;
