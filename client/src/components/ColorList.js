import React, { useState } from "react";
import axios from "axios";

// Helper functions
import { editColor as saveColor, addColor } from "./../utils/actions";
import { deleteColor as removeColor } from "./../utils/actions";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [colorInput, setColorInput] = useState({
    ...initialColor,
    id: Date.now()
  });

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const toggleAdd = () => {
    setColorInput({...initialColor, id: Date.now()})
    setAdding(!adding);
  };

  const saveEdit = e => {
    e.preventDefault();
    saveColor(colorToEdit)
      .then(res => res)
      .catch(err => console.error(err.response));
    updateColors([
      ...colors.filter(item => item.id !== colorToEdit.id),
      colorToEdit
    ]);
    setEditing(false);
  };

  const deleteColor = color => {
    removeColor(color.id)
      .then(res => res)
      .catch(err => console.error(err.response));
    updateColors([...colors.filter(item => item.id !== color.id)]);
  };

  const saveNew = e => {
    e.preventDefault();
    addColor(colorInput)
      .then(res => res)
      .catch(err => console.error(err.response));
    updateColors([
      ...colors.filter(item => item.id !== colorInput.id),
      colorInput
    ]);
    setColorInput({...initialColor, id: Date.now()});
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.id} onClick={() => editColor(color)}>
            <span>
              <span
                className="delete"
                onClick={e => {
                  e.stopPropagation();
                  deleteColor(color);
                }}
              >
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      <button onClick={toggleAdd}>Add</button>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      {adding && (
        <form onSubmit={saveNew}>
          <legend>add color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorInput({ ...colorInput, color: e.target.value })
              }
              value={colorInput.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorInput({
                  ...colorInput,
                  code: { hex: e.target.value }
                })
              }
              value={colorInput.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setAdding(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
