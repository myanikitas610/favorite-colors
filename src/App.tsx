import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetColorsQuery } from './features/colors/colorsApi';
import { RootState } from './app/store';
import { addColor, removeColor } from './features/colors/colorsSlice';

function App() {
  const dispatch = useDispatch();
  const { data: apiColors = [], error, isLoading } = useGetColorsQuery();
  const localColors = useSelector((state: RootState) => state.colors.colors);

  const [name, setName] = useState('');

  const handleAddColor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return alert('Please enter a color name.');
    const newColor = {
      id: Date.now(),
      name,
      hex: name, 
    };
    dispatch(addColor(newColor));
    setName('');
  };

  const handleRemoveColor = (id: number) => {
    dispatch(removeColor(id));
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load colors</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>🎨 My Colors App</h1>

      {/* Form to add local colors */}
      <form onSubmit={handleAddColor} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Color name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button type="submit">Add Color</button>
      </form>

      {/* Display API colors (read-only) */}
      <h2>API Colors</h2>
      <ul>
        {apiColors?.map((color) => (
          <li key={color.id} style={{ color: color.name }}>
            {color.name}
          </li>
        ))}
      </ul>

      {/* Display local colors (removable) */}
      <h2>My Colors</h2>
      <ul>
        {localColors?.map((color) => (
          <li key={color.id} style={{ color: color.name }}>
            {color.name}{' '}
            <button onClick={() => handleRemoveColor(color.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
