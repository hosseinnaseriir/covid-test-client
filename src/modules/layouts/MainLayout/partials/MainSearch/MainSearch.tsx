'use client';
import { Box, Button, H1 } from '@design';
import { AutoComplete } from '@design';
import { SearchLineSvg } from '@icons/svgs';
import { useLocations } from '@/packages/api';
import { useMemo, useState } from 'react';

export const MainSearch = () => {

    const { data, isPending } = useLocations();
    const [selectedItem, setSelectedItem] = useState()

    const options = useMemo(() => {
        return data?.map((location) => ({
            id: location,
            value: location,
            label: `location ${location}`,
        })) ?? []
    }, [data]);

    return (
        <Box sx={{
            width: "32rem",
            display: 'flex',
            gap: 1,
            '& .MuiInputBase-root': {
                bgcolor: "common.white"
            }
        }}>
            <AutoComplete
                loading={isPending}
                fullWidth
                value={selectedItem}
                onChange={(_e, _value) => {
                    console.log({ _value });
                    setSelectedItem(_value)
                }}
                InputProps={{
                    placeholder: "Search With Location ID",
                }}
                options={options} />
            <Button variant='contained' color='primary'>
                <SearchLineSvg fontSize='small' />
            </Button>
        </Box>
    );
};

