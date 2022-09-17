module.exports = (model) => {
    return {
        findAll:  async (params = null) => {
            try {
                await model.find(params)
            } catch (err) {
                throw new Error(err)
            }
        },

        findById: async (id) => {
            try {
               return await model.findById(id)
            } catch (err) {
                throw new Error(err)
            }
        },

        updateById: async (id, data) => {
            try {
               return await model.findOneAndUpdate({_id: id}, data, {new: true})
            } catch (err) {
                throw new Error(err)
            }
        },

        deleteById: async (id) => {
            try {
                return await model.findOneAndDelete({_id: id})
            } catch (err) {
                throw new Error(err)
            }
        },

        save: async (data) => {
            try {
                return await model.create(data)
            } catch (err) {
                throw new Error(err)
            }
        }
    }
}