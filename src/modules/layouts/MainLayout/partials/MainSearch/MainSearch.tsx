'use client';
import { Box, Button, H1 } from '@design';
import { AutoComplete } from '@design';
import { SearchLineSvg } from '@icons/svgs';
import { useLocations } from '@/packages/api';
import { useMemo, useState } from 'react';
import { useLocales } from '@/packages';

export const MainSearch = () => {

    const locales = useLocales()
    const { data, isLoading } = useLocations();
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
                loading={isLoading}
                fullWidth
                value={selectedItem}
                onChange={(_e, _value) => {
                    setSelectedItem(_value)
                }}
                InputProps={{
                    placeholder: locales["search_with_location"],
                }}
                options={options} />
            <Button variant='contained' color='primary'>
                <SearchLineSvg fontSize='small' />
            </Button>
        </Box>
    );
};

