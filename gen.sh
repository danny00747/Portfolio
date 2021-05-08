#!/bin/fish

set contents \'(fd -emd . content | sed -e 's/content\///' -e 's/.md$//')\'
set arr (string join ', ' $contents)
echo export default [$arr] > content/index.js
