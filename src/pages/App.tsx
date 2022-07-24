import React, { useState } from 'react';
import Timer from '../components/Timer';
import Form from '../components/Form';
import List from '../components/List';
import { ITask } from '../types/ITasks';
import style from './App.module.scss';
import Swal from 'sweetalert2';



function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const [selected, setSelected] = useState<ITask>()

  function selectTask(selectedTask:ITask) {
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task => ({...task, selected: task.id === selectedTask.id ? true : false})))
  };

  function finishTask(){
    if(selected){
      setSelected(undefined);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${selected.task} completed`,
        showConfirmButton: false,
        timer: 1500
      });
      setTasks(oldTasks =>oldTasks.map(task => {
      if (task.id === selected.id) {
        return {
          ...task, selected:false,
          completed:true

        }
      }
      return task;
    }))
    }
  }


  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List 
      tasks={tasks} 
      selectTask={selectTask}
      />
      <Timer selected={selected} finishTask={finishTask} />
      
    </div>
  );
}

export default App;
