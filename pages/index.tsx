import Head from "next/head";
import React, { useState } from "react";
import { Button } from "~/components/button";
import getRandom from "~/utils/getRandom";
import type { RandomWord } from "./api/random/word";

interface Generator {
	name: string;
	generate?: () => Promise<RandomWord>;
}
interface GeneratorCategory {
	name: string;
	color: string;
	generators: Generator[];
}

function getFromAPI(uri: RequestInfo): Promise<RandomWord> {
	return fetch(uri)
		.then((r) => r.json())
		.then((r) => r.data)
		.catch(console.error);
}

export default function Home() {
	const [output, setOutput] = useState<RandomWord[]>([]);

	const generators: GeneratorCategory[] = [
		{
			name: "General",
			color: "dark:bg-blue-800 bg-blue-500",
			generators: [
				{
					name: "Adjective",
					generate: async () =>
						await getFromAPI(
							"/api/random/word?" + new URLSearchParams({ type: "adj" })
						),
				},
				{
					name: "Adverb",
					generate: async () =>
						await getFromAPI(
							"/api/random/word?" + new URLSearchParams({ type: "adv" })
						),
				},
				{
					name: "Noun",
					generate: async () =>
						await getFromAPI(
							"/api/random/word?" + new URLSearchParams({ type: "noun" })
						),
				},
				{
					name: "Verb",
					generate: async () =>
						await getFromAPI(
							"/api/random/word?" + new URLSearchParams({ type: "verb" })
						),
				},
			],
		},
		{
			name: "Time",
			color: "dark:bg-green-800 bg-green-500",
			generators: [
				{
					name: "Time of day",
					generate: async () =>
						await getFromAPI(
							"/api/random/word?" + new URLSearchParams({ type: "tod" })
						),
				},
				{
					name: "Season",
					generate: async () =>
						await getFromAPI(
							"/api/random/word?" + new URLSearchParams({ type: "season" })
						),
				},
				{
					name: "Era",
					generate: async () =>
						await getFromAPI(
							"/api/random/word?" + new URLSearchParams({ type: "era" })
						),
				},
			],
		},
		{
			name: "Location",
			color: "dark:bg-yellow-800 bg-yellow-500",
			generators: [
				{
					name: "Biome",
					generate: async () =>
						await getFromAPI(
							"/api/random/word?" + new URLSearchParams({ type: "biome" })
						),
				},
				// { name: "City", generate: () => getFromAPI("/api/city") },
			],
		},
	];

	return (
		<>
			<Head>
				<title>Generator</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="dark:bg-gray-800">
				<h1 className="text-5xl text-center my-4">Prompt Generator</h1>

				{/* Button Group */}
				<section className="container mx-auto flex flex-wrap">
					{generators.map((gen, k) => (
						<>
							<Button
								key={`category-${k}`}
								className={"flex-auto m-1"}
								color={gen.color}
								disabled={!gen.generators.length}
								onClick={async () =>
									setOutput([
										...output,
										await getRandom(gen.generators)?.generate(),
									])
								}
							>
								Random {gen.name}
							</Button>

							{gen.generators.map((g, gk) => (
								<Button
									key={gk}
									className={"flex-auto m-1"}
									color={gen.color}
									disabled={!g.generate}
									onClick={async () =>
										setOutput([...output, await g.generate()])
									}
								>
									{g.name}
								</Button>
							))}
						</>
					))}

					<Button
						className="flex-auto m-1 "
						color="bg-black text-white"
						onClick={async () => {
							const w = await getRandom(
								getRandom(generators).generators
							).generate();
							if (w) setOutput([...output, w]);
						}}
					>
						Random
					</Button>

					<Button
						className="flex-auto m-1"
						color="dark:bg-gray-900 bg-gray-100"
						onClick={() => setOutput([])}
					>
						Clear
					</Button>
				</section>

				<section className="container mx-auto mt-8 ">
					<p className="text-2xl">Output</p>
					<section className="text-xl">
						{output.length ? (
							<div className="flex flex-wrap">
								{output.map((w, k) => (
									<div
										className="px-2 py-1 m-1 rounded dark:bg-gray-700 bg-gray-300 flex-grow text-center"
										title={w.type + (w.definition ? ` - ${w?.definition}` : "")}
									>
										<p>{w.word.replaceAll("_", " ")}</p>
									</div>
								))}
							</div>
						) : (
							<p className="text-center">&mdash; empty &mdash;</p>
						)}
					</section>
				</section>
			</main>
		</>
	);
}
