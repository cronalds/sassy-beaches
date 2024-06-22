A css library written in sass; will be similar to bootstrap but rather different; I may also perform petty theft on bootstrap; I don't know.

How will it differ from bootstrap? Bootstrap is a css library that you can customize, this will be intended to be a css library builder, in essence.

I may not have implemented it yet (still very early) but I will be making a configuration system for quick and simple library alteration that will be easy and powerful to extend (I may hit a brick wall with sass, but I'll just switch up to js if I have to and build my own god damn "preprocessor")

tech:
- sass
- gulp
- gulp-sass
- gulp-clean-css
- bootstrap; implement later... maybe; depends.

```bash
npm run build

// or

gulp
```

if you have gulp installed globally i.e.

```bash
npm i -g gulp
```

you can just type gulp and it will run as long as you are in the correct directory.


Currently implemented:

- reset: altered version of meyer reset

- vendors: setup for vendors such as bootstrap; no affect, currently(maybe ever)

- base: misc base styles that will be altered heavily in the coming days; the only things that will definitively stay as they are are the utils as of right now; no color theory has been taken into account for coloring, I have just implemented basic functionalities and have the architecture in place so as to do it properly when it matters.

- colors: 16 base colors, 9 light and 9 dark variations, with bg, text, and -hover
    - base example: bg-red
    - light example: text-light-red-3
    - dark example: bg-dark-yellow-7
    - hover example: text-dark-yellow-7-hover ; bg variant also; light and dark

- utils:
    - margin: m, mt, mr, mb, ml 0-30; i.e. m-0 || m-23 ; em units
    - padding: p, pt, pr, pb, pl 0-30; i.e. p-0 || p-23 ; em units