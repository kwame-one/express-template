module.exports = (repository) => {
    return {
        findAll: async (params = null) => {
            try {
                return await repository.findAll(params);
            } catch (err) {
                throw new Error(err)
            }
        },

        find: async (id) => {
            try {
                return await repository.findById(id);
            } catch (err) {
                return false
            }
        },

        update: async (id, data) => {
            try {
                return await repository.updateById(id, data);
            } catch (err) {
                return false
            }
        },

        delete: async (id) => {
            try {
                return await repository.deleteById(id);
            } catch (err) {
                return false
            }
        },
        save: async (data) => {
            try {
                return await repository.save(data);
            } catch (err) {
                throw new Error(err)
            }
        }
    }
}