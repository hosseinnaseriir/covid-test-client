import { Box, Container, H1 } from '@design';
import { ExaminationsList, StatsList } from './partials';

const HomeModule = () => {

    return (
        <Container>
            <Box sx={{ py: 4 }}>
                <H1>Full list of examinations.</H1>
                <ExaminationsList />
            </Box>
            <Box>
                <StatsList />
            </Box>
        </Container>
    );
}

export default HomeModule;
