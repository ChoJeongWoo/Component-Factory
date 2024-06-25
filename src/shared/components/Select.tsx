interface Type {
  optios: Options;
  placeholer: string;

  searchable: boolean;
  disabled: boolean;

  hasAllText?: boolean;
  allText?: string;

  value?: string;
  witdh?: number;
  height?: number;
}

interface Options {
  text: string;
  value: string | number;
}

const Select = () => {
  const options = [
    { text: "1", value: "1" },
    { text: "2", value: "2" },
    { text: "3", value: "3" },
    { text: "4", value: "4" },
  ];

  return (
    <div>
      <ul className="bg-red-50">
        {options.map((option: Options) => (
          <li className="divide-red-900" key={option.value}>
            {option.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;

/**
 * 1. 만약 Value가 Options에 포함되어 있지 않다면 Null
 * 2. 검색 기능
 * 3. 현재 선택되어 있는 Value가 상단 위치
 * 4.
 */
