import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import {
  TeamIcon,
  BlackArrowDown,
  DashboardIcon,
  BoardsIcon,
  BlueArrowUp,
  GrayArrowRight,
  BlueArrowRight,
  MessagesIcon,
  CalendarIcon,
  TeamMembersIcon,
  SupportIcon,
  LogoutIcon,
} from "@/app/assets/svg/home";

const Sibebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.workspaceMain}>
          <div className={styles.iconAndContent}>
            <TeamIcon />
            <div className={styles.content}>
              <div className={`${styles.subText} poppins-regular`}>
                workspace
              </div>
              <div className={`${styles.mainText} poppins-medium`}>
                Root folder
              </div>
            </div>
          </div>
        </div>
        <BlackArrowDown />
      </div>
      <nav className={styles.sidebarNav}>
        <ul>
          <li>
            <Link href="/">
              <div className={styles.iconAndText}>
                <DashboardIcon />
                <span className={`${styles.menuItemText} poppins-medium`}>
                  Dashboard
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.activeMenu}>
              <div className={styles.iconAndText}>
                <BoardsIcon />
                <span className={`${styles.menuItemTextActive} poppins-medium`}>
                  Boards
                </span>
              </div>
              <BlueArrowUp />
            </Link>
            <ul className={styles.subMenu}>
              <li>
                <Link href="/" className={styles.subMenuItem}>
                  <div className={styles.subMenuIconAndText}>
                    <GrayArrowRight />
                    <span
                      className={`${styles.subMenuItemText} poppins-regular`}
                    >
                      Create routes
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/" className={styles.subMenuItem}>
                  <div className={styles.subMenuIconAndText}>
                    <GrayArrowRight />
                    <span
                      className={`${styles.subMenuItemText} poppins-regular`}
                    >
                      Delepment React App
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/" className={styles.subMenuItem}>
                  <div className={styles.subMenuIconAndText}>
                    <BlueArrowRight />
                    <span
                      className={`${styles.subMenuItemTextActive} poppins-medium`}
                    >
                      Sport Xi Project
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/" className={styles.subMenuItem}>
                  <div className={styles.subMenuIconAndText}>
                    <GrayArrowRight />
                    <span
                      className={`${styles.subMenuItemText} poppins-regular`}
                    >
                      Wordpress theme
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/">
              <div className={styles.iconAndText}>
                <MessagesIcon />
                <span className={`${styles.menuItemText} poppins-medium`}>
                  Messages
                </span>
              </div>
              <span className={`${styles.badge} poppins-medium`}>3</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className={styles.iconAndText}>
                <CalendarIcon />
                <span className={`${styles.menuItemText} poppins-medium`}>
                  Calendar
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className={styles.iconAndText}>
                <TeamMembersIcon />
                <span className={`${styles.menuItemText} poppins-medium`}>
                  {" "}
                  Team Members
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.sidebarFooter}>
        <nav className={styles.sidebarNav}>
          <ul>
            <li>
              <Link href="/">
                <div className={styles.iconAndText}>
                  <SupportIcon />
                  <span className={`${styles.menuItemText} poppins-medium`}>
                    Support
                  </span>
                </div>
              </Link>
            </li>
            <button className={styles.logoutButton}>
              <LogoutIcon />
              <span className={`${styles.menuItemText} poppins-regular`}>
                Logout
              </span>
            </button>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sibebar;
