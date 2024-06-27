import React, { useState, useEffect, useRef } from "react";

interface Type {
  props: {
    modelValue: string;
    id: string;
    placeholder: string;
    infoText: string | [];
    maxSize: string;
    includeExts: string[];
    resolutionCheck: object;
  };

  file: object;
  maxByteSize: number;
}

const File = (props) => {
  // set states
  const [file, setFile] = useState({
    name: props.modelValue ? props.modelValue : null,
    binary: null,
  });

  const maxSize = props.maxSize ? props.maxSize : "100MB";
  const [maxByteSize, setMaxByteSize] = useState(104857600); // 100MB => 104857600B
  const fileRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (/^\d+B$/g.test(maxSize)) {
      const size = maxSize.match(/(\d+)B/)[1];
      setMaxByteSize(parseInt(size));
    } else if (/^\d+KB$/g.test(maxSize)) {
      const size = maxSize.match(/(\d+)KB/)[1];
      setMaxByteSize(parseInt(size) * 1024);
    } else if (/^\d+MB$/g.test(maxSize)) {
      const size = maxSize.match(/(\d+)MB/)[1];
      setMaxByteSize(parseInt(size) * 1024 * 1024);
    } else if (/^\d+GB$/g.test(maxSize)) {
      const size = maxSize.match(/(\d+)GB/)[1];
      setMaxByteSize(parseInt(size) * 1024 * 1024 * 1024);
    } else {
      throw new Error("File size format not allowed");
    }
  }, []);

  // methods
  const clear = () => {
    setFile({
      name: null,
      binary: null,
    });

    inputRef.current.value = "";
  };

  const onChangeFile = (e) => {
    // 파일이 선택되지 않았을 경우
    if (e.target.files.length === 0) return;

    const f = e.target.files[0];
    const name = f.name.toLowerCase();
    const byteSize = f.size;
    const extension = name.substr(name.lastIndexOf(".") + 1);

    if (!props.includeExts.includes(extension)) {
      alert("허용하지 않는 포맷 형식입니다");
      return clear();
    }

    if (byteSize > maxByteSize) {
      alert("허용하지 않는 용량 크기입니다");
      return clear();
    }

    // 해상도 체크
    if (props.resolutionCheck) {
      if (Object.keys(props.resolutionCheck).includes("requiredValue")) {
        if (!props.resolutionCheck.requiredValue) {
          alert(props.resolutionCheck.requiredMessage);
          return clear();
        }
      }

      const reader = new FileReader();

      reader.onload = (e) => {
        const image = new Image();

        image.onload = () => {
          const width = image.width;
          const height = image.height;

          if (props.resolutionCheck.type === "fit") {
            if (
              props.resolutionCheck.width !== width ||
              props.resolutionCheck.height !== height
            ) {
              alert("이미지 사이즈 규격을 확인해 주세요");
              return clear();
            }
          } else {
            if (
              props.resolutionCheck.width < width ||
              props.resolutionCheck.height < height
            ) {
              alert(
                `${props.resolutionCheck.width}px * ${props.resolutionCheck.height}px 사이즈 이하만 업로드 가능합니다`,
              );
              return clear();
            }
          }
        };

        image.src = e.target.result;
      };

      reader.readAsDataURL(f);
    }

    setFile({
      name: name,
      binary: e.target.files[0],
    });
  };

  return (
    <div className="w-full">
      <div className="flex items-center">
        <div className="relative w-full">
          <input
            className="w-full h-[50px] px-[20px] py-[0] border-[1px] border-[solid] border-[#c1c1c1] rounded-[8px] text-[16px] text-[#333] font-semibold pl-[20px] pr-[45px] focus:border-[1px] focus:border-[solid] focus:border-[#333] "
            type={"text"}
            ref={inputRef}
            placeholder={props.placeholder}
            value={file.name}
            readOnly={true}
            disabled={props.disabled}
          />
          {file.name && !props.disabled && (
            <button
              className="absolute top-2/4 -translate-y-1/2 right-[15px] flex-shrink-0 w-[20px] h-[20px] border-[none] before:inline-flex before:content-[''] before:w-[20px] before:h-[20px] before:bg-[url('./assets/images/btn/btn_tag_close.png')] hover:bg-none before:!bg-[0_0]"
              type={"button"}
              onClick={clear}
            />
          )}
        </div>
        <input
          className="absolute w-px h-px p-0 -m-[1px] overflow-hidden [clip:rect(0,_0,_0,_0)]"
          type={"file"}
          id={props.id ? props.id : "upload_file"}
          ref={fileRef}
          onChange={onChangeFile}
          accept={
            props.includeExts &&
            props.includeExts.map((item) => {
              `.${item}`;
            })
          }
          disabled={props.disabled}
        />
        <label
          className="flex-shrink-0 h-[40px] ml-[10px] leading-[40px] px-[20px] py-[0] rounded-[12px] bg-[#5f2cdf] cursor-pointer text-[18px] text-[#fff]"
          htmlFor={props.id ? props.id : "upload_file"}
        >
          파일찾기
        </label>
      </div>

      {props.infoText && typeof props.infoText === "string" && (
        <div className="mt-[10px] text-[16px] text-[rgba(51,_51,_51,_0.8)]">
          {props.infoText}
        </div>
      )}
      {props.infoText && Array.isArray(props.infoText) && (
        <template>
          {props.infoText.map((item) => {
            <div className="mt-[10px] text-[16px] text-[rgba(51,_51,_51,_0.8)]">
              {item}
            </div>;
          })}
        </template>
      )}
    </div>
  );
};
export default File;
