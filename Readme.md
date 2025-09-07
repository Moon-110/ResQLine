1.  What is the difference between "getElementById, getElementsByClassName, and querySelector / querySelectorAll"?

Answer: All of them are javascript methods. They are used to select html elements from DOM.

    1. getElementById: We use id for its singularity behavior. Id's are unique in the whole html document. If i use getElementById then it will always return the single element or null.

    2. getElementsByClassName: Class is used in multiple places in a html document. If i selects the call name then all the elements will return. Its called array like object. 

    3. querySelector: querySelector is used for CSS. The methods returns the first element. thats why its useful for selecting a single element.

    4. querySelectorAll: This also used for css properties. But for returns all elements that match the specified css selector. Also returns a static NodeList which is similar to array.

2.How do you create and insert a new element into the DOM?
    Answer: 1. Create a new element using document.createElement().
    2. After creation i can customize text, button, div, attribute by setting the values. 
    3. Now i have to select the parent element where i can add my new element.
    4. And finally i append the new element. 

3. What is Event Bubbling and how does it work?  
    Answer: It is a process where an event triggered on an element when it first runs and it bubbles up to its parent.

    The click is event is triggered by the buttons. then where i want to the same div or using the div outside any div.
    This continues until i found where my target is.

4. What is Event Delegation in JavaScript? Why is it useful?
    Answer: Event delegation used for a purpose where you don't have to write multiple listener. Using bubble up method delegation handles its work.

    It is useful because it easy to handle other than multiple listener. It keep the code more clean and dynamic.

5. What is the difference between preventDefault() and stopPropagation() methods?
    Answer: The main difference is preventDefault() stops the browsers default behavior for an event and stopPropagation() stops the event from moving further up or down in a DOM tree. 