
import { H3 } from '@design';
import { Container } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const EXAMINATIONS_COLUMNS = [{
    field: 'id',
    headerName: 'ID',
    width: 280,
}, {
    field: 'result',
    headerName: 'Result',
    width: 280,
}, {
    field: 'locationId',
    headerName: 'Location Id',
    width: 280,
}, {
    field: 'date',
    headerName: 'Date',
    width: 280,
}]


const SearchModule = ({ rows, id }: any) => {

    return (
        <Container sx={{ py: 2 }}>
            <H3 fontWeight={500} pb={2}>Result For {id} location-ID</H3>
            <DataGrid
                style={{
                    minHeight: "30rem"
                }}
                hideFooter
                columns={EXAMINATIONS_COLUMNS}
                rows={rows}
            />
        </Container>
    );
}

export default SearchModule;