import Head from "next/head";
import React, { useState } from "react";
import { Button } from "~/components/button";

interface Generator {
  name: string;
  generate?: () => string;
}
interface GeneratorCategory extends Generator {
  name: string;
  generate?: () => string;
  color: string;
  generators: Generator[];
}

export default function Home() {
  const [output, setOutput] = useState("");
  const appendOutput = (v: string) => setOutput(`${output} ${v}`);

  const generators: GeneratorCategory[] = [
    {
      name: "General",
      color: "dark:bg-blue-800",
      generators: [{ name: "Verb" }, { name: "Adjective" }, { name: "Noun" }],
    },
    {
      name: "Time",
      color: "dark:bg-green-800",
      generators: [
        { name: "Time of day" },
        { name: "Season" },
        { name: "Era" },
      ],
    },
    {
      name: "Location",
      color: "dark:bg-yellow-800",
      generators: [{ name: "City" }, { name: "Biome" }],
    },
  ];

  return (
    <>
      <Head>
        <title>Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-gray-800">
        <h1 className="text-5xl text-center">Prompt Generator</h1>

        <section className="container mx-auto mt-8 ">
          <p className="text-2xl">Output</p>
          <section className="text-xl dark:bg-gray-700">
            <p className="p-2 text-justified">
              {output || <>&mdash; empty &mdash;</>}
            </p>
          </section>
        </section>

        {/* Button Group */}
        <section className="container mx-auto mt-4 flex flex-wrap">
          {generators.map((gen, k) => (
            <>
              <Button
                key={`category-${k}`}
                className={"flex-auto m-1"}
                color={gen.color}
                disabled={!gen.generate}
                onClick={
                  !gen.generate ? () => {} : () => appendOutput(gen.generate())
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
                  onClick={
                    !g.generate ? () => {} : () => appendOutput(g.generate())
                  }
                >
                  {g.name}
                </Button>
              ))}
            </>
          ))}
          <Button
            className="flex-auto m-1 "
            color="dark:bg-black"
            onClick={() => {
              const randomIndex = Math.trunc(
                Math.random() * generators.length - 1
              );
              return appendOutput(generators[randomIndex].generate());
            }}
          >
            Random
          </Button>
          <Button
            className="flex-auto m-1"
            color="dark:bg-gray-900"
            onClick={() => setOutput("")}
          >
            Clear
          </Button>
        </section>
      </main>
    </>
  );
}

function genVerb() {
  return "run";
}
function genAdjective() {
  return "running";
}
function genNoun() {
  return "running";
}
