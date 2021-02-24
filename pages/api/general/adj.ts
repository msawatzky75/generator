import type { NextApiRequest, NextApiResponse } from "next";
import getRandom from "~/utils/getRandom";
import adjs from "~/utils/words/adj.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json({ data: getRandom(adjs) });
};
