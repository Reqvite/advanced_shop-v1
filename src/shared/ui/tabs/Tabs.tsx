import {Box, Tab, Tabs as MuiTabs, Typography} from '@mui/material';
import {ReactElement, ReactNode, SyntheticEvent, useState} from 'react';

interface TabPanelProps {
  children?: ReactNode;
  options?: {label: string}[];
  index: number;
  value: number;
}

function a11yProps(index: string): {
  id: string;
  'aria-controls': string;
} {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export const CustomTabPanel = ({children, value, index, ...other}: TabPanelProps): ReactElement => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

type Props = {
  options: {label: string; value: string}[];
  defaultValue?: string;
  onChange: (value: string) => void;
};

export const Tabs = ({options, defaultValue, onChange}: Props): ReactElement => {
  const [value, setValue] = useState(defaultValue || options[0].value);

  const onChangeTab = (event: SyntheticEvent, value: string): void => {
    if (onChange) {
      onChange(value);
    }
    setValue(value);
  };

  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <MuiTabs value={value} onChange={onChangeTab} aria-label="tabs">
          {options?.map((tab) => (
            <Tab key={tab.label} value={tab.value} label={tab.label} {...a11yProps(tab.label)} />
          ))}
        </MuiTabs>
      </Box>
    </Box>
  );
};
