// server url for imgs
import { serverURL } from "../Admin/Data/api";

export default function Skills({ skills }) {
  return (
    <>
      <div
        className="p-2 skills-container grid-flow-row grid-cols-2 gap-y-6 justify-between"
        style={{ display: "grid"}}
      >
        {skills.map((skill) => (
          <div
            key={`${skill.id}${skill.title}`}
            className="skills min-w-12 aspect-square cursor-help flex flex-col items-center justify-start gap-3 "
          >
            {skill.icon ? (
              <img
                src={serverURL + skill.icon}
                alt={skill.title}
                title={skill.title}
                className="aspect-square max-h-12"
              />
            ) : (
              <p 
                className="grid place-content-center size-full
                font-semibold text-gray-400 select-none bg-gray-700 bg-opacity-50 max-h-12 rounded-md" 
                title={skill.title}
              >
                {skill.title[0].toUpperCase()}
              </p>
            )}
            <p className="text-center text-xs text-gray-100 text-nowrap">{skill.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
