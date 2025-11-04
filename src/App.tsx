import React, { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './app/store';
import { addColor, removeColor } from './features/colors/colorsSlice';
import { Color } from './types';

function App() {
  const dispatch = useDispatch();
  const colors = useSelector((state: RootState) => state.colors.colors);
  
  useEffect(() => {
    dispatch(addColor({id: 1, name: 'Red', hex: '#ff0000'}));
  }, [dispatch]);

  return (
    <div style= {{padding: '2rem', fontFamily: 'Arial, sans-serif'}}>
      <h1>My Favorite Colors</h1>
      <ul>
        {colors.map((color: Color) => (
          <li key= {color.id}>
            {color.name} - <span style={{color: color.hex}}>{color.hex}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
