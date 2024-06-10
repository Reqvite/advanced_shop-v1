import {Box, Tab, Tabs as MuiTabs} from '@mui/material';
import {ReactElement, SyntheticEvent, useState} from 'react';
import {TabOptionsI} from '@/shared/types/options';
import {Chip} from '../chip/Chip';

function appyProps(index: string): {
  id: string;
  'aria-controls': string;
} {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

type Props = {
  options: TabOptionsI[];
  defaultValue?: string;
  onChange: (value: string) => void;
};

export const Tabs = ({options, defaultValue, onChange}: Props): ReactElement => {
  const [value, setValue] = useState(defaultValue || options[0].value);

  const onChangeTab = (_: SyntheticEvent, value: string): void => {
    if (onChange) {
      onChange(value);
    }
    setValue(value);
  };

  return (
    <Box width="100%">
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <MuiTabs value={value} onChange={onChangeTab} aria-label="tabs">
          {options?.map((tab) => (
            <Tab
              key={tab.value}
              icon={tab.count ? <Chip label={tab.count} /> : undefined}
              iconPosition="end"
              value={tab.value}
              label={tab.label}
              {...appyProps(tab.label)}
            />
          ))}
        </MuiTabs>
      </Box>
    </Box>
  );
};
