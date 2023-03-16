import { useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import NotFound from '../not-found/not-found';
import { getQuests } from 'store/selectors';
import { PeopleCountIndex } from 'const';
import { questTypeToReadable, questLevelToReadable } from 'utils';

const DetailedQuest = () => {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const onModalClose = () => {
    setIsBookingModalOpened(false);
  };

  const quests = useSelector(getQuests);
  const {id} = useParams();
  const quest = quests.find((quest) => quest.id.toString() === id);

  if (!quest) {
    return <NotFound />;
  };

  const {coverImg, title, type, duration, peopleCount, level, description } = quest;

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${coverImg}`}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{questTypeToReadable[type]}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${peopleCount[PeopleCountIndex.Min]}–${peopleCount[PeopleCountIndex.Max]} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{questLevelToReadable[level]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onModalClose={onModalClose}/>}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
