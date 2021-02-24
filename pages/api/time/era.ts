import type { NextApiRequest, NextApiResponse } from "next";
import getRandom from "~/utils/getRandom";

export default (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json({
		data: getRandom([
			{ word: "stone age" },
			{ word: "medieval" },
			{ word: "modern" },
			{ word: "future" },
		] as Word[]),
	});
};
