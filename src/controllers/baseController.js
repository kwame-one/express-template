module.exports = (service) => {
    return {

        index:  async (req, res) => {
           try {
               const data = await service.findAll();
               return res.json(data);
           } catch (err) {

           }
        },

        show:  async (req, res) => {

        },

        update: async (req, res) => {

        },

        destroy: async (req, res) => {

        },

        store: async (req, res) => {

        }
    }
}