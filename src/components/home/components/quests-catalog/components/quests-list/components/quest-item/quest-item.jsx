import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quest-item.styled';
import { PeopleCountIndex } from 'const';
import { questLevelToReadable } from 'utils';

const QuestItem = ({quest}) => {
  const {id, previewImg, title, peopleCount, level} = quest;

  return (
    <S.QuestItem>
      <S.QuestItemLink to={`/quest/${id}`}>
        <S.Quest>
          <S.QuestImage
            src={previewImg}
            width="344"
            height="232"
            alt={`квест ${title}`}
          />

          <S.QuestContent>
            <S.QuestTitle>{title}</S.QuestTitle>
            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson />
                {`${peopleCount[PeopleCountIndex.Min]}–${peopleCount[PeopleCountIndex.Max]} чел`}
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
                <IconPuzzle />
                {questLevelToReadable[level]}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
  );
};

export default QuestItem;
