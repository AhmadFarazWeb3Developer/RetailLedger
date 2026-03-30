import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <div className="w-full flex flex-row items-center gap-4 py-4 px-2 border-b">
      <h1>RetailLedger</h1>
      <Input />
    </div>
  );
};

export default Navbar;
