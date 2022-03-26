import React, {Component} from 'react';
import './App.css';
import {marked} from 'marked';

const renderer = new marked.Renderer();

marked.setOptions({
    breaks: true
});

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            markdown: placeholder
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            markdown: event.target.value
        })
    }
    render() {
        return (
            <div className='App text-center px-4'>
                <h1 className='p-4 header'>Markdown Converter</h1>
                <div>
                    <Editor markdown={this.state.markdown}
                            onChange={this.handleChange} />
                    <h3 className='p-4 header'>Preview Here</h3>
                    <Preview markdown={this.state.markdown} />
                </div>
            </div>
        );
    }
}

const Editor = (props) => {
    return (
        <textarea id='editor'
                  onChange={props.onChange}
                  type='text'
                  value={props.markdown}
                  rows='15'
                  className='lined' />
    );
};

const Preview = (props) => {
    return (
        <div dangerouslySetInnerHTML={{
            __html: marked(props.markdown, {renderer: renderer})
        }}
        id='preview' />
    );
};

//This appears in the editor on load. //
const placeholder = 
`# This is a heading.

## And this is a sub-heading.

[Here's a link.](https://www.freecodecamp.org)

And a little code \`<p></p>\`

And a lotta code:
\`\`\`
//a multi-line code block

<form id='myForm'>
    <input type='text' id='myInput'>
</form>

<script>
var x = document.getElementById("myForm");
x.addEventListener("focusin", myFocusFunction);
x.addEventListener("focusOut", myBlurFunction);

function myFocusFunction() {
    document.getElementById("myInput").style.backgroundColor = "yellow";
}

function myBlurFunction() {
    document.getElementById("myInput").style.backgroundColor = "";
}
</script>
\`\`\`

You can make text:
- **bold**
- _italic_
- ~~crossed out~~

> How 'bout block quotes?

Markdown Previewer was brought to you by:
![ReactJS logo](https://www.erasmuslifebudapest.com/wp-content/uploads/2018/11/reactjs-thumb.jpg)
`;

export default App;