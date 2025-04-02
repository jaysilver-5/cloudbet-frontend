import { Outlet } from "react-router-dom";

export default function Casino() {

  return (
    <div className="w-full relative casino-root">
      <Outlet />
    </div>
  );
}
