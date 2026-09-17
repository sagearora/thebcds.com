This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Dental Feud

Open `/feud` to play the meeting game. Click an answer or press its number to
reveal it. Use **R** to reset the board, **← / →** to change questions, and **F**
(or the Fullscreen button) for fullscreen. Questions wrap around at either end;
changing questions starts a fresh board. Sound can be toggled on the page.

Edit `src/data/feud-questions.json` to change the game content. Each entry has
plain question text and an ordered list of answers (top answer first):

```json
[
  {
    "question": "Name something patients are afraid of at the dentist.",
    "answers": ["Needles", "The drill", "Pain"]
  }
]
```

Add, remove, or reorder entries and answers in this file. Keep at least one
question and one answer per question; use double quotes and no trailing commas.
The answer count and question counter update automatically. Number keys 1–9
reveal the corresponding answers; all answers can also be clicked. Rebuild and
redeploy the website after editing the JSON to update the live game.

Reveal and applause clips use the supplied external audio URLs. If the reveal
clip fails to load, the game plays a generated chime instead.
