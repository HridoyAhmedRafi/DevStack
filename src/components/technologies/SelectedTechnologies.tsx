const SelectedTechnologies = () => {
  return (
    <div className="my-10 border border-[#90929533] px-4 py-5 rounded-[13px] space-y-3">
      <div>
        <h1 className="text-[#0F172A] font-bold text-[20px]">Your Stack</h1>
        <p className="text-[#94A3B8]">No technologies selected yet.</p>
      </div>

      <div className=" border-3  border-dotted border-[#90929533] px-10 py-5 rounded-[13px] flex items-center justify-center">
        <p className="text-[#94A3B8]">Your stack is empty.</p>
      </div>
    </div>
  );
};

export default SelectedTechnologies;
