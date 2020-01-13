export default function (props, propName, componentName) {
  if (!/^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$/.test(props[propName])) {
    return new Error(
      'Prop `' + propName + '` of component'
      + ' `' + componentName + '` has an incorrect value',
    );
  }
};