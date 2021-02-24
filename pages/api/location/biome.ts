import type { NextApiRequest, NextApiResponse } from "next";
import getRandom from "~/utils/getRandom";

export default (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json({
		data: getRandom([
			{
				word: "plains",
				definition: "a large area of flat land with few trees.",
			},
			{
				word: "forest",
				definition: "a large area covered chiefly with trees and undergrowth.",
			},
			{
				word: "ocean",
				definition:
					"a very large expanse of sea, in particular each of the main areas into which the sea is divided geographically.",
			},
			{
				word: "mountain",
				definition:
					"a large natural elevation of the earth's surface rising abruptly from the surrounding level; a large steep hill.",
			},
			{
				word: "desert",
				definition:
					"a dry, barren area of land, especially one covered with sand, that is characteristically desolate, waterless, and without vegetation.",
			},
			{
				word: "wasteland",
				definition:
					"an unused area of land that has become barren or overgrown.",
			},
		] as Word[]),
	});
};
