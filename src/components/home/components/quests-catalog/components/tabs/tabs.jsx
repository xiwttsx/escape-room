import * as S from './tabs.styled';
import { TabItem } from './components/components';
import { QuestType } from 'const';

const Tabs = () => {
  const filterTypes = Object.values(QuestType);

  return (
    <S.Tabs>
      {filterTypes.map((filterType) => (
        <TabItem
          key={filterType}
          item={filterType}
        />
      ))}
    </S.Tabs>
  );
};

export default Tabs;
