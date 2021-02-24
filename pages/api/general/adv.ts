import type { NextApiRequest, NextApiResponse } from "next";
import getRandom from "~/utils/getRandom";
import advs from "~/utils/words/adv.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json({ data: getRandom(advs) });
};
