import { useState, useEffect } from "react";

export default function Settings() {
  const switchTheme = (event) => {
    const theme = event.target.checked ? "dark" : "light";
    document.body.className = theme;
    localStorage.setItem("theme", theme);
    setIsChecked(!isChecked);
  };

  const [isChecked, setIsChecked] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("myCheckboxPreference", isChecked.toString());
  }, [isChecked]);

  return (
    <div>
      <h1 className="text-copy-primary">Settings</h1>
      <input type="checkbox" checked={isChecked} onChange={switchTheme} />
    </div>
  );
}
