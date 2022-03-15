function isEmpty(val) {
  return !val || val === undefined || val === "" || val.length === 0;
}

function isNotEmpty(val) {
  return !isEmpty(val);
}

export default {
  isEmpty,
  isNotEmpty,
};
