export const getTasks = function() {
  return JSON.parse(localStorage.getItem('DB_tasks')) || []
}
export const asyncGetTasks = function() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(getTasks())
      }, 0)
    } catch (e) {
      reject(e)
    }
  })
}
export const setTasks = function(tasks) {
  localStorage.setItem('DB_tasks', JSON.stringify(tasks))
}
export const asyncSetTasks = function(tasks) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        setTasks(tasks)
        resolve()  
      }, 0);
    } catch (e) {
      reject(e)
    }
  })
}

export default {
  getTasks,
  asyncGetTasks,
  setTasks,
  asyncSetTasks,
}
