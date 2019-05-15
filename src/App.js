import './App.css'
import Sider from './components/Sider'
import React, { useState } from 'react'
import LessonPage from './pages/Lesson'
import LessonProgress from './components/LessonProgress'

const initialLessonListState = [{
    id: 1,
    title: 'Lesson 1',
    completed: true,
    type: 'content',
    content: (
        <>
            <p>React rocks!</p>
        </>
    )
}, {
    id: 2,
    title: 'Quiz 1',
    completed: false,
    type: 'quiz',
    content: (
        <>
            <p>What rocks?</p>
            <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Ember</li>
                <li>Vue</li>
            </ul>
        </>
    )
}, {
    id: 3,
    title: 'Assessment 1',
    completed: false,
    type: 'assessment',
    content: (
        <>
            <p>Find a library that rocks.</p>
            <em>Deadline: One week</em>
        </>
    )
}]

function App() {
    const [lessonList, setLessonList] = useState(initialLessonListState)
    const [activeLessonId, setActiveLessonId] = useState(1)
    const onLessonCompletion = id => setLessonList(
        lessonList.map(i => ({ ...i, completed: id === i.id || i.completed }))
    )
    const goToNextLesson = () => setActiveLessonId(
        lessonList[lessonList.findIndex(o => o.id === activeLessonId)+1].id
    )
    const goToPreviousLesson = () => setActiveLessonId(
        lessonList[lessonList.findIndex(o => o.id === activeLessonId)-1].id
    )

    return (
        <div className="App">
            <Sider>
                <Sider.Item style={{ fontSize: 12 }}>
                    <LessonProgress
                        completedLessons={lessonList.reduce((acc, i) => acc + (i.completed ? 1 : 0), 0)}
                        totalLessons={lessonList.length}
                    />
                </Sider.Item>

                { lessonList.map(lesson => (
                    <Sider.Item
                        key={lesson.id}
                        onClick={() => setActiveLessonId(lesson.id)}
                    >
                        <span style={{
                            color: lesson.id === activeLessonId ? 'white' : undefined
                        }}>
                            { lesson.title }
                        </span> { lesson.completed && <span>(Done)</span>}
                    </Sider.Item>
                ))}
            </Sider>

            <LessonPage
                activeLesson={lessonList.find(o => o.id === activeLessonId)}
                prevLessonExists={lessonList[0].id !== activeLessonId}
                nextLessonExists={lessonList[lessonList.length-1].id !== activeLessonId}
                goToPreviousLesson={goToPreviousLesson}
                onLessonCompletion={onLessonCompletion}
                goToNextLesson={goToNextLesson}
            />
        </div>
    )
}

export default App
