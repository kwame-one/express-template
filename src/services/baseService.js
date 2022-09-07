module.exports = (repository) => {
    return {
        findAll: async (params = null) => {
            try {
                return await repository.findAll(params);
            } catch (err) {

            }
        },

        find: async (id) => {

        },

        update: async (id, data) => {

        },

        delete: async (id) => {

        }
    }
}