'use client'

import React from 'react'
import styles from './index.module.scss'
import { HeaderMoreActionIconsAsSvg, LogoSvg, SearchIcon, WhitePlusIcon } from '@/app/assets/svg/home'
import { RootState } from '@/app/store';
import { useDispatch, useSelector } from 'react-redux';
import { boardActions } from '../Board/slice';

const MainHeader = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.board.searchQuery);
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
                value={searchQuery}
                onChange={(e) => dispatch(boardActions.setSearchQuery(e.target.value))}
            />
          </div>
          
          <HeaderMoreActionIconsAsSvg />
        </div>
    </header>
  )
}

export default MainHeader