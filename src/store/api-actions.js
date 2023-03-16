import { toast } from 'react-toastify';
import {
  ERROR_MESSAGE,
  ORDER_POST_SUCCESS_MESSAGE,
  ApiRoute
 } from 'const';
import { setQuests } from './actions';

const getDataQuests = () =>
  async (dispatch, _getState, api) => {
    await api.get(ApiRoute.Quests)
      .then(({data}) => {
        dispatch(setQuests(data));
      })
      .catch(() => {
        toast.error(ERROR_MESSAGE);
      })
  };

const postOrder = (order) =>
  async (_dispatch, _getState, api) => {
    try {
      await api.post(ApiRoute.Orders, order);
      toast.success(ORDER_POST_SUCCESS_MESSAGE)
    } catch {
      toast.error(ERROR_MESSAGE);
    }
  };

export { getDataQuests, postOrder };
