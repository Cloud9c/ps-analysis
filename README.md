# How to add the bookmarklet on Chrome:
1. Ctrl-shift-o
2. Click ⋮ (aka "more" icon) on the top right corner
3. Add new bookmark
4. Set name to anything you want (ex: Powerschool Analysis)
5. Set URL to the code below:

```javascript
javascript:(function()%7B%2F*%20Gets%20data%20and%20stores%20in%20dict%20object*%2F%0Avar%20table%20%3D%20document.getElementById('scoreTable')%3B%0Avar%20dict%20%3D%20new%20Object()%3B%0Afor%20(var%20r%20%3D%201%2C%20n%20%3D%20table.rows.length%3B%20r%20%3C%20n%3B%20r%2B%2B)%20%7B%0A%09try%20%7B%0A%09%09if%20(table.rows%5Br%5D.cells%5B9%5D.innerHTML.includes(%22div%22))%20%7B%0A%09%09%09continue%3B%0A%09%09%7D%0A%20%20%20%20%20%20%20%20var%20category%3D%20table.rows%5Br%5D.cells%5B1%5D.innerHTML%3B%0A%20%20%20%20%20%20%20%20var%20tmp%20%3D%20document.createElement(%22DIV%22)%3B%0A%20%20%20%20%20%20%20%20tmp.innerHTML%20%3D%20category%3B%0A%20%20%20%20%20%20%20%20category%3D%20tmp.textContent%20%7C%7C%20tmp.innerText%20%7C%7C%20%22%22%3B%0A%20%20%20%20%20%20%20%20category%20%3D%20category.replace(%2F%5Cs%2B%2Fg%2C'%20').trim()%3B%0A%0A%20%20%20%20%20%20%20%20var%20score%20%3D%20table.rows%5Br%5D.cells%5B10%5D.innerHTML%3B%0A%20%20%20%20%20%20%20%20var%20tmp%20%3D%20document.createElement(%22DIV%22)%3B%0A%20%20%20%20%20%20%20%20tmp.innerHTML%20%3D%20score%3B%0A%20%20%20%20%20%20%20%20score%20%3D%20tmp.textContent%20%7C%7C%20tmp.innerText%20%7C%7C%20%22%22%3B%0A%20%20%20%20%20%20%20%20score%20%3D%20score.replace(%2F%5Cs%2B%2Fg%2C'%20').trim()%3B%0A%20%20%20%20%20%20%20%20score%20%3D%20score.split('%2F')%3B%0A%0A%20%20%20%20%20%20%20%20if%20(score%5B0%5D%20%3D%3D%20%22--%22%20%7C%7C%20score%5B0%5D%20%3D%3D%20undefined%20%7C%7C%20score%5B1%5D%20%3D%3D%20%22--%22%20%7C%7C%20score%5B1%5D%20%3D%3D%20undefined)%20%7B%0A%20%20%20%20%20%20%20%20%09continue%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20if%20(category%20in%20dict)%20%7B%0A%20%20%20%20%20%20%20%20%09dict%5Bcategory%5D%20%3D%20%5B%2Bdict%5Bcategory%5D%5B0%5D%20%2B%20%2Bscore%5B0%5D%2C%20%2Bdict%5Bcategory%5D%5B1%5D%20%2B%20%2Bscore%5B1%5D%5D%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%09dict%5Bcategory%5D%20%3D%20%5B%2Bscore%5B0%5D%2C%20%2Bscore%5B1%5D%5D%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%20catch(err)%20%7B%7D%0A%7D%0A%0A%2F*%20Adds%20Element%20AFTER%20NeighborElement%20*%2F%0AElement.prototype.appendAfter%20%3D%20function(element)%20%7B%0A%20%20element.parentNode.insertBefore(this%2C%20element.nextSibling)%3B%0A%7D%2C%20false%3B%0A%0A%2F%2F%20Start%20our%20HTML%0Avar%20html%20%3D%20%22%3Ctbody%3E%3Cthead%3E%3Cth%3ECategory%3C%2Fth%3E%3Cth%3EScore%3C%2Fth%3E%3Cth%3E%25%3C%2Fth%3E%3Cth%3EGrade%3C%2Fth%3E%3C%2Fthead%3E%22%3B%0A%2F%2F%20Loop%20through%20members%20of%20the%20object%0Afor%20(%20var%20key%20in%20dict%20)%20%7B%0A%09var%20numberGrade%20%3D%20%2Bdict%5Bkey%5D%5B0%5D%20%2F%20%2Bdict%5Bkey%5D%5B1%5D%20*%20100%3B%0A%0A%20%20%20%20if%20(Math.round(numberGrade)%20%3E%3D%2097)%20%7B%0A%20%20%20%20%20%20%20%20letterGrade%20%3D%20%22A%2B%22%3B%0A%20%20%20%20%7D%20else%20if%20(Math.round(numberGrade)%20%3E%3D%2093)%20%7B%0A%20%20%20%20%09letterGrade%20%3D%20%22A%22%3B%0A%20%20%20%20%7D%20else%20if%20(Math.round(numberGrade)%20%3E%3D%2090)%20%7B%0A%20%20%20%20%09letterGrade%20%3D%20%22A-%22%3B%0A%20%20%20%20%7D%20else%20if%20(Math.round(numberGrade)%20%3E%3D%2087)%20%7B%0A%20%20%20%20%09letterGrade%20%3D%20%22B%2B%22%3B%0A%20%20%20%20%7D%20else%20if%20(Math.round(numberGrade)%20%3E%3D%2083)%20%7B%0A%20%20%20%20%09letterGrade%20%3D%20%22B%22%3B%0A%20%20%20%20%7D%20else%20if%20(Math.round(numberGrade)%20%3E%3D%2080)%20%7B%0A%20%20%20%20%09letterGrade%20%3D%20%22B-%22%3B%0A%20%20%20%20%7D%20else%20if%20(Math.round(numberGrade)%20%3E%3D%2077)%20%7B%0A%20%20%20%20%09letterGrade%20%3D%20%22C%2B%22%3B%0A%20%20%20%20%7D%20else%20if%20(Math.round(numberGrade)%20%3E%3D%2073)%20%7B%0A%20%20%20%20%09letterGrade%20%3D%20%22C%22%3B%0A%20%20%20%20%7D%20else%20if%20(Math.round(numberGrade)%20%3E%3D%2070)%20%7B%0A%20%20%20%20%09letterGrade%20%3D%20%22C-%22%3B%0A%20%20%20%20%7D%20else%20if%20(Math.round(numberGrade)%20%3E%3D%2067)%20%7B%0A%20%20%20%20%09letterGrade%20%3D%20%22D%2B%22%3B%0A%20%20%20%20%7D%20else%20if%20(Math.round(numberGrade)%20%3E%3D%2063)%20%7B%0A%20%20%20%20%09letterGrade%20%3D%20%22D%22%3B%0A%20%20%20%20%7D%20else%20if%20(Math.round(numberGrade)%20%3E%3D%2060)%20%7B%0A%20%20%20%20%09letterGrade%20%3D%20%22D-%22%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%09letterGrade%20%3D%20%22F%22%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20html%20%2B%3D%20%22%3Ctr%3E%3Ctd%3E%22%20%2B%20key%20%2B%20%22%3C%2Ftd%3E%3Ctd%3E%22%20%2B%20dict%5Bkey%5D%5B0%5D%20%2B%20%22%2F%22%20%2B%20dict%5Bkey%5D%5B1%5D%20%2B%20%22%3C%2Ftd%3E%3Ctd%3E%22%20%2B%20numberGrade.toFixed(2)%20%2B%20%22%3C%2Ftd%3E%3Ctd%3E%22%20%2B%20letterGrade%20%2B%20%22%3C%2Ftd%3E%3C%2Ftr%3E%22%3B%0A%7D%0A%2F%2F%20Finish%20the%20table%3A%0Ahtml%20%2B%3D%20%22%3C%2Ftbody%3E%22%3B%0A%0A%2F*%20Typical%20Creation%20and%20Setup%20A%20New%20Orphaned%20Element%20Object%20*%2F%0Avar%20NewElement%20%3D%20document.createElement('TABLE')%3B%0ANewElement.className%20%3D%20%22zebra%20grid%20table%20ng-scope%22%3B%0ANewElement.innerHTML%20%3D%20html%3B%0A%0A%2F*%20Add%20NewElement%20AFTER%20Using%20the%20Prototypes%20*%2F%0ANewElement.appendAfter(document.getElementById('scoreTable'))%3B%7D)()%3B
```

# How to add bookmarklet on Internet Explorer:
1. Go to https://www.google.com/chrome/
2. Install Chrome

# How to add bookmarklet on Edge:
1. Go to https://www.google.com/chrome/
2. Install Chrome

# How to add bookmarklet on Firefox:
1. Go to https://www.google.com/chrome/
2. Install Chrome

# How to add bookmarklet on Safari:
1. Go to https://www.google.com/chrome/
2. Install Chrome

# How to crash your own computer:
1. dont do this
```
javascript:while(true){console.log("-");}
```
