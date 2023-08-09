export default function orderByProps(obj, props) {
  const result = [];
  const keys = Object.keys(obj).sort();
  props.forEach((prop) => {
    if (prop in obj) {
      result.push({ key: prop, value: obj[prop] });
    }
  });
  keys.forEach((key) => {
    if (!props.includes(key)) {
      result.push({ key, value: obj[key] });
    }
  });
  return result;
}
