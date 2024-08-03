'use client'
import { Stats, useStats } from '@/packages/api';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { NoRowsOverlay } from '../NoRowsOverlay';
import Cookies from 'js-cookie'

const STATS_COLUMNS = [{
    field: 'locationId',
    headerName: 'Location ID',
    width: 280,
}, {
    field: 'pending',
    headerName: 'Pending',
    width: 280,
}, {
    field: 'negative',
    headerName: 'Negative',
    width: 280,
}, {
    field: 'positive',
    headerName: 'Positive',
    width: 280,
},]

export const StatsList = () => {
    const [rows, setRows] = useState<Stats[]>([]);
    const isToken = !!Cookies.get(process.env.NEXT_PUBLIC_TOKEN_KEY!);

    const { data: statsData, isLoading } = useStats({
        enabled: isToken,
    });

    useEffect(() => {
        if (!isToken) return;
        if (statsData) {
            setRows(statsData);
        };
    }, [isToken, statsData]);

    return (
        <DataGrid
            style={{
                minHeight: "30rem"
            }}
            slots={{
                noRowsOverlay: NoRowsOverlay
            }}
            hideFooterPagination
            loading={isLoading}
            rows={rows}
            columns={STATS_COLUMNS}
        />

    );
}

