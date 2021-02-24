import type { NextApiRequest, NextApiResponse } from "next";
import getRandom from "~/utils/getRandom";
import animals from "~/utils/words/noun.animal.json";
import artifacts from "~/utils/words/noun.artifact.json";
import foods from "~/utils/words/noun.food.json";
import plants from "~/utils/words/noun.plant.json";

// the JSON gets loaded into memory but this app isn't very
// large and the json files aren't that big yet so it should be fine

export default (req: NextApiRequest, res: NextApiResponse) => {
	res
		.status(200)
		.json({ data: getRandom([...animals, ...artifacts, ...foods, ...plants]) });
};
