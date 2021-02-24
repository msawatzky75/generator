import type { NextApiRequest, NextApiResponse } from "next";
import getRandom from "~/utils/getRandom";

export default (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json({
		data: getRandom([
			{ word: "early_morning" },
			{ word: "morning" },
			{ word: "late_morning" },
			{ word: "afternoon" },
			{ word: "late_afternoon" },
			{ word: "early_evening" },
			{ word: "evening" },
			{ word: "late_evening" },
			{ word: "night" },
		] as Word[]),
	});
};
