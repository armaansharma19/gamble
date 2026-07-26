import {
  FaBookmark,
  FaHeart,
  FaHistory,
  FaGamepad,
  FaDice,
} from "react-icons/fa";

const menuItems = [
  { icon: <FaBookmark />, label: "Saved Games" },
  { icon: <FaHeart />, label: "Following" },
  { icon: <FaHistory />, label: "Continue Playing" },
  { icon: <FaGamepad />, label: "Games For You" },
  { icon: <FaDice />, label: "Stake Originals" },
];

const Sidebar = () => {
  return (
    <aside className="w-72 h-[calc(100vh-64px)] bg-[#213743] border-r border-[#2F4553] p-5">

      <div className="space-y-3">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 text-[#B1BAD3] hover:text-white hover:bg-[#2F4553] px-3 py-3 rounded-lg cursor-pointer transition-all duration-200"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>

    </aside>
  );
};

export default Sidebar;