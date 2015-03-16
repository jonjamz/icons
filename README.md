# ![Hybrid](http://i.imgur.com/jUDMlbO.png) Icons

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/meteorhybrid/platform?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Every platform has its own aesthetic. To build a serious app for that platform, you need to use icons that match up with its particular style. Hybrid Icons lets you define icons for each platform under a single nickname. You can then use that nickname throughout your templates, and the correct icon for the currently active platform will be displayed automatically.

![demo](http://i.imgur.com/WaxGg1M.png)

## Installation
```
meteor add hybrid:icons
```

## Definition
```
Icons.add("arrow", {
  ios:     "icons__ios__arrow",
  android: "icons__android__arrow",
  mac:     "icons__mac__arrow",
  windows: "icons__windows__arrow",
  default: "icons__ios__arrow"
});
```

## Usage
```
{{> icon name="arrow"}}
{{> icon name="arrow" rotate="90"}}
{{> icon name="arrow" rotate="90" container="circle"}}
```

## Platform Specific Icon Sources
* [Material Design Icons](https://github.com/google/material-design-icons)
* [Windows Icons](https://github.com/winjs/winjs/tree/master/src/fonts)
* [Icon8](http://icons8.com/)
