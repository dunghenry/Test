import React from "react";
import InputColor from "react-input-color";
import {Resizable} from 're-resizable';
const BoxPreview = ({
  checked,
  rgba,
  shiftRight,
  shifDown,
  spread,
  blur,
  opacity,
  layer,
}) => {
  const [color, setColor] = React.useState({});
  const [background, setBackground] = React.useState({});
  const [height, setHeight] = React.useState(200)
  const [width, setWidth] = React.useState(200)
  return (
    <div className="box-preview">
      <div className="top" style={{ display: "flex" }}>
        <h3>BoxPreview</h3>
        <div className="box-color" style={{ padding: "20px" }}>
          <InputColor
            initialValue="#ffff"
            onChange={setBackground}
            placement="right"
          />
        </div>
        <div className="box-color" style={{ padding: "20px" }}>
          <InputColor
            initialValue="#5e72e4"
            onChange={setColor}
            placement="right"
          />
        </div>
      </div>
      <br />
      <div
        className="content"
        style={{
          width: "100%",
          height: "300px",
          backgroundColor: `${background.hex}`,
        }}
      >
        <Resizable
          minHeight={100}
          minWidth={100}
          maxWidth={300}
          maxHeight={300}
          size={{ width: width, height: height }}
          onResizeStop={(e, direction, ref, d) => {
            setHeight(d.height);
            setWidth(d.width)
          }}
          onResize={(e, direction, ref, d) => {
            setHeight(d.height);
            setWidth(d.width)
          }}
          className="preview"
          style={{
            backgroundColor: `${color.hex}`,
            boxShadow: checked
              ? layer.length === 0
                ? `rgba(${rgba.r},${rgba.g},${rgba.b},${
                    opacity / 100
                  }) ${shiftRight}px ${shifDown}px ${blur}px ${spread}px inset 
              `
                    :
                    `rgba(${rgba.r},${rgba.g},${rgba.b},${
                        opacity / 100
                    }) ${shiftRight}px ${shifDown}px ${blur}px ${spread}px inset,
                      ${layer.map((item) => item.split(" ").reverse().join(" "))}
                  `
                    
              : `rgba(${rgba.r},${rgba.g},${rgba.b},${
                  opacity / 100
                }) ${shiftRight}px ${shifDown}px ${blur}px ${spread}px`,
          }}
        ></Resizable>
      </div>
      <div className="css-code">
        <h3>CSS code</h3>
        box-shadow :
        {`rgba(${rgba.r},${rgba.g},${rgba.b},${
          opacity / 100
        }) ${shiftRight}px ${shifDown}px ${blur}px ${spread}px`}
        <br />
        {layer.map((item) => (
          <span>{item.split(" ").reverse().join(" ")},</span>
        ))}
      </div>
      <div className="template">
        <h3>Template</h3>
        <div className="template-box">
          <div className="template_1"></div>
          <div className="template_2"></div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BoxPreview);
