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

type Props<T> = {
  options: TabOptionsI[];
  defaultValue?: string;
  onChange: (value: T) => void;
};

export const Tabs = <T extends string>({
  options,
  defaultValue,
  onChange
}: Props<T>): ReactElement => {
  const [value, setValue] = useState(defaultValue || options[0].value);

  const onChangeTab = (_: SyntheticEvent, value: T): void => {
    if (onChange) {
      onChange(value);
    }
    setValue(value);
  };

  return (
    <Box width="100%">
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <MuiTabs
          variant="fullWidth"
          value={value}
          onChange={onChangeTab}
          aria-label="tabs"
          sx={{justifyContent: 'space-around'}}
        >
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
