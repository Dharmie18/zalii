export interface Country {
  name: string;
  code: string;
  flag: string;
  iso2: string;
  nationality: string;
  phonePlaceholder: string;
}

export const countries: Country[] = [
  {
    name: "Nigeria",
    code: "+234",
    flag: "🇳🇬",
    iso2: "ng",
    nationality: "Nigerian",
    phonePlaceholder: "812 345 6789",
  },
  {
    name: "Ghana",
    code: "+233",
    flag: "🇬🇭",
    iso2: "gh",
    nationality: "Ghanaian",
    phonePlaceholder: "24 123 4567",
  },
  {
    name: "Kenya",
    code: "+254",
    flag: "🇰🇪",
    iso2: "ke",
    nationality: "Kenyan",
    phonePlaceholder: "712 345678",
  },
  {
    name: "South Africa",
    code: "+27",
    flag: "🇿🇦",
    iso2: "za",
    nationality: "South African",
    phonePlaceholder: "82 123 4567",
  },
  {
    name: "United Kingdom",
    code: "+44",
    flag: "🇬🇧",
    iso2: "gb",
    nationality: "British",
    phonePlaceholder: "7400 123456",
  },
  {
    name: "United States",
    code: "+1",
    flag: "🇺🇸",
    iso2: "us",
    nationality: "American",
    phonePlaceholder: "201 555 0123",
  },
  {
    name: "Canada",
    code: "+1",
    flag: "🇨🇦",
    iso2: "ca",
    nationality: "Canadian",
    phonePlaceholder: "416 555 0123",
  },
  {
    name: "United Arab Emirates",
    code: "+971",
    flag: "🇦🇪",
    iso2: "ae",
    nationality: "Emirathi",
    phonePlaceholder: "50 123 4567",
  },
  {
    name: "Germany",
    code: "+49",
    flag: "🇩🇪",
    iso2: "de",
    nationality: "German",
    phonePlaceholder: "151 23456789",
  },
  {
    name: "France",
    code: "+33",
    flag: "🇫🇷",
    iso2: "fr",
    nationality: "French",
    phonePlaceholder: "6 12 34 56 78",
  },
];
