import type { NextApiRequest, NextApiResponse } from "next";
import getRandom from "~/utils/getRandom";

export default (req: NextApiRequest, res: NextApiResponse) => {
	res
		.status(200)
		.json({
			data: getRandom([
				{ word: "winter" },
				{ word: "spring" },
				{ word: "fall" },
				{ word: "summer" },
			] as Word[]),
		});
};
