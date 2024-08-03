
import { H3 } from '@design';
import { baseURL } from '@/packages/api'
import { FindExaminationsResponse } from '@/packages/api/services/home/findExaminationService'
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
},]


async function getData(locationId: string): Promise<FindExaminationsResponse> {
    const res = await fetch(`${baseURL}/examinations/find/${locationId}?page=1&limit=1000`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const SearchPage = async ({ params: { id } }: { params: { id: string } }) => {
    const res = await getData(id)

    return (
        <Container sx={{ py: 2 }}>
            <H3 fontWeight={500} pb={2}>Result For {id} location-ID</H3>
            <DataGrid
                style={{
                    minHeight: "30rem"
                }}
                hideFooter
                columns={EXAMINATIONS_COLUMNS}
                rows={res.data}
            />
        </Container>
    );
}

export default SearchPage;