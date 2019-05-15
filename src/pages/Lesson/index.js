import React from 'react'
import PropTypes from 'prop-types'
import QuizView from '../../components/QuizView'
import ContentView from '../../components/ContentView'
import AssessmentView from '../../components/AssessmentView'

const PrevLessonButton = ({ goToPreviousLesson, prevLessonExists }) => (
    <button
        disabled={!prevLessonExists}
        onClick={goToPreviousLesson}
    >
        Prev Lesson
    </button>
)

PrevLessonButton.propTypes = {
    goToPreviousLesson: PropTypes.func.isRequired,
    prevLessonExists: PropTypes.bool.isRequired,
}

const DoneButton = ({ onClick }) => (
    <button onClick={onClick}>
        Done
    </button>
)

DoneButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}

const NextLessonButton = ({ goToNextLesson, nextLessonExists }) => (
    <button
        disabled={!nextLessonExists}
        onClick={goToNextLesson}
    >
        Next Lesson
    </button>
)

NextLessonButton.propTypes = {
    goToNextLesson: PropTypes.func.isRequired,
    nextLessonExists: PropTypes.bool.isRequired,
}

const typeViewMap = {
    content: ContentView,
    quiz: QuizView,
    assessment: AssessmentView,
}

function Lesson ({
     activeLesson,
     onLessonCompletion,
     goToPreviousLesson,
     prevLessonExists,
     goToNextLesson,
     nextLessonExists
}) {
    const View = typeViewMap[activeLesson.type]

    return (
        <div className="main">
            <View {...activeLesson} />

            <div>
                <PrevLessonButton goToPreviousLesson={goToPreviousLesson} prevLessonExists={prevLessonExists} />
                <DoneButton onClick={() => onLessonCompletion(activeLesson.id)} />
                <NextLessonButton goToNextLesson={goToNextLesson} nextLessonExists={nextLessonExists} />
            </div>
        </div>
    )
}

Lesson.propTypes = {
    activeLesson: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        type: PropTypes.oneOf(['content', 'quiz', 'assessment'])
    }).isRequired,
    onLessonCompletion: PropTypes.func.isRequired,
    goToPreviousLesson: PropTypes.func.isRequired,
    prevLessonExists: PropTypes.bool.isRequired,
    goToNextLesson: PropTypes.func.isRequired,
    nextLessonExists: PropTypes.bool.isRequired,
}

export default Lesson