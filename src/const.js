import { Icon } from 'leaflet';
import icon from 'assets/img/icon-blip.svg';

const ERROR_MESSAGE = 'Произошла ошибка';

const ORDER_POST_SUCCESS_MESSAGE = 'Ваша заявка успешно отправлена';

const CUSTOM_ICON_URL = icon;

const PeopleCountIndex = {
  Min: 0,
  Max: 1,
};

const AppRoute = {
  Home: '/',
  Quest: '/quest/:id',
  Contacts: '/contacts',
};

const ApiRoute = {
  Quests: '/quests',
  Orders: '/orders',
};

const ActionType = {
  SetQuests: 'app/set-offers-by-city',
  ChangeFilterType: 'app/change-filter-type',
};

const QuestType = {
  All: 'Все квесты',
  Adventures: 'Приключения',
  Horror: 'Ужасы',
  Mystic: 'Мистика',
  Detective: 'Детектив',
  SciFi: 'Sci-fi',
};

const Location = {
  Latitude: 59.9683678326388,
  Longitude: 30.31740466844768,
  Zoom: 16,
};

const CustomIcon = new Icon({
  iconUrl: CUSTOM_ICON_URL,
  iconSize: [56, 70],
  iconAnchor: [28, 70],
});

const MapSize = {
  Height: '336px',
  Width: '649px',
};

export {
  ERROR_MESSAGE,
  ORDER_POST_SUCCESS_MESSAGE,
  PeopleCountIndex,
  AppRoute,
  ApiRoute,
  ActionType,
  QuestType,
  Location,
  CustomIcon,
  MapSize
};
