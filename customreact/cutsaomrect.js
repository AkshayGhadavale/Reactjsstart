
function customRender(reactElement,mainContainer){

//     const domElemnet =document.createElement(reactElement.type)
//     domElemnet.innerHTML=reactElement.children
//     domElemnet.setAttribute('href',reactElement.props.href)
// domElemnet.setAttribute('target',reactElement.props.target)

// mainContainer.appendChild(domElemnet)
// }

const domElement =document.createElement(reactElement.type)
domElement.innerHTML=reactElement.children
for(const prop in reactElement.props){

    domElement.setAttribute(prop,reactElement.props[prop])
}
mainContainer.appendChild(domElement)

}
const reactElement = {
    type: 'a',
    props: {
        href: "https://agkaportfolio.web.app/",
        target: '_blank'
    },
    children: 'my portfolio'
};



const mainContainer =document.querySelector('#root')
customRender(reactElement,mainContainer);

// function customRender(reactElement, mainContainer) {
//     const domElement = document.createElement(reactElement.type);
//     domElement.href = reactElement.props.href;
//     domElement.target = reactElement.props.target;
//     domElement.textContent = reactElement.children;

//     mainContainer.appendChild(domElement);
// }

// const reactElement = {
//     type: 'a',
//     props: {
//         href: "https://agkaportfolio.web.app/",
//         target: '_blank'
//     },
//     children: 'my portfolio'
// };

// const mainContainer = document.querySelector('#root');
// customRender(reactElement, mainContainer);
