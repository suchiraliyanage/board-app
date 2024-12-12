import React, { useMemo } from "react";

import styles from "./index.module.scss";
import TaskCard from "../TaskCard";
import DropArea from "../DropArea";
import { Task } from "../Board/slice";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";



interface TaskColumnProps {
    title: string;
    tasks: Task[];
    status: string;
    setActiveCard: (index: number | null) => void;
    onDrop: (status: string, position: number) => void;
}

const TaskColumn = (props: TaskColumnProps) => {
    const { title, tasks, status, setActiveCard, onDrop } = props;
    const searchQuery = useSelector((state: RootState) => state.board.searchQuery); 

    const filteredTasks = useMemo(() => {
        return tasks.filter(
          (task) =>
            task.status === status &&
            task.task.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [tasks, status, searchQuery]);
    return (
        <section className={styles.TaskColumn} key={status}>
            <h2 className={styles.taskColumnHeading}>
                {title}
            </h2>
            <DropArea onDrop={() => onDrop(status, 0)} />
            {filteredTasks?.map(
                (task: { task: string, status: string }, index: number) =>
                    task.status === status && (
                        <React.Fragment key={`task-${index}`}>
                            <TaskCard
                                key={`taskcard-${index}`}
                                title={task.task}
                                index={index}
                                setActiveCard={setActiveCard}
                            />
                            <DropArea onDrop={() => onDrop(status, index + 1)} />
                        </React.Fragment>
                        
                    )
            )}
        </section>
    );
};

export default TaskColumn;
