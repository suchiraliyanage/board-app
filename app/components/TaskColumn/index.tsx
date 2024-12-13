import React, { useMemo } from "react";

import styles from "./index.module.scss";
import TaskCard from "../TaskCard";
import DropArea from "../DropArea";
import { Task, TaskStatus } from "../Board/slice";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";



interface TaskColumnProps {
    title: string;
    tasks: Task[];
    status: TaskStatus;
    setActiveCard: (task: Task | null) => void;
    onDrop: (status: TaskStatus, position: number) => void;
}

const TaskColumn = (props: TaskColumnProps) => {
    const { title, tasks, status, setActiveCard, onDrop } = props;
    const searchQuery = useSelector((state: RootState) => state.board.searchQuery); 

    const filteredTasks = useMemo(() => {
        return tasks?.filter(
          (task) =>
            task.task.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [tasks, searchQuery]);
    return (
        <section className={styles.TaskColumn} key={status}>
            <div className={styles.taskColumnHeading}>
                {title}
            </div>
            <div className={styles.taskListArea}>
                <DropArea onDrop={() => onDrop(status, 0)} />
                {filteredTasks?.map(
                    (task: Task, index: number) =>
                        <React.Fragment key={`task-${task.taskId}`}>
                            <TaskCard
                                key={`taskcard-${task.taskId}`}
                                task={task}
                                setActiveCard={setActiveCard}
                            />
                            <DropArea onDrop={() => onDrop(status, index + 1)} />
                        </React.Fragment>
                )}
            </div>
            
        </section>
    );
};

export default TaskColumn;
