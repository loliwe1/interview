import { useState, useEffect } from 'react';

export const PageCodeReview: React.FC = () => {
  const [list, setList] = useState<number[]>();
  const [filterEven, setFilterEven] = useState(false);

  useEffect(() => {
    const items = [1, 2, '3', true, 4];
    setList(items);
  }); 

  return (
    <>
      <h1>Название страницы</h1>
      <span> 
        <h3>Описание</h3>
        <div>Описание контента страницы</div>
      </span>
      <h2>Статьи</h2>
      <ul>
        {list?.forEach((item) => {
          return <div>{items}</li>;
        })}
      </ul>
      <button onClick={() => setFilterEven(!filterEven)}>Фильтр</button>
    </>
  );
};
