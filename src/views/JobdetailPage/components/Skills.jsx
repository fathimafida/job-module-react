const Skills = ({ skills }) => {
  return (
    <div className="flex items-center border rounded-3xl bg-slate-800 p-2  w-fit">
      <p className="text-sm  text-white ">{skills.name}</p>
    </div>
  );
};

export default Skills;
