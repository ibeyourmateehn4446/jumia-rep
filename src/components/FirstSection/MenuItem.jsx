const MenuItem = ({ text, icon }) => {
  return (
    <div className="flex gap-2 items-center cursor-pointer hover:text-[#FF9900] transition-all duration-300">
      <div className="text-xl"> {icon}</div>
      <span className="text-xs">{text}</span>
    </div>
  );
};

export default MenuItem;
