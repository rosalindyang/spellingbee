import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


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
            word : "",
            message: "",
            count : 0
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
            return <Letter1 value={i}
            //onkeypress={(e) => this.handleKey(e)}
            onClick={() => this.handleClick(i)}/>
        }
        else{
        return <Letter value={i} 
        onClick={() => this.handleClick(i)}/>;}
      }

      enter(i) {
        return <Letter1 value={i} 
        onClick={() => this.enter1()}/>;
      }


      delete(i) {
        return <Letter1 value={i} 
        onClick={() => this.delete1()}/>;
      }

      enter1(){
        console.log(this.state.word)
       
        if(this.state.word.length < 4){
            this.setState({message:"needs more letters :/"})
        }
        else if(!this.state.word.includes(letter)){
            this.setState({message:" missing letter :("})
        }
        else if(!wordlist.includes(this.state.word)){
            this.setState({message:"not a word ......"})
        }

        else {
            this.setState({message: 'yasss',
        count: this.state.count + 1})
            list.push(this.state.word + '\n')
          
        }
    
        console.log(list)
        this.setState({word: ''});
    }


      delete1(){
          this.setState({word: this.state.word.slice(0,-1)});
      }

   
    

    render() {
        const current = this.state.word;
        const mess = this.state.message;
        const lunch = "you have found " + this.state.count + " words"
        const test = 'horrendous .... '
        
  
      return (
        <div>

<div id="wrapper">

         <div id="left">
          <div className="hex-col">
            {this.renderLetter('a')}
            {this.renderLetter('e')}
          </div>

          <div className="board-row">
            {this.renderLetter('h')}
            {this.renderLetter('Y')}
            {this.renderLetter('l')}
          </div>
          
          <div className="board-row">
            {this.renderLetter('t')}
            {this.renderLetter('p')}
          </div>

          
         



          <div>{this.enter('enter')}</div>
          <div> {this.delete('delete')}</div>
          <div className="hex2">s</div>
        </div>


        <div id="right">
            <div className ='border'>
            <div className="hmm">{test}</div>
          <div className="status">{mess}</div>
          <div className="status">{current}</div>
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
  
