# Regalion

## Description

Pokedex app that built upon React and Typescript.

Reactstrap (with Bootstrap) and emotion for styling.

Redux for state management. With help by redux-thunk and redux-form.

Deployed to Surge.

`Suffix 'leon' is from Empoleon because that was my starter when I play Pokémon Platinum.`

## Usage

Try directly here: https://regalion.surge.sh

Or if you want to try on your machine:

1. Clone this repo
2. Install dependencies ( `yarn` )
3. Run app ( `yarn start` )
4. Deploy, make sure you have surge installed globally ( `yarn deploy` )

## Todo

- [ ] Fix problem for certain Pokémon (ex: Eevee)
- [x] Able switch to another form
- [ ] Make responsive
- [ ] Caching in client
- [ ] Use Typescript properly
- [x] Fix font size issue with name and ability
- [ ] Fix slow loaded image
- [ ] Add fuzzy search Pokémon
- [ ] Add animation
- [ ] Use serviceworker
- [ ] Transform template to my own component
- [ ] Ensure using single / double line for pokemon and index component
- [ ] Fix long name problem

## License

All content is © Nintendo, Game Freak, and The Pokémon Company.

Use API from https://pokedevs.gitbook.io to serve data. Response is being cached both in front end and back end.

Use [Blk• Design System React](https://github.com/creativetimofficial/blk-design-system-react) for project template from Creative Tim.
