'use client'
import { TbArrowNarrowUp } from "react-icons/tb"
import { Button } from "../button"
import { useCallback, useEffect, useState } from "react"

export const BackToUp = () => {

    const [show, setShow] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleScroll = useCallback(() => {
        if (!show && window.scrollY > 500) setShow(true)
        if (show && window.scrollY <= 500) setShow(false)
}, [show])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[handleScroll])

return (
    <div className="fixed right-4 bottom-4 z-20">
         {show && (
                <Button onClick={scrollToTop} className="shadow-lg shadow-sky-200/20 bg-sky-500">
                    <TbArrowNarrowUp size={20} />
                </Button>
            )}
    </div>
)
}