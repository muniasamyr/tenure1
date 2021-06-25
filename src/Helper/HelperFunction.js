const extract = (str, pattern) => (str.match(pattern) || []).pop() || '';
export function removeWhiteSpace(str) {
    return extract(str, '/^\S*$/;');
  }

  export function ValidateEmail(inputText)
{
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(inputText).toLowerCase());
}
export function ValidatePhoneNumber(inputText)
{
  const re = /^[0-9]+$/;

  return re.test(String(inputText));
}
