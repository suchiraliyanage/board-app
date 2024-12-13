'use client'

import React, { useEffect, useState } from 'react'
import TaskColumn from '../TaskColumn';
import { useDispatch, useSelector } from 'react-redux';
import { boardActions, Task, TaskStatus } from './slice';
import { RootState } from '@/app/store';

import styles from './index.module.scss';
import { PencilIcon, Plus2Icon, TeamIcon } from '@/app/assets/svg/home';

interface BoardProps {
    initialTasks: {
      TODO: Task[];
      IN_PROGRESS: Task[];
      APPROVED: Task[];
      REJECTED: Task[];
    };
}

const Board = (props: BoardProps) => {
  const { initialTasks } = props;
  const dispatch = useDispatch();
  const currentTasks = useSelector((state: RootState) => state.board.tasks);
  const [activeCard, setActiveCard] = useState<Task | null>(null);

  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (!tasks) {
        localStorage.setItem("tasks", JSON.stringify(initialTasks));
        dispatch(boardActions.setTasks(initialTasks));
    } 
  }, [initialTasks]);

  useEffect(() => {
    console.log('currentTasks', currentTasks);
  }, [currentTasks])

  const onDrop = (status: TaskStatus, position: number) => {
    if (activeCard == null || activeCard === undefined) return;
  
    const previousStatusArray = currentTasks[activeCard.status];
    const updatedStatusArray = previousStatusArray.filter((task: Task) => task.taskId !== activeCard.taskId);

    const newStatusArray = [...currentTasks[status]];
    newStatusArray.splice(position, 0, {...activeCard, status: status});

    dispatch(boardActions.setTasks({
      ...currentTasks,
      [activeCard.status]: updatedStatusArray,
      [status]: newStatusArray
    }));
  };
  return (
    <div className={styles.Board}>
      <div className={styles.boardHeader}>
        <div className={styles.topContent}>
          <div className={styles.firstLine}>
            <div className={`${styles.textContent} poppins-semibold`}>Sport Xi Project</div>
            <div className={styles.label}>In progress</div>
          </div>
          <div className={`${styles.secondLine} poppins-regular`}>event production</div>
          <div className={styles.thridLine}>
            <div className={`${styles.text} poppins-regular`}>assigned</div>
            <div className={styles.teamList}>
              <TeamIcon />
              <TeamIcon />
              <TeamIcon />
              <Plus2Icon />
            </div>
            <div className={styles.manageLabel}>
              <div className={`${styles.text} poppins-medium`}>Manage</div>
              <PencilIcon />
            </div>
          </div>
        </div>
        <div className={styles.hr} />
        <div className={`${styles.lastUpdateOn} poppins-regular`}>Last updated on: 04 April, 2022</div>
      </div>
      <div className={styles.taskColumns}>
        <TaskColumn
          title="To Do"
          tasks={currentTasks[TaskStatus.TODO]}
          status={TaskStatus.TODO}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="In Progress"
          tasks={currentTasks[TaskStatus.IN_PROGRESS]}
          status={TaskStatus.IN_PROGRESS}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Approved"
          tasks={currentTasks[TaskStatus.APPROVED]}
          status={TaskStatus.APPROVED}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Reject"
          tasks={currentTasks[TaskStatus.REJECTED]}
          status={TaskStatus.REJECTED}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </div>
        
    </div>
  )
}

export default Board