import React from 'react'
import styles from './index.module.scss'

interface DropAreaProps {
    onDrop: () => void;
}

const DropArea = (props: DropAreaProps) => {
  const { onDrop } = props;
  const [showDropArea, setShowDropArea] = React.useState(false);
  return (
    <section
        className={showDropArea? styles.DropArea : styles.DropAreaHidden}
        onDragEnter={() => setShowDropArea(true)}
        onDragLeave={() => setShowDropArea(false)}
        onDrop={() => {
            setShowDropArea(false);
            onDrop();
        }}
        onDragOver={(e) => e.preventDefault()}
    >
        Drop
    </section>
  )
}

export default DropArea;