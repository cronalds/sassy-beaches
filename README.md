# A css library written in sass; will be similar to bootstrap but rather different; I may also perform petty theft on bootstrap; I don't know

How will it differ from bootstrap? Bootstrap is a css library that you can customize, yet is still very opinionated without extensive alteration in the depth of the source, whereas this will be intended to be a css library builder that will allow for a less stressful customization approach using switches and variables, whilst maintaining appropriate standards; i.e. using em for margin and padding, rem for font size, appropriate color contrast, an attempt at appropriate selecting and layering/scoping as opposed to going nuclear(!important), etc, etc.(still many things to work out, still getting used to scss)

I may not have implemented it yet (still very early) but I will be making a configuration system for quick and simple library alteration that will be easy and powerful to extend (I may hit a brick wall with sass, but I'll just switch up to js if I have to and build my own damn "preprocessor")

Yes, I understand that this is a bit arrogant, web development has been around for 30ish years and I doubt I'm the only one who has tried something like this, and I know for a fact that anyone who did try this before me had far more experience than myself, but my god it's so frustrating.

## tech

- sass(scss)
  
```bash
npm i -D sass
```

```bash
npm i -g sass
```

- gulp
  
```bash
npm i -D gulp
```

```bash
npm i -g gulp
```

- gulp-sass
  
```bash
npm i -D gulp-sass
```

```bash
npm i -g gulp-sass
```

- gulp-clean-css

```bash
npm i -D gulp-clean-css
```

```bash
npm i -g gulp-clean-css
```

- bootstrap; implement later... maybe; depends.
  
```bash
npm i -D bootstrap
```

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

## Currently implemented/TODO

- gulp compilation && minification

- layers &&|| scope: TODO

- reset: altered version of meyer reset

- vendors: setup for vendors such as bootstrap; no affect, currently(maybe ever; will probably steal what I need and eject the dependency)

- base: misc base styles that will be altered heavily in the coming days; the only things that will definitively stay as they are, are the utils as of right now; no color theory has been taken into account for coloring, I have just implemented basic functionalities and have the architecture in place so as to do it properly when it matters.

- components: TODO

- layout: TODO

- colors: 16 base colors, 9 light and 9 dark variations, with bg, text, and -hover
  - base example: bg-red
    - light example: text-light-red-1
    - dark example: bg-dark-yellow-5
    - hover example: text-dark-yellow-9-hover ; bg variant also; light and dark
      - other pseudo-elements/classes: TODO... maybe

- utils:
  - margin: m, mt, mr, mb, ml; 0-30;
    - i.e. m-0 || m-23 ; em units, 0.25em base

  - padding: p, pt, pr, pb, pl; 0-30;
    - i.e. p-0 || p-23 ; em units, 0.25em base

  - width/height: TODO

- media/container queries: TODO

- purgeCSS: TODO
  