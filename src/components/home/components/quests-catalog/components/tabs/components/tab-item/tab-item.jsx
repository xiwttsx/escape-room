import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import * as S from './tab-item.styled';
import { QuestType } from 'const';
import { changeFilterType } from 'store/actions';
import { getFilterType } from 'store/selectors';

const TabItem = ({item}) => {
  const dispatch = useDispatch();
  const currentFilterType = useSelector(getFilterType);

  const questTypeToIcon = {
    [QuestType.All]: <IconAllQuests />,
    [QuestType.Adventures]: <IconAdventures />,
    [QuestType.Horror]: <IconHorrors />,
    [QuestType.Mystic]: <IconMystic />,
    [QuestType.Detective]: <IconDetective />,
    [QuestType.SciFi]: <IconScifi />,
  };

  const handleFilterTypeChange = () => {
    dispatch(changeFilterType(item));
  };

  return (
    <S.TabItem
      onClick={handleFilterTypeChange}
    >
      <S.TabBtn
        isActive={item === currentFilterType}
      >
        {questTypeToIcon[item]}
        <S.TabTitle>{item}</S.TabTitle>
      </S.TabBtn>
    </S.TabItem>
  );
};

export default TabItem;
