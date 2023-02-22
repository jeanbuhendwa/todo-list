import './style.css';
import defaultTask from './modules/taskDis.js';

const todoArr = [
  {
    id: 0,
    description: 'Going to gym',
    completed: false,
  },
  {
    id: 1,
    description: 'Having a breakfast',
    completed: false,
  },
  {
    id: 2,
    description: 'Join the morning call',
    completed: false,
  },
];

defaultTask(todoArr);
