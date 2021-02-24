import type { NextApiRequest, NextApiResponse } from "next";
import getRandom from "~/utils/getRandom";
import adjs from "~/utils/words/general/adj.json";
import advs from "~/utils/words/general/adv.json";
import concreteNouns from "~/utils/words/general/noun.concrete";
import verbs from "~/utils/words/general/verb.json";
import biomes from "~/utils/words/location/biome.json";
import eras from "~/utils/words/time/era.json";
import seasons from "~/utils/words/time/season.json";
import tods from "~/utils/words/time/tod.json";

export interface RandomWord extends Word {
	type: string;
}

const STATUS = {
	OK: 200,
	BAD_REQUEST: 400,
};

export default (req: NextApiRequest, res: NextApiResponse) => {
	const { type } = req.query;
	let data: RandomWord;

	switch (type) {
		// General types
		case "adj":
			data = { ...getRandom(adjs), type: "Adjective" };
			break;
		case "adv":
			data = { ...getRandom(advs), type: "Adverb" };
			break;
		case "noun":
			data = { ...getRandom(concreteNouns), type: "Noun" };
			break;
		case "verb":
			data = { ...getRandom(verbs), type: "Verb" };
			break;

		// Location types
		case "biome":
			data = { ...getRandom(biomes), type: "Biome" };
			break;

		// Time types
		case "era":
			data = { ...getRandom(eras), type: "Era" };
			break;
		case "season":
			data = { ...getRandom(seasons), type: "Season" };
			break;
		case "tod":
			data = { ...getRandom(tods), type: "Time of day" };
			break;
	}

	if (data) {
		res.status(STATUS.OK).json({ data });
	} else {
		res
			.status(STATUS.BAD_REQUEST)
			.json({ data: null, error: new Error(`Invalid word type: ${type}`) });
	}
};
