import React, { useState } from "react";

interface Type {
  props: {
    placeholder?: string;
    type?: string;
    maxlength?: number;
  };
  inputValue?: string;
}

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");

  const onInput = (e) => {
    let v = e.target.value;

    if (v.length > props.maxlength) {
      setInputValue(v);
    }

    if (props.type === "numeric") {
      v = v.replace(/[^0-9]/g, "");
    } else if (props.type === "float") {
      v = v.replace(/[^0-9.]/g, "");

      // 소수점 으로 시작하는 경우
      if (/^\./g.test(v)) {
        v = v.substring(1, v.length);
      }

      // 소수점이 2개 이상인 경우
      if (v.match(/\./g) && v.match(/\./g).length > 1) {
        v =
          v.substring(0, v.indexOf(".") + 1) +
          v.substring(v.indexOf(".") + 1, v.length).replace(/\./g, "");
      }
    } else if (props.type === "alpha") {
      v = v.replace(/[^a-zA-Z]/g, "");
    } else if (props.type === "alphaNumeric") {
      v = v.replace(/[^0-9a-zA-Z]/g, "");
    } else if (props.type === "alphaHangul") {
      v = v.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-zA-Z]/g, "");
    } else if (props.type === "positiveNumeric") {
      if (v.startsWith("0")) {
        if (v.length === 1) {
          v = "";
        } else {
          v = v.substring(1, v.length);
        }
      } else {
        v = v.replace(/[^0-9]/g, "");
      }
    } else if (props.type === "alphaDash") {
      v = v.replace(/[^a-zA-Z-]/g, "");
    }
    update(e, v);
  };

  const onBlur = (e) => {
    let v = e.target.value;
    if (props.type === "float") {
      if (/\.$/g.test(v)) {
        v = v.substring(0, v.length - 1);
      }
    }
    update(e, v);
  };

  const update = (e, v) => {
    e.target.value = v;
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        className="w-full h-[50px] px-[20px] py-[0] border-[1px] border-[solid] border-[#c1c1c1] rounded-[8px] text-[16px] text-[#333] font-semibold focus:border-[1px] border-[solid] border-[#333]"
        type="text"
        value={inputValue}
        onChange={onInput}
        onBlur={onBlur}
        placeholder={props.placeholder}
        maxLength={props.maxlength}
      />
    </div>
  );
};

export default Input;
