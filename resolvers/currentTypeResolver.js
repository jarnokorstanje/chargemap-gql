import CurrentType from '../models/currentType.js';

export default {
    Connections: {
        CurrentTypeID: (parent, args) => {
            return CurrentType.findById(parent.CurrentTypeID);
        },
    },
};