# slash-now

**Easily create and maintain a /now page with revision history**.

## Demo
You can see a demo with dummy data [here](https://freegyes.github.io/slash-now/).

## 2-minute install
- Fork this repository.
- Update the `config.js` file with your GitHub username.
- In the repository Settings > GitHub Pages section set `master` branch as Source and hit Save.
- Wait a few minutes and visit http://YOUR-USERNAME.github.io/slash-now/

## Updating the /now page
Just edit the `now.md` page. Everything else is taken care of automatically.

## What is a /now page?
You can read about it [here](http://nownownow.com/about).

## More options please
Currently the following configuration options are available:

```js
var config = {
    "user": "YOUR-GITHUB-USERNAME", // Your GitHub username.
    "repository": "NAME-OF-THE-REPOSITORY", // The name of the repository we're in.
    "fileToRender": "now.md" // The name of the file you'd like to display.
};
```

## Contributing
Pull requests are welcome.