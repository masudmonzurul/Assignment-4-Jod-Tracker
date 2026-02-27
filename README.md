1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

  *  getElementById is used to find one element by it ID and the ressult/ output will be single element, if not found result will be null.
  
  *  getElementsByClassName is used to find a group of element in a unique class name and the result will multiple elements or HTML Collection, if not found result will be HTMLCollection[].

  *  querySelector is used to find the first match of ID,class or other css selector and the output will be single, if not found the result will be null.

  *  querySelectorAll is used to find a group of element by it multiple parameters(CSS selector), return- NodeList.



2. How do you create and insert a new element into the DOM?
   
   2.1 create new html element-   const p = document.createElement('p');
   2.2 place text to new element- p.textContent = "any thing you want to show in p-tag";
   2.3 find the parent-           const parent = document.getElementById('ID');
   2.4 place new element in parent- parent.appendChild(p);


3. What is Event Bubbling? And how does it work?

   In web page where you interact(click, touch, mouse over, key pess....) it go  up from event.target to document.

   working diagram = interact element >>> parent>>>parent of parent >>>..........until document.


4. What is Event Delegation in JavaScript? Why is it useful?

   in event delegation event listener is used to parent to catch the event of child. it is very useful cause only
   add it with parent we can catch event of many child.


5. What is the difference between preventDefault() and stopPropagation() methods?

  preventDefault() - it is used to stop the default behavior.

  stopPropagation() - it is used to stop event bubbling.

  

    


