# Frontend Mentor - FAQ accordion
<div align="center">  
    
### [Deployed Link](https://daltobello.github.io/faq-accordion/)

</div>

### User stories
```- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
```

[Frontend Mentor Challenge Spec](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz)

### Favorite Code Snippet
The useEffect re-renders the content everytime the isOpen state changes when a user clicks on the plus and minus icons to expand and contract the accordion.
```
useEffect(() => {
    if(contentRef.current) {
      contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';
    }
  }, [isOpen])
```

### Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
</br>
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)


### Web View
<img width="1382" alt="Screenshot 2024-03-26 at 12 19 53 PM" src="https://github.com/daltobello/faq-accordion/assets/130494366/64083400-399b-4662-be34-eb6e1691ffc2">

### Mobile View
<img width="378" alt="Screenshot 2024-03-26 at 12 19 02 PM" src="https://github.com/daltobello/faq-accordion/assets/130494366/62f0d59b-24f5-4df9-b680-d2ebf82f5f8e">


