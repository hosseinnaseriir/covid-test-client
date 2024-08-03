
import { baseURL } from '@/packages/api'
import { FindExaminationsResponse } from '@/packages/api/services/home/findExaminationService'
import dynamic from 'next/dynamic';

const SearchModule = dynamic(() => import('@/modules/screens/home/SearchModule/SearchModule'))

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
        <SearchModule rows={res.data} id={id} />
    );
}

export default SearchPage;