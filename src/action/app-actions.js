import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

export default {
  addProject(project) {
    dispatch({
      actionType: AppConstants.ADD_PROJECT, project
    });
  },

  removeProject(project) {
    dispatch({
      actionType: AppConstants.REMOVE_PROJECT, project
    });
  },

  orderProject(project) {
    dispatch({
      actionType: AppConstants.ORDER_PROJECT, project
    });
  }
};
