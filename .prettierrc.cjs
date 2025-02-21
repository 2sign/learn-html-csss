/*
module.exports = {
	// 화살표 함수 식 매개변수 () 생략 여부 (ex: (a) => a)
	arrowParens: 'always',
	// 닫는 괄호(>) 위치 설정
	// ex: <div
	//       id="unique-id"
	//       class="contaienr"
	//     >
	htmlWhitespaceSensitivity: 'css',
	bracketSameLine: false,
	// 객체 표기 괄호 사이 공백 추가 여부 (ex: { foo: bar })
	bracketSpacing: false,
	// 행폭 설정 (줄 길이가 설정 값보다 길어지면 자동 개행)
	printWidth: 80,
	// 산문 래핑 설정
	proseWrap: 'preserve',
	// 객체 속성 key 값에 인용 부호 사용 여부 (ex: { 'key': 'xkieo-xxxx' })
	quoteProps: 'as-needed',
	// 세미콜론(;) 사용 여부
	semi: true,
	// 싱글 인용 부호(') 사용 여부
	singleQuote: true,
	// 탭 너비 설정
	tabWidth: 2,
	// 객체 마지막 속성 선언 뒷 부분에 콤마 추가 여부
	trailingComma: 'es5',
	// 탭 사용 여부
	useTabs: true,
};
*/

module.exports = {
  arrowParens: 'always', // 화살표 함수 매개변수에 항상 괄호 사용
  bracketSameLine: true, // HTML/JSX 닫는 괄호를 새 줄에 배치
  bracketSpacing: false, // 객체 리터럴 괄호 사이에 공백 추가
  endOfLine: 'lf', // 줄바꿈 문자를 LF(Unix/Linux)로 설정
  htmlWhitespaceSensitivity: 'ignore', // HTML 공백 처리 방식을 CSS 스타일로 설정 (css, strict, ignore)
  jsxSingleQuote: false, // JSX에서 큰따옴표(") 사용
  //printWidth: 80, // 한 줄의 최대 길이를 80자로 설정
  proseWrap: 'never', // 마크다운 텍스트 줄바꿈을 원본 그대로 유지 (always, never, preserve)
  quoteProps: 'as-needed', // 객체 속성 키에 필요한 경우에만 따옴표 사용
  semi: true, // 문장 끝에 세미콜론(;) 사용
  singleQuote: true, // 작은따옴표(') 사용
  tabWidth: 2, // 탭 너비를 2칸으로 설정
  trailingComma: 'es5', // ES5 호환 가능한 경우에만 마지막 콤마 추가
  useTabs: false, // 탭 대신 공백 사용
};
