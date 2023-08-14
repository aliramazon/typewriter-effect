1. The first step was actually to decode `aHR0cHM6Ly90bnM0bHBnbXppaXlwbnh4emVsNXNzNW55dTBuZnRvbC5sYW1iZGEtdXJsLnVzLWVhc3QtMS5vbi5hd3MvcmFtcC1jaGFsbGVuZ2UtaW5zdHJ1Y3Rpb25zLw==` using convertor. It was Base64.
2. That did lead me to Challenge Instructions.
3. After that, Visited [https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge](https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge) and run below script in console to traverse the dom.

   ```javascript
   let url = "";
   document.querySelectorAll('ul[data-tag*="75"]').forEach((ul) => {
     ul.querySelectorAll('li[data-id^="98"]').forEach((li) => {
       li.querySelectorAll('div[data-class$="35"]').forEach((div) => {
         const span = div.querySelector("span.value");
         if (span) url += span.getAttribute("value");
       });
     });
   });
   ```

Note. It is obvious we should use attribute value selectors. Actually, I created a text tutorial about it a while ago. It is at this[https://learn.turantech.com/courses/module-3-css/lectures/46961259]
