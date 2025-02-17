const AdminNote = () => {
  return (
    <>
      <h2 className="text-lg font-[600]">Admin Note</h2>
      <textarea
        className="w-full h-[90px] border border-gray-300 rounded-md outline-none p-3"
        placeholder="Add Note about the resolution"
      ></textarea>
    </>
  );
};

export default AdminNote;
