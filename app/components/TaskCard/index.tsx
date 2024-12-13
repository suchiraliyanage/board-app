import React from "react";

import styles from "./index.module.scss";
import { Task } from "../Board/slice";

interface TaskCardProps {
    task: Task;
    setActiveCard: (task: Task | null) => void;
}

const TaskCard = (props: TaskCardProps) => {
    const { task, setActiveCard } = props;
    return (
        <article className={styles.TaskCard}
            draggable
            onDragStart={() => setActiveCard(task)}
            onDragEnd={() => setActiveCard(null)}
        >
            <p className={styles.taskText}>{task?.task}</p>
        </article>
    );
};

export default TaskCard;
