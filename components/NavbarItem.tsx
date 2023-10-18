type NavbarItemProps = {
  label: string;
};

export default function NavbarItem({ label }: NavbarItemProps) {
  return (
    <div className="text-white transition cursor-pointer hover:text-gray-300">
      {label}
    </div>
  );
}
