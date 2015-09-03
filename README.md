# ScrollTrigger
### Something for going up, something for going down

A simple JS plugin that calls whatever you like when a user's screen hits a position, based on the position of the vertical scroll bar.

#### Usage: 

``` javascript
ScrollTrigger({
    triggerPosition: 1, // this can be set with $(element).offset() too
    triggerDownCallback: sticky_scroll_down, // triggers when scrolling downwards past trigger position
    triggerUpCallback: sticky_scroll_up // triggers when scrolling upwards past trigger position
});
```


