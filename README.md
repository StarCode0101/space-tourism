# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information


### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Solution URL](https://www.frontendmentor.io/solutions/a-responsive-multipage-website-Wu3zDQjRu)
- Live Site URL: [Space Tourism](https://starcode-space-tourism.netlify.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- [TailwindCss](https://tailwindcss.com)
- [Nuxt](https://nuxtjs.org/) - Nuxt framework

### What I learned

To dynamically generate events from array, not having to write different methods to handle each tab click event

```html
 <template v-for="(mCrew, index) in crew">
              <a
                class="h-4 w-4 bg-gray-500 rounded-full md:hover:bg-white cursor-pointer"
                @click="handleSelect(index)"
                :class="{ 'i-tab-active': mCrew.active }"
              >
              </a>
            </template>
```

```js
 handleSelect(index) {
      this.crew.forEach((crew, i) => {
        crew.active = index == i; //true(active)
        if (index == i) {
          this.currentTab = crew.images.webp;
          this.name = crew.name;
          this.role = crew.role;
          this.bio = crew.bio;
        }
      });
    },

```
### Author
- Frontend Mentor - [@StarCode0101](https://www.frontendmentor.io/profile/StarCode0101)
- Twitter - [@i_am_starcode](https://www.twitter.com/i_am_starcode)
