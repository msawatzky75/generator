import type { NextApiRequest, NextApiResponse } from "next";
import getRandom from "~/utils/getRandom";
import verbs from "~/utils/words/verb.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json({ data: getRandom(verbs) });
};
