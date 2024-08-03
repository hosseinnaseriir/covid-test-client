'use client'
import { Examination, useExaminations } from '@/packages/api';
import { Box, Container, H1 } from '@design';
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
},]

export const ExaminationsList = () => {
    const [rows, setRows] = useState<Examination[]>([]);
    const [rowsCount, setRowsCount] = useState<number>(0);
    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
        page: 0,
        pageSize: 10,
    });

    const { data: examinationsData, isLoading } = useExaminations({
        limit: paginationModel.pageSize,
        page: paginationModel.page + 1
    });

    useEffect(() => {
        if (examinationsData?.data) {
            setRows(examinationsData.data);
        };
        if (rowsCount !== examinationsData?.total) {
            setRowsCount(examinationsData?.total!)
        }
    }, [examinationsData, rowsCount]);

    return (
        <DataGrid
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

    );
}

