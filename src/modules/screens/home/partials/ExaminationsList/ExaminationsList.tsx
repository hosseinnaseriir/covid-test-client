'use client'
import { Examination, useExaminations } from '@/packages/api';
import { Box } from '@design';
import { DataGrid, GridPaginationModel } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

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
    valueGetter: (value: string) => {
        if (!value) {
            return value;
        }
        const date = new Date(value)
        return date.toLocaleTimeString('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        });;
    },
},]

export const ExaminationsList = () => {
    const [rows, setRows] = useState<Examination[]>([]);
    const [rowsCount, setRowsCount] = useState<number>(0);

    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
        page: 0,
        pageSize: 10,
    },);

    const { data: examinationsData, isLoading } = useExaminations({
        limit: paginationModel.pageSize,
        page: paginationModel.page + 1
    }
    );
    useEffect(() => {
        if (examinationsData?.data) {
            setRows(examinationsData.data);
        };
        if (rowsCount !== examinationsData?.total) {
            setRowsCount(examinationsData?.total!)
        }
    }, [examinationsData, rowsCount]);

    return (
        <Box>
            <DataGrid
                disableColumnFilter
                style={{
                    minHeight: "30rem"
                }}
                loading={isLoading}
                rowCount={100}
                paginationModel={paginationModel}
                onPaginationModelChange={(model) => {
                    setPaginationModel(model);
                }}
                paginationMode='server'
                rows={rows}
                columns={EXAMINATIONS_COLUMNS}
            />
        </Box>

    );
}

