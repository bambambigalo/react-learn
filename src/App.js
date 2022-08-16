import React, { useState } from 'react';
import { useMemo } from 'react';
import Items from './components/MyItems';
import MyInput from './components/UI/MyInput';
import MySelect from './components/UI/MySelect';
import { items } from './data/data-items';
import './App.css';
function App() {
  const [itemProduct, setItemProduct] = useState(items);
  // фильтр по поиску
  const [search, setSearch] = useState('');
  // филтр по селектам
  const [selectedSort, setSelectedSort] = useState('');
  const sortItems = (sort) => {
    setSelectedSort(sort);
  };
  // улучшаем производительнось useMemo запоминает изменения списка
  const sortedItems = useMemo(() => {
    // console.log('работает')
    if (selectedSort) {
      return [...itemProduct].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return itemProduct;
  }, [selectedSort, itemProduct]);
  // Делаем сортировку и поиск вместе
  const sortAndSearchedItems = useMemo(() => {
    return sortedItems.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
  }, [search, sortedItems]);

  return (
    <div className="App">
      <MyInput
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <MySelect
        value={selectedSort}
        onChange={sortItems}
        defaultValue="Сортировать по"
        //  опции для выпадающего списка
        options={[
          { value: 'title', name: 'Названию' },
          { value: 'price', name: 'Цене' },
        ]}
      />
      {/* Добавляем надписть, если продук не найден в списке */}
      {sortAndSearchedItems.length ? (
        <Items items={sortAndSearchedItems} />
      ) : (
        <h1>Продукт не найден!</h1>
      )}
    </div>
  );
}
export default App;
