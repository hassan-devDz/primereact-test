function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var PrimeReact = function PrimeReact() {
  _classCallCheck(this, PrimeReact);
};

_defineProperty(PrimeReact, "ripple", false);

_defineProperty(PrimeReact, "locale", 'en');

_defineProperty(PrimeReact, "autoZIndex", true);

_defineProperty(PrimeReact, "zIndex", {
  modal: 1100,
  overlay: 1000,
  menu: 1000,
  tooltip: 1100,
  toast: 1200
});

_defineProperty(PrimeReact, "appendTo", null);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var locales = {
  'en': {
    accept: 'Yes',
    reject: 'No',
    choose: 'Choose',
    upload: 'Upload',
    cancel: 'Cancel',
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    clear: 'Clear',
    weekHeader: 'Wk',
    firstDayOfWeek: 0,
    dateFormat: 'mm/dd/yy',
    weak: 'Weak',
    medium: 'Medium',
    strong: 'Strong',
    passwordPrompt: 'Enter a password'
  }
};

function locale(locale) {
  if (locale) {
    PrimeReact.locale = locale;
  }

  return {
    locale: PrimeReact.locale,
    options: locales[PrimeReact.locale]
  };
}

function addLocale(locale, options) {
  locales[locale] = _objectSpread(_objectSpread({}, locales['en']), options);
}

function updateLocaleOption(key, value, locale) {
  localeOptions(locale)[key] = value;
}

function updateLocaleOptions(options, locale) {
  var _locale = locale || PrimeReact.locale;

  locales[_locale] = _objectSpread(_objectSpread({}, locales[_locale]), options);
}

function localeOption(key, locale) {
  try {
    return localeOptions(locale)[key];
  } catch (error) {
    throw new Error("The ".concat(key, " option is not found in the current locale('").concat(locale || PrimeReact.locale, "')."));
  }
}

function localeOptions(locale) {
  var _locale = locale || PrimeReact.locale;

  return locales[_locale];
}

var PrimeIcons = Object.freeze({
  ALIGN_CENTER: 'pi pi-align-center',
  ALIGN_JUSTIFY: 'pi pi-align-justify',
  ALIGN_LEFT: 'pi pi-align-left',
  ALIGN_RIGHT: 'pi pi-align-right',
  AMAZON: 'pi pi-amazon',
  ANDROID: 'pi pi-android',
  ANGLE_DOUBLE_DOWN: 'pi pi-angle-double-down',
  ANGLE_DOUBLE_LEFT: 'pi pi-angle-double-left',
  ANGLE_DOUBLE_RIGHT: 'pi pi-angle-double-right',
  ANGLE_DOUBLE_UP: 'pi pi-angle-double-up',
  ANGLE_DOWN: 'pi pi-angle-down',
  ANGLE_LEFT: 'pi pi-angle-left',
  ANGLE_RIGHT: 'pi pi-angle-right',
  ANGLE_UP: 'pi pi-angle-up',
  APPLE: 'pi pi-apple',
  ARROW_CIRCLE_DOWN: 'pi pi-arrow-circle-down',
  ARROW_CIRCLE_LEFT: 'pi pi-arrow-circle-left',
  ARROW_CIRCLE_RIGHT: 'pi pi-arrow-circle-right',
  ARROW_CIRCLE_UP: 'pi pi-arrow-circle-up',
  ARROW_DOWN: 'pi pi-arrow-down',
  ARROW_LEFT: 'pi pi-arrow-left',
  ARROW_RIGHT: 'pi pi-arrow-right',
  ARROW_UP: 'pi pi-arrow-up',
  BACKWARD: 'pi pi-backward',
  BAN: 'pi pi-ban',
  BARS: 'pi pi-bars',
  BELL: 'pi pi-bell',
  BOOK: 'pi pi-book',
  BOOKMARK: 'pi pi-bookmark',
  BRIEFCASE: 'pi pi-briefcase',
  CALENDAR_MINUS: 'pi pi-calendar-minus',
  CALENDAR_PLUS: 'pi pi-calendar-plus',
  CALENDAR_TIMES: 'pi pi-calendar-times',
  CALENDAR: 'pi pi-calendar',
  CAMERA: 'pi pi-camera',
  CARET_DOWN: 'pi pi-caret-down',
  CARET_LEFT: 'pi pi-caret-left',
  CARET_RIGHT: 'pi pi-caret-right',
  CARET_UP: 'pi pi-caret-up',
  CHART_BAR: 'pi pi-chart-bar',
  CHART_LINE: 'pi pi-chart-line',
  CHECK_CIRCLE: 'pi pi-check-circle',
  CHECK_SQUARE: 'pi pi-check-square',
  CHECK: 'pi pi-check',
  CHEVRON_CIRCLE_DOWN: 'pi pi-chevron-circle-down',
  CHEVRON_CIRCLE_LEFT: 'pi pi-chevron-circle-left',
  CHEVRON_CIRCLE_RIGHT: 'pi pi-chevron-circle-right',
  CHEVRON_CIRCLE_UP: 'pi pi-chevron-circle-up',
  CHEVRON_DOWN: 'pi pi-chevron-down',
  CHEVRON_LEFT: 'pi pi-chevron-left',
  CHEVRON_RIGHT: 'pi pi-chevron-right',
  CHEVRON_UP: 'pi pi-chevron-up',
  CLOCK: 'pi pi-clock',
  CLONE: 'pi pi-clone',
  CLOUD_DOWNLOAD: 'pi pi-cloud-download',
  CLOUD_UPLOAD: 'pi pi-cloud-upload',
  CLOUD: 'pi pi-cloud',
  COG: 'pi pi-cog',
  COMMENT: 'pi pi-comment',
  COMMENTS: 'pi pi-comments',
  COMPASS: 'pi pi-compass',
  COPY: 'pi pi-copy',
  CREDIT_CARD: 'pi pi-credit-card',
  DESKTOP: 'pi pi-desktop',
  DISCORD: 'pi pi-discord',
  DIRECTIONS_ALT: 'pi pi-directions-alt',
  DIRECTIONS: 'pi pi-directions',
  DOLLAR: 'pi pi-dollar',
  DOWNLOAD: 'pi pi-download',
  EJECT: 'pi pi-eject',
  ELLIPSIS_H: 'pi pi-ellipsis-h',
  ELLIPSIS_V: 'pi pi-ellipsis-v',
  ENVELOPE: 'pi pi-envelope',
  EXCLAMATION_CIRCLE: 'pi pi-exclamation-circle',
  EXCLAMATION_TRIANGLE: 'pi pi-exclamation-triangle ',
  EXTERNAL_LINK: 'pi pi-external-link',
  EYE_SLASH: 'pi pi-eye-slash',
  EYE: 'pi pi-eye',
  FACEBOOK: 'pi pi-facebook',
  FAST_BACKWARD: 'pi pi-fast-backward',
  FAST_FORWARD: 'pi pi-fast-forward',
  FILE_EXCEL: 'pi pi-file-excel',
  FILE_O: 'pi pi-file-o',
  FILE_PDF: 'pi pi-file-pdf',
  FILE: 'pi pi-file',
  FILTER: 'pi pi-filter',
  FILTER_SLASH: 'pi pi-filter-slash',
  FLAG: 'pi pi-flag',
  FOLDER_OPEN: 'pi pi-folder-open',
  FOLDER: 'pi pi-folder',
  FORWARD: 'pi pi-forward',
  GITHUB: 'pi pi-github',
  GLOBE: 'pi pi-globe',
  GOOGLE: 'pi pi-google',
  HEART: 'pi pi-heart',
  HOME: 'pi pi-home',
  ID_CARD: 'pi pi-id-card',
  IMAGE: 'pi pi-image',
  IMAGES: 'pi pi-images',
  INBOX: 'pi pi-inbox',
  INFO_CIRCLE: 'pi pi-info-circle',
  INFO: 'pi pi-info',
  KEY: 'pi pi-key',
  LINK: 'pi pi-link',
  LIST: 'pi pi-list',
  LOCK_OPEN: 'pi pi-lock-open',
  LOCK: 'pi pi-lock',
  MAP: 'pi pi-map',
  MAP_MARKER: 'pi pi-map-marker',
  MICROSOFT: 'pi pi-microsoft',
  MINUS_CIRCLE: 'pi pi-minus-circle',
  MINUS: 'pi pi-minus',
  MOBILE: 'pi pi-mobile',
  MONEY_BILL: 'pi pi-money-bill',
  MOON: 'pi pi-moon',
  PALETTE: 'pi pi-palette',
  PAPERCLIP: 'pi pi-paperclip',
  PAUSE: 'pi pi-pause',
  PAYPAL: 'pi pi-paypal',
  PENCIL: 'pi pi-pencil',
  PERCENTAGE: 'pi pi-percentage',
  PHONE: 'pi pi-phone',
  PLAY: 'pi pi-play',
  PLUS_CIRCLE: 'pi pi-plus-circle',
  PLUS: 'pi pi-plus',
  POWER_OFF: 'pi pi-power-off',
  PRINT: 'pi pi-print',
  QUESTION_CIRCLE: 'pi pi-question-circle',
  QUESTION: 'pi pi-question',
  RADIO_OFF: 'pi pi-radio-off',
  RADIO_ON: 'pi pi-radio-on',
  REFRESH: 'pi pi-refresh',
  REPLAY: 'pi pi-replay',
  REPLY: 'pi pi-reply',
  SAVE: 'pi pi-save',
  SEARCH_MINUS: 'pi pi-search-minus',
  SEARCH_PLUS: 'pi pi-search-plus',
  SEARCH: 'pi pi-search',
  SEND: 'pi pi-send',
  SHARE_ALT: 'pi pi-share-alt',
  SHIELD: 'pi pi-shield',
  SHOPPING_CART: 'pi pi-shopping-cart',
  SIGN_IN: 'pi pi-sign-in',
  SIGN_OUT: 'pi pi-sign-out',
  SITEMAP: 'pi pi-sitemap',
  SLACK: 'pi pi-slack',
  SLIDERS_H: 'pi pi-sliders-h',
  SLIDERS_V: 'pi pi-sliders-v',
  SORT_ALPHA_ALT_DOWN: 'pi pi-sort-alpha-alt-down',
  SORT_ALPHA_ALT_UP: 'pi pi-sort-alpha-alt-up',
  SORT_ALPHA_DOWN: 'pi pi-sort-alpha-down',
  SORT_ALPHA_UP: 'pi pi-sort-alpha-up',
  SORT_ALT: 'pi pi-sort-alt',
  SORT_AMOUNT_DOWN_ALT: 'pi pi-sort-amount-down-alt',
  SORT_AMOUNT_DOWN: 'pi pi-sort-amount-down',
  SORT_AMOUNT_UP_ALT: 'pi pi-sort-amount-up-alt',
  SORT_AMOUNT_UP: 'pi pi-sort-amount-up',
  SORT_DOWN: 'pi pi-sort-down',
  SORT_NUMERIC_ALT_DOWN: 'pi pi-sort-numeric-alt-down',
  SORT_NUMERIC_ALT_UP: 'pi pi-sort-numeric-alt-up',
  SORT_NUMERIC_DOWN: 'pi pi-sort-numeric-down',
  SORT_NUMERIC_UP: 'pi pi-sort-numeric-up',
  SORT_UP: 'pi pi-sort-up',
  SORT: 'pi pi-sort',
  SPINNER: 'pi pi-spinner',
  STAR_O: 'pi pi-star-o',
  STAR: 'pi pi-star',
  STEP_BACKWARD_ALT: 'pi pi-step-backward-alt',
  STEP_BACKWARD: 'pi pi-step-backward',
  STEP_FORWARD_ALT: 'pi pi-step-forward-alt',
  STEP_FORWARD: 'pi pi-step-forward',
  SUN: 'pi pi-sun',
  TABLE: 'pi pi-table',
  TABLET: 'pi pi-tablet',
  TAG: 'pi pi-tag',
  TAGS: 'pi pi-tags',
  TH_LARGE: 'pi pi-th-large',
  THUMBS_DOWN: 'pi pi-thumbs-down',
  THUMBS_UP: 'pi pi-thumbs-up',
  TICKET: 'pi pi-ticket',
  TIMES_CIRCLE: 'pi pi-times-circle',
  TIMES: 'pi pi-times',
  TRASH: 'pi pi-trash',
  TWITTER: 'pi pi-twitter',
  UNDO: 'pi pi-undo',
  UNLOCK: 'pi pi-unlock',
  UPLOAD: 'pi pi-upload',
  USER_EDIT: 'pi pi-user-edit',
  USER_MINUS: 'pi pi-user-minus',
  USER_PLUS: 'pi pi-user-plus',
  USER: 'pi pi-user',
  USERS: 'pi pi-users',
  VIDEO: 'pi pi-video',
  VIMEO: 'pi pi-vimeo',
  VOLUME_DOWN: 'pi pi-volume-down',
  VOLUME_OFF: 'pi pi-volume-off',
  VOLUME_UP: 'pi pi-volume-up',
  YOUTUBE: 'pi pi-youtube',
  WALLET: 'pi pi-wallet',
  WIFI: 'pi pi-wifi',
  WINDOW_MAXIMIZE: 'pi pi-window-maximize',
  WINDOW_MINIMIZE: 'pi pi-window-minimize'
});

var MessageSeverity = Object.freeze({
  SUCCESS: 'success',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error'
});

export default PrimeReact;
export { MessageSeverity, PrimeIcons, addLocale, locale, localeOption, localeOptions, updateLocaleOption, updateLocaleOptions };
