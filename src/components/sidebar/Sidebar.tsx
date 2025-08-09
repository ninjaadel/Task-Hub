export function Sidebar() {
  return (
    <nav className="w-64 h-full bg-gray-800 text-white p-4">
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
      </ul>
    </nav>
  );
}
