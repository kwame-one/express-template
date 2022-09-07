module.exports = (model) => {
    return {
        findAll:  async (params = null) => {
            return new Promise(resolve => {
                resolve( {
                    code: 200,
                    data: {name: 'Dev', age: 10}
                })
            })

        },

        findById: async (id) => {

        },

        updateById: async (id, data) => {

        },

        deleteById: async (id) => {

        },

        save: async (data) => {

        }
    }
}