export default function SidebarItem({ submenu, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors duration-150 ${
        isSelected
          ? "bg-blue-100 text-blue-700 font-medium"
          : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
      }`}
    >
      {submenu.title}
    </button>
  );
}
