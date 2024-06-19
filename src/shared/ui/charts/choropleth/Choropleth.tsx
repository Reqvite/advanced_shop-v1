import {Box, SxProps} from '@mui/material';
import {ChoroplethProps, ResponsiveChoropleth} from '@nivo/geo';
import {defaultDomain, defaultLegends} from './model/defaultValues.const';
import map from './model/worldMap.json';

const test = [
  {
    id: 'AFG',
    value: 847645
  },
  {
    id: 'AGO',
    value: 289892
  },
  {
    id: 'ALB',
    value: 551821
  },
  {
    id: 'ARE',
    value: 384381
  },
  {
    id: 'ARG',
    value: 203985
  },
  {
    id: 'ARM',
    value: 248174
  },
  {
    id: 'ATA',
    value: 324451
  },
  {
    id: 'ATF',
    value: 289824
  },
  {
    id: 'AUT',
    value: 381104
  },
  {
    id: 'AZE',
    value: 843559
  },
  {
    id: 'BDI',
    value: 81913
  },
  {
    id: 'BEL',
    value: 638748
  },
  {
    id: 'BEN',
    value: 528686
  },
  {
    id: 'BFA',
    value: 925719
  },
  {
    id: 'BGD',
    value: 735085
  },
  {
    id: 'BGR',
    value: 804374
  },
  {
    id: 'BHS',
    value: 394484
  },
  {
    id: 'BIH',
    value: 899093
  },
  {
    id: 'BLR',
    value: 706362
  },
  {
    id: 'BLZ',
    value: 660347
  },
  {
    id: 'BOL',
    value: 611109
  },
  {
    id: 'BRN',
    value: 569812
  },
  {
    id: 'BTN',
    value: 235697
  },
  {
    id: 'BWA',
    value: 305279
  },
  {
    id: 'CAF',
    value: 210231
  },
  {
    id: 'CAN',
    value: 156062
  },
  {
    id: 'CHE',
    value: 606781
  },
  {
    id: 'CHL',
    value: 650703
  },
  {
    id: 'CHN',
    value: 455820
  },
  {
    id: 'CIV',
    value: 220568
  },
  {
    id: 'CMR',
    value: 211645
  },
  {
    id: 'COG',
    value: 931745
  },
  {
    id: 'COL',
    value: 40401
  },
  {
    id: 'CRI',
    value: 575460
  },
  {
    id: 'CUB',
    value: 882681
  },
  {
    id: '-99',
    value: 161532
  },
  {
    id: 'CYP',
    value: 970866
  },
  {
    id: 'CZE',
    value: 90866
  },
  {
    id: 'DEU',
    value: 505290
  },
  {
    id: 'DJI',
    value: 617533
  },
  {
    id: 'DNK',
    value: 689373
  },
  {
    id: 'DOM',
    value: 765224
  },
  {
    id: 'DZA',
    value: 617902
  },
  {
    id: 'ECU',
    value: 113227
  },
  {
    id: 'EGY',
    value: 534262
  },
  {
    id: 'ERI',
    value: 169260
  },
  {
    id: 'ESP',
    value: 403016
  },
  {
    id: 'EST',
    value: 387311
  },
  {
    id: 'ETH',
    value: 119789
  },
  {
    id: 'FIN',
    value: 691552
  },
  {
    id: 'FJI',
    value: 136753
  },
  {
    id: 'FLK',
    value: 212095
  },
  {
    id: 'FRA',
    value: 435960
  },
  {
    id: 'GAB',
    value: 762982
  },
  {
    id: 'GBR',
    value: 93756
  },
  {
    id: 'GEO',
    value: 661010
  },
  {
    id: 'GHA',
    value: 167337
  },
  {
    id: 'GIN',
    value: 174832
  },
  {
    id: 'GMB',
    value: 218860
  },
  {
    id: 'GNB',
    value: 402540
  },
  {
    id: 'GNQ',
    value: 870234
  },
  {
    id: 'GRC',
    value: 881726
  },
  {
    id: 'GTM',
    value: 855006
  },
  {
    id: 'GUY',
    value: 65502
  },
  {
    id: 'HND',
    value: 345220
  },
  {
    id: 'HRV',
    value: 950959
  },
  {
    id: 'HTI',
    value: 275179
  },
  {
    id: 'HUN',
    value: 951888
  },
  {
    id: 'IDN',
    value: 986826
  },
  {
    id: 'IND',
    value: 946913
  },
  {
    id: 'IRL',
    value: 367438
  },
  {
    id: 'IRN',
    value: 283477
  },
  {
    id: 'IRQ',
    value: 573909
  },
  {
    id: 'ISL',
    value: 340065
  },
  {
    id: 'ISR',
    value: 861643
  },
  {
    id: 'ITA',
    value: 628395
  },
  {
    id: 'JAM',
    value: 23633
  },
  {
    id: 'JOR',
    value: 568058
  },
  {
    id: 'JPN',
    value: 200558
  },
  {
    id: 'KAZ',
    value: 849251
  },
  {
    id: 'KEN',
    value: 765042
  },
  {
    id: 'KGZ',
    value: 824426
  },
  {
    id: 'KHM',
    value: 878211
  },
  {
    id: 'OSA',
    value: 973131
  },
  {
    id: 'KWT',
    value: 247993
  },
  {
    id: 'LAO',
    value: 306317
  },
  {
    id: 'LBN',
    value: 985930
  },
  {
    id: 'LBR',
    value: 765811
  },
  {
    id: 'LBY',
    value: 682416
  },
  {
    id: 'LKA',
    value: 178786
  },
  {
    id: 'LSO',
    value: 192993
  },
  {
    id: 'LTU',
    value: 409379
  },
  {
    id: 'LUX',
    value: 218582
  },
  {
    id: 'LVA',
    value: 645508
  },
  {
    id: 'MAR',
    value: 280020
  },
  {
    id: 'MDA',
    value: 923877
  },
  {
    id: 'MDG',
    value: 117921
  },
  {
    id: 'MEX',
    value: 419146
  },
  {
    id: 'MKD',
    value: 371383
  },
  {
    id: 'MLI',
    value: 29435
  },
  {
    id: 'MMR',
    value: 649118
  },
  {
    id: 'MNE',
    value: 527032
  },
  {
    id: 'MNG',
    value: 325573
  },
  {
    id: 'MOZ',
    value: 163840
  },
  {
    id: 'MRT',
    value: 504412
  },
  {
    id: 'MWI',
    value: 481023
  },
  {
    id: 'MYS',
    value: 858817
  },
  {
    id: 'NAM',
    value: 153271
  },
  {
    id: 'NCL',
    value: 9213
  },
  {
    id: 'NER',
    value: 946015
  },
  {
    id: 'NGA',
    value: 894968
  },
  {
    id: 'NIC',
    value: 146938
  },
  {
    id: 'NLD',
    value: 688992
  },
  {
    id: 'NOR',
    value: 940486
  },
  {
    id: 'NPL',
    value: 900788
  },
  {
    id: 'NZL',
    value: 557416
  },
  {
    id: 'OMN',
    value: 768797
  },
  {
    id: 'PAK',
    value: 636353
  },
  {
    id: 'PAN',
    value: 394765
  },
  {
    id: 'PER',
    value: 550184
  },
  {
    id: 'PHL',
    value: 746187
  },
  {
    id: 'PNG',
    value: 524367
  },
  {
    id: 'POL',
    value: 188298
  },
  {
    id: 'PRI',
    value: 24520
  },
  {
    id: 'PRT',
    value: 945197
  },
  {
    id: 'PRY',
    value: 823233
  },
  {
    id: 'QAT',
    value: 157611
  },
  {
    id: 'ROU',
    value: 808798
  },
  {
    id: 'RUS',
    value: 192036
  },
  {
    id: 'RWA',
    value: 258651
  },
  {
    id: 'ESH',
    value: 651631
  },
  {
    id: 'SAU',
    value: 398441
  },
  {
    id: 'SDN',
    value: 758161
  },
  {
    id: 'SDS',
    value: 382111
  },
  {
    id: 'SEN',
    value: 696516
  },
  {
    id: 'SLB',
    value: 933443
  },
  {
    id: 'SLE',
    value: 333708
  },
  {
    id: 'SLV',
    value: 322126
  },
  {
    id: 'ABV',
    value: 996460
  },
  {
    id: 'SOM',
    value: 461031
  },
  {
    id: 'SRB',
    value: 197826
  },
  {
    id: 'SUR',
    value: 294129
  },
  {
    id: 'SVK',
    value: 782330
  },
  {
    id: 'SVN',
    value: 353182
  },
  {
    id: 'SWZ',
    value: 900047
  },
  {
    id: 'SYR',
    value: 274904
  },
  {
    id: 'TCD',
    value: 415634
  },
  {
    id: 'TGO',
    value: 575442
  },
  {
    id: 'THA',
    value: 967401
  },
  {
    id: 'TJK',
    value: 768080
  },
  {
    id: 'TKM',
    value: 404650
  },
  {
    id: 'TLS',
    value: 100528
  },
  {
    id: 'TTO',
    value: 970345
  },
  {
    id: 'TUN',
    value: 578530
  },
  {
    id: 'TUR',
    value: 116330
  },
  {
    id: 'TWN',
    value: 96588
  },
  {
    id: 'TZA',
    value: 702821
  },
  {
    id: 'UGA',
    value: 899323
  },
  {
    id: 'UKR',
    value: 938286
  },
  {
    id: 'URY',
    value: 195402
  },
  {
    id: 'USA',
    value: 982745
  },
  {
    id: 'UZB',
    value: 726516
  },
  {
    id: 'VEN',
    value: 930057
  },
  {
    id: 'VNM',
    value: 613905
  },
  {
    id: 'VUT',
    value: 382757
  },
  {
    id: 'PSE',
    value: 149231
  },
  {
    id: 'YEM',
    value: 300203
  },
  {
    id: 'ZAF',
    value: 865036
  },
  {
    id: 'ZMB',
    value: 292635
  },
  {
    id: 'ZWE',
    value: 268906
  },
  {
    id: 'KOR',
    value: 665125
  }
];

const defaultStyles = {
  height: 500,
  width: '100%'
};

type Props = Omit<ChoroplethProps, 'domain' | 'features'> & {
  sx?: SxProps;
  features?: ChoroplethProps['features'];
  domain?: ChoroplethProps['domain'];
};

export const Choropleth = ({
  data = test,
  sx,
  features = map.features,
  domain = defaultDomain,
  ...otherProps
}: Props) => {
  return (
    <Box sx={{...defaultStyles, ...sx}}>
      <ResponsiveChoropleth
        data={data}
        margin={{top: 100, right: 0, bottom: 0, left: 0}}
        features={features}
        colors="nivo"
        domain={domain}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionType="mercator"
        projectionScale={100}
        fillColor="1"
        role="1"
        onMouseMove={() => {}}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
        onClick={() => {}}
        graticuleLineWidth={0.5}
        isInteractive={true}
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        legends={defaultLegends}
        {...otherProps}
      />
    </Box>
  );
};
