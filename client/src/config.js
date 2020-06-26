let apiUrl
if (window.location.origin.startsWith('http://localhost')) {
  apiUrl = `http://localhost:5000`
} else {
  apiUrl = window.location.origin
}
const config = {
  apiUrl
}

export default config