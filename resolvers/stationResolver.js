import Station from '../models/station.js';
import { bounds } from '../helpers/boundHelper.js';

export default {
    Query: {
        stations: async (parent, args) => {
            try {
                const start = args.start ? parseInt(args.start) : 0;
                const limit = args.limit ? parseInt(args.limit) : 10;

                let res;
                if (args.bounds) {
                    const area = bounds(args.bounds.northEast, args.bounds.southWest);
                    res = await Station.find().skip(start).limit(limit).where('Location').within(area);
                } else {
                    res = await Station.find().skip(start).limit(limit); 
                }
                return res;
            } catch (e) {
                console.log(`Error while getting stations: ${e.message}`);
            }
        },
        station: async (parent, args) => {
            return Station.findById(args.id);
        },
    },
};