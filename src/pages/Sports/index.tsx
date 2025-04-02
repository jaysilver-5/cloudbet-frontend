import { Outlet } from "react-router-dom";

export default function Sports() {
  return (
    <div className="relative sports-root xl:-mx-24">
      <Outlet />
    </div>
  );
}
