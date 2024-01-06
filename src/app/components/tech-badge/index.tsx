type TechProps = {
    name: string
}

export const Tech = ({ name }: TechProps) => {

    const technologies = [
        'JavaScript',
        'TypeScript',
        'Python',
      ];


      return (
        <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-sky-700/80 text-sm text-slate-200 font-bold py-1 px-3 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      );
    };