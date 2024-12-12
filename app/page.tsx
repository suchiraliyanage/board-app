'use client'

import { useState } from "react";
import MainHeader from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskColumn from "./components/TaskColumn";
import styles from "./page.module.scss";

const oldTasks = [
  {
    task: "Task 1",
    status: "todo",
  },
  {
    task: "Task 2",
    status: "doing",
  },
  {
    task: "Task 3",
    status: "done",
  },
  {
    task: "Task 4",
    status: "todo",
  },
  {
    task: "Task 5",
    status: "doing",
  },
  {
    task: "Task 6",
    status: "done",
  },
  {
    task: "Task 7",
    status: "todo",
  },
  {
    task: "Task 8",
    status: "doing",
  },
  {
    task: "Task 9",
    status: "done",
  },
];

export default function Home() {
  const [tasks, setTasks] = useState(oldTasks);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const onDrop = (status: string, position: number) => {
    console.log(status, position);
    if (activeCard == null || activeCard === undefined) return;

    const taskToMove = tasks[activeCard];
    const updatedTasks = tasks.filter((task, index) => index !== activeCard);
    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status
    });

    setTasks(updatedTasks);
  };
  return (
    <div className={styles.page}>
      <MainHeader />
      {/* Body Container */}
      <div className={styles.bodyContainer}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className={styles.mainContent}>
          <TaskColumn
            title="To do"
            tasks={tasks}
            status="todo"
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
          <TaskColumn
            title="Doing"
            tasks={tasks}
            status="doing"
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
          <TaskColumn
            title="Done"
            tasks={tasks}
            status="done"
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
        </main>
      </div>
    </div>
  );
}
