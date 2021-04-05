import Station from '../models/station.js';

export default {
    Query: {
        stations: async (parent, args) => {
            try {
                const res = await Station.find();
                return res;
            } catch (e) {
                console.log(`Error occured while getting the stations: ${e.message}`);
            }
        },
    },
};