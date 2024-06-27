import React, { useState } from "react";

interface Type {
  props: {
    modelValue: string;
    options: [
      {
        value: string;
        label: string | number;
      },
    ];
    id?: string;
    disabled?: boolean;
  };
  radioValue?: string;
}

const RadioGroup = (props) => {
  const [radioValue, setRadioValue] = useState(props.modelValue);

  const update = (next) => {
    if (radioValue !== next.target.value) {
      setRadioValue(next.target.value);
    }
  };

  return (
    <div className="flex items-center flex-wrap">
      {props.options &&
        props.options.map((item, idx) => (
          <div className="m-0 p-0 relative border-[0]">
            <input
              className="h-auto float-left w-[24px] absolute top-1/4 cursor-pointer hidden border-[100px] border-[red]"
              id={`${props.id}_${idx}`}
              name={`${props.id}`}
              type="radio"
              checked={radioValue == item.value}
              value={item.value}
              onChange={update}
              disabled={props.disabled}
            />
            <label
              className="pl-6 mr-[6px] text-[16px] text-[#333] flex items-center cursor-pointer [word-break:keep-all] before:content-[''] before:block before:flex-shrink-0 before:w-[24px] before:h-[24px] before:mr-[10px] before:bg-[url('./assets/images/btn/btn_icon_radio.png')] before:[background-size:100%]"
              htmlFor={`${props.id}_${idx}`}
            >
              {item.label}
            </label>
          </div>
        ))}
    </div>
  );
};

export default RadioGroup;
