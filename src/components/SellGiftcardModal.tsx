import React, { useState, useMemo, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Platform,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Svg, { Path, Rect, G, ClipPath, Defs } from 'react-native-svg';
import { apiRequest } from '../lib/api';

function GiftCardIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M19 4C19.7652 3.99996 20.5015 4.29233 21.0583 4.81728C21.615 5.34224 21.9501 6.06011 21.995 6.824L22 7V17C22 17.7652 21.7077 18.5015 21.1827 19.0583C20.6578 19.615 19.9399 19.9501 19.176 19.995L19 20H5C4.23479 20 3.49849 19.7077 2.94174 19.1827C2.38499 18.6578 2.04989 17.9399 2.005 17.176L2 17V7C1.99996 6.23479 2.29233 5.49849 2.81728 4.94174C3.34224 4.38499 4.06011 4.04989 4.824 4.005L5 4H19ZM12.354 8.992L12 9.604L11.646 8.992C11.4753 8.69623 11.248 8.43699 10.9771 8.22908C10.7062 8.02116 10.397 7.86865 10.0672 7.78024C9.73735 7.69184 9.39332 7.66928 9.05476 7.71385C8.7162 7.75842 8.38973 7.86924 8.094 8.04L7.501 8.383C7.19221 8.56115 6.92155 8.7984 6.70447 9.08118C6.48739 9.36396 6.32814 9.68674 6.23584 10.0311C6.14353 10.3754 6.11997 10.7346 6.1665 11.088C6.21302 11.4415 6.32873 11.7823 6.507 12.091C6.81828 12.6302 7.27633 13.0698 7.82782 13.3588C8.3793 13.6477 9.00151 13.774 9.622 13.723L8.654 15.4C8.52348 15.6296 8.48906 15.9014 8.55825 16.1563C8.62744 16.4111 8.79462 16.6282 9.02331 16.7603C9.25199 16.8923 9.52362 16.9285 9.77892 16.861C10.0342 16.7935 10.2524 16.6278 10.386 16.4L12 13.605L13.614 16.4C13.6792 16.5146 13.7664 16.6153 13.8706 16.6961C13.9749 16.7769 14.094 16.8363 14.2213 16.8708C14.3486 16.9054 14.4814 16.9144 14.6122 16.8974C14.743 16.8804 14.8691 16.8377 14.9833 16.7718C15.0975 16.7058 15.1976 16.6179 15.2777 16.5132C15.3578 16.4084 15.4164 16.2888 15.4501 16.1613C15.4838 16.0338 15.492 15.9009 15.4741 15.7703C15.4562 15.6396 15.4127 15.5138 15.346 15.4L14.378 13.723C14.9985 13.774 15.6207 13.6477 16.1722 13.3588C16.7237 13.0698 17.1817 12.6302 17.493 12.091C17.6713 11.7823 17.787 11.4415 17.8335 11.088C17.88 10.7346 17.8565 10.3754 17.7642 10.0311C17.6719 9.68674 17.5126 9.36396 17.2955 9.08118C17.0785 8.7984 16.8078 8.56115 16.499 8.383L15.906 8.04C15.6103 7.86924 15.2838 7.75842 14.9452 7.71385C14.6067 7.66928 14.2626 7.69184 13.9328 7.78024C13.603 7.86865 13.2938 8.02116 13.0229 8.22908C12.752 8.43699 12.5247 8.69623 12.354 8.992ZM14.817 9.73L14.905 9.772L15.499 10.115C15.5803 10.1618 15.6517 10.2242 15.7089 10.2986C15.7661 10.3731 15.808 10.458 15.8324 10.5487C15.8567 10.6393 15.8629 10.7339 15.8507 10.8269C15.8384 10.92 15.808 11.0097 15.761 11.091C15.6017 11.3667 15.3459 11.5735 15.0429 11.6714C14.74 11.7693 14.4115 11.7513 14.121 11.621L14.004 11.561L13.386 11.204L14.086 9.992C14.1489 9.88289 14.2446 9.79636 14.3595 9.74467C14.4744 9.69298 14.6026 9.67875 14.726 9.704L14.817 9.73ZM9.914 9.992L10.614 11.204L9.995 11.561C9.69978 11.7314 9.34899 11.7776 9.01973 11.6894C8.69046 11.6013 8.40965 11.3861 8.239 11.091C8.19204 11.0097 8.16157 10.92 8.14932 10.8269C8.13708 10.7339 8.1433 10.6393 8.16764 10.5487C8.19197 10.458 8.23394 10.3731 8.29114 10.2986C8.34834 10.2242 8.41966 10.1618 8.501 10.115L9.094 9.772C9.16228 9.73256 9.23766 9.70696 9.31583 9.69667C9.39401 9.68639 9.47344 9.69161 9.5496 9.71204C9.62576 9.73247 9.69714 9.76771 9.75966 9.81575C9.82219 9.86379 9.87463 9.92368 9.914 9.992Z"
        fill="#340D73"
      />
    </Svg>
  );
}

function DropdownIcon() {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.47133 10.4712C8.34631 10.5962 8.17677 10.6664 7.99999 10.6664C7.82322 10.6664 7.65368 10.5962 7.52866 10.4712L3.75733 6.6999C3.69365 6.63841 3.64287 6.56484 3.60793 6.48351C3.57299 6.40217 3.5546 6.31469 3.55383 6.22617C3.55306 6.13765 3.56993 6.04986 3.60345 5.96793C3.63697 5.886 3.68647 5.81157 3.74906 5.74897C3.81166 5.68638 3.88609 5.63688 3.96803 5.60336C4.04996 5.56983 4.13774 5.55297 4.22626 5.55374C4.31478 5.55451 4.40226 5.5729 4.4836 5.60784C4.56493 5.64277 4.6385 5.69356 4.69999 5.75724L7.99999 9.05724L11.3 5.75724C11.4257 5.6358 11.5941 5.5686 11.7689 5.57012C11.9437 5.57164 12.1109 5.64175 12.2345 5.76536C12.3581 5.88896 12.4283 6.05617 12.4298 6.23097C12.4313 6.40577 12.3641 6.57417 12.2427 6.6999L8.47133 10.4712Z"
        fill="#340D73"
      />
    </Svg>
  );
}

function EstimateInfoIcon() {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M8.00001 1.3335C11.682 1.3335 14.6667 4.31816 14.6667 8.00016C14.6667 11.6822 11.682 14.6668 8.00001 14.6668C4.31801 14.6668 1.33334 11.6822 1.33334 8.00016C1.33334 4.31816 4.31801 1.3335 8.00001 1.3335ZM7.99334 6.66683H7.33334C7.16342 6.66702 6.99999 6.73208 6.87643 6.84873C6.75287 6.96537 6.67852 7.1248 6.66856 7.29443C6.6586 7.46405 6.71379 7.63108 6.82285 7.76138C6.93191 7.89169 7.08661 7.97543 7.25534 7.9955L7.33334 8.00016V11.3268C7.33334 11.6735 7.59601 11.9602 7.93334 11.9962L8.00668 12.0002H8.33334C8.47355 12.0002 8.61019 11.956 8.72383 11.8738C8.83747 11.7917 8.92233 11.6759 8.96634 11.5427C9.01034 11.4096 9.01126 11.266 8.96895 11.1323C8.92664 10.9987 8.84326 10.8817 8.73068 10.7982L8.66668 10.7562V7.34016C8.66668 6.9935 8.40401 6.70683 8.06668 6.67083L7.99334 6.66683ZM8.00001 4.66683C7.8232 4.66683 7.65363 4.73707 7.52861 4.86209C7.40358 4.98712 7.33334 5.15668 7.33334 5.3335C7.33334 5.51031 7.40358 5.67988 7.52861 5.8049C7.52861 5.92992 7.8232 6.00016 8.00001 6.00016C8.17682 6.00016 8.34639 5.92992 8.47141 5.8049C8.59644 5.67988 8.66668 5.51031 8.66668 5.3335C8.66668 5.15668 8.59644 4.98712 8.47141 4.86209C8.34639 4.73707 8.17682 4.66683 8.00001 4.66683Z"
        fill="#768498"
      />
    </Svg>
  );
}

function BackMediumIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_back)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.293 12.7069C8.10553 12.5193 8.00021 12.265 8.00021 11.9999C8.00021 11.7347 8.10553 11.4804 8.293 11.2929L13.95 5.63585C14.0422 5.54034 14.1526 5.46416 14.2746 5.41175C14.3966 5.35934 14.5278 5.33176 14.6606 5.3306C14.7934 5.32945 14.9251 5.35475 15.048 5.40503C15.1708 5.45531 15.2825 5.52957 15.3764 5.62346C15.4703 5.71735 15.5445 5.829 15.5948 5.9519C15.6451 6.0748 15.6704 6.20648 15.6693 6.33926C15.6681 6.47204 15.6405 6.60325 15.5881 6.72526C15.5357 6.84726 15.4595 6.95761 15.364 7.04985L10.414 11.9999L15.364 16.9499C15.5462 17.1385 15.647 17.3911 15.6447 17.6533C15.6424 17.9155 15.5372 18.1663 15.3518 18.3517C15.1664 18.5371 14.9156 18.6423 14.6534 18.6445C14.3912 18.6468 14.1386 18.546 13.95 18.3639L8.293 12.7069Z"
          fill="#340D73"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_back">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function CloseMediumIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_close)">
        <Path
          d="M15.889 6.69724C16.0789 6.52178 16.3294 6.42662 16.5879 6.43169C16.8464 6.43676 17.0929 6.54166 17.2758 6.72443C17.4587 6.9072 17.5638 7.15365 17.5691 7.41216C17.5743 7.67068 17.4793 7.92119 17.304 8.11124L13.414 12.0002L17.304 15.8902C17.4862 16.0788 17.587 16.3314 17.5847 16.5936C17.5824 16.8558 17.4772 17.1066 17.2918 17.2921C17.1064 17.4775 16.8556 17.5826 16.5934 17.5849C16.3312 17.5872 16.0786 17.4864 15.89 17.3042L12 13.4142L8.11101 17.3042C8.01877 17.3998 7.90842 17.4759 7.78642 17.5283C7.66441 17.5807 7.53319 17.6083 7.40041 17.6095C7.26763 17.6106 7.13595 17.5853 7.01306 17.5351C6.89016 17.4848 6.77851 17.4105 6.68462 17.3166C6.59072 17.2227 6.51647 17.1111 6.46619 16.9882C6.41591 16.8653 6.39061 16.7336 6.39176 16.6008C6.39292 16.4681 6.4205 16.3368 6.47291 16.2148C6.52532 16.0928 6.6015 15.9825 6.69701 15.8902L10.586 12.0002L6.69701 8.11024C6.51485 7.92164 6.41406 7.66903 6.41634 7.40684C6.41862 7.14464 6.52379 6.89383 6.70919 6.70842C6.8946 6.52301 7.14541 6.41784 7.40761 6.41557C7.66981 6.41329 7.92241 6.51408 8.11101 6.69624L12 10.5862L15.889 6.69724Z"
          fill="#340D73"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_close">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function TrashRedIcon() {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.71 1.5C11.0248 1.50008 11.3316 1.59921 11.587 1.78336C11.8423 1.9675 12.0333 2.22731 12.1327 2.526L12.54 3.75H15C15.1989 3.75 15.3897 3.82902 15.5303 3.96967C15.671 4.11032 15.75 4.30109 15.75 4.5C15.75 4.69891 15.671 4.88968 15.5303 5.03033C15.3897 5.17098 15.1989 5.25 15 5.25L14.9977 5.30325L14.3475 14.4105C14.3069 14.978 14.0529 15.509 13.6365 15.8967C13.2202 16.2844 12.6724 16.4999 12.1035 16.5H5.8965C5.32759 16.4999 4.77983 16.2844 4.36347 15.8967C3.94712 15.509 3.69308 14.978 3.6525 14.4105L3.00225 5.3025C3.00089 5.28503 3.00014 5.26752 3 5.25C2.80109 5.25 2.61032 5.17098 2.46967 5.03033C2.32902 4.88968 2.25 4.69891 2.25 4.5C2.25 4.30109 2.32902 4.11032 2.46967 3.96967C2.61032 3.82902 2.80109 3.75 3 3.75H5.46L5.86725 2.526C5.96677 2.22719 6.15783 1.96729 6.41332 1.78314C6.66882 1.59898 6.9758 1.49992 7.29075 1.5H10.71ZM6.75 7.5C6.5663 7.50002 6.389 7.56747 6.25172 7.68954C6.11444 7.81161 6.02674 7.97981 6.00525 8.16225L6 8.25V12.75C6.00021 12.9412 6.07341 13.125 6.20464 13.264C6.33586 13.403 6.51521 13.4867 6.70605 13.4979C6.89688 13.5091 7.08478 13.447 7.23137 13.3243C7.37796 13.2016 7.47217 13.0276 7.49475 12.8378L7.5 12.75V8.25C7.5 8.05109 7.42098 7.86032 7.28033 7.71967C7.13968 7.57902 6.94891 7.5 6.75 7.5ZM11.25 7.5C11.0511 7.5 10.8603 7.57902 10.7197 7.71967C10.579 7.86032 10.5 8.05109 10.5 8.25V12.75C10.5 12.9489 10.579 13.1397 10.7197 13.2803C10.8603 13.421 11.0511 13.5 11.25 13.5C11.4489 13.5 11.6397 13.421 11.7803 13.2803C11.921 13.1397 12 12.9489 12 12.75V8.25C12 8.05109 11.921 7.86032 11.7803 7.71967C11.6397 7.57902 11.4489 7.5 11.25 7.5ZM10.71 3H7.29L7.04025 3.75H10.9598L10.71 3Z"
        fill="#DC5355"
      />
    </Svg>
  );
}

function UploadIconLine() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 16V4M12 4L8 8M12 4L16 8M4 20H20"
        stroke="#340D73"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function WhiteClockIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_clock)">
        <Path
          d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11.0001 12.2652 11.1055 12.5195 11.293 12.707L14.293 15.707C14.4816 15.8892 14.7342 15.99 14.9964 15.9877C15.2586 15.9854 15.5094 15.8802 15.6948 15.6948C15.8802 15.5094 15.9854 15.2586 15.9877 14.9964C15.99 14.7342 15.8892 14.4816 15.707 14.293L13 11.586V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_clock">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function SmallCheckIcon({ color = '#FFFFFF' }: { color?: string }) {
  return (
    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.773 2.55553C10.9136 2.69618 10.9926 2.88691 10.9926 3.08578C10.9926 3.28466 10.9136 3.47539 10.773 3.61603L5.15151 9.23753C5.07722 9.31184 4.98902 9.37078 4.89195 9.411C4.79488 9.45121 4.69084 9.47191 4.58576 9.47191C4.48069 9.47191 4.37665 9.45121 4.27957 9.411C4.1825 9.37078 4.0943 9.31184 4.02001 9.23753L1.22701 6.44503C1.15538 6.37585 1.09824 6.29309 1.05894 6.20159C1.01963 6.11008 0.998941 6.01167 0.998075 5.91208C0.99721 5.8125 1.01619 5.71374 1.0539 5.62157C1.09161 5.5294 1.1473 5.44566 1.21772 5.37524C1.28814 5.30482 1.37188 5.24913 1.46405 5.21142C1.55622 5.17371 1.65498 5.15473 1.75456 5.1556C1.85415 5.15646 1.95256 5.17715 2.04407 5.21646C2.13557 5.25576 2.21833 5.3129 2.28751 5.38453L4.58551 7.68253L9.71201 2.55553C9.78166 2.48584 9.86436 2.43055 9.95539 2.39283C10.0464 2.35511 10.144 2.33569 10.2425 2.33569C10.341 2.33569 10.4386 2.35511 10.5296 2.39283C10.6207 2.43055 10.7034 2.48584 10.773 2.55553Z"
        fill={color}
      />
    </Svg>
  );
}

function SmallClockIcon({ color = '#FFFFFF' }: { color?: string }) {
  return (
    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <Path
        d="M6 1C8.76142 1 11 3.23858 11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1ZM6 3V6L8 7"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

interface GiftCardSubcategory {
  name: string;
  rate: number;
  currencySymbol: string;
}

interface GiftCardCategory {
  id: string;
  name: string;
  subcategories: GiftCardSubcategory[];
}

interface UploadedFileItem {
  id: string;
  name: string;
  sizeKb: number;
}

type SellStep = 'details' | 'uploadEmpty' | 'uploadList' | 'review' | 'timelineProcessing' | 'timelineComplete';

const CATEGORIES_DATA: GiftCardCategory[] = [
  {
    id: 'apple',
    name: 'Apple / iTunes',
    subcategories: [
      { name: 'USA Apple/iTunes Physical ($USD)', rate: 1350.0, currencySymbol: '$' },
      { name: 'USA Apple/iTunes E-code ($USD)', rate: 1290.0, currencySymbol: '$' },
      { name: 'UK Apple/iTunes (£GBP)', rate: 1700.0, currencySymbol: '£' },
      { name: 'Euro Apple/iTunes (€EUR)', rate: 1450.0, currencySymbol: '€' },
    ],
  },
  {
    id: 'playstation',
    name: 'Playstation Network',
    subcategories: [
      { name: 'USA Playstation Network ($USD)', rate: 1320.0, currencySymbol: '$' },
      { name: 'UK Playstation (£GBP)', rate: 1650.0, currencySymbol: '£' },
    ],
  },
  {
    id: 'steam',
    name: 'Steam Wallet',
    subcategories: [
      { name: 'USA Steam ($USD)', rate: 1380.0, currencySymbol: '$' },
      { name: 'UK Steam (£GBP)', rate: 1720.0, currencySymbol: '£' },
      { name: 'Euro Steam (€EUR)', rate: 1480.0, currencySymbol: '€' },
    ],
  },
  {
    id: 'amazon',
    name: 'Amazon',
    subcategories: [
      { name: 'USA Amazon Cash Receipt ($USD)', rate: 1280.0, currencySymbol: '$' },
      { name: 'USA Amazon Debit/E-code', rate: 1220.0, currencySymbol: '$' },
      { name: 'UK Amazon (£GBP)', rate: 1610.0, currencySymbol: '£' },
    ],
  },
  {
    id: 'googleplay',
    name: 'Google Play',
    subcategories: [
      { name: 'USA Google Play ($USD)', rate: 1250.0, currencySymbol: '$' },
      { name: 'UK Google Play (£GBP)', rate: 1580.0, currencySymbol: '£' },
    ],
  },
  {
    id: 'razer',
    name: 'Razer Gold',
    subcategories: [
      { name: 'Global Razer Gold ($USD)', rate: 1360.0, currencySymbol: '$' },
    ],
  },
  {
    id: 'xbox',
    name: 'Xbox',
    subcategories: [
      { name: 'USA Xbox ($USD)', rate: 1240.0, currencySymbol: '$' },
    ],
  },
];

interface SellGiftcardModalProps {
  visible: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export function SellGiftcardModal({ visible, onClose, onSuccess }: SellGiftcardModalProps) {
  const [step, setStep] = useState<SellStep>('details');
  const [selectedCategory, setSelectedCategory] = useState<GiftCardCategory>(CATEGORIES_DATA[0]);
  const [selectedSub, setSelectedSub] = useState(CATEGORIES_DATA[0].subcategories[0]);
  const [amount, setAmount] = useState<number>(100);
  const [cardCode, setCardCode] = useState<string>('73862545265425652');
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFileItem[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedOrder, setSubmittedOrder] = useState<any>(null);
  const [currentTimeStr, setCurrentTimeStr] = useState<string>('11:29 AM');

  // Active Picker Modal State
  const [pickerType, setPickerType] = useState<'category' | 'subcategory' | 'amount' | null>(null);

  const amounts = [25, 50, 100, 200, 500, 1000];

  // Auto-advance simulation from timelineProcessing to timelineComplete after 4s
  useEffect(() => {
    let timer: any;
    if (step === 'timelineProcessing') {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      setCurrentTimeStr(`${formattedHours}:${minutes} ${ampm}`);

      timer = setTimeout(() => {
        setStep('timelineComplete');
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [step]);

  // Dynamic Payout Calculation: amount * rate
  const estimateNaira = useMemo(() => {
    return amount * selectedSub.rate;
  }, [amount, selectedSub]);

  // Total size of uploaded files
  const totalUploadedSizeMb = useMemo(() => {
    const totalKb = uploadedFiles.reduce((acc, f) => acc + f.sizeKb, 0);
    return (totalKb / 1024).toFixed(2);
  }, [uploadedFiles]);

  const handleCategorySelect = (category: GiftCardCategory) => {
    setSelectedCategory(category);
    setSelectedSub(category.subcategories[0]);
    setPickerType(null);
  };

  const handleSubSelect = (sub: { name: string; rate: number; currencySymbol: string }) => {
    setSelectedSub(sub);
    setPickerType(null);
  };

  const handleAmountSelect = (a: number) => {
    setAmount(a);
    setPickerType(null);
  };

  const resetFlow = () => {
    setStep('details');
    setUploadedFiles([]);
    setSubmittedOrder(null);
    onClose();
  };

  const handleCancelOrder = () => {
    Alert.alert(
      'Cancel Order',
      'Are you sure you want to cancel this sell order?',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes, Cancel', style: 'destructive', onPress: resetFlow },
      ]
    );
  };

  // Add dynamic uploaded image (up to 4)
  const handleAddImage = () => {
    if (uploadedFiles.length >= 4) {
      Alert.alert('Limit Reached', 'You can upload up to 4 images at once.');
      return;
    }
    const newIdx = uploadedFiles.length + 1;
    const sampleNames = ['tracking_screenshot.png', 'front_card_scan.png', 'back_card_scan.png', 'receipt_proof.png'];
    const sampleSizes = [239.92, 480.15, 312.44, 520.8];
    const newFile: UploadedFileItem = {
      id: `img-${Date.now()}-${newIdx}`,
      name: sampleNames[newIdx - 1] || `card_image_${newIdx}.png`,
      sizeKb: sampleSizes[newIdx - 1] || 250.0,
    };
    const updated = [...uploadedFiles, newFile];
    setUploadedFiles(updated);
    setStep('uploadList');
  };

  // Remove single image
  const handleRemoveImage = (id: string) => {
    const filtered = uploadedFiles.filter((f) => f.id !== id);
    setUploadedFiles(filtered);
    if (filtered.length === 0) {
      setStep('uploadEmpty');
    }
  };

  // Remove all images
  const handleRemoveAll = () => {
    setUploadedFiles([]);
    setStep('uploadEmpty');
  };

  const submitTrade = async () => {
    setIsSubmitting(true);
    try {
      const payload = {
        card_type: `${selectedCategory.name} - ${selectedSub.name}`,
        trade_type: 'SELL',
        face_value: amount,
        card_code: cardCode || 'IMAGE_SUBMISSION',
        rate: selectedSub.rate,
        naira_payout: estimateNaira,
      };

      const res = await apiRequest('/giftcards/trade', 'POST', payload, true);
      setSubmittedOrder(res.order || {
        order_id: 'ZALI-GC-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
        card_type: payload.card_type,
        face_value: amount,
        naira_payout: estimateNaira,
        status: 'Pending',
      });
      setStep('timelineProcessing');
      if (onSuccess) onSuccess();
    } catch (err: any) {
      const fallbackOrder = {
        order_id: 'ZALI-GC-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
        card_type: `${selectedCategory.name} - ${selectedSub.name}`,
        face_value: amount,
        naira_payout: estimateNaira,
        status: 'Pending',
      };
      setSubmittedOrder(fallbackOrder);
      setStep('timelineProcessing');
      if (onSuccess) onSuccess();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={resetFlow}>
      <View style={styles.scrim}>
        {/* STEP 1: Details Modal Card (343x686px, bottom: 15px) */}
        {step === 'details' && (
          <View style={styles.detailsCard}>
            <TouchableOpacity
              style={styles.closeBtnCircle}
              activeOpacity={0.8}
              onPress={resetFlow}
            >
              <CloseMediumIcon />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Sell giftcard</Text>
            <Text style={styles.headerSubtitle}>
              Fill information about the giftcard you would like to sell
            </Text>

            <View style={styles.formStack}>
              {/* 1. Category */}
              <TouchableOpacity
                style={styles.fieldRow}
                activeOpacity={0.85}
                onPress={() => setPickerType('category')}
              >
                <View style={styles.leftIconBox}>
                  <GiftCardIcon />
                </View>
                <View style={styles.fieldContent}>
                  <Text style={styles.fieldLabel}>Giftcard category</Text>
                  <Text style={styles.fieldValue}>{selectedCategory.name}</Text>
                </View>
                <DropdownIcon />
              </TouchableOpacity>

              {/* 2. Subcategory */}
              <TouchableOpacity
                style={styles.fieldRowSub}
                activeOpacity={0.85}
                onPress={() => setPickerType('subcategory')}
              >
                <View style={styles.subRowTop}>
                  <View style={styles.leftIconBox}>
                    <GiftCardIcon />
                  </View>
                  <View style={styles.fieldContent}>
                    <Text style={styles.fieldLabel}>Giftcard subcategory</Text>
                    <Text style={styles.fieldValue}>{selectedSub.name}</Text>
                  </View>
                  <DropdownIcon />
                </View>
                <View style={styles.rateBadge}>
                  <Text style={styles.rateBadgeText}>
                    Rate: ₦{selectedSub.rate.toLocaleString('en-NG')}
                  </Text>
                </View>
              </TouchableOpacity>

              {/* 3. Amount */}
              <TouchableOpacity
                style={styles.fieldRow}
                activeOpacity={0.85}
                onPress={() => setPickerType('amount')}
              >
                <View style={styles.fieldContentNoIcon}>
                  <Text style={styles.fieldLabel}>Amount</Text>
                  <Text style={styles.fieldValue}>
                    {selectedSub.currencySymbol}{amount}
                  </Text>
                </View>
                <DropdownIcon />
              </TouchableOpacity>
            </View>

            <View style={styles.estimateCard}>
              <View style={styles.estimateHeaderRow}>
                <Text style={styles.estimateLabel}>Estimate amount you get</Text>
                <EstimateInfoIcon />
              </View>
              <Text style={styles.estimateValue}>
                ₦{estimateNaira.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.proceedBtn}
              activeOpacity={0.85}
              onPress={() => setStep(uploadedFiles.length > 0 ? 'uploadList' : 'uploadEmpty')}
            >
              <Text style={styles.proceedBtnText}>Proceed</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* STEP 2A: Upload Empty Modal Card (343x457px, bottom: 23px) */}
        {step === 'uploadEmpty' && (
          <View style={styles.uploadCard}>
            <TouchableOpacity
              style={styles.uploadBackBtnCircle}
              activeOpacity={0.8}
              onPress={() => setStep('details')}
            >
              <BackMediumIcon />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.uploadCloseBtnCircle}
              activeOpacity={0.8}
              onPress={resetFlow}
            >
              <CloseMediumIcon />
            </TouchableOpacity>

            <Text style={styles.uploadHeaderTitle}>Sell giftcard</Text>
            <Text style={styles.uploadHeaderSubtitle}>Upload your giftcard images</Text>

            <View style={styles.uploadDashedContainer}>
              <View style={styles.uploadRowTop}>
                <View style={styles.leftIconBox}>
                  <GiftCardIcon />
                </View>
                <View style={styles.uploadTextCol}>
                  <Text style={styles.uploadMainText}>Click here to upload image</Text>
                  <Text style={styles.uploadSubText}>You can upload up to 4 images at once</Text>
                </View>
              </View>

              <TouchableOpacity
                style={styles.selectImagePillBtn}
                activeOpacity={0.85}
                onPress={handleAddImage}
              >
                <Text style={styles.selectImagePillText}>Select Image</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.giftCardCodeInputBox}>
              <Text style={styles.giftCardCodeLabel}>Giftcard codes (Optional)</Text>
              <TextInput
                style={styles.giftCardCodeInput}
                placeholder="Type giftcard code..."
                placeholderTextColor="#768498"
                value={cardCode}
                onChangeText={setCardCode}
              />
            </View>

            <TouchableOpacity
              style={styles.uploadProceedBtn}
              activeOpacity={0.85}
              onPress={() => setStep('review')}
            >
              <Text style={styles.uploadProceedBtnText}>Proceed</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* STEP 2B: Uploaded Files List Modal Card (343x581px, bottom: 16px) */}
        {step === 'uploadList' && (
          <View style={styles.uploadListModalCard}>
            <TouchableOpacity
              style={styles.uploadBackBtnCircle}
              activeOpacity={0.8}
              onPress={() => setStep('details')}
            >
              <BackMediumIcon />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.uploadCloseBtnCircle}
              activeOpacity={0.8}
              onPress={resetFlow}
            >
              <CloseMediumIcon />
            </TouchableOpacity>

            <Text style={styles.uploadListHeaderTitle}>Sell giftcard</Text>
            <Text style={styles.uploadListHeaderSubtitle}>Upload your giftcard images</Text>

            <View style={styles.uploadSummaryRow}>
              <Text style={styles.uploadCountText}>
                {uploadedFiles.length} of 4 images uploaded
              </Text>
              <TouchableOpacity activeOpacity={0.7} onPress={handleRemoveAll}>
                <Text style={styles.removeAllText}>Remove all</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              style={styles.uploadedItemsScroll}
              showsVerticalScrollIndicator={false}
            >
              {uploadedFiles.map((file) => (
                <View key={file.id} style={styles.uploadedFileRow}>
                  <View style={styles.uploadedFileLeft}>
                    <GiftCardIcon />
                    <View style={styles.uploadedFileInfoCol}>
                      <Text style={styles.uploadedFileName} numberOfLines={1}>
                        {file.name}
                      </Text>
                      <Text style={styles.uploadedFileSize}>{file.sizeKb} KB</Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.trashBtnBox}
                    activeOpacity={0.7}
                    onPress={() => handleRemoveImage(file.id)}
                  >
                    <TrashRedIcon />
                  </TouchableOpacity>
                </View>
              ))}

              {uploadedFiles.length < 4 && (
                <TouchableOpacity
                  style={styles.addMoreImagesBtn}
                  activeOpacity={0.8}
                  onPress={handleAddImage}
                >
                  <Text style={styles.addMoreImagesText}>+ Add another image</Text>
                </TouchableOpacity>
              )}
            </ScrollView>

            <View style={styles.uploadListCodeInputBox}>
              <Text style={styles.uploadListCodeLabel}>Giftcard codes (Optional)</Text>
              <TextInput
                style={styles.uploadListCodeInput}
                placeholder="Type giftcard code..."
                placeholderTextColor="#768498"
                value={cardCode}
                onChangeText={setCardCode}
              />
            </View>

            <TouchableOpacity
              style={styles.uploadListProceedBtn}
              activeOpacity={0.85}
              onPress={() => setStep('review')}
            >
              <Text style={styles.uploadListProceedBtnText}>Proceed</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* STEP 3: Review Transaction Modal Card (343x480px, bottom: 20px) */}
        {step === 'review' && (
          <View style={styles.reviewModalCard}>
            <TouchableOpacity
              style={styles.reviewBackBtnCircle}
              activeOpacity={0.8}
              onPress={() => setStep(uploadedFiles.length > 0 ? 'uploadList' : 'uploadEmpty')}
            >
              <BackMediumIcon />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.reviewCloseBtnCircle}
              activeOpacity={0.8}
              onPress={resetFlow}
            >
              <CloseMediumIcon />
            </TouchableOpacity>

            <Text style={styles.reviewHeaderTitle}>Review transaction</Text>
            <Text style={styles.reviewHeaderSubtitle}>Review all information about giftcard</Text>

            <View style={styles.reviewStack}>
              {/* Card 1: Category & Subcategory */}
              <View style={styles.reviewItemCard}>
                <View style={styles.reviewItemLeft}>
                  <GiftCardIcon />
                  <View style={styles.reviewItemTextCol}>
                    <Text style={styles.reviewItemTitle}>{selectedCategory.name}</Text>
                    <Text style={styles.reviewItemSub}>{selectedSub.name}</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.reviewEditPill}
                  activeOpacity={0.8}
                  onPress={() => setStep('details')}
                >
                  <Text style={styles.reviewEditText}>Edit</Text>
                </TouchableOpacity>
              </View>

              {/* Card 2: Uploaded Images */}
              <View style={styles.reviewItemCard}>
                <View style={styles.reviewItemLeft}>
                  <UploadIconLine />
                  <View style={styles.reviewItemTextCol}>
                    <Text style={styles.reviewItemTitle}>
                      {uploadedFiles.length > 0 ? `${uploadedFiles.length} uploaded images` : '0 uploaded images'}
                    </Text>
                    <Text style={styles.reviewItemSub}>
                      {uploadedFiles.length > 0 ? `${totalUploadedSizeMb} MB` : 'No images'}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.reviewEditPill}
                  activeOpacity={0.8}
                  onPress={() => setStep(uploadedFiles.length > 0 ? 'uploadList' : 'uploadEmpty')}
                >
                  <Text style={styles.reviewEditText}>Edit</Text>
                </TouchableOpacity>
              </View>

              {/* Card 3: Giftcard Codes */}
              <View style={styles.reviewItemCard}>
                <View style={styles.reviewItemLeftNoIcon}>
                  <Text style={styles.reviewCodeLabel}>Giftcard codes</Text>
                  <Text style={styles.reviewCodeValue}>
                    {cardCode || '73862545265425652'}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.reviewEditPill}
                  activeOpacity={0.8}
                  onPress={() => setStep(uploadedFiles.length > 0 ? 'uploadList' : 'uploadEmpty')}
                >
                  <Text style={styles.reviewEditText}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={styles.reviewProceedBtn}
              activeOpacity={0.85}
              onPress={submitTrade}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <ActivityIndicator color="#FFFFFF" size="small" />
              ) : (
                <Text style={styles.reviewProceedBtnText}>Proceed</Text>
              )}
            </TouchableOpacity>
          </View>
        )}

        {/* STEP 4A: Processing / Validating Timeline Modal Card (343x656px, bottom: 27px) */}
        {step === 'timelineProcessing' && (
          <View style={styles.timelineModalCard}>
            <TouchableOpacity
              style={styles.timelineCloseBtnCircle}
              activeOpacity={0.8}
              onPress={resetFlow}
            >
              <CloseMediumIcon />
            </TouchableOpacity>

            <Text style={styles.timelineHeaderTitle}>Sell giftcard</Text>

            {/* Glowing Concentric Timer Icon */}
            <View style={styles.concentricIconWrapper}>
              <View style={styles.outerGlowCircle}>
                <View style={styles.middleGlowCircle}>
                  <View style={styles.innerSolidCircle}>
                    <WhiteClockIcon />
                  </View>
                </View>
              </View>
            </View>

            <Text style={styles.timelineMainTitle}>Your order is being completed</Text>

            {/* 4-Step Horizontal Timeline Tracker */}
            <View style={styles.trackerContainer}>
              {/* Step 1: Order sent */}
              <View style={styles.trackerStepItem}>
                <View style={[styles.stepCircleIcon, { backgroundColor: '#37A970' }]}>
                  <SmallCheckIcon color="#FFFFFF" />
                </View>
                <Text style={styles.stepTitleActive}>Order sent</Text>
                <Text style={styles.stepSubtitle}>{currentTimeStr}</Text>
              </View>

              <View style={[styles.trackerLine, { backgroundColor: '#37A970' }]} />

              {/* Step 2: Received (Pending) */}
              <View style={styles.trackerStepItem}>
                <View style={[styles.stepCircleIcon, { backgroundColor: '#DBB452' }]}>
                  <SmallClockIcon color="#FFFFFF" />
                </View>
                <Text style={styles.stepTitleActive}>Received</Text>
                <Text style={[styles.stepSubtitle, { color: '#DBB452', fontWeight: '500' }]}>Pending</Text>
              </View>

              <View style={[styles.trackerLine, { backgroundColor: '#E2E8F0' }]} />

              {/* Step 3: Processed */}
              <View style={styles.trackerStepItem}>
                <View style={[styles.stepCircleIcon, { backgroundColor: '#E2E8F0' }]}>
                  <SmallCheckIcon color="#A0AEC0" />
                </View>
                <Text style={styles.stepTitleInactive}>Processed</Text>
                <Text style={styles.stepSubtitle}>-</Text>
              </View>

              <View style={[styles.trackerLine, { backgroundColor: '#E2E8F0' }]} />

              {/* Step 4: Completed */}
              <View style={styles.trackerStepItem}>
                <View style={[styles.stepCircleIcon, { backgroundColor: '#E2E8F0' }]}>
                  <SmallCheckIcon color="#A0AEC0" />
                </View>
                <Text style={styles.stepTitleInactive}>Completed</Text>
                <Text style={styles.stepSubtitle}>-</Text>
              </View>
            </View>

            {/* Validating Giftcard Notice Box */}
            <View style={styles.validatingBox}>
              <Text style={styles.validatingTitle}>Validating giftcard</Text>
              <Text style={styles.validatingBody}>
                We are validating your giftcard and will notify you once that is completed
              </Text>
            </View>

            {/* Red Cancel Order Notice Box */}
            <TouchableOpacity
              style={styles.cancelNoticeBox}
              activeOpacity={0.8}
              onPress={handleCancelOrder}
            >
              <Text style={styles.cancelNoticeTitle}>No longer selling</Text>
              <Text style={styles.cancelNoticeBody}>
                If you no longer want to sell, you can tap here to cancel your order
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.timelineDoneBtn}
              activeOpacity={0.85}
              onPress={resetFlow}
            >
              <Text style={styles.timelineDoneBtnText}>Done</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* STEP 4B: Completed Timeline Modal Card (343x656px, bottom: 27px) */}
        {step === 'timelineComplete' && (
          <View style={styles.timelineModalCard}>
            <TouchableOpacity
              style={styles.timelineCloseBtnCircle}
              activeOpacity={0.8}
              onPress={resetFlow}
            >
              <CloseMediumIcon />
            </TouchableOpacity>

            <Text style={styles.timelineHeaderTitle}>Sell giftcard</Text>

            {/* Green Completed Check Circle */}
            <View style={styles.concentricIconWrapper}>
              <View style={styles.greenSuccessCircle}>
                <Svg width="28" height="28" viewBox="0 0 12 12" fill="none">
                  <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.773 2.55553C10.9136 2.69618 10.9926 2.88691 10.9926 3.08578C10.9926 3.28466 10.9136 3.47539 10.773 3.61603L5.15151 9.23753C5.07722 9.31184 4.98902 9.37078 4.89195 9.411C4.79488 9.45121 4.69084 9.47191 4.58576 9.47191C4.48069 9.47191 4.37665 9.45121 4.27957 9.411C4.1825 9.37078 4.0943 9.31184 4.02001 9.23753L1.22701 6.44503C1.15538 6.37585 1.09824 6.29309 1.05894 6.20159C1.01963 6.11008 0.998941 6.01167 0.998075 5.91208C0.99721 5.8125 1.01619 5.71374 1.0539 5.62157C1.09161 5.5294 1.1473 5.44566 1.21772 5.37524C1.28814 5.30482 1.37188 5.24913 1.46405 5.21142C1.55622 5.17371 1.65498 5.15473 1.75456 5.1556C1.85415 5.15646 1.95256 5.17715 2.04407 5.21646C2.13557 5.25576 2.21833 5.3129 2.28751 5.38453L4.58551 7.68253L9.71201 2.55553C9.78166 2.48584 9.86436 2.43055 9.95539 2.39283C10.0464 2.35511 10.144 2.33569 10.2425 2.33569C10.341 2.33569 10.4386 2.35511 10.5296 2.39283C10.6207 2.43055 10.7034 2.48584 10.773 2.55553Z"
                    fill="#FFFFFF"
                  />
                </Svg>
              </View>
            </View>

            <Text style={styles.timelineMainTitle}>Your order is complete</Text>

            {/* 4-Step Horizontal Timeline Tracker - All Completed */}
            <View style={styles.trackerContainer}>
              {/* Step 1: Order sent */}
              <View style={styles.trackerStepItem}>
                <View style={[styles.stepCircleIcon, { backgroundColor: '#37A970' }]}>
                  <SmallCheckIcon color="#FFFFFF" />
                </View>
                <Text style={styles.stepTitleActive}>Order sent</Text>
                <Text style={styles.stepSubtitle}>{currentTimeStr}</Text>
              </View>

              <View style={[styles.trackerLine, { backgroundColor: '#37A970' }]} />

              {/* Step 2: Received */}
              <View style={styles.trackerStepItem}>
                <View style={[styles.stepCircleIcon, { backgroundColor: '#37A970' }]}>
                  <SmallCheckIcon color="#FFFFFF" />
                </View>
                <Text style={styles.stepTitleActive}>Received</Text>
                <Text style={styles.stepSubtitle}>{currentTimeStr}</Text>
              </View>

              <View style={[styles.trackerLine, { backgroundColor: '#37A970' }]} />

              {/* Step 3: Processed */}
              <View style={styles.trackerStepItem}>
                <View style={[styles.stepCircleIcon, { backgroundColor: '#37A970' }]}>
                  <SmallCheckIcon color="#FFFFFF" />
                </View>
                <Text style={styles.stepTitleActive}>Processed</Text>
                <Text style={styles.stepSubtitle}>{currentTimeStr}</Text>
              </View>

              <View style={[styles.trackerLine, { backgroundColor: '#37A970' }]} />

              {/* Step 4: Completed */}
              <View style={styles.trackerStepItem}>
                <View style={[styles.stepCircleIcon, { backgroundColor: '#37A970' }]}>
                  <SmallCheckIcon color="#FFFFFF" />
                </View>
                <Text style={styles.stepTitleActive}>Completed</Text>
                <Text style={styles.stepSubtitle}>{currentTimeStr}</Text>
              </View>
            </View>

            {/* Sent to Wallet Confirmation Box */}
            <View style={styles.payoutNoticeBox}>
              <Text style={styles.payoutNoticeTitle}>
                We sent ₦{estimateNaira.toLocaleString('en-NG', { minimumFractionDigits: 2 })} to your wallet
              </Text>
              <Text style={styles.payoutNoticeBody}>
                We have sent your money to your wallet, it might take between 1 - 5 business days to reflect in your wallet balance
              </Text>
            </View>

            <TouchableOpacity
              style={styles.timelineDoneBtn}
              activeOpacity={0.85}
              onPress={resetFlow}
            >
              <Text style={styles.timelineDoneBtnText}>Done</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Dynamic Category/Subcategory/Amount Picker Modal */}
        {pickerType ? (
          <Modal transparent animationType="fade" visible={true} onRequestClose={() => setPickerType(null)}>
            <TouchableOpacity
              style={styles.pickerOverlay}
              activeOpacity={1}
              onPress={() => setPickerType(null)}
            >
              <View style={styles.pickerSheet}>
                <Text style={styles.pickerTitle}>
                  {pickerType === 'category' && 'Select Category'}
                  {pickerType === 'subcategory' && 'Select Subcategory'}
                  {pickerType === 'amount' && 'Select Amount'}
                </Text>
                <ScrollView style={{ maxHeight: 280 }}>
                  {pickerType === 'category' &&
                    CATEGORIES_DATA.map((cat) => (
                      <TouchableOpacity
                        key={cat.id}
                        style={styles.pickerOption}
                        onPress={() => handleCategorySelect(cat)}
                      >
                        <Text
                          style={[
                            styles.pickerOptionText,
                            selectedCategory.id === cat.id && styles.pickerOptionSelected,
                          ]}
                        >
                          {cat.name}
                        </Text>
                      </TouchableOpacity>
                    ))}

                  {pickerType === 'subcategory' &&
                    selectedCategory.subcategories.map((sub) => (
                      <TouchableOpacity
                        key={sub.name}
                        style={styles.pickerOption}
                        onPress={() => handleSubSelect(sub)}
                      >
                        <Text
                          style={[
                            styles.pickerOptionText,
                            selectedSub.name === sub.name && styles.pickerOptionSelected,
                          ]}
                        >
                          {sub.name} (₦{sub.rate.toLocaleString('en-NG')})
                        </Text>
                      </TouchableOpacity>
                    ))}

                  {pickerType === 'amount' &&
                    amounts.map((a) => (
                      <TouchableOpacity
                        key={a}
                        style={styles.pickerOption}
                        onPress={() => handleAmountSelect(a)}
                      >
                        <Text
                          style={[
                            styles.pickerOptionText,
                            amount === a && styles.pickerOptionSelected,
                          ]}
                        >
                          {selectedSub.currencySymbol}{a}
                        </Text>
                      </TouchableOpacity>
                    ))}
                </ScrollView>
              </View>
            </TouchableOpacity>
          </Modal>
        ) : null}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  scrim: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  /* Step 1: Details Card (343x686px) */
  detailsCard: {
    width: 343,
    height: 686,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    marginBottom: 15,
    paddingTop: 16,
    paddingHorizontal: 16,
    position: 'relative',
  },
  closeBtnCircle: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0B1C56',
    lineHeight: 22,
    marginTop: 6,
  },
  headerSubtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#768498',
    lineHeight: 16,
    marginTop: 4,
  },
  formStack: {
    marginTop: 20,
    gap: 12,
  },
  fieldRow: {
    height: 60,
    backgroundColor: '#F9F9FB',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ECECF2',
  },
  fieldRowSub: {
    backgroundColor: '#F9F9FB',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ECECF2',
  },
  subRowTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIconBox: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#F0EBF9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  fieldContent: {
    flex: 1,
  },
  fieldContentNoIcon: {
    flex: 1,
    paddingLeft: 4,
  },
  fieldLabel: {
    fontSize: 10,
    color: '#768498',
    lineHeight: 14,
  },
  fieldValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0B1C56',
    marginTop: 2,
  },
  rateBadge: {
    backgroundColor: '#ECECF8',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginTop: 6,
    marginLeft: 46,
  },
  rateBadgeText: {
    fontSize: 11,
    color: '#340D73',
    fontWeight: '600',
  },
  estimateCard: {
    marginTop: 16,
    backgroundColor: '#F9F9FB',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#ECECF2',
  },
  estimateHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  estimateLabel: {
    fontSize: 11,
    color: '#768498',
  },
  estimateValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0B1C56',
  },
  proceedBtn: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    right: 16,
    height: 44,
    backgroundColor: '#340D73',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  proceedBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  /* Step 2A: Upload Empty Card (343x457px) */
  uploadCard: {
    width: 343,
    height: 457,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    marginBottom: 23,
    paddingTop: 16,
    paddingHorizontal: 16,
    position: 'relative',
  },
  uploadBackBtnCircle: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  uploadCloseBtnCircle: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  uploadHeaderTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0B1C56',
    textAlign: 'center',
    marginTop: 6,
  },
  uploadHeaderSubtitle: {
    fontSize: 12,
    color: '#768498',
    textAlign: 'center',
    marginTop: 4,
  },
  uploadDashedContainer: {
    marginTop: 20,
    backgroundColor: '#F9F9FB',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#D2C3E8',
    borderStyle: 'dashed',
    padding: 16,
    alignItems: 'center',
  },
  uploadRowTop: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  uploadTextCol: {
    flex: 1,
  },
  uploadMainText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0B1C56',
  },
  uploadSubText: {
    fontSize: 11,
    color: '#768498',
    marginTop: 2,
  },
  selectImagePillBtn: {
    backgroundColor: '#340D73',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 14,
  },
  selectImagePillText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  giftCardCodeInputBox: {
    marginTop: 16,
    backgroundColor: '#F9F9FB',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ECECF2',
  },
  giftCardCodeLabel: {
    fontSize: 10,
    color: '#768498',
  },
  giftCardCodeInput: {
    fontSize: 13,
    color: '#0B1C56',
    marginTop: 2,
    padding: 0,
  },
  uploadProceedBtn: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    right: 16,
    height: 44,
    backgroundColor: '#340D73',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadProceedBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  /* Step 2B: Upload List Card (343x581px) */
  uploadListModalCard: {
    width: 343,
    height: 581,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    marginBottom: 16,
    paddingTop: 16,
    paddingHorizontal: 16,
    position: 'relative',
  },
  uploadListHeaderTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0B1C56',
    textAlign: 'center',
    marginTop: 6,
  },
  uploadListHeaderSubtitle: {
    fontSize: 12,
    color: '#768498',
    textAlign: 'center',
    marginTop: 4,
  },
  uploadSummaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  uploadCountText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0B1C56',
  },
  removeAllText: {
    fontSize: 12,
    color: '#DC5355',
    fontWeight: '500',
  },
  uploadedItemsScroll: {
    maxHeight: 220,
  },
  uploadedFileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F9F9FB',
    borderRadius: 12,
    padding: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ECECF2',
  },
  uploadedFileLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  uploadedFileInfoCol: {
    marginLeft: 10,
    flex: 1,
  },
  uploadedFileName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0B1C56',
  },
  uploadedFileSize: {
    fontSize: 10,
    color: '#768498',
    marginTop: 2,
  },
  trashBtnBox: {
    padding: 6,
  },
  addMoreImagesBtn: {
    paddingVertical: 8,
    alignItems: 'center',
  },
  addMoreImagesText: {
    fontSize: 12,
    color: '#340D73',
    fontWeight: '600',
  },
  uploadListCodeInputBox: {
    marginTop: 8,
    backgroundColor: '#F9F9FB',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ECECF2',
  },
  uploadListCodeLabel: {
    fontSize: 10,
    color: '#768498',
  },
  uploadListCodeInput: {
    fontSize: 13,
    color: '#0B1C56',
    marginTop: 2,
    padding: 0,
  },
  uploadListProceedBtn: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    right: 16,
    height: 44,
    backgroundColor: '#340D73',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadListProceedBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  /* Step 3: Review Modal Card (343x480px) */
  reviewModalCard: {
    width: 343,
    height: 480,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    marginBottom: 20,
    paddingTop: 16,
    paddingHorizontal: 16,
    position: 'relative',
  },
  reviewBackBtnCircle: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  reviewCloseBtnCircle: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  reviewHeaderTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0B1C56',
    textAlign: 'center',
    marginTop: 6,
  },
  reviewHeaderSubtitle: {
    fontSize: 12,
    color: '#768498',
    textAlign: 'center',
    marginTop: 4,
  },
  reviewStack: {
    marginTop: 20,
    gap: 10,
  },
  reviewItemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F9F9FB',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ECECF2',
  },
  reviewItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  reviewItemLeftNoIcon: {
    flex: 1,
  },
  reviewItemTextCol: {
    marginLeft: 10,
    flex: 1,
  },
  reviewItemTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0B1C56',
  },
  reviewItemSub: {
    fontSize: 11,
    color: '#768498',
    marginTop: 2,
  },
  reviewCodeLabel: {
    fontSize: 10,
    color: '#768498',
  },
  reviewCodeValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0B1C56',
    marginTop: 2,
  },
  reviewEditPill: {
    backgroundColor: '#ECECF8',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  reviewEditText: {
    fontSize: 12,
    color: '#340D73',
    fontWeight: '600',
  },
  reviewProceedBtn: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    right: 16,
    height: 44,
    backgroundColor: '#340D73',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewProceedBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  /* Step 4: Timeline Processing & Completed Card (343x656px, bottom: 27px) */
  timelineModalCard: {
    width: 343,
    height: 656,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    marginBottom: 27,
    paddingTop: 16,
    paddingHorizontal: 16,
    position: 'relative',
    alignItems: 'center',
  },
  timelineCloseBtnCircle: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  timelineHeaderTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0B1C56',
    textAlign: 'center',
    marginTop: 6,
  },
  concentricIconWrapper: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  outerGlowCircle: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: 'rgba(213, 173, 255, 0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleGlowCircle: {
    width: 53,
    height: 53,
    borderRadius: 26.5,
    backgroundColor: 'rgba(226, 199, 253, 0.65)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerSolidCircle: {
    width: 41,
    height: 41,
    borderRadius: 20.5,
    backgroundColor: '#340D73',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenSuccessCircle: {
    width: 53,
    height: 53,
    borderRadius: 26.5,
    backgroundColor: '#37A970',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timelineMainTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#340D73',
    textAlign: 'center',
    marginTop: 14,
  },

  /* 4-Step Horizontal Tracker */
  trackerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 24,
    paddingHorizontal: 6,
  },
  trackerStepItem: {
    alignItems: 'center',
    width: 60,
  },
  stepCircleIcon: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  trackerLine: {
    height: 2,
    flex: 1,
    marginTop: 10,
    marginHorizontal: 2,
  },
  stepTitleActive: {
    fontSize: 10,
    fontWeight: '600',
    color: '#0B1C56',
    textAlign: 'center',
  },
  stepTitleInactive: {
    fontSize: 10,
    fontWeight: '400',
    color: '#A0AEC0',
    textAlign: 'center',
  },
  stepSubtitle: {
    fontSize: 9,
    color: '#768498',
    textAlign: 'center',
    marginTop: 2,
  },

  /* Validating Notice Box */
  validatingBox: {
    width: '100%',
    backgroundColor: '#F9F9FB',
    borderRadius: 12,
    padding: 14,
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#ECECF2',
  },
  validatingTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0B1C56',
    marginBottom: 4,
  },
  validatingBody: {
    fontSize: 11,
    color: '#768498',
    lineHeight: 16,
  },

  /* Red Cancel Notice Box */
  cancelNoticeBox: {
    width: '100%',
    backgroundColor: '#FEF1F1',
    borderRadius: 12,
    padding: 14,
    marginTop: 14,
    borderWidth: 1,
    borderColor: '#DC5355',
  },
  cancelNoticeTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#DC5355',
    marginBottom: 4,
  },
  cancelNoticeBody: {
    fontSize: 11,
    color: '#DC5355',
    lineHeight: 16,
  },

  /* Payout Notice Box (Completed) */
  payoutNoticeBox: {
    width: '100%',
    backgroundColor: '#F9F9FB',
    borderRadius: 12,
    padding: 14,
    marginTop: 32,
    borderWidth: 1,
    borderColor: '#ECECF2',
  },
  payoutNoticeTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0B1C56',
    marginBottom: 6,
  },
  payoutNoticeBody: {
    fontSize: 11,
    color: '#768498',
    lineHeight: 16,
  },

  timelineDoneBtn: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    right: 16,
    height: 44,
    backgroundColor: '#340D73',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timelineDoneBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  /* Picker Styles */
  pickerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  pickerSheet: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
  },
  pickerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0B1C56',
    marginBottom: 16,
    textAlign: 'center',
  },
  pickerOption: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  pickerOptionText: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
  },
  pickerOptionSelected: {
    color: '#340D73',
    fontWeight: '700',
  },
});
