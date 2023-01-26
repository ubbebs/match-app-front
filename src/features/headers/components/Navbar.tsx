export function Navbar() {
  return (
    <nav className="w-full lg:w-auto">
      <ul className="flex flex-col gap-10 text-neutral-400 lg:flex-row">
        <li className="nav-ul-item">Home</li>
        <li className="nav-ul-item">Features</li>
        <li className="nav-ul-item">About</li>
        <li className="nav-ul-item">Contact</li>
      </ul>
    </nav>
  )
}
