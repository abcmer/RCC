let apiUrl
if (window.location.origin == 'http://localhost') {
  apiUrl = `${window.location.origin}:5000`
} else {
  apiUrl = window.location.origin
}
const config = {
  apiUrl
}

export default config