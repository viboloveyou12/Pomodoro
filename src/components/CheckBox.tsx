import {TickIcon} from './Icons';

interface Props {
    className: string;
    checked: boolean;
}

export default function CheckBox({className, checked}: Props) {
    return (
        <button title="task-check" className={`rounded-full w-6 h-6 flex justify-center items-center ${className}`}>
            {checked && <TickIcon />}
        </button>
    )
}
