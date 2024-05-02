import { useState } from 'react'
import { v4 as uuid4 } from 'uuid'
//import { initDB, addData, getStoreData, deleteStoreData, Stores, Pomodoro } from './utils/db'
import { SettingIcon, ReportIcon, KeyboardIcon, AddIcon, MoreIcon } from './components/Icons'
import TaskItem from './components/Task/TaskItem'
import TimeDisplay from './components/TimeDisplay'
import LogoImage from './media/img/logo.svg'
import './App.css'
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'

import SortableItem from './components/SortableItem'

const ModeOptions = {
    POMODORO: 'Pomodoro',
    LONG_BREAK: 'Long Break',
    Short_Break: 'Short Break',
}

const Icon = ({ children, className }: any) => {
    return (
        <button
            className={`bg-[#F2F2F2] hover:brightness-90 active:brightness-75 w-8 h-8 flex justify-center items-center rounded-md ${className}`}
        >
            {children}
        </button>
    )
}

function App() {
    // const [isReady, setIsReady] = useState(false)
    // const [data, setData] = useState<Pomodoro[] | []>([])
    const [mode, setMode] = useState(ModeOptions.POMODORO)
    const [tasks, setTasks] = useState([
        {
            title: 'Reading a book',
            id: '111',
            complete: 2,
            total: 4,
            checked: false,
            isCurrent: false,
        },
        {
            title: 'Wash dishes',
            id: '222',
            complete: 1,
            total: 3,
            checked: true,
            isCurrent: true,
        },
        {
            title: 'Write an article',
            id: '3',
            complete: 2,
            total: 3,
            checked: true,
            isCurrent: false,
        },
    ])
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    )

    function handleDragEnd(event: any) {
        const { active, over } = event

        if (active.id !== over.id) {
            setTasks((tasks) => {
                const oldIndex = tasks.findIndex((task) => task.id === active.id)
                const newIndex = tasks.findIndex((task) => task.id === over.id)

                return arrayMove(tasks, oldIndex, newIndex)
            })
        }
    }

    // const handleInitDB = async () => {
    //     const status = await initDB()
    //     setIsReady(true)
    // }

    // const handleAddPomodoro = async () => {
    //     const fakeData = {
    //         id: uuid4(),
    //         title: 'test',
    //         done: 1,
    //         order: 1,
    //         actPomodoro: 1,
    //         estPomodoro: 1,
    //     }
    //     try {
    //         const res = await addData(Stores.Activity, fakeData)
    //         await handleGetData()
    //     } catch (error) {
    //         if (error instanceof Error) {
    //             console.log(error.message)
    //         } else {
    //             console.log('something went wrong')
    //         }
    //     }
    // }

    // const handleGetData = async () => {
    //     try {
    //         const data = await getStoreData(Stores.Activity)
    //         if (data) setData(data as Pomodoro[])
    //     } catch (error) {
    //         if (error instanceof Error) {
    //             console.log('error', error)
    //         } else {
    //             console.log('unknown error')
    //         }
    //     }
    // }

    // const handleDeleteData = async (id: string) => {
    //     try {
    //         await deleteStoreData(Stores.Activity, id)
    //         await handleGetData()
    //     } catch (error) {
    //         if (error instanceof Error) {
    //             console.log('error', error)
    //         } else {
    //             console.log('unknown error')
    //         }
    //     }
    // }

    return (
        <div className="w-screen h-screen p-8 flex flex-col items-center bg-main-bg">
            <header className="w-full flex flex-row justify-between">
                <a href="/">
                    <img src={LogoImage} title="Homepage" alt="homepage" className="w-6"></img>
                </a>
                <div className="flex flex-row justify-center gap-4">
                    <Icon>
                        <SettingIcon />
                    </Icon>
                    <Icon>
                        <ReportIcon />
                    </Icon>
                    <Icon>
                        <KeyboardIcon />
                    </Icon>
                </div>
            </header>
            <main className="mt-10">
                <div className="flex flex-row justify-between">
                    {Object.values(ModeOptions).map((name) => (
                        <button
                            key={name}
                            onClick={() => setMode(name)}
                            className={[
                                'text-xl',
                                'font-semibold',
                                'font-["Gentium_Plus"]',
                                'hover:brightness-90',
                                'active:brightness-75',
                                mode === name ? 'text-orange' : 'text-gray-300',
                            ]
                                .filter(Boolean)
                                .join(' ')}
                        >
                            {name}
                        </button>
                    ))}
                </div>
                <div className="my-3 flex flex-col justify-center items-center mb-6">
                    <TimeDisplay />
                </div>
                <div className="flex flex-row justify-center items-center gap-4 text-2xl font-bold">
                    <button className="px-14 lg:px-24 hover:brightness-90 active:brightness-75 py-2 bg-orange rounded-2xl text-white">
                        Start
                    </button>
                    <button className="px-14 lg:px-24 hover:border-gray-400 hover:text-gray-400 py-2 rounded-2xl border-2 border-dashed border-gray-700">
                        Reset
                    </button>
                </div>
                <div className="mt-10 flex flex-col gap-6">
                    <div>
                        <h2 className="text-2xl font-bold flex flex-row justify-between">
                            Tasks
                            <div className="flex flex-row gap-2">
                                <Icon>
                                    <AddIcon />
                                </Icon>
                                <Icon>
                                    <MoreIcon />
                                </Icon>
                            </div>
                        </h2>
                        <div>
                            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                                <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
                                    {tasks.map(({ id, title, total, complete, checked, isCurrent }) => (
                                        <SortableItem key={id} id={id}>
                                            <TaskItem
                                                title={title}
                                                total={total}
                                                complete={complete}
                                                checked={checked}
                                                isCurrent={isCurrent}
                                            />
                                        </SortableItem>
                                    ))}
                                </SortableContext>
                            </DndContext>
                            {/* <TaskItem title="Read for 30 min" total={2} complete={1} checked isCurrent />
                            <TaskItem title="Read for 30 min" total={2} complete={1} checked={false} /> */}
                        </div>
                        <div></div>
                    </div>
                </div>
            </main>
            {/* <button onClick={handleAddPomodoro}>Add data</button>
            <button onClick={handleGetData}>Get data</button>
            {!isReady ? <button onClick={handleInitDB}>Init DB</button> : <h2>DB is ready</h2>}
            {data.length && (
              data.map(item => (
                <div key={item.id}>
                  <div>{item.id}</div>
                  <div>{item.title}</div>
                  <button onClick={() => handleDeleteData(item.id)}>Delete</button>
                </div>
              ))
            )} */}
        </div>
    )
}

export default App
