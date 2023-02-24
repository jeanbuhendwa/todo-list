const clearDoneTask = (task) => {
  const arr = task.filter((item) => !item.done);
  return arr;
};

export default clearDoneTask;
