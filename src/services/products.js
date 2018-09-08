export default {
  get(page = 1, limit = 20) {

    return fetch(`http://localhost:3000/products?_page=${page}&_limit=${limit}`, {
        method: 'GET',
        credentials: 'same-origin',
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        })
    })
    .then((response) => response.json())

  }
}
