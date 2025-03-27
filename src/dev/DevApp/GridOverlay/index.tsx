import React, { useEffect, useState } from 'react'
import styles from './index.less'

export default function GridOverlay() {
  const [ isVisible, setIsVisible ] = useState( false )

  useEffect(() => {
    function handleKeyDown( event: KeyboardEvent ) {
      if ( event.ctrlKey && event.key === 'g' ) { // Ctrl + G
        setIsVisible(( visible ) => !visible )
      }
    }

    window.addEventListener( 'keydown', handleKeyDown )

    return () => {
      window.removeEventListener( 'keydown', handleKeyDown )
    }
  }, [])

  if ( !isVisible ) {return null}

  return (
    <div className={styles.grid}>
      {new Array( 12 ).fill( 0 ).map(( _, columnIndex ) => {
        return (
          <div key={`column-${ columnIndex }`} className={styles.gridColumn} />
        )
      })}
    </div>
  )
}
