import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useGetColorsQuery } from './features/colors/colorsApi';
import { RootState } from './app/store';
import { addColor, removeColor } from './features/colors/colorsSlice';
import {
  Container,
  Title,
  Subtitle,
  ColorForm,
  Input,
  Button,
  ColorList,
  ColorItem,
  ColorName,
} from './components/StyledComponents';

// Form input type
interface ColorInput {
  name: string;
}

function App() {
  const dispatch = useDispatch();
  const { data: apiColors = [], error, isLoading } = useGetColorsQuery();
  const localColors = useSelector((state: RootState) => state.colors.colors);

  const { register, handleSubmit, reset } = useForm<ColorInput>();

  // Form submit handler
  const onSubmit: SubmitHandler<ColorInput> = (data) => {
    const newColor = {
      id: Date.now(),
      name: data.name,
      hex: data.name, // Use name as font color
    };
    dispatch(addColor(newColor));
    reset();
  };

  const handleRemoveColor = (id: number) => {
    dispatch(removeColor(id));
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load colors</p>;

  return (
    <Container>
      <Title>My Colors</Title>

      {/* Form */}
      <ColorForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('name', { required: true })}
          type="text"
          placeholder="Enter color name"
        />
        <Button type="submit">Add Color</Button>
      </ColorForm>

      {/* API Colors Section */}
      <Subtitle>API Colors</Subtitle>
      <ColorList>
        {apiColors.map((color) => (
          <ColorItem key={color.id}>
            <ColorName color={color.hex} isApi>
              {color.name}
            </ColorName>
          </ColorItem>
        ))}
      </ColorList>

      {/* Local Colors Section */}
      <Subtitle>Local Colors</Subtitle>
      <ColorList>
        {localColors.map((color) => (
          <ColorItem key={color.id}>
            <ColorName color={color.hex}>{color.name}</ColorName>
            <Button onClick={() => handleRemoveColor(color.id)}>Remove</Button>
          </ColorItem>
        ))}
      </ColorList>
    </Container>
  );
}

export default App;
