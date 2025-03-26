# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Co som sa naucil

useEffect(() => {
console.log("toto je log z useEffectu:", tasks);
}, [tasks]);

na konci je pole, kt volame dependency array.
ked sa v nom nieco konkretne nachadza, hovori sa tym reactu to, ze funkcia sa ma spustit vzdy, ked sa nieco zmeni v danej veci, ktoru sme dali do dependency array - inymi slovami, funkcia sa zmeni pri prvom nacitani + ked sa zmeni tasks (resp to, co sme dali do dep arr.)

useEffect(() => {
console.log("toto je log z useEffectu:", tasks);
}, [tasks, body]);

- tu sa useEffect spusti vzdy na zaciatku plus ked sa zmeni bud tasks alebo body.

useEffect(() => {
console.log("toto je log z useEffectu:", tasks);
}, [tasks]);

- tymto hovorime, ze chceme, aby sa useEffect spustil iba raz.

useEffect(() => {
console.log("toto je log z useEffectu:", tasks);
});

- ak vynecham uplne dep. arr. tak sa useEff. spusti pri kazdom vygenerovani komponenty
