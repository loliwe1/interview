import { useState } from "react";
import "./App.css";
import { AssetPage } from "./pages/assets-page";
// import { PageCodeReview } from "./pages/page-code-review";

function App() {
  const [isActivePage, setIsActivePage] = useState(1);
  const pages = [
    {
      id: 1,
      title: "Главная",
    },
    {
      id: 2,
      title: "Тест",
    },
    {
      id: 3,
      title: "Код ревью",
    },
  ];

  const routing: Record<number, JSX.Element> = {
    //   1: <App />,
    2: <AssetPage />,
    // 3: <PageCodeReview />,
  };

  return (
    <div>
      <ul>
        {pages.map(({ id, title }) => (
          <li key={id}>
            <button onClick={() => setIsActivePage(id)}>{title}</button>
          </li>
        ))}
      </ul>

      <div className="Page-content">{routing[isActivePage]}</div>
    </div>
  );
}

export default App;
