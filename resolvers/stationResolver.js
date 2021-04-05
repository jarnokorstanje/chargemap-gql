import Station from '../models/station.js';

export default {
    Query: {
        stations: async (parent, args) => {
            try {
                const start = args.start ? parseInt(args.start) : 0;
                const limit = args.limit ? parseInt(args.limit) : 10;
                const res = await Station.find().skip(start).limit(limit);
                return res;
            } catch (e) {
                console.log(`Error occured while getting the stations: ${e.message}`);
            }
        },
        station: async (parent, args) => {
            return Station.findById(args.id);
        },
    },
};