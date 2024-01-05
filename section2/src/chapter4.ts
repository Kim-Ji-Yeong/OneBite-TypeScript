// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "jiYeong",
  nickname: "HANADURI",
  birth: "1995-08-19",
  bio: "Hi",
  location: "경산시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "HANADURI",
  birth: "1995-08-19",
  bio: "Hi",
  location: "경산시",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberAndStringCodes: CountryNumberCodes = {
  Korea: 410,
};
