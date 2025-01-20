import AdminTable from "./AdminTable";

const AdminHome = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        <div className="flex items-center justify-center bg-colorBG shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] aspect-video rounded-xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Total Employee</h2>
            <h2 className="text-3xl font-semibold mb-4">25</h2>
          </div>
        </div>
        <div className="flex items-center justify-center bg-colorBG shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] aspect-video rounded-xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Available</h2>
            <h2 className="text-3xl font-semibold mb-4">20</h2>
          </div>
        </div>
        <div className="flex items-center justify-center bg-colorBG shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] aspect-video rounded-xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">On Leave</h2>
            <h2 className="text-3xl font-semibold mb-4">5</h2>
          </div>
        </div>
        <div className="flex items-center justify-center bg-colorBG shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] aspect-video rounded-xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Chart</h2>
            {/* <h2 className="text-3xl font-semibold mb-4">25</h2> */}
          </div>
        </div>

        {/* <div className="aspect-video rounded-xl bg-muted/50 bg-slate-500" />
        <div className="aspect-video rounded-xl bg-muted/50 bg-slate-500" />
        <div className="aspect-video rounded-xl bg-muted/50 bg-slate-500" /> */}
      </div>
      {/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min bg-slate-500" /> */}
      <div className="bg-colorBG shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] rounded-xl">
        <AdminTable />
      </div>
    </div>
  );
};

export default AdminHome;
