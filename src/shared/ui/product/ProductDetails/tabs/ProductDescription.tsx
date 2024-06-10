import {ReactElement} from 'react';
import {LabelOptionsWithId} from '@/shared/types/options';
import {List} from '@/shared/ui';
import {DescriptionBlock} from '../../base/DescriptionBlock';

type Props = {
  description: LabelOptionsWithId[];
};

const ProductDescription = ({description}: Props): ReactElement => {
  return <List<LabelOptionsWithId> items={description} renderItem={DescriptionBlock} />;
};

export default ProductDescription;
