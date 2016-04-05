import { dispatch, register } from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _projects = [];

for (var i = 0; i < 9; i++) {
  _projects.push({
    id: i,
    title: 'Project'+i,
    description: 'lorem ipsum '+i,
    url: '#',
    img_src: 'http://placehold.it/350x150'
  });
}

const _removeProject = project => {
  _projects.splice(_projects.findIndex(i => i === project), 1);
};

const _findProject = project => {
  return _projects.find(item => item.id === project.id);
};

const _addProject = project => {
  const projectItem = _findProject(project);

  if (projectItem) {
    return;
  }

  _projects.push(project);
};

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getProjects() {
    return _projects;
  },

  dispatcherIndex: register(function(action) {
    switch(action.actionType) {
      case AppConstants.ADD_PROJECT:
        _addProject(action.item);
        break;
      case AppConstants.REMOVE_PROJECT:
        _removeProject(action.item);
        break;
    }

    AppStore.emitChange()
  })
});

export default AppStore;