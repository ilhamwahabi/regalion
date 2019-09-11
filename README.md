# Regalion

## Description

Pokedex app that built upon React and Typescript.

Reactstrap (with Bootstrap) and emotion for styling.

Redux for state management. With help by redux-thunk, redux-persist and redux-form.

Deployed to Surge.

`Suffix 'leon' is come from Empoleon name because that was my starter Pokémon when I play Pokémon Platinum. And that was still one of my favorite game` :heart_eyes:

## Usage

Try directly here: https://regalion.surge.sh

Or if you want to try on your machine:

1. Clone this repo
2. Install dependencies ( `yarn` )
3. Run app ( `yarn start` )
4. Deploy, make sure you have surge installed globally ( `yarn deploy` )

## Todo

- [ ] Fix problem for certain Pokémon that have more than one evolution line (ex: Eevee)
- [ ] Fix problem for certain Pokémon that have weird form name (ex: Meloetta)
- [ ] Dismiss keyboard when submit in mobile
- [ ] Refactor some components.
- [ ] Use Typescript properly especially for Redux part
- [ ] Fix slow loaded image
- [ ] Add fuzzy search in Searchbar
- [ ] Add animation when appear / changed
- [ ] Transform template to my own component so not take much size

## License

All content is © Nintendo, Game Freak, and The Pokémon Company.

Use API from https://pokedevs.gitbook.io to serve data. Response is being cached both in front end and back end.

Use [Blk• Design System React](https://github.com/creativetimofficial/blk-design-system-react) for project template from Creative Tim.
