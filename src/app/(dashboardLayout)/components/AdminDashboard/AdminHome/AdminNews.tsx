const AdminNews = () => {
  return (
    <div className="px-8 flex flex-col gap-5">
      {/* events */}
      <div className="flex items-center gap-6">
        {/* date */}
        <div className="bg-gray-300 w-[50px] h-[50px] rounded-md flex flex-col items-center justify-center">
          <p className="font-semibold">14</p>
          <p className="font-semibold">JAN</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">High employee satisfaction</h3>
          <p>Achieved 92% employee</p>
        </div>
      </div>
      {/* events */}
      <div className="flex items-center gap-6">
        {/* date */}
        <div className="bg-gray-300 w-[50px] h-[50px] rounded-md flex flex-col items-center justify-center">
          <p className="font-semibold">20</p>
          <p className="font-semibold">JAN</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Diversity Workshops</h3>
          <p>Interactive diversity workshops</p>
        </div>
      </div>
      {/* events */}
      <div className="flex items-center gap-6">
        {/* date */}
        <div className="bg-gray-300 w-[50px] h-[50px] rounded-md flex flex-col items-center justify-center">
          <p className="font-semibold">15</p>
          <p className="font-semibold">FEB</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Work-life balance award</h3>
          <p>Health vendors and activities</p>
        </div>
      </div>
    </div>
  );
};

export default AdminNews;
