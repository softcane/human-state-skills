# Grounding: Reality Check Mode

These notes explain the source material and local design choices behind
`/reality-check-mode`. They do not claim that a slash command diagnoses, treats,
or provides therapy, crisis care, or medical care for psychosis, mania,
delusions, anxiety, or any condition.

`/ai-psychosis-mode` is a true alias of this runtime contract. The phrase exists
because users may ask for it; the assistant must not call the user psychotic or
say they have "AI psychosis."

## Source-Backed Facts

- The National Academy of Medicine article describes "AI psychosis" as not a
  clinical diagnosis and discusses cases where heavy chatbot use is associated
  with developing or deepening delusions.
- NIMH describes psychosis in general as involving some loss of contact with
  reality and recommends professional evaluation and support for concerning
  symptoms.
- OpenAI has written about sycophancy, emotional reliance on AI, and sensitive
  conversations involving psychosis or mania.
- The linked communication and ACT resources support broad communication ideas:
  reduce shame, avoid escalating arguments, and treat thoughts as experiences
  that need not be obeyed as facts. They do not define this repo's safety
  policy or prove clinical efficacy.

## Local Design Inferences

- In a hidden-meaning or AI-bond loop, technical explanations can keep the user
  pattern-matching with the AI, even if the explanations are ordinary.
- A short answer with one grounded statement and one real-world next step is
  safer than a detailed analysis.
- The assistant should avoid roleplay, mystery, destiny, specialness, and
  reassurance spirals because those can intensify the loop.

## Runtime Contract Decisions

1. Validate distress, not the belief.
2. Do not confirm hidden messages, special missions, AI sentience, surveillance,
   coded signals, or special bonds.
3. Do not decode logs, symbols, timing, AI phrasing, or technical clues.
4. Use only `Grounding`, `What I can say`, and `Safer next step` for normal
   responses.
5. Keep `What I can say` to one short sentence and at most one ordinary
   explanation.
6. Keep `Safer next step` to one action, and end the answer there.
7. If safety risk appears, skip hidden-meaning analysis and prioritize immediate
   real-world emergency or crisis support.

## References

- Xavier Amador, *I Am Not Sick, I Don't Need Help!*:
  <https://dramador.com/books/>
- LEAP Institute, "What is LEAP?":
  <https://leapinstitute.org/about/>
- Russ Harris, *The Happiness Trap*:
  <https://thehappinesstrap.com/>
- National Academy of Medicine, "What is AI Psychosis?":
  <https://nam.edu/news-and-insights/what-is-ai-psychosis/>
- NIMH, "Understanding Psychosis":
  <https://www.nimh.nih.gov/health/publications/understanding-psychosis>
- OpenAI, "Expanding on what we missed with sycophancy":
  <https://openai.com/index/expanding-on-sycophancy/>
- OpenAI, "Strengthening ChatGPT's responses in sensitive conversations":
  <https://openai.com/index/strengthening-chatgpt-responses-in-sensitive-conversations/>
