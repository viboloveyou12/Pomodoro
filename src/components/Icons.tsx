interface Props {
    fill?: string
    stroke?: string
    className?: string
}

const PencilIcon = ({ fill, className }: Props) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M15 0L12.5 2.48318L17.5 7.44954L20 4.96636L15 0ZM10 4.96636L0 14.8991V19.8654H5L15 9.93272L10 4.96636Z"
            fill={fill}
        />
    </svg>
)

const TickIcon = ({ stroke = 'white' }: Props) => (
    <svg width="16" height="14" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 7.5L7.80645 14L16.5 2" stroke={stroke} strokeWidth="4" />
    </svg>
)

const SettingIcon = ({ stroke = 'black' }: Props) => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M18.2663 4.40149H15.6254"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12.1041 2.6409V6.16211"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12.1042 4.40149H2.42084"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M5.94205 10.5636H2.42084"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M9.46326 8.80304V12.3242"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M19.1466 10.5636H9.46326"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M18.2663 16.7257H15.6254"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12.1041 14.9651V18.4863"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12.1042 16.7257H2.42084"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const ReportIcon = ({ stroke = 'black' }: Props) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.66667 15H10.3333M5.66667 15V11.1111M5.66667 15H1.46667C1.20893 15 1 14.7911 1 14.5333V11.5778C1 11.32 1.20893 11.1111 1.46667 11.1111H5.66667M10.3333 15V5.66667M10.3333 15H14.5333C14.7911 15 15 14.7911 15 14.5333V1.46667C15 1.20893 14.7911 1 14.5333 1H10.8C10.5422 1 10.3333 1.20893 10.3333 1.46667V5.66667M5.66667 11.1111V6.13333C5.66667 5.8756 5.8756 5.66667 6.13333 5.66667H10.3333"
            stroke={stroke}
            strokeWidth="1.7"
        />
    </svg>
)

const KeyboardIcon = ({ stroke = 'black' }: Props) => (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10.4166 14.5833H14.5833M14.5833 10.4167H14.5937M18.75 10.4167H18.7604M10.4166 10.4167H10.4271M6.24998 10.4167H6.2604M6.24998 14.5833H6.2604M18.75 14.5833H18.7604M22.9166 16.6667V8.33333C22.9166 7.7808 22.6972 7.25089 22.3065 6.86019C21.9158 6.46949 21.3858 6.25 20.8333 6.25H4.16665C3.61411 6.25 3.08421 6.46949 2.69351 6.86019C2.30281 7.25089 2.08331 7.7808 2.08331 8.33333V16.6667C2.08331 17.2192 2.30281 17.7491 2.69351 18.1398C3.08421 18.5305 3.61411 18.75 4.16665 18.75H20.8333C21.3858 18.75 21.9158 18.5305 22.3065 18.1398C22.6972 17.7491 22.9166 17.2192 22.9166 16.6667Z"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const AddIcon = ({ stroke = 'black' }: Props) => (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 8H16" stroke={stroke} strokeWidth="3" />
        <path d="M8 0L8 16" stroke={stroke} strokeWidth="3" />
    </svg>
)

const MoreIcon = ({ fill = 'black' }: Props) => (
    <svg width="12" height="12" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="3.6" cy="3.6" r="3.6" fill={fill} />
        <circle cx="3.6" cy="14.4" r="3.6" fill={fill} />
        <circle cx="14.4" cy="3.6" r="3.6" fill={fill} />
        <circle cx="14.4" cy="14.4" r="3.6" fill={fill} />
    </svg>
)

export { PencilIcon, TickIcon, SettingIcon, ReportIcon, KeyboardIcon, AddIcon, MoreIcon }
