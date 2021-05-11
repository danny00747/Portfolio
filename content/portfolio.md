---
title: 'Portfolio Development'
tag: 'Frontend Development'
time: '10:00'
img: 
    - 'portfolio-pagespeed.png'
    - 'lighthouse.png'
    - 'jamstack.png'
---

# Technologies used - Jamstack -

<br>
For the development of this portfolio, here are the technologies that I used :

<br>

- NuxtJS
- MarkdownIt
- Vuetify

<br>

I used a stack called **Jamstack**. The “JAM” in JAMstack stands for JavaScript, APIs, and Markup. JAMstack’s pattern of architecture makes web applications less expensive to build and more secure, with better performance and scalability.

With the JAMstack approach, every page is compiled (or built) ahead of time when the application is deployed. All the HTML, JavaScript, CSS, and images required for the application are fully “baked” ahead of time.The goal is to avoid as much server executed code as possible because serving static files is faster and far simpler than executing server-side code.

So question here is why wait for pages to be built when you generate them in advance ? To do that, i used NuxtJS which enabled to generate a static website which can easily be deployed anywhere. For that reason my site gets a 100% performance score on this tool [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Folivier-daniel.netlify.app%2F&tab=desktop).

# Contents

<br>

Every activity is in its own markdown file. The latter has metadata such as title or time of the activity in question. And a page is generated for every activity. 
 
# Recap Table

<br>

The home page contains un recap table of different activities, type of the latter and finally the time spent of each activity. The total hours spent is computed automatically. 

>>```PS: Click on right side on of the picture to see next one !```