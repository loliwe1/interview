import { useState, useEffect } from 'react';
  
 
export const PageCodeReview:React.FC = () => { 

  const [list, setList] = useState<number[]>(); 
 
  useEffect(() => { 
    const items = [1, 2, 'true', 4, true, 6]; 
    setList(items);
   });
  
  return (
    <>
      <h1>Название страницы</h1>
      <span>
        <h3>Описнание:</h3>
        <div>
          Тут обычно мы описываем, то что у нас отображается на странице
        </div>
      </span>
      <h2>
        Текст контента: Тут всё стандартно, выводим текст, при необходимости
        форматируем его
      </h2>

      <h2>Статьи</h2>
      <ul>
        {
          list?.forEach((item) => {
            return <div>{items}</li>
          })
        }
      </ul>
    </>
  );
};