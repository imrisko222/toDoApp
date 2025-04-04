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

## filter()

          - vracia pole vseetkych, ktore vyhovuju podmienke, ktora je pouzita vramci .filter()
          let users = [

        {id: 1, name: "John"},
        {id: 2, name: "Pete"},
        {id: 3, name: "Mary"}
        ];

        // returns array of the first two users
        let someUsers = users.filter(item => item.id < 3);

        alert(someUsers.length); // 2

4.4.2025 (odkaz do najblizsieho programovanie)

- treba zabezpecit
  1. aby po pridani tasku sa komponenta s inputmi neposuvala vyssie
  2. aby sa nehybali tasky smerom hore, pri zobrazovani edit buttons. mozu sa len dole.
  3. ked sa klikne na nejaky task, tak sa momentalne zobrazia buttons pri vsetkych taskoch. treba teda zabezpecit, aby sa zobrazovali len pri tom tasku, na ktory sa kliklo
  4. skusit vymysliet nejaku animaciu, ked sa tasky budu posuvat, aby to nebolo sekane.
