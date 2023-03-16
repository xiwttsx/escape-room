import { useSelector } from 'react-redux';
import * as S from './quests-list.styled';
import { QuestItem } from './components/components';
import { QuestType } from 'const';
import { getQuests, getFilterType } from 'store/selectors';

const QuestsList = () => {
  const quests = useSelector(getQuests);
  const currentFilterType = useSelector(getFilterType);

  const questTypeToFilter = {
    [QuestType.Adventures]: 'adventures',
    [QuestType.Horror]: 'horror',
    [QuestType.Mystic]: 'mystic',
    [QuestType.Detective]: 'detective',
    [QuestType.SciFi]: 'sci-fi',
  };

  const currentQuests = (currentFilterType === QuestType.All) ? quests : quests.filter((quest) => quest.type === questTypeToFilter[currentFilterType]);

  return (
    <S.QuestsList>
      {currentQuests.map((quest) => (
        <QuestItem
          quest={quest}
          key={quest.id}
        />
      ))}
    </S.QuestsList>
  );
};

export default QuestsList;
