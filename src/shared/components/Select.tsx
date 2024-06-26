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
    <div className="min-w-48 cursor-pointer relative">
      <div className="overflow-hidden text-ellipsis whitespace-nowrap block w-full max-w-full h-12 px-10 pl-5 bg-white border border-gray-400 rounded-lg text-base text-gray-800 font-semibold leading-[50px]"></div>

      <div className="cursor-pointer z-[600] absolute top-12 left-0 w-full p-2.5 bg-white border border-[#5f2cdf] rounded-lg">
        <ul className="pt-2 pr-1 overflow-y-auto">
          {options.map((option: Options) => (
            <li
              className="w-full px-4 py-3 text-base text-gray-800 font-semibold list-none"
              key={option.value}
            >
              {option.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;

/**
 * 1. 만약 Value가 Options에 포함되어 있지 않다면 Null
 * 2. 검색 기능
 * 3. 현재 선택되어 있는 Value가 상단 위치
 *
 * ------------------------------------
 * 1. 퍼블 작업
 * 2. 카드용 컴포넌트
 * 3. 기능 개발
 * 4. 상세 화면 레이아웃
 */
