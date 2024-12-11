import React from 'react'
import styles from './index.module.scss'
import { HeaderMoreActionIconsAsSvg, LogoSvg, SearchIcon, WhitePlusIcon } from '@/app/assets/svg/home'

const MainHeader = () => {
  return (
    <header className={styles.header}>
        <div className={styles.headerLeft}>
          <LogoSvg />
        </div>
        <div className={styles.headerRight}>
          <button className={`${styles.createBoardButton} poppins-semibold`}>
            Create new board
            <WhitePlusIcon />
          </button>
          <div className={styles.searchInput}>
            <SearchIcon />
            <input
                type="text"
                placeholder="Search tasks..."
            />
          </div>
          
          <HeaderMoreActionIconsAsSvg />
        </div>
    </header>
  )
}

export default MainHeader