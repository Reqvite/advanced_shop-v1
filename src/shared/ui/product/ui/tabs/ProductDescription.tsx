import {LabelOptionsWithId} from '@/shared/types/options';
import {List} from '@/shared/ui';
import {DescriptionBlock} from '../DescriptionBlock';

type Props = {
  description: LabelOptionsWithId[];
};

export const ProductDescription = ({description}: Props) => {
  return <List<LabelOptionsWithId> items={description} renderItem={DescriptionBlock} />;
};
``;
