import MainHeader from "./components/Header";
import Sidebar from "./components/Sidebar";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainHeader />
      {/* Body Container */}
      <div className={styles.bodyContainer}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className={styles.mainContent}>Test</main>
      </div>
    </div>
  );
}
