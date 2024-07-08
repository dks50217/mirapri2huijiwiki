## Installing

1. Check if your `Node.js` version is >= **18**.
2. Change or configure the name of your extension on `src/manifest`.
3. Run `npm install` to install the dependencies.

## Developing

```shell
cd mirapri2huijiwiki

yarn dev
```

### Chrome Extension Developer Mode

1. set your Chrome browser 'Developer mode' up
2. click 'Load unpacked', and select `mirapri2huijiwiki/build` folder

### Normal FrontEnd Developer Mode

1. access `http://0.0.0.0:3000/`
2. when debugging popup page, open `http://0.0.0.0:3000//popup.html`
3. when debugging options page, open `http://0.0.0.0:3000//options.html`

## Packing

After the development of your extension run the command

```shell
$ npm run build
```
