import { QuestType, ActionType } from 'const';

const initialState = {
  quests: [],
  filterType: QuestType.All,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SetQuests: {
      return {...state,
        quests: action.payload.quests,
      };
    }
    case ActionType.ChangeFilterType: {
      return {...state,
        filterType: action.payload.filterType,
      };
    }
    default: {
      return state;
    }
  };
};

export { reducer };
