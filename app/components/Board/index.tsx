'use client'

import React, { useEffect, useState } from 'react'
import TaskColumn from '../TaskColumn';
import { useDispatch, useSelector } from 'react-redux';
import { boardActions, Task } from './slice';

interface BoardProps {
    initialTasks: Task[];
}

const Board = (props: BoardProps) => {
  const { initialTasks } = props;
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currentTasks = useSelector((state: any) => state.board.tasks);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (!tasks) {
        localStorage.setItem("tasks", JSON.stringify(initialTasks));
        dispatch(boardActions.setTasks(initialTasks));
    } 
  }, [initialTasks]);

  const onDrop = (status: string, position: number) => {
    if (activeCard == null || activeCard === undefined) return;

    const taskToMove = currentTasks[activeCard];
    const updatedTasks = currentTasks.filter((task: Task, index: number) => index !== activeCard);
    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status
    });
    dispatch(boardActions.setTasks(updatedTasks));
  };
  return (
    <React.Fragment>
        <TaskColumn
            title="To Do"
            tasks={currentTasks}
            status="todo"
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
          <TaskColumn
            title="In Progress"
            tasks={currentTasks}
            status="in-progress"
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
          <TaskColumn
            title="Approved"
            tasks={currentTasks}
            status="approved"
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
          <TaskColumn
            title="Reject"
            tasks={currentTasks}
            status="reject"
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
    </React.Fragment>
  )
}

export default Board