import React, { useState } from "react";

function Skills({ skills }) {
  const [findSkill, setFindSkill] = useState(null);

  const findSkillByName = (skillName) => {
    const skill = skills.find((skill) => skill.skillName === skillName);
    setFindSkill(skill);
    document.getElementById("my_modal_2").showModal();
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-2 max-sm:gap-0 max-sm:grid-cols-2 align-center justify-center max-w-2xl mx-auto mt-8">
        {skills.map((skill, ind) => (
          <button
            className="btn m-4 w-40 h-32 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300"
            onClick={() => findSkillByName(skill.skillName)}
            key={ind}
          >
            {skill.skillIcon}
            <p className="text-xl font-semibold mt-4">{skill.skillName}</p>
          </button>
        ))}
      </div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          {findSkill && (
            <>
              <h3 className="font-bold text-lg">{findSkill.skillName}</h3>
              <p className="py-4">{findSkill.description}</p>
            </>
          )}
          <form method="dialog" className="modal-backdrop">
            <button type="submit" className="btn">
              Close
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Skills;
