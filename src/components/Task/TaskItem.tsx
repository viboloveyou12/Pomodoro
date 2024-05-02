import { useState, useRef, useCallback, useEffect } from 'react'
import useClickOutside from '../../hooks/useClickOutSide'
import CheckBox from '../CheckBox'
import { PencilIcon } from '../Icons'

interface TaskItemProps {
    title: string
    total: number
    complete: number
    checked: boolean
    isCurrent?: boolean
}

const TaskItem = ({ title, total, complete, checked, isCurrent }: TaskItemProps) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const taskRef = useRef(null)
    const onClickOutside = useCallback(() => {
        if (isEditMode) setIsEditMode(false)
    }, [isEditMode])
    useClickOutside(taskRef, onClickOutside)

    return (
        <div>
            {!isEditMode ? (
                <div
                    className={`flex flex-row justify-between rounded-lg my-4 p-4 cursor-move ${
                        isCurrent ? 'bg-dark-gray text-white' : 'bg-white'
                    }`}
                >
                    <div className="flex flex-row gap-4">
                        <CheckBox className={`${isCurrent ? 'bg-gray-500' : 'bg-gray-200'}`} checked={checked} />
                        <p className="text-lg">{title}</p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <span>
                            {total}/{complete}
                        </span>
                        <button
                            className="hover:opacity-65"
                            title="action-edit"
                            onMouseDown={() => {
                                setIsEditMode(true)
                            }}
                        >
                            <PencilIcon className="w-4" fill={isCurrent ? 'white' : 'black'} />
                        </button>
                    </div>
                </div>
            ) : (
                <div
                    ref={taskRef}
                    className={`flex flex-col justify-between rounded-lg my-4 p-6 gap-4 ${
                        isCurrent ? 'bg-dark-gray text-white' : 'bg-white'
                    }`}
                >
                    <div>
                        <input
                            className={`font-bold text-2xl ${isCurrent && 'bg-transparent'}`}
                            placeholder=""
                            title="title"
                            type="text"
                            value="Read for 30 mins"
                            autoFocus
                        />
                    </div>
                    <div>
                        <label className="block mb-2" htmlFor="pomodoros">
                            Act / Est Pomodoros
                        </label>
                        <input className={`bg-gray-${isCurrent ? '500' : '200'} w-12`} id="pomodoros"></input>
                        <div className="inline-block mx-2">/</div>
                        <input className={`bg-gray-${isCurrent ? '500' : '200'} w-12`} id="pomodoros"></input>
                    </div>
                    <div
                        className={`flex flex-row justify-between border-t-2 pt-4 ${
                            isCurrent ? 'border-gray-600' : 'border-gray-200'
                        }`}
                    >
                        <button
                            className={`border-2 border-dashed px-6 py-1 rounded-lg font-bold ${
                                !isCurrent && 'border-gray-200'
                            }`}
                        >
                            Delete
                        </button>
                        <button
                            className={`border-2 px-6 py-1 rounded-lg font-bold ${
                                isCurrent ? 'bg-white text-black' : 'bg-black text-white'
                            }`}
                        >
                            Save
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TaskItem
