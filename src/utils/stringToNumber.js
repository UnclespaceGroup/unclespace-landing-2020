export default function stringToNumber (string) {
  if (string) {
    return string.replace(/[^0-9]/gim, '')
  }
}
