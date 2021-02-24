interface Word {
	word: string;
	definition?: string;
}

declare module "~/utils/words/**/*.json" {
	const words: Word[];
	export default words;
}
