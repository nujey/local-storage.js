console.log(window)
const localStorage = window.localStorage

export default {
  /**
   * 设置一个值
   * @param {string} key - 键名
   * @param {*} value - 键值
   * @returns {Promise} Promise实例
   */
  setItem(key, value) {
    return new Promise((resolve) => {
      localStorage.setItem(key, JSON.stringify(value))
      resolve()
    })
  },

  /**
   * 获取一个值
   * @param {string} key - 键名
   * @param {string} [sync] - 同步与否
   * @returns {Promise} Promise实例
   */
  getItem(key, sync = false) {
    if (sync) {
      return JSON.parse(localStorage.getItem(key))
    }

    return new Promise((resolve) => {
      resolve(JSON.parse(localStorage.getItem(key)))
    })
  },

  /**
   * 删除一个值
   * @param {string} key - 键名
   * @returns {Promise} Promise实例
   */
  removeItem(key) {
    return new Promise((resolve) => {
      localStorage.removeItem(key)
      resolve()
    })
  },

  /**
   * 清空所有值
   * @returns {Promise} Promise实例
   */
  clearAll() {
    return new Promise((resolve) => {
      localStorage.clear()
      resolve()
    })
  },
}
