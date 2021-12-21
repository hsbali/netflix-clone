import { useRef, useEffect } from 'react'

export function useHorizontalScroll(setStartOverflow, setEndOverflow) {
	const elRef = useRef()
	useEffect(() => {
		const el = elRef.current
		if (el) {
			const onWheel = (e) => {
				if (e.deltaY === 0) return
				e.preventDefault()

				if (el.scrollLeft === el.scrollWidth - el.clientWidth) {
					setEndOverflow(false)
				} else {
					setEndOverflow(true)
				}

				if (el.scrollLeft !== 0) {
					setStartOverflow(true)
				} else {
					setStartOverflow(false)
				}

				el.scrollTo({
					left: el.scrollLeft + e.deltaY,
					behavior: 'smooth',
				})
			}
			el.addEventListener('wheel', onWheel)
			return () => el.removeEventListener('wheel', onWheel)
		}
	}, []) // eslint-disable-line react-hooks/exhaustive-deps
	return elRef
}
