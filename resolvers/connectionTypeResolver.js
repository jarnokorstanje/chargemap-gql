import ConnectionType from '../models/connectionType.js';

export default {
    Connections: {
        ConnectionTypeID: (parent, args) => {
            return ConnectionType.findById(parent.ConnectionTypeID);
        },
    },
};