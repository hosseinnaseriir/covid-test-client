'use client';
import { Box, Button } from '@design';
import { AutoComplete } from '@design';
import { SearchLineSvg } from '@icons/svgs';
import { useLocations } from '@/packages/api';
import { useMemo, useState } from 'react';
import { useLocales } from '@/packages';
import { AutoCompleteOption } from '@/packages/design/components/inputs/AutoComplete/types';
import { useRoutes } from '@/packages/routes';

export const MainSearch = () => {
    const locales = useLocales()
    const { data, isLoading } = useLocations();
    const ROUTES = useRoutes();

    const [selectedItem, setSelectedItem] = useState<AutoCompleteOption | null>(null);

    const options = useMemo(() => {
        return data?.map((location) => ({
            id: location,
            value: location,
            label: `location ${location}`,
        })) ?? []
    }, [data]);


    return (
        <Box sx={{
            width: 'clamp(22rem, 45%, 45rem)',
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
            <Button href={selectedItem?.value ? ROUTES.SEARCH(selectedItem?.value.toString()) : undefined} variant='contained' color='primary'>
                <SearchLineSvg fontSize='small' />
            </Button>
        </Box>
    );
};

