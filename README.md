# Battleships

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)
- [Concepts and Ideas Learnt](#concepts-and-ideas-learnt)
- [Areas to Improve](#areas-to-improve)
- [Contact](#contact)

## Overview

The Battleships project from the _Testing JavaScript_ module of [The Odin Project](https://www.theodinproject.com/). The aim was to use TDD to create a [Battleships](<https://en.wikipedia.org/wiki/Battleship_(game)>) style game using OOP in which the user can position their ships and do battle against the computer.

Try the live project [here](https://chrissturgeon.github.io/odin-battleships/) and view the project guidelines [here](https://www.theodinproject.com/lessons/node-path-javascript-battleship).

![Battleships screenshot](src/imgs/screenshot.jpg 'Battleshops Board Page')

### Built With

- [Javascript](https://www.javascript.com/)
- HTML
- CSS

## Features

- Users can position their ships however they like within the confines of the board. Computer positions are random so no two games are alike.
- Built with a Test Driven Development process using unit testing and Jest.
- Factory functions are used to create gameboard, player and ship objects, each decoupled from any rendering logic.
- Retro neon-styling using CSS.

### Concepts and Ideas Learnt

- This was the first project I have made with a **TDD** approach and although it was a little counter-intuitive at first I now understand it's value with assisting in breaking down a large challenge into smaller, managable chunks and helping to minimise the chance of introducing bugs at a base-level.
- I have used **OOP** in a small capacity on previous projects, but this was the first which really made the concept of how and why to model real-world objects click for me. For example, how a ship can have a length and number of hit properties, and use these within a method to determine whether or not it should be considered sunk or not by other objects.
- It was both challenging and interesting to work out how **randomisation** can be used with constraints. For instance, how to create a function which randomally assigns player ship positions whilst making sure that all placements lie within the gameboard grid, but also that ships cannot overlap each other. .
- The importance of ensuring the fundamental **functionality and game-logic** were complete before fleshing out the UI.

### Areas to Improve

If I was to remake or improve this project I would:

- Improve the computer AI so that when it makes a succesful hit on a ship, it then tries adjacent coordinates to feel out the ship location.
- Add a two-player mode.
- Include a progress bar for each player, tracking which ships remain and which are sunk.

## Contact

- sturgeon.chris@gmail.com
- [LinkedIn](https://www.linkedin.com/in/chris-sturgeon-36a74254/)
