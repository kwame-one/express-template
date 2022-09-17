module.exports = (service) => {
    return {

        index: async (req, res) => {
            try {
                const data = await service.findAll(req.query);
                return res.json(data);
            } catch (err) {
                return res.status(500).json({message: 'something unexpected happened'})
            }
        },

        show: async (req, res) => {
            try {
                const resource = await service.find(req.params.id);
                if (!resource) {
                    return res.status(404).json({message: 'resource not found'})
                }
                return res.json(resource);
            } catch (err) {
                return res.status(500).json({message: 'something unexpected happened'})
            }
        },

        update: async (req, res) => {
            try {
                const resource = await service.update(req.params.id, req.body);
                if (!resource) {
                    return res.status(404).json({message: 'resource not found'})
                }
                return res.json(resource);
            } catch (err) {
                return res.status(500).json({message: 'something unexpected happened'})
            }
        },

        destroy: async (req, res) => {
            try {
                const resource = await service.delete(req.params.id);
                if (!resource) {
                    return res.status(404).json({message: 'resource not found'})
                }
                return res.status(204);
            } catch (err) {
                return res.status(500).json({message: 'something unexpected happened'})
            }
        },

        store: async (req, res) => {
            try {
                const resource = await service.save(req.body);
                return await res.status(201).json(resource)
            } catch (err) {
                return res.status(500).json({message: 'something unexpected happened'})
            }
        }
    }
}