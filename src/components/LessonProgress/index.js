import React from 'react'

const styles = {
    progressContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    progressTitle: {
        display: 'block',
        minWidth: 90,
    },
    progressBar: {
        height: 16,
        width: '100%',
    }
}

function LessonProgress ({ completedLessons = 0, totalLessons = 100 }) {
    return (
        <div style={ styles.progressContainer }>
            <span style={ styles.progressTitle }>Your progress:</span>
            <progress value={completedLessons} max={totalLessons} style={styles.progressBar} />
        </div>
    )
}

export default LessonProgress