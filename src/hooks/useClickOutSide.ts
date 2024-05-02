import React from 'react'

const useClickOutside = (ref: any, onClickOutSide: () => void) => {
    const handler = React.useCallback(
        (e: any) => {
            console.log('yo', e.composedPath(), ref.current, e.composedPath().includes(ref.current))
            if (!ref.current) return
            if (!e.composedPath().includes(ref.current)) onClickOutSide()
        },
        [ref, onClickOutSide]
    )

    React.useEffect(() => {
        console.log('hi')
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [ref, handler])
}

export default useClickOutside
