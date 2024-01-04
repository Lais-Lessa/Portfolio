type TechProps = {
    name: string
}

export const Tech = ({ name }: TechProps) => {
    return (
        <span className=" bg-sky-700/80 text-sm text-slate-200 font-bold py-1 px-3 rounded-lg">
            {name}
        </span>
    )
}