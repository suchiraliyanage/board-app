import React from "react";

import styles from "./index.module.scss";

interface TaskCardProps {
    title: string;
    index: number;
    setActiveCard: (index: number | null) => void;
}

const TaskCard = (props: TaskCardProps) => {
    const { title, setActiveCard, index } = props;
    return (
        <article className={styles.TaskCard}
            draggable
            onDragStart={() => setActiveCard(index)}
            onDragEnd={() => setActiveCard(null)}
        >
            <p className={styles.taskText}>{title}</p>
        </article>
    );
};

export default TaskCard;
