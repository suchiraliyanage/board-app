import MainHeader from "./components/Header";
import Sidebar from "./components/Sidebar";
import styles from "./page.module.scss";
import Board from "./components/Board";

export default async function Home() {
  const response = await fetch('http://localhost:3000/api/tasks');
  const tasks = await response.json();
  return (
    <div className={styles.page}>
      <MainHeader />
      {/* Body Container */}
      <div className={styles.bodyContainer}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className={styles.mainContent}>
            <Board initialTasks={tasks} />
        </main>
      </div>
    </div>
  );
}
