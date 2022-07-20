import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import raw from './spellingbeewordList.csv';



var text;
fetch(raw)

        .then(t => t.text()).then(text => {

            var all = text.split(/\r\n|\n/);
             var headers = all[0].split(',');
             for (var j=0; j<headers.length; j++) {
                 var arr = [headers[j]]
                headers[j] = arr
            }
            var lines = headers;

    for (var i=1; i<all.length; i++) {
        var data = all[i].split(',');
        if (data.length == headers.length) {

            for (var j=0; j<headers.length; j++) {
                lines[j].push(data[j].toLowerCase());
            }

            for (var j=0; j<lines.length; j++){
                lines[j] = lines[j].filter(Boolean)
            }
        
        }

           
        } console.log(lines)
    text = lines
console.log(text)
console.log(Math.floor(Math.random() * text.length))}
        )
       
console.log('please work', text)
   // const num = Math.floor(Math.random() * text.length);
      //  console.log(Math.floor(Math.random() * text.length))

const list = [];
const letter = 'y';
const wordlist = ['telepathy',
    'allay',
    'alley',
    'ally',
    'apathy',
    'apply',
    'aptly',
    'eely',
    'ethyl',
    'eyelet',
    'eyeteeth',
    'happy',
    'healthy',
    'hype',
    'lately',
    'layette',
    'lethally',
    'palely',
    'papally',
    'papaya',
    'pappy',
    'patly',
    'patty',
    'payee',
    'peaty',
    'peppy',
    'petty',
    'phyla',
    'play',
    'playlet',
    'tally',
    'tatty',
    'teleplay',
    'teletype',
    'they',
    'type',
    'yappy',
    'yeah',
    'yell',
    'yelp']

class Letter1 extends React.Component{
    render(){
        return (
            <button className='letter main' 
            onClick={this.props.onClick}>
            {this.props.value}
            </button>
          );
    }
}

class Letter2 extends React.Component{
    render(){
        return (
            <button className='hexagon middle' 
            onClick={this.props.onClick}>
            {this.props.value}
            </button>
          );
    }
}

class Letter extends React.Component {
    render() {
      return (
          
        <button className='hexagon' onClick={this.props.onClick}>
        {this.props.value}
        </button>
      );
    }
  }



  
  class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word : "  ",
            message: "SPELLING BEEEEEEEEE",
            count : 0,
            score:0
        };
    }
   

    handleClick(i){
        this.setState({
        word:this.state.word + i});
    }
  
    handleKey(i){
        this.setState({
        word:this.state.word + i});
    }

    renderLetter(i) {
        
        if(i == letter){
            return <Letter2 value={i}
            
            onClick={() => this.handleClick(i)}/>
        }
        else{
        return <Letter value={i} 
        onClick={() => this.handleClick(i)}/>;}
      }

      enter(i) {
        return <Letter1 value={i} 
        onClick={() => this.enter1()}
     />;
      }


      delete(i) {
        return <Letter1 value={i} 
        onClick={() => this.delete1()}/>;
      }

      enter1(){
        console.log(this.state.word)
       const wordd = this.state.word.slice(2)
        if(wordd.length < 4){
            this.setState({message:"needs more letters :/"})
        }
        else if(!wordd.includes(letter)){
            this.setState({message:" missing center letter :("})
        }
        else if(!wordlist.includes(wordd)){
            this.setState({message:"not a word ......"})
        }
        else if(list.includes(wordd + '\n')){
            this.setState({message:"already found :P"})
        }


        else {
            this.setState({message: 'yasss :))',
        count: this.state.count + 1,
    score: this.state.score + wordd.length})
            list.push(wordd + '\n')
          
        }
    
        console.log(list)
        this.setState({word: '  '});
    }


      delete1(){
          this.setState({word: this.state.word.slice(0,-1)});
      }

   
    

    render() {
        const current = this.state.word;
        const mess = this.state.message;
        const lunch = "you have found " + this.state.count + " words"
        const test = 'horrendous .... '
        const score = 'score: ' + this.state.score
        
  
      return (
        <div>

<div id="wrapper">

         <div id="left">
         <div className="hmm">{current}</div>
          <div id="first">
              <div id ='box'></div>
            {this.renderLetter('a')}
            {this.renderLetter('e')}
          </div>

          <div id="second">
            {this.renderLetter('h')}
            {this.renderLetter('y')}
            {this.renderLetter('l')}
          </div>
          
          <div id = "third">
          <div id ='box'></div>
            {this.renderLetter('t')}
            {this.renderLetter('p')}
          </div>

          
         


          <div id = "fourth">
          <div>{this.enter('enter')}</div>
          <div> {this.delete('delete')}</div>
          </div>
        { /* <div className="hex2">s</div>*/}
       
        </div>


        <div id="right">
            <div className ='border'>
            <div className="status">{lunch}</div>
          <div className="status">{mess}</div>
          <div className="status">{score}</div>
      { /*  <div className="status">{current}</div>*/}
          <div className="status">{list}</div>
            </div>
            </div>   
        </div>
        </div>
      );
    }
  }

  class Game extends React.Component {
    render() {
      return (
          
        <div className="game">
          <div className="game-board">
          
            <Board />
            
   
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>

        </div>
       
        
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  
