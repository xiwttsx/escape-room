import { ActionType } from 'const';

const setQuests = (quests) => ({
  type: ActionType.SetQuests,
  payload: {
    quests: quests,
  },
});

const changeFilterType = (filterType) => ({
  type: ActionType.ChangeFilterType,
  payload: {
    filterType: filterType,
  },
});

export { setQuests, changeFilterType };
