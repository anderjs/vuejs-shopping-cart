class Service {
  
  /**
   * Recordar ejecutar el servidor de node para poder simular el fetch.
   * @param {number} page 
   * @param {number} limit 
   */
  static fetchUsers(page, limit) {
    const params = new URLSearchParams()
    params.append('page', page)
    params.append('limit', limit)
    return fetch('http://localhost:4000/api/users?' + params.toString())
      .then(users => users.json())
      .catch(err => err)
  }
}

export default Service